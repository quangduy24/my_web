import React from 'react';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';

export const AboutSection: React.FC = () => {
  const aboutText = "Combines a solid 5+ year foundation in academic AI research (Quantum Machine Learning, Multimodal Deep Learning, NLP, and RAG/Fine-tuning) with native technology ecosystem growth experience at Holdstation and MEXC Exchange. Driven by translating complex algorithmic pipelines into impactful developer utilities and intelligent agentic systems!";

  return (
    <section id="about" className="relative min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-28 sm:py-36 flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative 3D images positioned absolutely in corners */}
      {/* Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_10px_25px_rgba(255,255,255,0.08)]"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Sphere Object"
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_10px_25px_rgba(255,255,255,0.08)]"
        />
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_10px_25px_rgba(255,255,255,0.08)]"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group Icon"
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_10px_25px_rgba(255,255,255,0.08)]"
        />
      </FadeIn>

      {/* Center Content Area */}
      <div className="flex flex-col items-center justify-center z-10 max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            >
              About me
            </h2>
          </FadeIn>

          <div className="w-full flex justify-center">
            <AnimatedText
              text={aboutText}
              className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-center"
            />
          </div>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.3} y={20}>
            <ContactButton label="Contact Me" href="#contact" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
