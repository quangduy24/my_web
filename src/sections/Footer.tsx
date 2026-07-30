import React from 'react';
import { Mail, MapPin, Award } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 py-20 sm:py-28 border-t border-[#D7E2EA]/15 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {/* Education Highlight Section */}
        <FadeIn delay={0} y={30} className="flex flex-col gap-10">
          <div className="flex items-center gap-3 border-b border-[#D7E2EA]/20 pb-4">
            <Award className="w-8 h-8 text-[#0070F3]" />
            <h3 className="text-2xl sm:text-3xl uppercase font-bold tracking-wider text-white">
              Academic Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="p-8 rounded-[30px] bg-neutral-900/60 border border-neutral-800 flex flex-col gap-4 hover:border-[#D7E2EA]/30 transition-colors">
              <div className="flex justify-between items-center text-sm text-[#0070F3] font-semibold uppercase tracking-widest">
                <span>2024 -- 2026</span>
                <span>Master&apos;s Degree</span>
              </div>
              <h4 className="text-2xl font-bold text-white uppercase tracking-tight">
                Master of Computer Science
              </h4>
              <p className="text-base font-medium text-[#D7E2EA]">
                University of Technology and Education, HCM
              </p>
              <p className="text-sm font-light leading-relaxed text-[#D7E2EA]/70 mt-2 border-t border-neutral-800 pt-3">
                <strong className="text-white font-medium">Core Focus:</strong> Quantum Machine Learning (QML), Multimodal Deep Learning, NLP, Retrieval-Augmented Generation (RAG), and AI Agentic Workflows.
              </p>
            </div>

            <div className="p-8 rounded-[30px] bg-neutral-900/60 border border-neutral-800 flex flex-col gap-4 hover:border-[#D7E2EA]/30 transition-colors">
              <div className="flex justify-between items-center text-sm text-[#0070F3] font-semibold uppercase tracking-widest">
                <span>2018 -- 2023</span>
                <span>Bachelor&apos;s Degree</span>
              </div>
              <h4 className="text-2xl font-bold text-white uppercase tracking-tight">
                Bachelor of Control and Automation Engineering
              </h4>
              <p className="text-base font-medium text-[#D7E2EA]">
                University of Technology and Education, HCM
              </p>
              <p className="text-sm font-light leading-relaxed text-[#D7E2EA]/70 mt-2 border-t border-neutral-800 pt-3">
                <strong className="text-white font-medium">Core Focus:</strong> Computer Vision, Robotic Navigation Algorithms, Embedded Systems, & PLC Automatic Control.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Contact info & Links */}
        <FadeIn delay={0.2} y={30} className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-[#D7E2EA]/15">
          <div className="flex flex-col gap-6">
            <h3 className="hero-heading font-black text-4xl sm:text-6xl uppercase tracking-tight">
              Let&apos;s Connect
            </h3>
            <p className="font-light text-base sm:text-lg leading-relaxed max-w-md text-[#D7E2EA]/80">
              Interested in Kimi AI advocacy, Quantum Machine Learning breakthroughs, or collaborative AI agentic research? Reach out anytime.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 md:items-end">
            <a
              href="mailto:duytruongnguyenquang@gmail.com"
              className="flex items-center gap-4 text-lg sm:text-xl font-medium hover:text-[#0070F3] transition-colors bg-neutral-900/80 px-6 py-4 rounded-2xl border border-neutral-800 w-full md:w-auto"
            >
              <Mail className="w-6 h-6 text-[#0070F3] shrink-0" />
              <span className="truncate">duytruongnguyenquang@gmail.com</span>
            </a>

            <div className="flex items-center gap-4 text-lg sm:text-xl font-medium bg-neutral-900/80 px-6 py-4 rounded-2xl border border-neutral-800 w-full md:w-auto">
              <MapPin className="w-6 h-6 text-[#0070F3] shrink-0" />
              <span>Ho Chi Minh City, Vietnam</span>
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/duytruong24299/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-[#0070F3] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/quangduy24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-[#0070F3] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Copyright Bar */}
        <div className="text-center pt-8 border-t border-[#D7E2EA]/10 text-sm font-light tracking-wider opacity-60">
          <p>© 2026 Tony Truong. Built with React, Tailwind CSS & Framer Motion. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
