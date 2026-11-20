import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2, UserCheck } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-sage-300 dark:border-sage-800 bg-sage-100 dark:bg-sage-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-sage-300 dark:border-sage-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-olive-900 dark:text-limeaccent">
              [ 05 / CAREER TRAJECTORY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-charcoal dark:text-white mt-2 tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-bold tracking-wider text-charcoal dark:text-sage-300 max-w-xs uppercase">
            CHRONOLOGICAL TIMELINE OF FREELANCE DELIVERIES & TECHNICAL INTERNSHIPS.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-sage-300 dark:border-sage-800 space-y-12 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.role + exp.company} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-sage-100 dark:bg-sage-950 border-4 border-olive-900 dark:border-limeaccent group-hover:scale-125 transition-transform duration-300"></div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-sage-50 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 shadow-subtle group-hover:border-olive-900/50 dark:group-hover:border-limeaccent/50 transition-all duration-300">
                
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-md bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950 uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <span className="text-xs font-bold text-charcoal dark:text-sage-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-charcoal dark:text-sage-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal dark:text-white">
                  {exp.role}
                </h3>
                <h4 className="text-sm sm:text-base font-heading font-bold text-olive-900 dark:text-limeaccent mt-0.5 mb-4">
                  {exp.company}
                </h4>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-charcoal dark:text-sage-100 font-medium leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>

                {/* Key Bullet Achievements */}
                <div className="space-y-2 mb-6">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal dark:text-sage-100 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-limeaccent shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-sage-200 dark:border-sage-800">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-sage-200 dark:bg-sage-800 text-charcoal dark:text-sage-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
