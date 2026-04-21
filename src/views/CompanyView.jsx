import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, XCircle, Target, CheckCircle2, Quote, Linkedin
} from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant } from '../lib/animations';

const slideInLeftVariant = {
  hidden: { opacity: 0, x: -50, filter: 'blur(5px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const slideInRightVariant = {
  hidden: { opacity: 0, x: 50, filter: 'blur(5px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const teamMembers = [
  {
    name: "Alex Carter",
    role: "Founder & CEO",
    bio: "Built the initial V1 of Zigtex after getting 3 domains burned by legacy sequence tools.",
    image: "https://picsum.photos/seed/founder/400/400?grayscale",
  },
  {
    name: "Samira Patel",
    role: "Head of Infrastructure",
    bio: "Former systems architect. Responsible for the scalable sending engine and IP rotation logic.",
    image: "https://picsum.photos/seed/engineer/400/400?grayscale",
  },
  {
    name: "Jordan Hayes",
    role: "Deliverability Lead",
    bio: "Spends his days analyzing bounce logs and reverse-engineering spam filter updates.",
    image: "https://picsum.photos/seed/data/400/400?grayscale",
  }
];

export const CompanyView = ({ navigateTo }) => (
  <div className="w-full relative pt-32 px-6 max-w-5xl mx-auto pb-32">
    
    {/* Hero Section */}
    <motion.section 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainerVariant}
      aria-labelledby="company-heading" 
      className="text-center mb-32 relative z-10 pt-8"
    >
      <motion.h1 variants={fadeUpBlurVariant} id="company-heading" className="font-heading text-6xl md:text-8xl text-[#e5e6e6] mb-10 leading-[0.95]">
        Outbound is broken. <br/>
        <span className="text-accent-glow block mt-4">I learned that the hard way.</span>
      </motion.h1>
      <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 max-w-3xl mx-auto leading-relaxed">
        I wasn’t trying to build another tool. I was trying to figure out why outbound felt unpredictable, inconsistent, and honestly… fragile. <span className="text-[#e5e6e6] font-bold">Zigtex came out of that frustration.</span>
      </motion.p>
    </motion.section>

    {/* Integrated Timeline */}
    <div className="relative z-10 w-full mb-32">
      {/* The Central Track Line */}
      <div aria-hidden="true" className="absolute top-0 bottom-0 left-[27px] md:left-1/2 w-px bg-gradient-to-b from-transparent via-[#e5e6e6]/20 to-transparent md:-translate-x-1/2 -z-10" />

      {/* Section 1: How this started */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-labelledby="how-it-started-heading" 
        className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-32 group"
      >
        {/* Node */}
        <motion.div variants={fadeUpBlurVariant} aria-hidden="true" className="absolute left-[12px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-[#04020f] border border-[#8773ff]/50 flex items-center justify-center md:-translate-x-1/2 z-20 shadow-[0_0_20px_rgba(135,115,255,0.3)] group-hover:shadow-[0_0_30px_rgba(135,115,255,0.6)] transition-shadow duration-500">
          <div className="w-2 h-2 rounded-full bg-[#8773ff]" />
        </motion.div>

        {/* Text Left */}
        <motion.div variants={slideInLeftVariant} className="w-full md:w-1/2 md:pr-16 md:text-right pl-16 md:pl-0 pt-2 md:pt-0">
          <div className="font-body text-[11px] uppercase tracking-[0.3em] font-bold text-[#e5e6e6]/60 mb-5">How This Started</div>
          <h2 id="how-it-started-heading" className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-6 leading-tight">I kept seeing the <br/><span className="text-[#8773ff]">same pattern.</span></h2>
          <p className="font-body text-lg text-[#e5e6e6]/80 leading-relaxed">
            Teams were sending more emails, buying more tools, adding more automation, and still not getting consistent results. Not because they were doing outreach wrong.
          </p>
        </motion.div>

        {/* Visual Right */}
        <motion.div variants={slideInRightVariant} className="w-full md:w-1/2 md:pl-16 pl-16 md:pl-0">
          <div className="glass-card p-10 border-[#8773ff]/20 group-hover:border-[#8773ff]/40 transition-colors bg-[#0a061c]/80">
            <div className="font-body text-base text-[#e5e6e6] font-medium mb-8">Because the system underneath it was broken:</div>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 font-body text-sm md:text-base text-[#e5e6e6]/90"><TrendingDown aria-hidden="true" className="w-5 h-5 text-red-400 opacity-80 shrink-0 mt-0.5" /> Emails landing in spam without warning</li>
              <li className="flex items-start gap-4 font-body text-sm md:text-base text-[#e5e6e6]/90"><TrendingDown aria-hidden="true" className="w-5 h-5 text-red-400 opacity-80 shrink-0 mt-0.5" /> Domains getting damaged without visibility</li>
              <li className="flex items-start gap-4 font-body text-sm md:text-base text-[#e5e6e6]/90"><TrendingDown aria-hidden="true" className="w-5 h-5 text-red-400 opacity-80 shrink-0 mt-0.5" /> Campaign performance dropping randomly</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 2: The Real Problem */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-labelledby="real-problem-heading" 
        className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-0 mb-32 group"
      >
        {/* Node */}
        <motion.div variants={fadeUpBlurVariant} aria-hidden="true" className="absolute left-[12px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-[#04020f] border border-red-500/50 flex items-center justify-center md:-translate-x-1/2 z-20 shadow-[0_0_20px_rgba(248,113,113,0.3)] group-hover:shadow-[0_0_30px_rgba(248,113,113,0.6)] transition-shadow duration-500">
          <div className="w-2 h-2 rounded-full bg-red-400" />
        </motion.div>

        {/* Text Right */}
        <motion.div variants={slideInRightVariant} className="w-full md:w-1/2 md:pl-16 md:text-left pl-16 md:pl-0 pt-2 md:pt-0">
          <div className="font-body text-[11px] uppercase tracking-[0.3em] font-bold text-[#e5e6e6]/60 mb-5">The Real Problem</div>
          <h2 id="real-problem-heading" className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-6 leading-tight">Focusing on <br/><span className="text-red-400">the wrong things.</span></h2>
          <p className="font-body text-lg text-[#e5e6e6]/80 leading-relaxed">
            Most platforms focus entirely on the top layer of outreach. That gap in the infrastructure is where everything breaks.
          </p>
        </motion.div>

        {/* Visual Left */}
        <motion.div variants={slideInLeftVariant} className="w-full md:w-1/2 md:pr-16 pl-16 md:pl-0">
          <div className="glass-card p-1.5 border-[#e5e6e6]/10 bg-[#0a061c]/90 flex flex-col overflow-hidden">
             <div className="p-8 bg-red-500/10 border-b border-red-500/20">
               <div className="font-body text-[11px] font-bold uppercase tracking-widest text-[#e5e6e6]/70 mb-5">Most tools optimize for:</div>
               <ul className="space-y-4">
                 <li className="font-body text-base text-[#e5e6e6]/60 flex items-center gap-4 line-through"><XCircle aria-hidden="true" className="w-5 h-5 text-red-400/50 shrink-0" /> Writing email copy</li>
                 <li className="font-body text-base text-[#e5e6e6]/60 flex items-center gap-4 line-through"><XCircle aria-hidden="true" className="w-5 h-5 text-red-400/50 shrink-0" /> Managing automated sequences</li>
                 <li className="font-body text-base text-[#e5e6e6]/60 flex items-center gap-4 line-through"><XCircle aria-hidden="true" className="w-5 h-5 text-red-400/50 shrink-0" /> Increasing daily volume</li>
               </ul>
             </div>
             <div className="p-8 bg-[#3a28a5]/20">
               <div className="font-body text-[11px] font-bold uppercase tracking-widest text-[#e5e6e6] mb-5">Almost none focus on:</div>
               <ul className="space-y-4">
                 <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-4"><Target aria-hidden="true" className="w-5 h-5 text-[#8773ff] shrink-0" /> How emails are actually sent</li>
                 <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-4"><Target aria-hidden="true" className="w-5 h-5 text-[#8773ff] shrink-0" /> How volume is distributed safely</li>
                 <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-4"><Target aria-hidden="true" className="w-5 h-5 text-[#8773ff] shrink-0" /> How reputation is built or destroyed</li>
               </ul>
             </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 3: What We Built */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-labelledby="solution-heading" 
        className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-16 group"
      >
        {/* Node */}
        <motion.div variants={fadeUpBlurVariant} aria-hidden="true" className="absolute left-[12px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-[#04020f] border border-[#3a28a5]/50 flex items-center justify-center md:-translate-x-1/2 z-20 shadow-[0_0_20px_rgba(58,40,165,0.3)] group-hover:shadow-[0_0_30px_rgba(58,40,165,0.6)] transition-shadow duration-500">
          <div className="w-2 h-2 rounded-full bg-[#8773ff]" />
        </motion.div>

        {/* Text Left */}
        <motion.div variants={slideInLeftVariant} className="w-full md:w-1/2 md:pr-16 md:text-right pl-16 md:pl-0 pt-2 md:pt-0">
          <div className="font-body text-[11px] uppercase tracking-[0.3em] font-bold text-[#e5e6e6]/60 mb-5">The Solution</div>
          <h2 id="solution-heading" className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-6 leading-tight">What we decided <br/><span className="text-[#8773ff]">to build.</span></h2>
          <p className="font-body text-lg text-[#e5e6e6]/80 leading-relaxed">
            Instead of building another outreach layer, we focused on what sits underneath it. Zigtex is built to control the actual mechanics of sending.
          </p>
        </motion.div>

        {/* Visual Right */}
        <motion.div variants={slideInRightVariant} className="w-full md:w-1/2 md:pl-16 pl-16 md:pl-0">
          <div className="glass-card p-10 border-[#3a28a5]/30 klein-glow group-hover:border-[#3a28a5]/50 transition-colors bg-[#0a061c]/80">
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4 font-body text-base text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-[#8773ff] shrink-0 mt-0.5" /> How emails are sent</li>
              <li className="flex items-start gap-4 font-body text-base text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-[#8773ff] shrink-0 mt-0.5" /> How sending volume is distributed</li>
              <li className="flex items-start gap-4 font-body text-base text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-[#8773ff] shrink-0 mt-0.5" /> How bounce behavior is handled</li>
              <li className="flex items-start gap-4 font-body text-base text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-[#8773ff] shrink-0 mt-0.5" /> How domain reputation is protected</li>
            </ul>
            <div className="font-body text-[12px] uppercase tracking-[0.2em] text-[#8773ff] font-bold border-t border-[#e5e6e6]/10 pt-6">
              Not just once, but continuously.
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>

    {/* Section 4: What I Believe (Anchor Breakout) */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-labelledby="belief-heading" 
      className="text-center py-32 mb-40 border-y border-[#e5e6e6]/10 bg-[#e5e6e6]/[0.02] relative overflow-hidden"
    >
       <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(135,115,255,0.08),transparent_60%)] pointer-events-none" />
       <motion.div variants={fadeUpBlurVariant}>
         <Quote aria-hidden="true" className="w-20 h-20 text-[#e5e6e6]/20 mx-auto mb-10" />
       </motion.div>
       <motion.h3 variants={fadeUpBlurVariant} id="belief-heading" className="font-heading text-5xl md:text-7xl text-[#e5e6e6] mb-16 leading-[1.05] max-w-4xl mx-auto px-6">
         "If your emails don't land, <br/><span className="text-accent-glow block mt-4">nothing else matters."</span>
       </motion.h3>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left px-6">
         <motion.div variants={fadeUpBlurVariant} className="p-10 rounded-3xl bg-[#e5e6e6]/[0.03] border border-[#e5e6e6]/10 hover:border-[#e5e6e6]/20 transition-colors shadow-lg">
           <h4 className="font-body text-lg text-[#e5e6e6] font-bold mb-4">Copy is irrelevant</h4>
           <p className="font-body text-base text-[#e5e6e6]/80 leading-relaxed">Copy, targeting, personalization: none of it matters if you’re in spam.</p>
         </motion.div>
         <motion.div variants={fadeUpBlurVariant} className="p-10 rounded-3xl bg-[#e5e6e6]/[0.03] border border-[#e5e6e6]/10 hover:border-[#e5e6e6]/20 transition-colors shadow-lg">
           <h4 className="font-body text-lg text-[#e5e6e6] font-bold mb-4">Automation is risky</h4>
           <p className="font-body text-base text-[#e5e6e6]/80 leading-relaxed">Scaling without understanding deliverability is how domains get burned.</p>
         </motion.div>
         <motion.div variants={fadeUpBlurVariant} className="p-10 rounded-3xl bg-[#e5e6e6]/[0.03] border border-[#e5e6e6]/10 hover:border-[#e5e6e6]/20 transition-colors shadow-lg">
           <h4 className="font-body text-lg text-[#e5e6e6] font-bold mb-4">Outbound must be predictable</h4>
           <p className="font-body text-base text-[#e5e6e6]/80 leading-relaxed">It should behave like a system you can trust. No more guessing what broke.</p>
         </motion.div>
       </div>
    </motion.section>

    {/* Section 6 & 7: What I care about / Where we're going */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-label="Our Vision" 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40 max-w-6xl mx-auto px-6"
    >
       <motion.div variants={fadeUpBlurVariant} className="glass-card p-12 md:p-16 hover:shadow-[0_0_40px_-10px_rgba(58,40,165,0.4)] hover:border-[#3a28a5]/30 transition-all duration-500 flex flex-col bg-[#100a30]/80">
          <h3 className="font-heading text-4xl text-[#e5e6e6] mb-8">What I Care About</h3>
          <p className="font-body text-[#e5e6e6]/90 mb-10 text-xl leading-relaxed">I don’t care about sending more emails. I care about:</p>
          <ul className="space-y-6 flex-1">
             <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-5"><div aria-hidden="true" className="w-2 h-2 rounded-full bg-[#8773ff] shrink-0"/> Whether your emails reach the inbox</li>
             <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-5"><div aria-hidden="true" className="w-2 h-2 rounded-full bg-[#8773ff] shrink-0"/> Whether your domain stays healthy</li>
             <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-5"><div aria-hidden="true" className="w-2 h-2 rounded-full bg-[#8773ff] shrink-0"/> Whether your outbound works consistently</li>
          </ul>
          <div className="pt-8 mt-10 border-t border-[#e5e6e6]/10 font-body text-[12px] uppercase tracking-[0.2em] text-[#e5e6e6]/70 font-bold">
            If those three are solved, everything else is easy.
          </div>
       </motion.div>

       <motion.div variants={fadeUpBlurVariant} className="glass-card p-12 md:p-16 hover:shadow-[0_0_40px_-10px_rgba(135,115,255,0.4)] hover:border-[#8773ff]/30 transition-all duration-500 bg-[#0a061c] flex flex-col relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-bl from-[#8773ff]/10 to-transparent pointer-events-none" />
          <h3 className="font-heading text-4xl text-[#e5e6e6] mb-8 relative z-10">Where We’re Going</h3>
          <p className="font-body text-[#e5e6e6]/90 mb-8 text-xl leading-relaxed flex-1 relative z-10">
            Outbound is still evolving, but one thing is clear: The companies that win won’t be the ones sending the most.
            <br/><br/>
            <span className="text-[#e5e6e6] font-bold">They’ll be the ones with the most reliable systems behind their outreach.</span>
          </p>
          <div className="pt-8 border-t border-[#e5e6e6]/20 font-body text-[12px] uppercase tracking-[0.2em] text-[#8773ff] font-bold relative z-10">
            That’s what we’re building toward.
          </div>
       </motion.div>
    </motion.section>

    {/* Team Section */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-labelledby="team-heading" 
      className="max-w-6xl mx-auto px-6 mb-40 text-center"
    >
      <motion.div variants={fadeUpBlurVariant} className="mb-16">
        <h2 id="team-heading" className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-6">The minds behind the <span className="text-[#8773ff]">infrastructure.</span></h2>
        <p className="font-body text-xl text-[#e5e6e6]/80 max-w-2xl mx-auto">We are a small team of engineers and deliverability experts. No growth hackers, just builders focusing on the mechanics of sending.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div key={idx} variants={fadeUpBlurVariant} className="glass-card p-10 flex flex-col items-center text-center group hover:border-[#8773ff]/40 hover:shadow-[0_0_30px_rgba(135,115,255,0.15)] transition-all duration-500 bg-[#0a061c]/80">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-2 border-[#e5e6e6]/10 group-hover:border-[#8773ff]/50 transition-colors">
               <img src={member.image} alt={member.name} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-heading text-2xl text-[#e5e6e6] mb-2">{member.name}</h3>
            <div className="font-body text-[11px] uppercase tracking-[0.2em] font-bold text-[#8773ff] mb-5">{member.role}</div>
            <p className="font-body text-sm text-[#e5e6e6]/80 leading-relaxed mb-8 flex-1">{member.bio}</p>
            <div className="flex gap-4 mt-auto">
               <a href="#" aria-label={`${member.name} LinkedIn`} className="w-11 h-11 rounded-full border border-[#e5e6e6]/10 flex items-center justify-center text-[#e5e6e6]/40 hover:text-[#8773ff] hover:border-[#8773ff]/40 transition-colors">
                 <Linkedin aria-hidden="true" className="w-5 h-5"/>
               </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Section 8: If You're Reading This */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-labelledby="reading-heading" 
      className="max-w-4xl mx-auto text-center mb-32 relative z-10 glass-card p-16 md:p-20 border-[#e5e6e6]/20 bg-[#04020f]/90 px-6"
    >
      <motion.h2 variants={fadeUpBlurVariant} id="reading-heading" className="font-heading text-5xl md:text-6xl text-[#e5e6e6] mb-8">If you're reading this...</motion.h2>
      <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/80 mb-12">You’re probably dealing with one of these:</motion.p>
      
      <motion.div variants={fadeUpBlurVariant} className="flex flex-col md:flex-row gap-5 justify-center items-center mb-14">
        <span className="px-8 py-4 rounded-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 font-body text-sm md:text-base text-[#e5e6e6] shadow-sm font-medium w-full md:w-auto">Inconsistent campaign performance</span>
        <span className="px-8 py-4 rounded-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 font-body text-sm md:text-base text-[#e5e6e6] shadow-sm font-medium w-full md:w-auto">Deliverability issues you can’t diagnose</span>
        <span className="px-8 py-4 rounded-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 font-body text-sm md:text-base text-[#e5e6e6] shadow-sm font-medium w-full md:w-auto">Fear of damaging your domain</span>
      </motion.div>
      
      <motion.div variants={fadeUpBlurVariant} className="inline-block px-8 py-3 rounded-xl border border-[#8773ff]/40 bg-[#8773ff]/10">
        <span className="font-body text-base text-[#8773ff] font-bold uppercase tracking-widest">Zigtex exists to remove that uncertainty.</span>
      </motion.div>
    </motion.section>

    {/* Subtle Sign-off */}
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={fadeUpBlurVariant}
      className="text-center font-heading text-3xl md:text-4xl text-[#e5e6e6]/40 mb-32 relative z-10 px-6"
    >
      "Love God, Love People, Love what we do."
    </motion.div>

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
        If outbound feels unpredictable, <br/>
        <span className="text-[#8773ff]">the system behind it needs fixing.</span>
      </motion.h2>
      
      <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
        Zigtex gives you control over how your emails are sent and delivered, so you can scale without breaking what already works.
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
