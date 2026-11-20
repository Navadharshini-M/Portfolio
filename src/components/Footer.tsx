import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: CANDIDATE.github, icon: Github },
    { label: 'LinkedIn', href: CANDIDATE.linkedin, icon: Linkedin },
    { label: 'Email', href: `mailto:${CANDIDATE.email}`, icon: Mail },
  ];

  return (
    <footer className="relative bg-olive-900 dark:bg-[#0D100C] border-t border-olive-800/60 dark:border-sage-900">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                ND
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-limeaccent"></span>
            </div>
            <p className="text-sage-300 text-sm font-medium leading-relaxed max-w-xs">
              Front-End Developer based in Tamil Nadu, India. Building responsive, 
              user-focused web interfaces with modern tools and AI-assisted workflows.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-limeaccent font-bold text-xs uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sage-200 hover:text-limeaccent font-semibold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-limeaccent font-bold text-xs uppercase tracking-widest mb-5">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sage-200 hover:text-limeaccent font-semibold text-sm transition-colors duration-200 group"
                >
                  <Icon size={16} className="shrink-0 text-limeaccent opacity-90 group-hover:opacity-100" />
                  {label}
                </a>
              ))}
              <div className="pt-2 text-sage-300 text-xs font-bold">
                {CANDIDATE.email}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-olive-800/50 dark:border-sage-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sage-400 text-xs font-bold text-center sm:text-left">
            © 2026 Nava Dharshini M · Front-End Developer · Built with Plus Jakarta Sans
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sage-400 text-xs font-bold hidden sm:inline">
              React · Vite · TypeScript · Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg border border-olive-700 dark:border-sage-800 text-sage-400 hover:text-limeaccent hover:border-limeaccent/40 transition-colors duration-200"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
