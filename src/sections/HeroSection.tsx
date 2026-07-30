import React from 'react';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';
import { FadeIn } from '../components/FadeIn';
import tonyAvatar from '../assets/tony_avatar.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
          <a href="#services" className="hover:opacity-70 transition-opacity duration-200">Experience</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
        </nav>
      </FadeIn>

      {/* Massive Hero Heading */}
      <FadeIn delay={0.15} y={40} className="w-full text-center mt-8 sm:mt-6 md:-mt-4 z-0 px-2">
        <h1 className="hero-heading font-black uppercase tracking-[-0.04em] leading-none whitespace-nowrap w-full text-[10.8vw] sm:text-[11.4vw] md:text-[11.8vw] lg:text-[12.2vw] select-none">
          Hi, i&apos;m tony
        </h1>
      </FadeIn>

      {/* Hero Portrait with Magnet effect */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet padding={150} strength={3} className="flex justify-center items-center">
          <div className="relative w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] aspect-square flex items-center justify-center">
            <img
              src={tonyAvatar}
              alt="Tony Truong AI & Quantum Researcher Portrait"
              className="w-full h-full object-cover rounded-full border-4 border-[#2563EB]/30 shadow-[0_0_80px_rgba(37,99,235,0.35)] transition-all duration-500 hover:shadow-[0_0_100px_rgba(37,99,235,0.5)] hover:scale-[1.02]"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 pointer-events-none">
        <FadeIn delay={0.35} y={20} className="pointer-events-auto">
          <p
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          >
            an ai & quantum researcher driven by crafting impactful algorithms and intelligent systems
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <ContactButton label="Contact Me" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
