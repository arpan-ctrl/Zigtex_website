import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Server, Activity, Layers, TrendingUp, ArrowDownRight, MessageSquare, Users, ShieldCheck, Play 
} from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant, fadeBlurVariant } from '../lib/animations';

export const HomeView = ({ navigateTo }) => (
  <div className="w-full relative">
    
    {/* Interactive Hero Section */}
    <motion.section 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainerVariant} 
      aria-labelledby="hero-heading" 
      className="relative min-h-[90vh] pt-32 pb-20 flex flex-col items-center justify-center w-full px-6 overflow-hidden"
    >
      {/* Live Notification Pill */}
      <motion.div variants={fadeUpBlurVariant} className="absolute top-32 glass-card px-4 py-2 flex items-center gap-3 z-30 shadow-[0_0_20px_-5px_rgba(135,115,255,0.3)] hover:scale-105 transition-transform cursor-default bg-[#0a061c]/80" aria-label="System status: Optimal">
        <div className="w-2 h-2 rounded-full bg-[#8773ff] shadow-[0_0_8px_rgba(135,115,255,0.6)]" aria-hidden="true" />
        <span className="text-[9px] font-bold text-[#8773ff] tracking-[0.2em] uppercase">Live</span>
        <span className="text-xs text-[#e5e6e6] font-medium">System Optimal: 99.9% Delivery</span>
      </motion.div>

      <div className="relative z-20 text-center max-w-4xl mx-auto mt-16 mb-24">
        <motion.h1 variants={fadeUpBlurVariant} id="hero-heading" className="font-heading text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.95] text-[#e5e6e6] mb-8">
          Outbound that lands <br/>
          <span className="text-accent-glow block mt-2">
            where it matters.
          </span>
        </motion.h1>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-lg md:text-xl text-[#e5e6e6]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          The infrastructure for B2B email outreach that controls how emails are sent, distributed, and delivered.
        </motion.p>
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.1em] font-bold bg-[#e5e6e6] text-[#020108] px-8 py-4 rounded-full hover:bg-[#e5e6e6]/90 transition-all transition-cubic min-h-[44px] shadow-[0_0_20px_rgba(229,230,230,0.1)]">
            Start Free Trial
          </button>
          <button className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.1em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-8 py-4 rounded-full hover:bg-[#e5e6e6]/10 hover:border-[#e5e6e6]/40 transition-all transition-cubic min-h-[44px]">
            Book a Demo
          </button>
        </motion.div>
      </div>
    </motion.section>

    {/* Trust Signals (Ribbon) */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeBlurVariant}
      aria-label="Trust Signals" 
      className="w-full overflow-hidden whitespace-nowrap border-y border-[#e5e6e6]/5 bg-[#e5e6e6]/[0.01] py-8 relative z-10 backdrop-blur-sm"
    >
       <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020108] to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
       <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020108] to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
       
       <div className="flex w-max animate-scroll hover:[animation-play-state:paused] opacity-90 transition-opacity duration-300 hover:opacity-100 cursor-default" aria-hidden="true">
           {[...Array(2)].map((_, i) => (
             <div key={i} className="flex items-center gap-16 px-8">
                <span className="flex items-center gap-3 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/70 hover:text-[#e5e6e6] transition-colors">
                  <TrendingUp className="w-5 h-5 text-[#8773ff]"/> Higher inbox placement
                </span>
                <span className="flex items-center gap-3 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/70 hover:text-[#e5e6e6] transition-colors">
                  <ArrowDownRight className="w-5 h-5 text-[#3a28a5]"/> Lower bounce rates
                </span>
                <span className="flex items-center gap-3 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/70 hover:text-[#e5e6e6] transition-colors">
                  <MessageSquare className="w-5 h-5 text-[#8773ff]"/> Stronger reply rates
                </span>
                <span className="flex items-center gap-3 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/70 hover:text-[#e5e6e6] transition-colors">
                  <Users className="w-5 h-5 text-[#3a28a5]"/> Trusted by outbound-focused teams
                </span>
             </div>
           ))}
       </div>
    </motion.section>

    {/* What Zigtex Does */}
    <section aria-label="Core Features" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { title: "Send with Control", items: ["Native domain-based email sending", "Full ownership of sender reputation", "No shared infrastructure risks"], icon: Server, color: "klein" },
          { title: "Scale Intelligently", items: ["Automatic volume distribution", "Prevents sending spikes", "Mimics human-like behavior"], icon: Activity, color: "slate" },
          { title: "Learn and Adapt", items: ["Tracks bounce patterns", "Avoids repeated failures", "Improves future campaigns"], icon: Layers, color: "klein" }
        ].map((feat, i) => (
          <motion.article variants={fadeUpBlurVariant} key={i} className={`glass-card p-10 group transition-all duration-500 hover:shadow-[0_0_30px_-10px_${feat.color === 'klein' ? 'rgba(58,40,165,0.4)' : 'rgba(135,115,255,0.4)'}] hover:border-${feat.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/40`}>
            <div aria-hidden="true" className={`w-14 h-14 rounded-2xl bg-${feat.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/10 border border-${feat.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 transition-cubic`}>
              <feat.icon className={`w-7 h-7 text-${feat.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'}`} />
            </div>
            <h3 className="font-heading text-3xl text-[#e5e6e6] mb-6 tracking-tight">{feat.title}</h3>
            <ul className="space-y-4">
               {feat.items.map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3 font-body text-sm md:text-base text-[#e5e6e6]/90 leading-relaxed">
                   <div aria-hidden="true" className={`mt-2 w-1.5 h-1.5 rounded-full bg-${feat.color === 'klein' ? '[#3a28a5]' : '[#8773ff]'} shrink-0`} />
                   {item}
                 </li>
               ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>

    {/* Product Overview (BENTO BOX) */}
    <section aria-labelledby="overview-heading" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        className="mb-16 text-center"
      >
        <motion.h2 variants={fadeUpBlurVariant} id="overview-heading" className="font-heading text-5xl md:text-6xl text-[#e5e6e6] mb-4">Everything your outbound needs.</motion.h2>
        <motion.h3 variants={fadeUpBlurVariant} className="font-heading text-5xl md:text-6xl text-accent-glow">One system.</motion.h3>
      </motion.div>
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
      >
        {/* Bento 1 */}
        <motion.div variants={fadeUpBlurVariant} className="md:col-span-2 glass-card p-10 flex flex-col justify-between group overflow-hidden relative slate-glow hover:border-[#8773ff]/40 transition-all">
           <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-[#8773ff]/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
           <h3 className="font-heading text-3xl text-[#e5e6e6] relative z-10 leading-tight">Monitor sending behavior in real time</h3>
           <div className="relative z-10 mt-6 flex gap-2 h-24 items-end opacity-90" aria-hidden="true">
              {[40,60,45,80,55,90,70].map((h,i) => <div key={i} className="flex-1 bg-[#8773ff]/30 rounded-t border-t border-[#8773ff]/60" style={{height: `${h}%`}}/>)}
           </div>
        </motion.div>
        {/* Bento 2 */}
        <motion.div variants={fadeUpBlurVariant} className="glass-card p-10 flex flex-col justify-between group hover:border-[#3a28a5]/40 transition-all">
           <h3 className="font-heading text-2xl text-[#e5e6e6] relative z-10 leading-tight">Manage campaigns across accounts</h3>
           <Users aria-hidden="true" className="w-12 h-12 text-[#3a28a5] opacity-70 ml-auto" />
        </motion.div>
        {/* Bento 3 */}
        <motion.div variants={fadeUpBlurVariant} className="glass-card p-10 flex flex-col justify-between group hover:border-[#3a28a5]/40 transition-all">
           <h3 className="font-heading text-2xl text-[#e5e6e6] relative z-10 leading-tight">Track deliverability performance</h3>
           <ShieldCheck aria-hidden="true" className="w-12 h-12 text-[#3a28a5] opacity-70 ml-auto" />
        </motion.div>
        {/* Bento 4 */}
        <motion.div variants={fadeUpBlurVariant} className="md:col-span-2 glass-card p-10 flex flex-col justify-center items-center text-center group hover:border-[#8773ff]/40 transition-all relative overflow-hidden">
           <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#8773ff]/10 to-[#3a28a5]/10 pointer-events-none" />
           <h3 className="font-heading text-4xl text-[#e5e6e6] relative z-10 mb-4 leading-tight">Centralized dashboard built for scale</h3>
        </motion.div>
      </motion.div>
    </section>

    {/* Core Differentiators */}
    <section aria-labelledby="differentiators-heading" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
       <motion.div 
         initial="hidden" 
         whileInView="visible" 
         viewport={{ once: true, margin: "-50px" }} 
         variants={staggerContainerVariant}
         className="flex flex-col md:flex-row gap-16 items-start"
       >
          <motion.div variants={fadeUpBlurVariant} className="md:w-1/3 md:sticky md:top-32">
             <h2 id="differentiators-heading" className="font-heading text-5xl md:text-6xl text-[#e5e6e6] leading-tight">Core <br/><span className="text-accent-glow block mt-2">Differentiators</span></h2>
          </motion.div>
          <div className="md:w-2/3 space-y-6">
             {[
               { title: "Deliverability-First Architecture", desc: "Built into the system, not added later", num: "01" },
               { title: "Intelligent Sending Engine", desc: "Optimized distribution across accounts", num: "02" },
               { title: "Memory-Based Bounce System", desc: "Learns from failed sends", num: "03" },
               { title: "Team-Ready Infrastructure", desc: "Structured control across users and teams", num: "04" },
             ].map((diff, i) => (
                <motion.article variants={fadeUpBlurVariant} key={i} className="glass-card p-10 flex gap-8 group hover:border-[#e5e6e6]/30 transition-all">
                   <div aria-hidden="true" className="font-body text-2xl font-bold text-[#e5e6e6]/50 group-hover:text-[#8773ff] transition-colors">{diff.num}</div>
                   <div>
                      <h3 className="font-heading text-3xl text-[#e5e6e6] mb-3">{diff.title}</h3>
                      <p className="font-body text-[#e5e6e6]/90 text-lg leading-relaxed">{diff.desc}</p>
                   </div>
                </motion.article>
             ))}
          </div>
       </motion.div>
    </section>

    {/* Demo Section */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-label="Product Demo" 
      className="py-20 px-6 max-w-5xl mx-auto relative z-10"
    >
       <motion.div variants={fadeUpBlurVariant} className="text-center mb-12">
          <h2 className="font-heading text-5xl md:text-6xl text-[#e5e6e6]">See how your outbound actually performs</h2>
       </motion.div>
       <motion.button variants={fadeUpBlurVariant} aria-label="Play product demo video" className="w-full aspect-video glass-card border border-[#e5e6e6]/20 relative flex items-center justify-center group cursor-pointer overflow-hidden klein-glow shadow-[0_0_50px_rgba(58,40,165,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8773ff] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b0726]">
          <div aria-hidden="true" className="absolute inset-0 bg-[#150e40] transition-all duration-700 group-hover:bg-[#1a1150]" />
          {/* Fake UI mockup overlay to act as a video thumbnail */}
          <div aria-hidden="true" className="absolute inset-4 border border-[#e5e6e6]/10 rounded-2xl bg-[#e5e6e6]/[0.03] flex flex-col overflow-hidden opacity-70 group-hover:opacity-90 transition-opacity">
            <div className="h-8 border-b border-[#e5e6e6]/10 bg-[#e5e6e6]/[0.03] flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e5e6e6]/50"/>
              <div className="w-2 h-2 rounded-full bg-[#e5e6e6]/50"/>
              <div className="w-2 h-2 rounded-full bg-[#e5e6e6]/50"/>
            </div>
            <div className="flex-1 p-8 flex gap-8">
               <div className="w-1/3 space-y-4">
                 <div className="h-4 bg-[#e5e6e6]/10 rounded w-3/4"/>
                 <div className="h-4 bg-[#e5e6e6]/10 rounded w-1/2"/>
                 <div className="h-20 bg-[#e5e6e6]/10 rounded w-full mt-8"/>
               </div>
               <div className="w-2/3 bg-[#e5e6e6]/10 rounded"/>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" aria-hidden="true" />
          <div className="relative z-10 w-24 h-24 rounded-full bg-[#e5e6e6]/20 backdrop-blur-md border border-[#e5e6e6]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#e5e6e6]/30 transition-all duration-500">
             <Play aria-hidden="true" className="w-10 h-10 text-[#e5e6e6] ml-2" />
          </div>
       </motion.button>
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
          <ul className="space-y-4 font-body text-[#e5e6e6]/90 text-lg">
             <li className="flex items-center gap-3"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-[#8773ff]"/> Scale outbound safely</li>
             <li className="flex items-center gap-3"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-[#8773ff]"/> Protect your domain reputation</li>
             <li className="flex items-center gap-3"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-[#8773ff]"/> Improve inbox placement consistently</li>
          </ul>
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
