import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-sage-100/90 dark:bg-sage-950/90 backdrop-blur-md py-3 border-b border-sage-200 dark:border-sage-800/80 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Mark */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-limeaccent rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-olive-900 dark:bg-sage-900 border border-sage-300 dark:border-sage-700 flex items-center justify-center text-limeaccent font-heading font-bold text-lg tracking-wider transition-transform group-hover:scale-105 shadow-subtle">
              ND
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base tracking-tight text-charcoal dark:text-white group-hover:text-olive-900 dark:group-hover:text-limeaccent transition-colors">
                {CANDIDATE.name}
              </span>
              <span className="text-xs text-charcoal dark:text-sage-300 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-limeaccent inline-block"></span>
                Front-End Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-sage-200/80 dark:bg-sage-900/80 p-1.5 rounded-full border border-sage-300 dark:border-sage-700 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-charcoal dark:text-sage-100 hover:text-white hover:bg-olive-900 dark:hover:bg-limeaccent dark:hover:text-olive-950 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls: Theme Switcher & Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2.5 rounded-full bg-sage-200 dark:bg-sage-800 text-charcoal dark:text-sage-100 hover:text-limeaccent dark:hover:text-limeaccent border border-sage-300 dark:border-sage-700 transition-colors shadow-sm"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950 font-heading font-bold text-xs tracking-wide hover:bg-black dark:hover:bg-limeaccent-light transition-all shadow-subtle hover:shadow-glow-lime transform hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-sage-200 dark:bg-sage-800 text-charcoal dark:text-sage-200 border border-sage-300 dark:border-sage-700"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-sage-200 dark:bg-sage-800 text-charcoal dark:text-sage-200 border border-sage-300 dark:border-sage-700"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sage-100/98 dark:bg-sage-950/98 border-b border-sage-300 dark:border-sage-800 px-4 pt-3 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-charcoal dark:text-sage-200 hover:bg-sage-200 dark:hover:bg-sage-850 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-3 border-t border-sage-300 dark:border-sage-800 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950 font-heading font-semibold text-sm"
              >
                <Download className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
