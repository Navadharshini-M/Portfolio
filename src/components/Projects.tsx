import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Github, Sparkles, Shield, HeartPulse, Citrus, CheckCircle2, Globe } from 'lucide-react';
import { FEATURED_PROJECTS, SECONDARY_PROJECTS, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'commercial' | 'systems'>('all');

  const getIconForProject = (id: string) => {
    switch (id) {
      case 'pokkisham':
        return <Shield className="w-5 h-5 text-limeaccent" />;
      case 'uyirsaaru':
        return <Citrus className="w-5 h-5 text-limeaccent" />;
      case 'sarvamcare':
        return <HeartPulse className="w-5 h-5 text-limeaccent" />;
      default:
        return <Globe className="w-5 h-5 text-limeaccent" />;
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-sage-300 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-sage-300 dark:border-sage-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-olive-900 dark:text-limeaccent">
              [ 04 / SELECTED WORKS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-charcoal dark:text-white mt-2 tracking-tight">
              Featured Client Projects
            </h2>
          </div>
          
          {/* Filter Pills */}
          <div className="mt-4 md:mt-0 flex items-center gap-1.5 p-1.5 rounded-full bg-sage-200 dark:bg-sage-900 border border-sage-300 dark:border-sage-700 text-xs font-bold">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeFilter === 'all'
                  ? 'bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950 font-extrabold shadow-sm'
                  : 'text-charcoal dark:text-sage-300 hover:text-olive-900 dark:hover:text-white'
              }`}
            >
              All Projects ({FEATURED_PROJECTS.length + SECONDARY_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('commercial')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeFilter === 'commercial'
                  ? 'bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950 font-extrabold shadow-sm'
                  : 'text-charcoal dark:text-sage-300 hover:text-olive-900 dark:hover:text-white'
              }`}
            >
              Commercial Clients (3)
            </button>
            <button
              onClick={() => setActiveFilter('systems')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeFilter === 'systems'
                  ? 'bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950 font-extrabold shadow-sm'
                  : 'text-charcoal dark:text-sage-300 hover:text-olive-900 dark:hover:text-white'
              }`}
            >
              Academic Systems (2)
            </button>
          </div>
        </div>

        {/* Commercial Client Projects Showcase */}
        {(activeFilter === 'all' || activeFilter === 'commercial') && (
          <div className="space-y-12 mb-16">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-olive-900 dark:text-limeaccent">
              <span className="w-2 h-2 rounded-full bg-limeaccent"></span>
              <span>Collaborative Freelance Client Deliveries</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {FEATURED_PROJECTS.map((proj, idx) => (
                <article
                  key={proj.id}
                  className="flex flex-col rounded-2xl bg-sage-100 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 overflow-hidden shadow-subtle hover:border-olive-900/60 dark:hover:border-limeaccent/60 transition-all duration-300 group hover:-translate-y-1.5"
                >
                  {/* Top Editorial Visual Banner */}
                  <div className={`p-6 bg-gradient-to-br ${proj.previewColor} text-white relative overflow-hidden min-h-[170px] flex flex-col justify-between`}>
                    
                    {/* Background subtle noise and glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-limeaccent/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
                          {getIconForProject(proj.id)}
                        </div>
                        <span className="text-[11px] font-mono tracking-wider uppercase text-limeaccent font-semibold">
                          Client 0{idx + 1}
                        </span>
                      </div>

                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 hover:bg-limeaccent hover:text-olive-950 transition-all transform hover:rotate-12"
                        aria-label={`Visit ${proj.title} website`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="relative z-10 mt-6">
                      <h3 className="text-xl font-heading font-bold text-white tracking-tight leading-snug">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-mono text-sage-300 mt-1 line-clamp-1">
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Collaboration Notice Badge */}
                      <div className="mb-4 p-2 rounded-md bg-sage-200/80 dark:bg-sage-850 border border-sage-300/70 dark:border-sage-800 text-[11px] font-medium text-charcoal/80 dark:text-sage-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-limeaccent shrink-0"></span>
                        <span>{proj.collaboration}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-charcoal/80 dark:text-sage-300 leading-relaxed mb-5">
                        {proj.description}
                      </p>

                      {/* Key Features Checklist */}
                      <ul className="space-y-2 mb-6">
                        {proj.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-charcoal/70 dark:text-sage-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-limeaccent shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-sage-200 dark:border-sage-800">
                        {proj.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-sage-200 dark:bg-sage-800 text-charcoal/80 dark:text-sage-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Live Link Button */}
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950 font-heading font-semibold text-xs tracking-wider uppercase hover:bg-black dark:hover:bg-limeaccent-light transition-all shadow-subtle group-hover:shadow-glow-lime"
                      >
                        <span>View Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Academic & Systems Projects */}
        {(activeFilter === 'all' || activeFilter === 'systems') && (
          <div className="space-y-8 pt-8">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-charcoal-muted dark:text-sage-400">
              <span className="w-2 h-2 rounded-full bg-sage-400"></span>
              <span>Secondary & Academic Systems Engineering</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SECONDARY_PROJECTS.map((proj) => (
                <article
                  key={proj.id}
                  className="p-6 rounded-2xl bg-sage-100 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 flex flex-col justify-between hover:border-olive-900/50 dark:hover:border-limeaccent/50 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono uppercase text-olive-900 dark:text-limeaccent font-semibold">
                        Academic System
                      </span>
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono flex items-center gap-1 hover:text-limeaccent transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/80 dark:text-sage-300 mb-4 leading-relaxed">
                      {proj.description}
                    </p>

                    <ul className="space-y-1.5 mb-6">
                      {proj.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-charcoal/70 dark:text-sage-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-limeaccent shrink-0 mt-1.5"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-sage-200 dark:border-sage-800">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-sage-200 dark:bg-sage-800 text-charcoal/80 dark:text-sage-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
