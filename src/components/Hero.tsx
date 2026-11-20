import React from 'react';
import { ArrowDownRight, Download, Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subheader Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-sage-300/80 dark:border-sage-800 text-xs font-mono uppercase tracking-widest text-charcoal-muted dark:text-sage-400">
          <div className="flex items-center gap-3">
            <span className="text-olive-900 dark:text-limeaccent font-semibold">[ 01 / EDITORIAL PORTFOLIO ]</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-sage-400"></span>
            <span className="hidden sm:inline-block">FRONT-END DEVELOPER</span>
          </div>
          <div className="flex items-center gap-2 bg-sage-200/80 dark:bg-sage-900/80 px-3 py-1 rounded-full border border-sage-300 dark:border-sage-700">
            <span className="w-2 h-2 rounded-full bg-limeaccent animate-ping"></span>
            <span className="text-charcoal dark:text-sage-200 font-semibold">{CANDIDATE.availability}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-heading font-bold uppercase tracking-wider text-olive-900 dark:text-limeaccent">
              <span className="px-3 py-1.5 rounded-md bg-limeaccent/20 dark:bg-limeaccent/15 border border-limeaccent/50 text-olive-900 dark:text-limeaccent font-bold">
                React.js • Tailwind CSS • AI Workflows
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-charcoal dark:text-white leading-[1.08] mb-6">
              NAVA <br />
              <span className="relative inline-block text-olive-900 dark:text-limeaccent">
                DHARSHINI
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-limeaccent opacity-90" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3.5" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Role & Bio */}
            <p className="text-xl sm:text-2xl font-heading font-bold text-olive-900 dark:text-limeaccent mb-4">
              Front-End Developer & UI Engineer
            </p>

            <p className="text-base sm:text-lg text-charcoal dark:text-sage-100 font-medium leading-relaxed mb-8 max-w-2xl">
              Passionate about creating clean, accessible, and high-performance user interfaces. Delivered 
              <span className="font-bold text-olive-900 dark:text-white underline decoration-limeaccent decoration-2 underline-offset-4"> 3 commercial client websites </span> 
              through collaborative freelance engineering, backed by technical internships in full-stack web and mobile application development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950 font-heading font-bold text-sm tracking-wide hover:bg-black dark:hover:bg-limeaccent-light transition-all shadow-subtle hover:shadow-glow-lime transform hover:-translate-y-0.5"
              >
                <span>Explore Client Projects</span>
                <ArrowDownRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-sage-200 dark:bg-sage-900 text-charcoal dark:text-sage-100 font-heading font-bold text-sm tracking-wide border border-sage-300 dark:border-sage-700 hover:border-olive-900 dark:hover:border-limeaccent transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-limeaccent-dark dark:text-limeaccent stroke-[2.5]" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-sage-300 dark:border-sage-800 text-xs font-bold uppercase tracking-wider text-charcoal dark:text-sage-300">
              <a
                href={CANDIDATE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-olive-900 dark:hover:text-limeaccent transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <a
                href={CANDIDATE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-olive-900 dark:hover:text-limeaccent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <a
                href={`mailto:${CANDIDATE.email}`}
                className="flex items-center gap-1.5 hover:text-olive-900 dark:hover:text-limeaccent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{CANDIDATE.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Candidate Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Editorial Frame with Corner Crosshairs */}
              <div className="relative p-3 rounded-2xl bg-sage-200/90 dark:bg-sage-900/90 border border-sage-300 dark:border-sage-700/80 shadow-elevated">
                
                {/* Crosshair accents */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-olive-900 dark:border-limeaccent"></div>
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-olive-900 dark:border-limeaccent"></div>
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-olive-900 dark:border-limeaccent"></div>
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-olive-900 dark:border-limeaccent"></div>

                {/* Candidate Photograph Container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-sage-300/40 to-sage-400/40 dark:from-sage-950 dark:to-sage-900 border border-sage-300/60 dark:border-sage-800 flex items-center justify-center group">
                  
                  {/* Actual Candidate Photo */}
                  <img
                    src={CANDIDATE.photoUrl}
                    alt={CANDIDATE.name}
                    className="w-full h-full object-cover object-top filter contrast-105 saturate-[1.02] group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = CANDIDATE.photoFallback;
                    }}
                  />

                  {/* Gradient overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-transparent to-transparent opacity-60"></div>

                  {/* Bottom Portrait Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-olive-950/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <p className="font-heading font-bold text-sm tracking-wide text-limeaccent">{CANDIDATE.name}</p>
                      <p className="text-[11px] font-mono text-sage-300">B.Tech AI & Data Science (2022–2026)</p>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-white/10 text-white border border-white/15">
                      CGPA: 7.5
                    </span>
                  </div>
                </div>

                {/* Floating Highlights Badges */}
                <div className="mt-4 pt-3 border-t border-sage-300 dark:border-sage-800 grid grid-cols-2 gap-2 text-center text-xs font-heading">
                  <div className="p-2 rounded-lg bg-sage-100 dark:bg-sage-850 border border-sage-300/60 dark:border-sage-800">
                    <span className="block text-lg font-bold text-olive-900 dark:text-limeaccent">3</span>
                    <span className="text-[11px] text-charcoal-muted dark:text-sage-400 font-medium">Commercial Websites</span>
                  </div>
                  <div className="p-2 rounded-lg bg-sage-100 dark:bg-sage-850 border border-sage-300/60 dark:border-sage-800">
                    <span className="block text-lg font-bold text-olive-900 dark:text-limeaccent">2</span>
                    <span className="text-[11px] text-charcoal-muted dark:text-sage-400 font-medium">Technical Internships</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
