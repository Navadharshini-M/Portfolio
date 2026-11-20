import React from 'react';
import { Code2, Users, Sparkles, Layout, Smartphone, Database, CheckCircle2 } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Layout className="w-5 h-5 text-olive-900 dark:text-limeaccent" />,
      title: "Responsive & Modern UI",
      desc: "Building clean, component-based interfaces using React.js and Tailwind CSS that scale effortlessly from 320px mobile viewports to ultra-wide displays."
    },
    {
      icon: <Users className="w-5 h-5 text-olive-900 dark:text-limeaccent" />,
      title: "Real Client Delivery",
      desc: "Collaborated closely with a fellow developer on three real client website projects, learning firsthand how to navigate commercial constraints and client feedback."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-olive-900 dark:text-limeaccent" />,
      title: "AI-Assisted Workflow",
      desc: "Integrating state-of-the-art AI tools (Antigravity & ChatGPT) into daily development workflows to accelerate component scaffolding, resolve styling bugs, and refine UI execution."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-olive-900 dark:text-limeaccent" />,
      title: "Internship Foundations",
      desc: "Gained real industry perspective through hands-on internships in full-stack web development (Novanector Services) and mobile app UI building (UpgradeNow Technologies)."
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-sage-300 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-sage-300 dark:border-sage-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-olive-900 dark:text-limeaccent">
              [ 02 / BACKGROUND & APPROACH ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-charcoal dark:text-white mt-2 tracking-tight">
              Engineering with Purpose & Precision
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-bold tracking-wider text-charcoal dark:text-sage-300 max-w-xs uppercase">
            TRANSFORMING BUSINESS REQUIREMENTS INTO SEAMLESS DIGITAL EXPERIENCES.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-sage-100 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 shadow-subtle relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-limeaccent/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-heading font-extrabold text-charcoal dark:text-white mb-4">
                The Practical Front-End Developer
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-charcoal dark:text-sage-100 font-medium leading-relaxed">
                <p>
                  I am a Front-End Developer and B.Tech graduate in <strong className="font-bold text-olive-900 dark:text-limeaccent">Artificial Intelligence & Data Science</strong> from <strong className="font-bold text-olive-900 dark:text-white">PSR Engineering College</strong> (CGPA: 7.5 / 10). Rather than relying solely on classroom theory, I directed my energy toward practical web development and client-facing engineering.
                </p>
                <p>
                  In collaborative partnership with a developer friend, I contributed to the architecture and front-end implementation of three live client websites: <strong className="font-bold text-olive-900 dark:text-white">Pokkisham Steel Doors</strong>, <strong className="font-bold text-olive-900 dark:text-white">Uyirsaaru</strong>, and <strong className="font-bold text-olive-900 dark:text-white">Sarvam Care Hospital</strong>. This taught me the reality of translating client ideas into high-converting, responsive layouts under real timelines.
                </p>
                <p>
                  I believe in pairing solid fundamental engineering (HTML5 semantic markup, CSS Grid/Flexbox, React state flow) with modern <strong className="font-bold text-olive-900 dark:text-limeaccent">AI-assisted development tools</strong>. This workflow empowers me to work with speed, test edge cases rigorously, and ship polished, accessible interfaces.
                </p>
              </div>

              {/* Verified Checklist */}
              <div className="mt-6 pt-6 border-t border-sage-300 dark:border-sage-800 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold text-charcoal dark:text-sage-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-limeaccent shrink-0 stroke-[2.5]" />
                  <span>3 Client Web Deliveries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-limeaccent shrink-0 stroke-[2.5]" />
                  <span>2 Technical Internships</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-limeaccent shrink-0 stroke-[2.5]" />
                  <span>AI-Accelerated Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-limeaccent shrink-0 stroke-[2.5]" />
                  <span>Accessible & Fast UI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Right Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-sage-100 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 hover:border-olive-900/50 dark:hover:border-limeaccent/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-sage-200 dark:bg-sage-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="font-heading font-bold text-lg text-charcoal dark:text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal dark:text-sage-200 font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
