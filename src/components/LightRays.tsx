import React, { useState, useEffect, useRef } from 'react';

const DEFAULT_COLOR = '#8773ff';

const hexToRgb = (hex: string) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

const getAnchorAndDir = (origin: string, w: number, h: number) => {
  const outside = 0.2;
  switch (origin) {
    case 'top-left': return { anchor: [0, -outside * h], dir: [0.7, 0.7] };
    case 'top-right': return { anchor: [w, -outside * h], dir: [-0.7, 0.7] };
    case 'left': return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] };
    case 'right': return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] };
    case 'bottom-left': return { anchor: [0, (1 + outside) * h], dir: [0.7, -0.7] };
    case 'bottom-center': return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-right': return { anchor: [w, (1 + outside) * h], dir: [-0.7, -0.7] };
    default: return { anchor: [0.5 * w, -outside * h], dir: [0, 1] }; // top-center
  }
};

interface LightRaysProps {
  raysOrigin?: string;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
}

export function LightRays({
  raysOrigin = 'top-center',
  raysColor = DEFAULT_COLOR,
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 2,
  pulsating = false,
  fadeDistance = 1.0,
  saturation = 1.0,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.02,
  distortion = 0.05,
  className = ''
}: LightRaysProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Check for reduced motion preference (WCAG standard)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    observerRef.current = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observerRef.current.observe(containerRef.current);
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl', { alpha: true, antialias: false });
    if (!gl) return;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `);

    const fragShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      uniform float iTime;
      uniform vec2  iResolution;
      uniform vec2  rayPos;
      uniform vec2  rayDir;
      uniform vec3  raysColor;
      uniform float raysSpeed;
      uniform float lightSpread;
      uniform float rayLength;
      uniform float pulsating;
      uniform float fadeDistance;
      uniform float saturation;
      uniform vec2  mousePos;
      uniform float mouseInfluence;
      uniform float noiseAmount;
      uniform float distortion;
      varying vec2 vUv;

      float noise(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                        float seedA, float seedB, float speed) {
        vec2 sourceToCoord = coord - raySource;
        vec2 dirNorm = normalize(sourceToCoord);
        float cosAngle = dot(dirNorm, rayRefDirection);
        
        float d = distortion * sin(iTime * 1.5 + length(sourceToCoord) * 0.005);
        float distortedAngle = cosAngle + d;
        
        float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));
        float distance = length(sourceToCoord);
        float maxDistance = max(iResolution.x, iResolution.y) * rayLength;
        float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
        
        float fadeFactor = fadeDistance * max(iResolution.x, iResolution.y);
        float fadeFalloff = clamp((fadeFactor - distance) / fadeFactor, 0.0, 1.0);
        
        float pulse = pulsating > 0.5 ? (0.85 + 0.15 * sin(iTime * speed * 4.0)) : 1.0;
        
        float baseStrength = clamp(
          (0.5 + 0.2 * sin(distortedAngle * seedA + iTime * speed)) +
          (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed * 0.8)),
          0.0, 1.0
        );
        
        return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
      }

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 coord = vec2(fragCoord.x, fragCoord.y);
        
        vec2 finalRayDir = normalize(rayDir);
        if (mouseInfluence > 0.0) {
          vec2 mouseScreenPos = mousePos * iResolution.xy;
          vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
          finalRayDir = normalize(mix(finalRayDir, mouseDirection, mouseInfluence));
        }

        float r1 = rayStrength(rayPos, finalRayDir, coord, 45.2, 31.4, 0.8 * raysSpeed);
        float r2 = rayStrength(rayPos, finalRayDir, coord, 28.5, 19.8, 1.2 * raysSpeed);
        float r3 = rayStrength(rayPos, finalRayDir, coord, 12.1, 56.2, 0.5 * raysSpeed);
        
        float combined = (r1 * 0.4 + r2 * 0.4 + r3 * 0.2);
        combined = pow(combined, 0.7);
        combined *= 1.5;
        vec3 finalColor = raysColor * combined;
        
        if (noiseAmount > 0.0) {
          float n = noise(coord * 0.01 + iTime * 0.05);
          finalColor *= (1.0 - noiseAmount + noiseAmount * n);
        }

        if (saturation != 1.0) {
          float gray = dot(finalColor, vec3(0.299, 0.587, 0.114));
          finalColor = mix(vec3(gray), finalColor, saturation);
        }

        gl_FragColor = vec4(finalColor, combined);
      }
    `);

    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const locs = {
      iTime: gl.getUniformLocation(program, 'iTime'),
      iResolution: gl.getUniformLocation(program, 'iResolution'),
      rayPos: gl.getUniformLocation(program, 'rayPos'),
      rayDir: gl.getUniformLocation(program, 'rayDir'),
      raysColor: gl.getUniformLocation(program, 'raysColor'),
      raysSpeed: gl.getUniformLocation(program, 'raysSpeed'),
      lightSpread: gl.getUniformLocation(program, 'lightSpread'),
      rayLength: gl.getUniformLocation(program, 'rayLength'),
      pulsating: gl.getUniformLocation(program, 'pulsating'),
      fadeDistance: gl.getUniformLocation(program, 'fadeDistance'),
      saturation: gl.getUniformLocation(program, 'saturation'),
      mousePos: gl.getUniformLocation(program, 'mousePos'),
      mouseInfluence: gl.getUniformLocation(program, 'mouseInfluence'),
      noiseAmount: gl.getUniformLocation(program, 'noiseAmount'),
      distortion: gl.getUniformLocation(program, 'distortion'),
    };

    const rgbColor = hexToRgb(raysColor);
    let animationId: number;

    const render = (t: number) => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w = displayWidth * dpr;
      const h = displayHeight * dpr;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }

      if (followMouse && mouseInfluence > 0.0 && !prefersReducedMotion) {
        const smoothing = 0.95;
        smoothMouseRef.current.x = smoothMouseRef.current.x * smoothing + mouseRef.current.x * (1 - smoothing);
        smoothMouseRef.current.y = smoothMouseRef.current.y * smoothing + mouseRef.current.y * (1 - smoothing);
      }

      gl.uniform1f(locs.iTime, t * 0.001);
      gl.uniform2f(locs.iResolution, w, h);
      
      const { anchor, dir } = getAnchorAndDir(raysOrigin, w, h);
      gl.uniform2f(locs.rayPos, anchor[0], anchor[1]);
      gl.uniform2f(locs.rayDir, dir[0], dir[1]);
      
      gl.uniform3f(locs.raysColor, rgbColor[0], rgbColor[1], rgbColor[2]);
      gl.uniform1f(locs.raysSpeed, raysSpeed);
      gl.uniform1f(locs.lightSpread, lightSpread);
      gl.uniform1f(locs.rayLength, rayLength);
      gl.uniform1f(locs.pulsating, pulsating ? 1.0 : 0.0);
      gl.uniform1f(locs.fadeDistance, fadeDistance);
      gl.uniform1f(locs.saturation, saturation);
      gl.uniform2f(locs.mousePos, smoothMouseRef.current.x, 1.0 - smoothMouseRef.current.y);
      gl.uniform1f(locs.mouseInfluence, mouseInfluence);
      gl.uniform1f(locs.noiseAmount, noiseAmount);
      gl.uniform1f(locs.distortion, distortion);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      gl.deleteProgram(program);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteBuffer(buffer);
    };
  }, [isVisible, raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, pulsating, fadeDistance, saturation, followMouse, mouseInfluence, noiseAmount, distortion, prefersReducedMotion]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || prefersReducedMotion) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      };
    };

    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [followMouse, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
