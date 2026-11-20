import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Sync dark mode class on <html> and persist to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleOpenResumeModal = () => setResumeModalOpen(true);
  const handleCloseResumeModal = () => setResumeModalOpen(false);

  return (
    <div className="min-h-screen bg-sage-100 dark:bg-[#121511] text-charcoal dark:text-sage-100 transition-colors duration-300">
      {/* Skip to main content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] focus:px-4 focus:py-2 focus:bg-limeaccent focus:text-olive-900 focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResumeModal={handleOpenResumeModal}
      />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero */}
        <Hero onOpenResumeModal={handleOpenResumeModal} />

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* Education & Certifications */}
        <section id="education">
          <EducationCertifications />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={handleCloseResumeModal}
      />
    </div>
  );
}

export default App;
