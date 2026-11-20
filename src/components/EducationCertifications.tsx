import React from 'react';
import { GraduationCap, Award, Languages, Sparkles, Check, BookOpen } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS, SOFT_SKILLS, LANGUAGES } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-sage-300 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-sage-300 dark:border-sage-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-olive-900 dark:text-limeaccent">
              [ 06 / CREDENTIALS & ACADEMICS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-charcoal dark:text-white mt-2 tracking-tight">
              Education & Certifications
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-bold tracking-wider text-charcoal dark:text-sage-300 max-w-xs uppercase">
            VERIFIED ACADEMIC QUALIFICATIONS, TECHNICAL CERTIFICATES & SOFT SKILLS.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Formal Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive-900 dark:text-limeaccent">
              <GraduationCap className="w-4 h-4 stroke-[2.5]" />
              <span>Academic Foundation</span>
            </div>

            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="p-8 rounded-2xl bg-sage-100 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 shadow-subtle relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950">
                    {edu.period}
                  </span>
                  <span className="text-xs font-extrabold text-olive-900 dark:text-limeaccent bg-limeaccent/25 dark:bg-limeaccent/15 px-3 py-1 rounded-md border border-limeaccent/40">
                    {edu.score}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal dark:text-white leading-snug">
                  {edu.degree}
                </h3>
                
                <h4 className="text-sm sm:text-base font-heading font-bold text-olive-900 dark:text-sage-200 mt-1 mb-2">
                  {edu.institution}
                </h4>

                <p className="text-xs font-bold text-charcoal dark:text-sage-300 mb-6">
                  {edu.location}
                </p>

                <div className="space-y-2 pt-4 border-t border-sage-300 dark:border-sage-800 text-xs font-medium text-charcoal dark:text-sage-200">
                  {edu.highlights.map((h, i) => (
                    <p key={i} className="leading-relaxed">
                      • {h}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Languages Card */}
            <div className="p-6 rounded-2xl bg-sage-100 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 shadow-subtle">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-olive-900 dark:text-limeaccent">
                <Languages className="w-4 h-4 stroke-[2.5]" />
                <span>Languages</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {LANGUAGES.map((lang) => (
                  <div key={lang.language} className="p-3.5 rounded-xl bg-sage-200 dark:bg-sage-850 border border-sage-300 dark:border-sage-700">
                    <span className="block font-heading font-extrabold text-sm text-charcoal dark:text-white">
                      {lang.language}
                    </span>
                    <span className="text-xs font-semibold text-charcoal dark:text-sage-300">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Certifications & Workshops */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive-900 dark:text-limeaccent">
              <Award className="w-4 h-4 stroke-[2.5]" />
              <span>Certifications & Workshops</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-6 rounded-2xl bg-sage-100 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 hover:border-olive-900/50 dark:hover:border-limeaccent/50 transition-all shadow-subtle"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded bg-sage-200 dark:bg-sage-800 text-charcoal dark:text-sage-100 border border-sage-300 dark:border-sage-700">
                      {cert.type}
                    </span>
                    <span className="text-xs font-heading font-extrabold text-olive-900 dark:text-limeaccent">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-extrabold text-charcoal dark:text-white mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-charcoal dark:text-sage-200 font-medium leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Soft Skills & Professional Attributes */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive-900 dark:text-limeaccent">
              <Sparkles className="w-4 h-4 stroke-[2.5]" />
              <span>Professional Soft Skills</span>
            </div>

            <div className="space-y-3">
              {SOFT_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-sage-100 dark:bg-sage-900 border border-sage-300 dark:border-sage-800"
                >
                  <h4 className="font-heading font-bold text-sm text-charcoal dark:text-white mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-limeaccent"></span>
                    <span>{skill.name}</span>
                  </h4>
                  <p className="text-xs text-charcoal dark:text-sage-200 font-medium leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
