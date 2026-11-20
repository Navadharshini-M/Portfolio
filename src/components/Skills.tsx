import React, { useState } from 'react';
import { Code2, Sparkles, Terminal, CheckCircle, Cpu, Layers, Wrench, Database } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const sampleSnippet = `// Reusable Editorial Card Component in React & Tailwind CSS
import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  liveUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, liveUrl }) => {
  return (
    <article className="group relative p-6 rounded-2xl bg-sage-100 dark:bg-sage-900 
      border border-sage-300 dark:border-sage-800 transition-all duration-300 
      hover:border-limeaccent hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono uppercase text-limeaccent">{category}</span>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" 
           className="text-xs font-semibold hover:underline">
          View Live →
        </a>
      </div>
      <h3 className="text-xl font-heading font-bold">{title}</h3>
    </article>
  );
};`;

  return (
    <section id="skills" className="py-24 border-t border-sage-300 dark:border-sage-800 bg-sage-100 dark:bg-sage-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-sage-300 dark:border-sage-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-olive-900 dark:text-limeaccent">
              [ 03 / TECHNICAL ARSENAL ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-charcoal dark:text-white mt-2 tracking-tight">
              Skills & Architectural Stack
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-bold tracking-wider text-charcoal dark:text-sage-300 max-w-xs uppercase">
            CATEGORIZED EXPERTISE BACKED BY REAL COMMERCIAL IMPLEMENTATION.
          </p>
        </div>

        {/* Skills Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Categories Grid (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div
                  key={cat.category}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? 'bg-sage-50 dark:bg-sage-900 border-olive-900 dark:border-limeaccent shadow-subtle -translate-y-0.5'
                      : 'bg-sage-200/70 dark:bg-sage-900/40 border-sage-300 dark:border-sage-800 hover:bg-sage-100 dark:hover:bg-sage-850'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-olive-900 dark:text-limeaccent">
                      0{idx + 1}
                    </span>
                    {activeTab === idx && (
                      <span className="w-2.5 h-2.5 rounded-full bg-limeaccent"></span>
                    )}
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-charcoal dark:text-white mb-2">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-charcoal dark:text-sage-200 mb-4 leading-relaxed font-medium">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs px-2.5 py-1 rounded-md font-bold transition-colors ${
                          activeTab === idx
                            ? 'bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950 shadow-sm'
                            : 'bg-sage-300/80 dark:bg-sage-800 text-charcoal dark:text-sage-100 border border-sage-300 dark:border-sage-700'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Code & Philosophy Column (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Category Detail Panel */}
            <div className="p-6 rounded-2xl bg-sage-50 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 shadow-subtle">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-semibold uppercase tracking-wider text-olive-900 dark:text-limeaccent">
                <Layers className="w-4 h-4" />
                <span>Selected Focus: {SKILL_CATEGORIES[activeTab].category}</span>
              </div>
              
              <h4 className="text-xl font-heading font-bold text-charcoal dark:text-white mb-2">
                {SKILL_CATEGORIES[activeTab].category}
              </h4>
              <p className="text-xs sm:text-sm text-charcoal/80 dark:text-sage-300 mb-4 leading-relaxed">
                {SKILL_CATEGORIES[activeTab].description}
              </p>

              <div className="space-y-2">
                {SKILL_CATEGORIES[activeTab].skills.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-sage-100 dark:bg-sage-850 border border-sage-300/60 dark:border-sage-800"
                  >
                    <span className="font-heading font-medium text-xs sm:text-sm text-charcoal dark:text-white">
                      {s.name}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-limeaccent/20 dark:bg-limeaccent/10 text-olive-900 dark:text-limeaccent font-semibold">
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Quality Card */}
            <div className="p-6 rounded-2xl bg-olive-950 text-white border border-sage-800 shadow-elevated">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-sage-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-limeaccent" />
                  <span>Component.tsx</span>
                </div>
                <span className="text-[10px] text-limeaccent font-semibold">Strict TypeScript</span>
              </div>

              <pre className="text-[11px] font-mono leading-relaxed overflow-x-auto text-sage-200">
                <code>{sampleSnippet}</code>
              </pre>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-sage-400">
                <span>Semantic Markup</span>
                <span>• Zero Style Drift</span>
                <span>• WCAG AA Contrast</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
