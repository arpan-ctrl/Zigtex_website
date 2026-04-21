import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Zap, Sliders, Layers, Network, LayoutDashboard, Briefcase, CheckCircle2, Users, ShieldCheck
} from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant } from '../lib/animations';

export const ProductView = ({ navigateTo }) => {
  const productCards = [
    {
      id: '01',
      label: 'Native Email Sending',
      title: 'Send from your domain. Not shared infrastructure.',
      bullets: [
        'Direct domain-based email sending',
        'Stronger trust signals with mailbox providers',
        'Full control over sender reputation',
        'No dependency on third-party relays'
      ],
      whyTitle: 'Why it matters',
      why: 'Shared systems dilute reputation. Native sending builds it.',
      icon: Server,
      color: 'klein'
    },
    {
      id: '02',
      label: 'Intelligent Sending Engine',
      title: 'Scale without triggering filters.',
      bullets: [
        'Distributes email volume across Campaigns',
        'Prevents unnatural sending spikes',
        'Mimics human-like sending patterns',
        'Maintains consistent deliverability'
      ],
      whyTitle: 'Why it matters',
      why: 'Volume kills deliverability when it looks automated. This keeps it natural.',
      icon: Zap,
      color: 'slate'
    },
    {
      id: '03',
      label: 'Smart Quota Distribution',
      title: 'Control volume. Automatically.',
      bullets: [
        'Dynamic distribution of sending limits',
        'Adjusts based on peak day sending limit',
        'Prevents overuse of available threshold',
        'Ensures balanced outreach at scale'
      ],
      whyTitle: 'Why it matters',
      why: 'Manual limits break. Systems that adapt don’t.',
      icon: Sliders,
      color: 'klein'
    },
    {
      id: '04',
      label: 'Bounce Memory System',
      title: 'Your system remembers what fails.',
      bullets: [
        'Tracks bounce history across campaigns',
        'Identifies risky patterns and addresses',
        'Prevents repeat sending to bad targets',
        'Continuously improves sending quality'
      ],
      whyTitle: 'Why it matters',
      why: 'Repeated mistakes damage domains. Memory protects them.',
      icon: Layers,
      color: 'slate'
    },
    {
      id: '05',
      label: 'Multi-Tier Team Structure',
      title: 'From individual to organization. Without chaos.',
      bullets: [
        'Individual → Team → Department → Organization',
        'Centralized visibility across campaigns',
        'Role-based control and access',
        'Built for agencies and outbound teams'
      ],
      whyTitle: 'Why it matters',
      why: 'Scaling outbound without structure leads to loss of control.',
      icon: Network,
      color: 'klein'
    },
    {
      id: '06',
      label: 'Unified Dashboard',
      title: 'Everything in one place.',
      bullets: [
        'Real-time sending insights',
        'Deliverability tracking',
        'Campaign performance monitoring',
        'Account-level visibility'
      ],
      whyTitle: 'Why it matters',
      why: 'Fragmented tools create blind spots. Centralization creates clarity.',
      icon: LayoutDashboard,
      color: 'slate'
    },
    {
      id: '07',
      label: 'Managed GTM Solution',
      title: 'Execution, not just software.',
      bullets: [
        'Campaign strategy and setup',
        'Sending infrastructure configuration',
        'Deliverability optimization',
        'End-to-end outbound execution'
      ],
      whyTitle: "Who it's for",
      why: 'Teams that want results without building systems internally.',
      cta: 'Get Managed GTM',
      icon: Briefcase,
      color: 'klein'
    }
  ];

  return (
    <div className="w-full relative pt-32 px-6 max-w-6xl mx-auto pb-32">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainerVariant}
        aria-labelledby="product-heading" 
        className="text-center mb-32 max-w-4xl mx-auto pt-8"
      >
        <motion.div variants={fadeUpBlurVariant} className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-[#8773ff] mb-6">Features & Capabilities</motion.div>
        <motion.h1 variants={fadeUpBlurVariant} id="product-heading" className="font-heading text-6xl md:text-8xl text-[#e5e6e6] mb-8 leading-[0.95]">
          Outbound infrastructure. <br/>
          <span className="text-accent-glow block mt-4">Not another tool.</span>
        </motion.h1>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 max-w-3xl mx-auto leading-relaxed mb-12">
          Zigtex gives you full control over how your emails are sent, distributed, and delivered, so you can scale outreach without damaging your domain.
        </motion.p>
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => navigateTo('pricing')} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]">
            Start Free Trial
          </button>
          <button className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/10 hover:border-[#e5e6e6]/50 transition-all duration-300 min-h-[44px]">
            Book a Demo
          </button>
        </motion.div>
      </motion.section>

      {/* Stacking Cards Section */}
      <section aria-label="Product Features" className="relative pb-32">
        <div className="flex flex-col gap-[30vh]">
          {productCards.map((card, i) => (
            <motion.article 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={fadeUpBlurVariant}
              key={card.id} 
              className={`sticky glass-card p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center transition-all duration-500 shadow-[0_0_40px_-10px_${card.color === 'klein' ? 'rgba(58,40,165,0.2)' : 'rgba(135,115,255,0.2)'}] border border-${card.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/30 bg-[#150e40]/90`}
              style={{ top: `calc(120px + ${i * 12}px)` }}
            >
              {/* Left Column: Content */}
              <div className="flex-1 w-full space-y-8 relative z-10">
                <div className={`font-body text-[10px] uppercase tracking-[0.3em] font-bold text-${card.color === 'klein' ? '[#8773ff]' : '[#8773ff]'} flex items-center gap-3`}>
                  <span aria-hidden="true" className={`w-8 h-[1px] bg-[#8773ff]/50`}></span>
                  Section {card.id} : {card.label}
                </div>
                <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6] leading-[1.1]">{card.title}</h2>
                <ul className="space-y-5 pt-4">
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4 font-body text-sm md:text-base text-[#e5e6e6]/90 leading-relaxed">
                      <CheckCircle2 aria-hidden="true" className={`w-5 h-5 text-${card.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'} shrink-0 mt-0.5`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                {card.cta && (
                  <div className="pt-6">
                    <button className={`px-8 py-4 rounded-full bg-[#e5e6e6] text-[#020108] font-body text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#e5e6e6]/90 transition-colors shadow-[0_0_20px_rgba(229,230,230,0.15)] min-h-[44px]`}>
                      {card.cta}
                    </button>
                  </div>
                )}
              </div>
              
              {/* Right Column: Visual & "Why it matters" */}
              <div className="flex-1 w-full flex flex-col items-center md:items-end justify-center relative z-10 mt-8 md:mt-0">
                <div aria-hidden="true" className={`w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-${card.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/10 flex items-center justify-center mb-10 border border-${card.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/30 relative`}>
                   <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(${card.color==='klein'?'58,40,165':'135,115,255'},0.5),transparent_60%)] opacity-50`} />
                   <card.icon className={`w-12 h-12 md:w-16 md:h-16 text-${card.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'} relative z-10`} />
                </div>
                <div className="w-full bg-[#0a061c]/90 border border-[#e5e6e6]/10 p-8 rounded-2xl backdrop-blur-xl">
                  <h3 className="font-heading text-2xl text-[#e5e6e6] mb-3">{card.whyTitle}</h3>
                  <p className="font-body text-sm md:text-base text-[#e5e6e6]/90 leading-relaxed">
                    {card.why}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="How It Works" 
        className="pt-32 pb-40 border-t border-[#e5e6e6]/10 relative z-10"
      >
        <motion.div variants={fadeUpBlurVariant} className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-6">Simple system. <br/><span className="text-accent-glow block mt-3">Controlled execution.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
           <div aria-hidden="true" className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#3a28a5]/20 via-[#8773ff]/60 to-[#3a28a5]/20 pointer-events-none" />
           {[
             { step: '01', title: 'Connect', desc: 'Connect your domains and email accounts' },
             { step: '02', title: 'Configure', desc: 'Configure sending infrastructure' },
             { step: '03', title: 'Launch', desc: 'Launch campaigns with intelligent distribution' },
             { step: '04', title: 'Monitor', desc: 'Monitor performance and optimize continuously' }
           ].map((s, i) => (
             <motion.article variants={fadeUpBlurVariant} key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#0a061c] border border-[#e5e6e6]/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,0,0,0.6)] group-hover:border-[#8773ff]/60 group-hover:shadow-[0_0_30px_rgba(135,115,255,0.3)] transition-all duration-500">
                   <span className="font-heading text-3xl text-[#e5e6e6]/90 group-hover:text-[#8773ff] transition-colors">{s.step}</span>
                </div>
                <h3 className="font-body font-bold text-xl text-[#e5e6e6] mb-3 tracking-wide">{s.title}</h3>
                <p className="font-body text-sm text-[#e5e6e6]/80 max-w-[200px] leading-relaxed">{s.desc}</p>
             </motion.article>
           ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Get Started" 
        className="glass-card-lg p-16 md:p-24 flex flex-col items-center relative overflow-hidden group slate-glow border-[#8773ff]/30 text-center mx-6 md:mx-auto max-w-5xl my-32"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#8773ff]/10 to-transparent pointer-events-none" />
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-4xl md:text-6xl text-[#e5e6e6] mb-8 max-w-4xl leading-[1.05] relative z-10">
          Control your outbound. Protect your domain. <br/>
          <span className="text-accent-glow block mt-4">Scale with confidence.</span>
        </motion.h2>
        
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col md:flex-row gap-6 md:gap-12 mb-16 mt-4 text-left justify-center w-full relative z-10">
           <div className="flex items-center justify-center gap-3 font-body text-sm md:text-xs uppercase tracking-[0.2em] font-bold text-[#e5e6e6]">
             <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-[#8773ff] shrink-0"/> Improve inbox placement
           </div>
           <div className="flex items-center justify-center gap-3 font-body text-sm md:text-xs uppercase tracking-[0.2em] font-bold text-[#e5e6e6]">
             <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-[#8773ff] shrink-0"/> Reduce bounce rates
           </div>
           <div className="flex items-center justify-center gap-3 font-body text-sm md:text-xs uppercase tracking-[0.2em] font-bold text-[#e5e6e6]">
             <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-[#8773ff] shrink-0"/> Increase reply performance
           </div>
        </motion.div>

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
