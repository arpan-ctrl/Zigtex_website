import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Building2, Users, Target, Briefcase, ShieldCheck, CheckCircle2, ArrowRight,
  Rocket, Cloud, Globe, Zap, Sliders, TrendingUp, Presentation
} from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant } from '../lib/animations';

export const UseCasesView = ({ navigateTo }) => {
  const roleSolutions = [
    {
      id: 'sdr',
      role: 'For SDRs',
      title: 'More outreach. Less damage.',
      desc: 'Run high-volume outbound without destroying your sender reputation.',
      icon: TrendingUp,
      color: 'klein',
      bullets: [
        'Maintain inbox placement at scale',
        'Avoid spam triggers with intelligent sending',
        'Reduce bounce rates automatically',
        'Focus on replies, not deliverability issues'
      ],
      outcomes: [
        'Higher reply rates',
        'Consistent performance across campaigns',
        'Less manual firefighting'
      ]
    },
    {
      id: 'founders',
      role: 'For Founders',
      title: 'Outbound without building a sales team.',
      desc: 'Launch and scale outbound without hiring SDRs or setting up complex systems.',
      icon: Rocket,
      color: 'slate',
      bullets: [
        'Plug-and-play sending infrastructure',
        'No need to manage deliverability manually',
        'Faster go-to-market execution',
        'Full visibility into outreach performance'
      ],
      outcomes: [
        'Faster pipeline generation',
        'Lower cost of acquisition',
        'Immediate outbound capability'
      ]
    },
    {
      id: 'b2b',
      role: 'For B2B Companies',
      title: 'One system. Multiple teams. Full control.',
      desc: 'Standardize outbound across teams without losing visibility or control.',
      icon: Building2,
      color: 'klein',
      bullets: [
        'Centralized campaign management',
        'Structured hierarchy across teams',
        'Consistent sending behavior across accounts',
        'Scalable infrastructure for growth'
      ],
      outcomes: [
        'Predictable outbound performance',
        'Reduced domain risk',
        'Unified outbound operations'
      ]
    }
  ];

  const businessSolutions = [
    {
      id: 'saas',
      title: 'For SaaS Companies',
      subtitle: 'Scale outbound without breaking deliverability.',
      icon: Cloud,
      color: 'klein',
      bullets: [
        'Safely increase sending volume',
        'Protect domain reputation long-term',
        'Maintain consistent inbox placement',
        'Support rapid growth without risk'
      ]
    },
    {
      id: 'agencies',
      title: 'For Agencies',
      subtitle: 'Manage multiple clients without chaos.',
      icon: Users,
      color: 'slate',
      bullets: [
        'Separate infrastructure per client',
        'Centralized visibility across accounts',
        'Control sending behavior at scale',
        'Reduce risk across all client campaigns'
      ]
    },
    {
      id: 'enterprise',
      title: 'For Enterprises',
      subtitle: 'Outbound infrastructure at organizational scale.',
      icon: Globe,
      color: 'klein',
      bullets: [
        'Multi-level hierarchy and permissions',
        'Cross-team visibility and reporting',
        'Controlled sending across departments',
        'Built for compliance and consistency'
      ]
    }
  ];

  const trustCards = [
    {
      title: 'Deliverability-first foundation',
      icon: ShieldCheck,
      color: 'klein',
      bullets: [
        'Built to prioritize inbox placement',
        'Prevents damage before it happens'
      ]
    },
    {
      title: 'Adaptive sending system',
      icon: Zap,
      color: 'slate',
      bullets: [
        'Adjusts to account health and behavior',
        'Maintains consistency across campaigns'
      ]
    },
    {
      title: 'Centralized control',
      icon: Sliders,
      color: 'klein',
      bullets: [
        'One system to manage all outbound',
        'Full visibility across users and teams'
      ]
    }
  ];

  const workflowSteps = [
    { num: '01', title: 'Connect domains and email accounts' },
    { num: '02', title: 'Set up your outbound structure' },
    { num: '03', title: 'Launch campaigns with intelligent distribution' },
    { num: '04', title: 'Monitor, learn, and improve continuously' }
  ];

  // Horizontal Scroll Setup for the Timeline section
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start start", "end end"]
  });
  // Map scroll progress to horizontal translation
  // Framer Motion strictly requires matching units for text interpolation. Using pure percentages for stability.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div className="w-full relative pt-32 pb-32">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainerVariant}
        aria-labelledby="use-cases-hero" 
        className="text-center mb-32 max-w-5xl mx-auto pt-8 px-6"
      >
        <motion.div variants={fadeUpBlurVariant} className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-[#8773ff] mb-6">Use Cases</motion.div>
        <motion.h1 variants={fadeUpBlurVariant} id="use-cases-hero" className="font-heading text-5xl md:text-7xl lg:text-8xl text-[#e5e6e6] mb-8 leading-[0.95]">
          Outbound that adapts <br/>
          <span className="text-accent-glow block mt-4">to how you sell.</span>
        </motion.h1>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-lg md:text-xl text-[#e5e6e6]/90 max-w-3xl mx-auto leading-relaxed mb-12">
          Zigtex fits into your workflow, whether you’re an SDR, founder, or scaling B2B team, giving you the infrastructure to run outbound that actually reaches inboxes.
        </motion.p>
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]">
            Start Free Trial
          </button>
          <button className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/10 hover:border-[#e5e6e6]/50 transition-all duration-300 min-h-[44px]">
            Book a Demo
          </button>
        </motion.div>
      </motion.section>

      {/* Solutions by Role */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUpBlurVariant}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6]">Solutions by Role</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roleSolutions.map((role) => (
            <motion.article 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={fadeUpBlurVariant}
              key={role.id} 
              className={`glass-card flex flex-col h-full border-${role.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/30 hover:border-${role.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/50 transition-colors bg-[#0a061c]/80 overflow-hidden shadow-lg`}
            >
              <div className="p-10 flex-1">
                 <div className="flex items-center gap-4 mb-8">
                   <div aria-hidden="true" className={`w-12 h-12 rounded-xl bg-${role.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/10 border border-${role.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/20 flex items-center justify-center`}>
                     <role.icon className={`w-6 h-6 text-${role.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}`} />
                   </div>
                   <div className={`font-body text-[11px] uppercase tracking-[0.2em] font-bold text-${role.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}`}>
                     {role.role}
                   </div>
                 </div>
                 <h3 className="font-heading text-3xl text-[#e5e6e6] mb-3 leading-tight">{role.title}</h3>
                 <p className="font-body text-base text-[#e5e6e6]/80 mb-8 leading-relaxed">
                   {role.desc}
                 </p>
                 <ul className="space-y-4 mb-8">
                   {role.bullets.map((bullet, idx) => (
                     <li key={idx} className="flex items-start gap-4 font-body text-sm text-[#e5e6e6]/90">
                       <CheckCircle2 aria-hidden="true" className={`w-5 h-5 text-${role.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'} shrink-0`} />
                       {bullet}
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="bg-[#e5e6e6]/[0.03] border-t border-[#e5e6e6]/10 p-10 mt-auto">
                 <div className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/50 mb-5">Outcome</div>
                 <ul className="space-y-3">
                   {role.outcomes.map((outcome, idx) => (
                     <li key={idx} className="flex items-center gap-3 font-body font-medium text-sm text-[#e5e6e6]">
                       <div aria-hidden="true" className={`w-1.5 h-1.5 rounded-full bg-${role.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}`} />
                       {outcome}
                     </li>
                   ))}
                 </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Solutions by Business Type */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUpBlurVariant}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6]">Solutions by Business Type</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessSolutions.map((biz) => (
             <motion.article 
               initial="hidden" 
               whileInView="visible" 
               viewport={{ once: true, margin: "-50px" }} 
               variants={fadeUpBlurVariant}
               key={biz.id} 
               className="glass-card p-10 flex flex-col hover:bg-[#e5e6e6]/[0.02] border-[#e5e6e6]/10 transition-colors"
             >
                <biz.icon aria-hidden="true" className={`w-8 h-8 text-${biz.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'} mb-6`} />
                <div className={`font-body text-[10px] uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/50 mb-2`}>
                   {biz.title}
                </div>
                <h3 className="font-heading text-2xl text-[#e5e6e6] mb-8 leading-tight h-16">{biz.subtitle}</h3>
                <ul className="space-y-4">
                  {biz.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-body text-sm text-[#e5e6e6]/90">
                      <div aria-hidden="true" className="w-[4px] h-[4px] rounded-full bg-[#e5e6e6]/30 mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
             </motion.article>
          ))}
        </div>
      </section>

      {/* Why Zigtex? (Trust Cards) */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-0 relative z-20">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUpBlurVariant}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6]">Why Zigtex?</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustCards.map((trust, idx) => (
            <motion.article 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={fadeUpBlurVariant}
              key={idx} 
              className={`p-10 rounded-3xl bg-[#e5e6e6]/[0.03] border border-[#e5e6e6]/10 shadow-lg ${trust.color === 'klein' ? 'hover:border-[#3a28a5]/40' : 'hover:border-[#8773ff]/40'} transition-colors group`}
            >
              <trust.icon aria-hidden="true" className={`w-10 h-10 text-${trust.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'} mb-6 opacity-90 group-hover:scale-110 transition-transform`} />
              <h3 className="font-body font-bold text-lg md:text-xl text-[#e5e6e6] mb-6">{trust.title}</h3>
              <ul className="space-y-4">
                {trust.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-sm text-[#e5e6e6]/80 leading-relaxed">
                    <CheckCircle2 aria-hidden="true" className={`w-4 h-4 text-${trust.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'} shrink-0 mt-0.5`} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Horizontal Scroll Timeline (Desktop) / Vertical (Mobile) */}
      <section className="relative w-full z-10 hidden md:block" ref={targetRef} style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full mb-16">
            <h2 className="font-heading text-4xl md:text-6xl text-[#e5e6e6]">
              Simple to adopt. <br/>
              <span className="text-[#8773ff]">Powerful in execution.</span>
            </h2>
            <p className="font-body text-lg text-[#e5e6e6]/80 mt-4">How it fits into your workflow</p>
          </div>
          
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2))] min-w-max">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="w-[350px] lg:w-[450px] glass-card p-12 shrink-0 flex flex-col group hover:border-[#8773ff]/40 transition-colors">
                <div className="font-heading text-7xl text-[#e5e6e6]/10 mb-8 group-hover:text-[#8773ff]/20 transition-colors">{step.num}</div>
                <h3 className="font-body font-bold text-2xl md:text-3xl text-[#e5e6e6] leading-tight mt-auto">{step.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile Workflow Timeline (Vertical Grid fallback) */}
      <section className="md:hidden max-w-7xl mx-auto px-6 mb-32 pt-16 border-t border-[#e5e6e6]/10">
        <div className="mb-12">
          <h2 className="font-heading text-4xl text-[#e5e6e6] mb-4">Simple to adopt. <span className="text-[#8773ff]">Powerful in execution.</span></h2>
          <p className="font-body text-base text-[#e5e6e6]/80">How it fits into your workflow</p>
        </div>
        <div className="flex flex-col gap-6">
          {workflowSteps.map((step, idx) => (
            <motion.div key={idx} variants={fadeUpBlurVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card p-8 flex items-center gap-6">
              <div className="font-heading text-4xl text-[#e5e6e6]/20">{step.num}</div>
              <h3 className="font-body font-bold text-lg text-[#e5e6e6]">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Get Started" 
        className="glass-card-lg p-16 md:p-24 flex flex-col items-center relative overflow-hidden group slate-glow border-[#8773ff]/30 text-center mx-6 md:mx-auto max-w-5xl md:mb-0 mb-10"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#8773ff]/10 to-transparent pointer-events-none" />
        <motion.div variants={fadeUpBlurVariant} className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-[#8773ff] mb-6">Execution is everything</motion.div>
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-4xl md:text-6xl text-[#e5e6e6] mb-8 max-w-4xl leading-[1.05] relative z-10">
          No matter how you sell, <br/>
          <span className="text-accent-glow block mt-4">your emails need to land first.</span>
        </motion.h2>
        
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 max-w-2xl mx-auto mb-16 relative z-10 leading-relaxed">
          Zigtex ensures your outbound reaches inboxes, protects your domain, and scales with your growth.
        </motion.p>
        
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
          <button className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]">
            Start Free Trial
          </button>
          <button className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/10 hover:border-[#e5e6e6]/50 transition-all duration-300 min-h-[44px]">
            Talk to Sales
          </button>
        </motion.div>
      </motion.section>

    </div>
  );
};
