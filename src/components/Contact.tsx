import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { CANDIDATE } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CANDIDATE.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link for direct transmission
    const mailto = `mailto:${CANDIDATE.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-t border-sage-300 dark:border-sage-800 bg-sage-100 dark:bg-sage-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-sage-300 dark:border-sage-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-olive-900 dark:text-limeaccent">
              [ 07 / INITIATE CONVERSATION ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-charcoal dark:text-white mt-2 tracking-tight">
              Get in Touch
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-bold tracking-wider text-charcoal dark:text-sage-300 max-w-xs uppercase">
            OPEN TO FULL-TIME FRONT-END ROLES & IMPACTFUL ENGINEERING OPPORTUNITIES.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-sage-50 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 shadow-subtle">
              <h3 className="text-2xl font-heading font-extrabold text-charcoal dark:text-white mb-3">
                Let's discuss how I can contribute to your team.
              </h3>
              <p className="text-sm text-charcoal dark:text-sage-100 mb-8 leading-relaxed font-medium">
                I am actively interviewing for Front-End Developer positions. Whether you have an open role, questions regarding my client project collaborations, or want to review my code, reach out directly.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4">
                
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-sage-100 dark:bg-sage-850 border border-sage-300 dark:border-sage-800 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-olive-900 text-limeaccent dark:bg-sage-800 shrink-0">
                      <Mail className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[11px] font-bold uppercase text-olive-900 dark:text-limeaccent">
                        Primary Email
                      </span>
                      <a
                        href={`mailto:${CANDIDATE.email}`}
                        className="text-xs sm:text-sm font-bold text-charcoal dark:text-white hover:text-limeaccent truncate block"
                      >
                        {CANDIDATE.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-charcoal dark:text-sage-300 hover:text-olive-900 dark:hover:text-white hover:bg-sage-200 dark:hover:bg-sage-700 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-limeaccent stroke-[2.5]" /> : <Copy className="w-4 h-4 stroke-[2]" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-sage-100 dark:bg-sage-850 border border-sage-300 dark:border-sage-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-olive-900 text-limeaccent dark:bg-sage-800 shrink-0">
                      <Phone className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold uppercase text-olive-900 dark:text-limeaccent">
                        Phone & WhatsApp
                      </span>
                      <a
                        href={`tel:${CANDIDATE.phoneRaw}`}
                        className="text-xs sm:text-sm font-bold text-charcoal dark:text-white hover:text-limeaccent block"
                      >
                        {CANDIDATE.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg text-charcoal dark:text-sage-300 hover:text-olive-900 dark:hover:text-white hover:bg-sage-200 dark:hover:bg-sage-700 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-limeaccent stroke-[2.5]" /> : <Copy className="w-4 h-4 stroke-[2]" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-sage-100 dark:bg-sage-850 border border-sage-300 dark:border-sage-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-olive-900 text-limeaccent dark:bg-sage-800 shrink-0">
                    <MapPin className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase text-olive-900 dark:text-limeaccent">
                      Current Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-charcoal dark:text-white">
                      {CANDIDATE.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Profiles Strip */}
              <div className="mt-8 pt-6 border-t border-sage-300 dark:border-sage-800 flex items-center gap-4">
                <a
                  href={CANDIDATE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sage-200 dark:bg-sage-800 text-charcoal dark:text-white text-xs font-heading font-bold hover:bg-olive-900 hover:text-white dark:hover:bg-limeaccent dark:hover:text-olive-950 transition-all border border-sage-300 dark:border-sage-700 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={CANDIDATE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sage-200 dark:bg-sage-800 text-charcoal dark:text-white text-xs font-heading font-semibold hover:bg-olive-900 hover:text-white dark:hover:bg-limeaccent dark:hover:text-olive-950 transition-all border border-sage-300 dark:border-sage-700"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

            </div>

          </div>

          {/* Interactive Inquiry Form (Right) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-sage-50 dark:bg-sage-900 border border-sage-300 dark:border-sage-800 shadow-subtle">
              <div className="flex items-center gap-2 mb-6 text-xs font-mono font-semibold uppercase tracking-wider text-olive-900 dark:text-limeaccent">
                <MessageSquare className="w-4 h-4" />
                <span>Send Direct Inquiry</span>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-limeaccent/15 border border-limeaccent/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-limeaccent text-olive-950 flex items-center justify-center mx-auto font-bold text-xl">
                    ✓
                  </div>
                  <h4 className="font-heading font-bold text-lg text-charcoal dark:text-white">
                    Email Client Triggered
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/80 dark:text-sage-300">
                    Your default mail application has been opened with your inquiry pre-filled. You can also reach out directly via <strong>navadharshini2004@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold text-olive-900 dark:text-limeaccent underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-charcoal-muted dark:text-sage-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hiring Manager"
                        className="w-full px-4 py-2.5 rounded-xl bg-sage-100 dark:bg-sage-800 border border-sage-300 dark:border-sage-700 text-charcoal dark:text-white placeholder:text-charcoal-muted/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-limeaccent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-charcoal-muted dark:text-sage-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-sage-100 dark:bg-sage-800 border border-sage-300 dark:border-sage-700 text-charcoal dark:text-white placeholder:text-charcoal-muted/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-limeaccent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-charcoal-muted dark:text-sage-400 mb-1.5">
                      Subject / Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Front-End Developer Opportunity at..."
                      className="w-full px-4 py-2.5 rounded-xl bg-sage-100 dark:bg-sage-800 border border-sage-300 dark:border-sage-700 text-charcoal dark:text-white placeholder:text-charcoal-muted/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-limeaccent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-charcoal-muted dark:text-sage-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the role, your tech stack, or the project you'd like to collaborate on..."
                      className="w-full px-4 py-2.5 rounded-xl bg-sage-100 dark:bg-sage-800 border border-sage-300 dark:border-sage-700 text-charcoal dark:text-white placeholder:text-charcoal-muted/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-limeaccent resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-olive-900 text-white dark:bg-limeaccent dark:text-olive-950 font-heading font-semibold text-xs tracking-wider uppercase hover:bg-black dark:hover:bg-limeaccent-light transition-all shadow-subtle hover:shadow-glow-lime"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Nava Dharshini</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
