import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronUp, ChevronDown, AlertTriangle, XCircle, CheckCircle2, Sliders, TrendingUp, Quote
} from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant } from '../lib/animations';

export const CaseStudiesView = ({ navigateTo }) => {
  const [expandedStudy, setExpandedStudy] = useState(null);

  const toggleStudy = (id) => {
    if (expandedStudy === id) {
      setExpandedStudy(null);
    } else {
      setExpandedStudy(id);
    }
  };

  const caseStudies = [
    {
      id: 1,
      title: "Fixing Deliverability Before Scaling",
      subtitle: "Case Study 01",
      context: "A B2B SaaS team was sending high-volume outbound with decent targeting, but results were inconsistent. Open rates fluctuating. Replies dropping over time. No clear reason why. They assumed it was copy. It wasn’t.",
      happening: [
        "Sending spikes triggering filters",
        "Multiple accounts behaving identically",
        "No control over distribution",
        "Repeated sending to risky addresses"
      ],
      quote: "Looks fine on the surface, broken underneath",
      changed: [
        "Introduced controlled sending distribution",
        "Balanced volume across accounts",
        "Activated bounce memory system",
        "Cleaned sending patterns to mimic natural behavior"
      ],
      results: [
        "Inbox placement improved significantly within weeks",
        "Bounce rates dropped consistently",
        "Reply rates stabilized across campaigns"
      ],
      founderTake: "Most teams try to fix performance by rewriting emails. This team didn’t need better copy. They needed a system that didn’t sabotage them.",
      color: "klein"
    },
    {
      id: 2,
      title: "Scaling Without Burning Domains",
      subtitle: "Case Study 02",
      context: "An outbound agency managing multiple clients was hitting a wall. Campaigns worked initially, then performance dropped, and domains started degrading. They were scaling volume the only way they knew: \"Send more from the same setup\".",
      happening: [
        "Overloading individual accounts",
        "No separation between client infrastructures",
        "No visibility into domain health",
        "High-risk sending patterns repeating"
      ],
      changed: [
        "Created isolated sending infrastructure per client",
        "Implemented quota distribution across accounts",
        "Added domain-level monitoring",
        "Controlled ramp-up for volume scaling"
      ],
      results: [
        "Stable performance across client campaigns",
        "Reduced domain damage risk",
        "Ability to scale outbound without resets"
      ],
      founderTake: "Scaling outbound without infrastructure is like speeding with no brakes. You don’t notice the problem until it’s too late.",
      color: "slate"
    },
    {
      id: 3,
      title: "Founder-Led Outbound That Actually Worked",
      subtitle: "Case Study 03",
      context: "A founder running outbound personally: No SDR team, limited time, needed consistent pipeline. They had tried tools, templates, and sequences. Nothing stuck.",
      happening: [
        "Inconsistent sending behavior",
        "No system to manage volume",
        "Deliverability degrading slowly",
        "No feedback loop"
      ],
      changed: [
        "Set up structured sending system",
        "Automated distribution of volume",
        "Enabled bounce-aware adjustments",
        "Simplified campaign control"
      ],
      results: [
        "Predictable outbound performance",
        "Consistent reply flow",
        "Reduced time spent managing campaigns"
      ],
      founderTake: "Founders don’t fail at outbound because they can’t sell. They fail because they don’t have infrastructure.",
      color: "klein"
    }
  ];

  return (
    <div className="w-full relative pt-32 px-6 max-w-6xl mx-auto pb-32">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainerVariant}
        aria-labelledby="case-studies-heading" 
        className="text-center mb-32 relative z-10 max-w-4xl mx-auto pt-8"
      >
        <motion.div variants={fadeUpBlurVariant} className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-[#8773ff] mb-6">Founder's POV</motion.div>
        <motion.h1 variants={fadeUpBlurVariant} id="case-studies-heading" className="font-heading text-6xl md:text-8xl text-[#e5e6e6] mb-8 leading-[0.95]">
          This is what happens when <br/>
          <span className="text-accent-glow block mt-4">outbound is built right.</span>
        </motion.h1>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 leading-relaxed max-w-3xl mx-auto">
          These are not vanity wins. These are results from fixing <span className="text-[#e5e6e6] font-bold">how emails are sent</span>, not just what gets sent.
        </motion.p>
      </motion.section>

      {/* Expandable Case Studies (Accordion) */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Case Studies List" 
        className="space-y-6 mb-32 relative z-10"
      >
        {caseStudies.map((study) => (
          <motion.article 
            variants={fadeUpBlurVariant}
            key={study.id} 
            className={`glass-card transition-all duration-500 overflow-hidden ${expandedStudy === study.id ? `border-${study.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/50 shadow-[0_0_40px_-10px_rgba(${study.color === 'klein' ? '58,40,165' : '135,115,255'},0.3)] bg-[#100a30]/90` : 'hover:border-[#e5e6e6]/30 bg-[#0a061c]/80'}`}
          >
            {/* Header (Always Visible) */}
            <button 
              onClick={() => toggleStudy(study.id)}
              aria-expanded={expandedStudy === study.id}
              aria-controls={`study-content-${study.id}`}
              id={`study-header-${study.id}`}
              className="w-full text-left p-8 md:p-12 flex items-center justify-between cursor-pointer group focus-visible:outline-none focus-visible:bg-[#e5e6e6]/5 min-h-[44px]"
            >
              <div>
                <div className={`font-body text-[11px] uppercase tracking-[0.3em] font-bold text-${study.color === 'klein' ? '[#8773ff]' : '[#8773ff]'} mb-4`}>{study.subtitle}</div>
                <h2 className={`font-heading text-3xl md:text-5xl text-[#e5e6e6] group-hover:text-[#e5e6e6]/80 transition-colors leading-tight`}>{study.title}</h2>
              </div>
              <div aria-hidden="true" className={`w-14 h-14 rounded-full border border-[#e5e6e6]/20 flex items-center justify-center shrink-0 transition-all duration-500 bg-[#04020f] group-hover:bg-[#e5e6e6]/10`}>
                {expandedStudy === study.id ? (
                  <ChevronUp className={`w-7 h-7 text-${study.color === 'klein' ? '[#8773ff]' : '[#8773ff]'}`} />
                ) : (
                  <ChevronDown className="w-7 h-7 text-[#e5e6e6]/70 group-hover:text-[#e5e6e6] transition-colors" />
                )}
              </div>
            </button>

            {/* Expanded Content */}
            {expandedStudy === study.id && (
              <div 
                id={`study-content-${study.id}`} 
                role="region" 
                aria-labelledby={`study-header-${study.id}`}
                className="px-8 md:px-12 pb-12 pt-6 border-t border-[#e5e6e6]/10 animate-in fade-in slide-in-from-top-4 duration-500"
              >
                
                {/* Context Block */}
                <div className="mb-14 max-w-3xl">
                  <h3 className="font-body text-sm uppercase tracking-widest text-[#e5e6e6]/70 font-bold mb-5">Context</h3>
                  <p className="font-body text-xl text-[#e5e6e6] leading-relaxed">
                    {study.context}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
                  {/* What was actually happening */}
                  <div className="p-10 rounded-3xl bg-[#04020f]/80 border border-red-500/20 relative overflow-hidden">
                    <div aria-hidden="true" className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                    <h3 className="font-body text-sm uppercase tracking-widest text-red-400 font-bold mb-8 flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5" /> What was actually happening
                    </h3>
                    <ul className="space-y-5">
                      {study.happening.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4 font-body text-base text-[#e5e6e6]/90 leading-relaxed">
                          <XCircle aria-hidden="true" className="w-5 h-5 text-red-400/70 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {study.quote && (
                      <div className="mt-10 pt-8 border-t border-red-500/20 font-heading text-2xl italic text-[#e5e6e6]/80 leading-relaxed">
                        "{study.quote}"
                      </div>
                    )}
                  </div>

                  {/* What we changed */}
                  <div className={`p-10 rounded-3xl bg-${study.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/10 border border-${study.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/20 relative overflow-hidden`}>
                    <div aria-hidden="true" className={`absolute top-0 right-0 w-40 h-40 bg-${study.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none`} />
                    <h3 className={`font-body text-sm uppercase tracking-widest text-${study.color === 'klein' ? '[#8773ff]' : '[#8773ff]'} font-bold mb-8 flex items-center gap-3`}>
                      <Sliders className="w-5 h-5" /> What we changed
                    </h3>
                    <ul className="space-y-5">
                      {study.changed.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4 font-body text-base text-[#e5e6e6]/90 leading-relaxed">
                          <CheckCircle2 aria-hidden="true" className={`w-5 h-5 text-${study.color === 'klein' ? '[#8773ff]' : '[#8773ff]'} shrink-0 mt-0.5`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Results & Founder Take */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                  <div className="md:col-span-2 p-10 bg-[#04020f]/60 rounded-3xl border border-[#e5e6e6]/10">
                    <h3 className="font-body text-sm uppercase tracking-widest text-[#10B981] font-bold mb-8 flex items-center gap-3">
                      <TrendingUp className="w-5 h-5" /> Results
                    </h3>
                    <ul className="space-y-5">
                      {study.results.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4 font-body text-base text-[#e5e6e6] font-medium leading-relaxed">
                          <div aria-hidden="true" className="w-2 h-2 rounded-full bg-[#10B981] shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="md:col-span-3 p-10 md:p-12 rounded-3xl bg-[#150e40] border border-[#e5e6e6]/10 relative shadow-inner">
                    <Quote aria-hidden="true" className="absolute top-8 left-8 w-20 h-20 text-[#e5e6e6]/5" />
                    <div className="relative z-10">
                      <h3 className="font-body text-[11px] uppercase tracking-widest text-[#e5e6e6]/60 font-bold mb-6">Founder Take</h3>
                      <p className="font-heading text-3xl md:text-4xl text-[#e5e6e6] leading-[1.3]">
                        "{study.founderTake}"
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </motion.article>
        ))}
      </motion.section>

      {/* Patterns Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Key Patterns" 
        className="mb-40"
      >
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-4xl md:text-5xl text-[#e5e6e6] text-center mb-16">Patterns Across All Case Studies</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div variants={fadeUpBlurVariant} className="glass-card p-12 border-red-500/30 bg-[#04020f]/80 shadow-[0_0_30px_rgba(248,113,113,0.05)]">
             <h3 className="font-body text-[11px] uppercase tracking-widest text-red-400 font-bold mb-8">Different teams. Same underlying problems:</h3>
             <ul className="space-y-6">
               <li className="flex items-center gap-5 font-body text-base text-[#e5e6e6]"><XCircle aria-hidden="true" className="w-6 h-6 text-red-400 opacity-80" /> Sending behavior was uncontrolled</li>
               <li className="flex items-center gap-5 font-body text-base text-[#e5e6e6]"><XCircle aria-hidden="true" className="w-6 h-6 text-red-400 opacity-80" /> Deliverability was reactive, not proactive</li>
               <li className="flex items-center gap-5 font-body text-base text-[#e5e6e6]"><XCircle aria-hidden="true" className="w-6 h-6 text-red-400 opacity-80" /> Systems didn’t learn or adapt</li>
             </ul>
          </motion.div>
          
          <motion.div variants={fadeUpBlurVariant} className="glass-card p-12 border-[#10B981]/30 bg-[#04020f]/80 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
             <h3 className="font-body text-[11px] uppercase tracking-widest text-[#10B981] font-bold mb-8">Once those were fixed:</h3>
             <ul className="space-y-6">
               <li className="flex items-center gap-5 font-body text-base text-[#e5e6e6] font-medium"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-[#10B981]" /> Performance stabilized</li>
               <li className="flex items-center gap-5 font-body text-base text-[#e5e6e6] font-medium"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-[#10B981]" /> Scaling became possible</li>
               <li className="flex items-center gap-5 font-body text-base text-[#e5e6e6] font-medium"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-[#10B981]" /> Risk dropped significantly</li>
             </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* What You Should Take */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-labelledby="takeaways-heading" 
        className="mb-40 max-w-4xl mx-auto text-center relative z-10 glass-card p-16 md:p-24 border-[#e5e6e6]/20 bg-[#100a30]/80"
      >
        <motion.h2 variants={fadeUpBlurVariant} id="takeaways-heading" className="font-heading text-5xl md:text-6xl text-[#e5e6e6] mb-8">What You Should Take From This</motion.h2>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/80 mb-12">If your outbound feels:</motion.p>
        
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col md:flex-row gap-5 justify-center items-center mb-16">
          <span className="px-8 py-4 rounded-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 font-body text-base text-[#e5e6e6] shadow-sm font-medium">Inconsistent</span>
          <span className="px-8 py-4 rounded-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 font-body text-base text-[#e5e6e6] shadow-sm font-medium">Unpredictable</span>
          <span className="px-8 py-4 rounded-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 font-body text-base text-[#e5e6e6] shadow-sm font-medium">Fragile</span>
        </motion.div>
        
        <motion.div variants={fadeUpBlurVariant} className="font-body text-2xl text-[#e5e6e6] leading-relaxed">
          The issue is probably not your messaging.<br/>
          <span className="text-accent-glow font-heading text-5xl block mt-6">It’s your system.</span>
        </motion.div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Fix your system" 
        className="glass-card-lg p-16 md:p-24 flex flex-col items-center relative overflow-hidden group slate-glow border-[#8773ff]/30 text-center z-10 mx-6 md:mx-auto max-w-5xl my-32"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#8773ff]/10 to-transparent pointer-events-none" />
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-5xl md:text-7xl text-[#e5e6e6] mb-8 max-w-4xl leading-[1.05] relative z-10">
          Fix the system <br/>
          <span className="text-[#8773ff]">behind your outbound.</span>
        </motion.h2>
        
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 max-w-2xl mx-auto mb-14 relative z-10 leading-relaxed">
          Zigtex gives you control over how emails are sent, distributed, and delivered, so results become predictable.
        </motion.p>

        <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
          <button onClick={() => navigateTo('pricing')} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#0b0726] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]">
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
