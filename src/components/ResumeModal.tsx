import React, { useState, useEffect, useRef } from 'react';
import { X, Download, FileText, Printer, Check, Copy } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'atsText'>('preview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `NAVA DHARSHINI M
${CANDIDATE.phoneRaw} | ${CANDIDATE.email}
Sattur, Virudhunagar, Tamil Nadu
LinkedIn: ${CANDIDATE.linkedin} | GitHub: ${CANDIDATE.github}

PROFESSIONAL SUMMARY
Passionate Front-End Developer and B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in building responsive and user-friendly web interfaces through internships and freelance projects. Skilled in HTML, CSS, JavaScript, React.js and Tailwind CSS. Experienced in AI-assisted development tools for creating, improving and debugging front-end applications. Interested in developing clean, responsive and accessible web experiences.

EDUCATION
B.Tech – Artificial Intelligence & Data Science (2022 – 2026)
PSR Engineering College | CGPA: 7.5 / 10

TECHNICAL SKILLS
Front-End: HTML5, CSS3, JavaScript, React.js
CSS Frameworks: Tailwind CSS
Development: Responsive Web Design, Flexbox, CSS Grid, Reusable Components, Props, React Hooks, Axios
Tools: VS Code, Git, GitHub, Vite
AI Tools: ChatGPT, Antigravity, AI-Assisted Development
Other Skills: Python, SQL, Microsoft Excel

PROFESSIONAL EXPERIENCE
Freelance Front-End Developer — Client Projects
• Completed three client-based website development projects with a focus on responsive and user-friendly front-end interfaces.
• Developed website interfaces using HTML, CSS, JavaScript and modern front-end tools.
• Used AI-assisted tools to support UI development, debugging and improving development workflow.

UpgradeNow Technologies – Mobile App Development (July 2024)
• Completed a 15-day intensive internship on Microsoft Power Apps.
• Developed a dynamic mobile application with interactive UI components.

Novanector Services Pvt. Ltd., Dehradun – Web Development (Dec 2024 – Jan 2025)
• Completed a 1-month internship on full-stack web development.
• Developed and deployed an online store with a functional product cart system.

PROJECTS
Pokkisham Steel Doors – Client Website (pokkisham-steel-doors.vercel.app)
Uyirsaaru – Client Website (uyirsaaru.com)
Sarvam Care Hospital – Client Website (sarvamcarehospital.in)

NexPath – Career Guidance Web Application
• Developed a career guidance platform to help students explore career paths and learning resources.
• Built responsive front-end interfaces using React.

Election Analytics – Voter Turnout & Issue Sentiment
• Developed a web-based system to analyze voter feedback and visualize regional trends.
• Worked with React, Flask and MongoDB.

CERTIFICATIONS & WORKSHOPS
• JavaScript – PORTALAM
• Chatbot using NLP – NOVITECH
• Embedded Systems Workshop

SOFT SKILLS & LANGUAGES
Soft Skills: Problem Solving | Critical Thinking | Team Collaboration | Adaptability | Time Management
Languages: English, Tamil`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 bg-charcoal/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview"
    >
      {/* Modal panel */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl overflow-hidden border border-sage-300 dark:border-sage-800 shadow-2xl bg-white dark:bg-[#151914]">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-sage-300 dark:border-sage-800 bg-sage-50 dark:bg-[#1A2019]">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="font-heading font-extrabold text-charcoal dark:text-white text-lg sm:text-xl">
                Nava Dharshini M — Official Resume
              </h2>
              <p className="text-xs text-charcoal dark:text-sage-300 font-bold flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-limeaccent"></span>
                ATS-Optimized · 1-Page A4 · Front-End Developer
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-sage-200 dark:bg-sage-800 rounded-lg p-0.5 border border-sage-300 dark:border-sage-700">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'preview'
                    ? 'bg-white dark:bg-sage-900 text-charcoal dark:text-white shadow-sm'
                    : 'text-charcoal dark:text-sage-300 hover:text-charcoal'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setActiveTab('atsText')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'atsText'
                    ? 'bg-white dark:bg-sage-900 text-charcoal dark:text-white shadow-sm'
                    : 'text-charcoal dark:text-sage-300 hover:text-charcoal'
                }`}
              >
                ATS Text View
              </button>
            </div>

            <a
              href="/Nava_Dharshini_Resume.pdf"
              download="Nava_Dharshini_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-limeaccent text-olive-900 font-bold text-xs hover:bg-limeaccent/90 transition-colors shadow-sm"
            >
              <Download size={14} strokeWidth={2.5} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg border border-sage-300 dark:border-sage-700 text-charcoal dark:text-sage-200 hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto max-h-[72vh] p-4 sm:p-6 bg-sage-100 dark:bg-[#111410]">
          {activeTab === 'preview' ? (
            <div className="w-full h-full min-h-[65vh] rounded-xl overflow-hidden border border-sage-300 dark:border-sage-800 shadow-inner bg-white">
              <iframe
                src="/Nava_Dharshini_Resume.pdf#toolbar=0"
                title="Nava Dharshini Resume"
                className="w-full h-full min-h-[65vh]"
                style={{ border: 'none' }}
              />
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-white dark:bg-sage-950 p-8 sm:p-10 rounded-xl border border-sage-300 dark:border-sage-800 shadow-md text-charcoal dark:text-sage-100 font-sans text-xs leading-relaxed selection:bg-limeaccent selection:text-olive-950">
              
              {/* Copy & Print Toolbar */}
              <div className="flex items-center justify-end gap-2 mb-6 pb-3 border-b border-sage-200 dark:border-sage-800">
                <button
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sage-100 dark:bg-sage-850 hover:bg-sage-200 dark:hover:bg-sage-800 text-charcoal dark:text-sage-100 font-bold text-[11px] border border-sage-300 dark:border-sage-700 transition-colors"
                >
                  {copied ? <Check size={13} className="text-limeaccent" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied Full Text!' : 'Copy ATS Text'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sage-100 dark:bg-sage-850 hover:bg-sage-200 dark:hover:bg-sage-800 text-charcoal dark:text-sage-100 font-bold text-[11px] border border-sage-300 dark:border-sage-700 transition-colors"
                >
                  <Printer size={13} />
                  <span>Print</span>
                </button>
              </div>

              {/* Exact Resume Layout */}
              <div className="text-center mb-5">
                <h1 className="text-2xl font-heading font-extrabold text-charcoal dark:text-white tracking-wide">
                  NAVA DHARSHINI M
                </h1>
                <p className="text-xs font-semibold text-charcoal dark:text-sage-200 mt-1">
                  8148291212 &nbsp;|&nbsp; <a href="mailto:navadharshini2004@gmail.com" className="hover:underline text-olive-900 dark:text-limeaccent">navadharshini2004@gmail.com</a>
                </p>
                <p className="text-xs font-medium text-charcoal dark:text-sage-300">
                  Sattur, Virudhunagar, Tamil Nadu
                </p>
                <p className="text-xs font-bold text-olive-900 dark:text-limeaccent mt-0.5">
                  <a href={CANDIDATE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                  &nbsp;|&nbsp;
                  <a href={CANDIDATE.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                </p>
              </div>

              {/* PROFESSIONAL SUMMARY */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-white pb-1 border-b border-charcoal dark:border-sage-700 mb-2">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-justify font-normal text-charcoal dark:text-sage-200">
                  Passionate Front-End Developer and B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in building responsive and user-friendly web interfaces through internships and freelance projects. Skilled in HTML, CSS, JavaScript, React.js and Tailwind CSS. Experienced in AI-assisted development tools for creating, improving and debugging front-end applications. Interested in developing clean, responsive and accessible web experiences.
                </p>
              </div>

              {/* EDUCATION */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-white pb-1 border-b border-charcoal dark:border-sage-700 mb-2">
                  EDUCATION
                </h2>
                <div className="flex justify-between font-bold">
                  <span>B.Tech – Artificial Intelligence &amp; Data Science</span>
                  <span>2022 – 2026</span>
                </div>
                <div className="flex justify-between font-medium text-charcoal dark:text-sage-300">
                  <span>PSR Engineering College</span>
                  <span className="font-bold">CGPA: 7.5 / 10</span>
                </div>
              </div>

              {/* TECHNICAL SKILLS */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-white pb-1 border-b border-charcoal dark:border-sage-700 mb-2">
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-1 font-normal">
                  <p><strong className="font-bold">Front-End:</strong> HTML5, CSS3, JavaScript, React.js</p>
                  <p><strong className="font-bold">CSS Frameworks:</strong> Tailwind CSS</p>
                  <p><strong className="font-bold">Development:</strong> Responsive Web Design, Flexbox, CSS Grid, Reusable Components, Props, React Hooks, Axios</p>
                  <p><strong className="font-bold">Tools:</strong> VS Code, Git, GitHub, Vite</p>
                  <p><strong className="font-bold">AI Tools:</strong> ChatGPT, Antigravity, AI-Assisted Development</p>
                  <p><strong className="font-bold">Other Skills:</strong> Python, SQL, Microsoft Excel</p>
                </div>
              </div>

              {/* PROFESSIONAL EXPERIENCE */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-white pb-1 border-b border-charcoal dark:border-sage-700 mb-2">
                  PROFESSIONAL EXPERIENCE
                </h2>
                
                <div className="mb-3">
                  <div className="flex justify-between font-bold">
                    <span>Freelance Front-End Developer</span>
                    <span className="italic font-normal">Client Projects</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-0.5 mt-1 font-normal">
                    <li>Completed three client-based website development projects with a focus on responsive and user-friendly front-end interfaces.</li>
                    <li>Developed website interfaces using HTML, CSS, JavaScript and modern front-end tools.</li>
                    <li>Used AI-assisted tools to support UI development, debugging and improving development workflow.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between font-bold">
                    <span>UpgradeNow Technologies – Mobile App Development</span>
                    <span>July 2024</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-0.5 mt-1 font-normal">
                    <li>Completed a 15-day intensive internship on Microsoft Power Apps.</li>
                    <li>Developed a dynamic mobile application with interactive UI components.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold">
                    <span>Novanector Services Pvt. Ltd., Dehradun – Web Development</span>
                    <span>Dec 2024 – Jan 2025</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-0.5 mt-1 font-normal">
                    <li>Completed a 1-month internship on full-stack web development.</li>
                    <li>Developed and deployed an online store with a functional product cart system.</li>
                  </ul>
                </div>
              </div>

              {/* PROJECTS */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-white pb-1 border-b border-charcoal dark:border-sage-700 mb-2">
                  PROJECTS
                </h2>
                
                <div className="mb-2">
                  <p className="font-bold">Pokkisham Steel Doors – Client Website</p>
                  <a href="https://pokkisham-steel-doors.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-limeaccent underline pl-3">
                    pokkisham-steel-doors.vercel.app
                  </a>
                </div>

                <div className="mb-2">
                  <p className="font-bold">Uyirsaaru – Client Website</p>
                  <a href="https://uyirsaaru.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-limeaccent underline pl-3">
                    uyirsaaru.com
                  </a>
                </div>

                <div className="mb-2">
                  <p className="font-bold">Sarvam Care Hospital – Client Website</p>
                  <a href="https://sarvamcarehospital.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-limeaccent underline pl-3">
                    sarvamcarehospital.in
                  </a>
                </div>

                <div className="mb-2">
                  <p className="font-bold">NexPath – Career Guidance Web Application</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Developed a career guidance platform to help students explore career paths and learning resources.</li>
                    <li>Built responsive front-end interfaces using React.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Election Analytics – Voter Turnout &amp; Issue Sentiment</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Developed a web-based system to analyze voter feedback and visualize regional trends.</li>
                    <li>Worked with React, Flask and MongoDB.</li>
                  </ul>
                </div>
              </div>

              {/* CERTIFICATIONS & WORKSHOPS */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-white pb-1 border-b border-charcoal dark:border-sage-700 mb-2">
                  CERTIFICATIONS & WORKSHOPS
                </h2>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>JavaScript – PORTALAM</li>
                  <li>Chatbot using NLP – NOVITECH</li>
                  <li>Embedded Systems Workshop</li>
                </ul>
              </div>

              {/* SOFT SKILLS & LANGUAGES */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-white pb-1 border-b border-charcoal dark:border-sage-700 mb-2">
                  SOFT SKILLS & LANGUAGES
                </h2>
                <p className="mb-1">
                  <strong className="font-bold">Soft Skills:</strong> Problem Solving &nbsp;|&nbsp; Critical Thinking &nbsp;|&nbsp; Team Collaboration &nbsp;|&nbsp; Adaptability &nbsp;|&nbsp; Time Management
                </p>
                <p>
                  <strong className="font-bold">Languages:</strong> English, Tamil
                </p>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-sage-300 dark:border-sage-800 bg-sage-50 dark:bg-[#1A2019] text-xs text-charcoal dark:text-sage-300 font-bold">
          <span className="flex items-center gap-2">
            <FileText size={14} className="text-olive-900 dark:text-limeaccent" />
            Nava_Dharshini_Resume.pdf
          </span>
          <span className="hidden sm:inline text-xs font-medium text-charcoal dark:text-sage-400">
            Press <kbd className="px-1.5 py-0.5 rounded bg-sage-200 dark:bg-sage-800 text-charcoal dark:text-sage-100 text-[10px] font-bold">Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
