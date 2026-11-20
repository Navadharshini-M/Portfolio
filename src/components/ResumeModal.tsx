import React, { useEffect, useRef } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

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

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview"
    >
      {/* Modal panel */}
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden border border-sage-300 dark:border-sage-800 shadow-2xl bg-bg-surface-elevated dark:bg-bg-surface-elevated">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-sage-300 dark:border-sage-800 bg-bg-surface dark:bg-bg-surface">
          <div>
            <h2 className="font-heading font-extrabold text-charcoal dark:text-white text-lg">
              Resume — Nava Dharshini M
            </h2>
            <p className="text-xs text-charcoal dark:text-sage-300 mt-0.5 font-bold">
              ATS-Friendly · One-Page · PDF
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/Nava_Dharshini_Resume.pdf"
              download="Nava_Dharshini_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-limeaccent text-olive-900 font-bold text-sm hover:bg-limeaccent/90 transition-colors shadow-sm"
            >
              <Download size={15} strokeWidth={2.5} />
              Download PDF
            </a>
            <a
              href="/Nava_Dharshini_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-sage-300 dark:border-sage-700 text-charcoal dark:text-sage-200 text-sm hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg border border-sage-300 dark:border-sage-700 text-charcoal dark:text-sage-200 hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <div className="flex-1 overflow-hidden min-h-[60vh]">
          <iframe
            src="/Nava_Dharshini_Resume.pdf#toolbar=0"
            title="Nava Dharshini Resume"
            className="w-full h-full min-h-[60vh]"
            style={{ minHeight: '65vh', border: 'none' }}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-sage-300/60 dark:border-sage-800 bg-bg-surface dark:bg-bg-surface text-xs text-charcoal-muted dark:text-sage-400 font-mono">
          <span>Nava_Dharshini_Resume.pdf</span>
          <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 rounded bg-sage-200 dark:bg-sage-800 text-charcoal dark:text-sage-200 text-[10px]">Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
