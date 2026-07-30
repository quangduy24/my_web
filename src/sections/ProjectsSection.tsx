import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';

interface ProjectData {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const PROJECTS: ProjectData[] = [
  {
    id: "01",
    category: "SuiOverflow 2026 Core Track -- Web Agentic",
    title: "dieps-masterhub (AI Agent Platform)",
    description: "Engineered an end-to-end decentralized autonomous agentic software platform. Developed core LLM algorithmic decision-making infrastructure, on-chain Risk Guardian mechanisms, and Programmable Transaction Blocks (PTB). Acted as on-ground Technical Mentor providing guidance to developers.",
    tags: ["LLMs", "AI Agents", "Sui PTB", "TypeScript", "Risk Guardian"],
    link: "https://github.com/Tinacooking/dieps-masterhub",
    col1Image1: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    col1Image2: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    col2Image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    category: "Quantum Machine Learning (Peer-Reviewed Paper)",
    title: "Quantum-LSTM Sentiment AI (GTSD 2026)",
    description: "Published and presented at the 8th International Conference on Green Technology and Sustainable Development (GTSD 2026, Paper ID: 380). Engineered an innovative recurrent neural network variant utilizing Quantum Long Short-Term Memory (QLSTM) structures to elevate semantic text evaluation.",
    tags: ["QML", "PennyLane", "Qiskit", "Python", "Google Colab"],
    link: "https://github.com/quangduy24/Quantum-LSTM",
    col1Image1: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    col1Image2: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    col2Image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    category: "Advanced Multimodal Deep Learning",
    title: "Bi-Bimodal Modality Fusion Engine",
    description: "Master's Research: Built a comprehensive modality fusion engine processing text-visual and text-acoustic channels through three isolated parallel deep learning streams to leverage textual strengths while filling perceptual gaps with secondary video/audio signals.",
    tags: ["Python", "BERT", "BiGRU", "GCT Separator", "Multimodal AI"],
    link: "https://github.com/quangduy24",
    col1Image1: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    col1Image2: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    col2Image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "04",
    category: "Quantitative Algorithmic Protocol",
    title: "DEX Arbitrage Routing Algorithm",
    description: "Developed an advanced mathematical routing algorithm on Uniswap V2 that surpasses traditional detection models by discovering highly profitable loop and non-loop execution paths across historical decentralized exchange network data.",
    tags: ["Graph Theory", "Bellman-Ford", "Bisection Method", "Data Analysis"],
    link: "https://github.com/quangduy24",
    col1Image1: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    col1Image2: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    col2Image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards, progress }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index * (1 / totalCards), 1], [1, targetScale]);

  return (
    <div
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
      className="sticky w-full max-w-6xl mx-auto mb-16 last:mb-0"
    >
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 flex flex-col gap-8 sm:gap-10 shadow-[0_10px_50px_rgba(0,0,0,0.8)]"
      >
        {/* Top row: Number, Category, Name, and Live Project ghost button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <span className="font-black text-4xl sm:text-6xl text-[#D7E2EA] opacity-90 select-none">
              {project.id}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#0070F3] font-semibold">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase">
                {project.title}
              </h3>
            </div>
          </div>

          <LiveProjectButton
            label="Live Project"
            href={project.link}
            icon="github"
            className="self-start md:self-center shrink-0"
          />
        </div>

        {/* Project description and tags */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[#D7E2EA]">
          <p className="font-light leading-relaxed max-w-2xl text-sm sm:text-base opacity-80">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 shrink-0">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 rounded-full text-xs text-[#D7E2EA] font-medium tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom row: Two-column image grid (Left 40%, Right 60%) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 pt-2">
          {/* Left column - 40% (5 cols in 12 grid) */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <div
              style={{ height: 'clamp(140px, 18vw, 240px)' }}
              className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-neutral-900 border border-neutral-800"
            >
              <img
                src={project.col1Image1}
                alt={`${project.title} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              style={{ height: 'clamp(180px, 24vw, 360px)' }}
              className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-neutral-900 border border-neutral-800"
            >
              <img
                src={project.col1Image2}
                alt={`${project.title} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right column - 60% (7 cols in 12 grid) */}
          <div className="md:col-span-7 h-full min-h-[340px]">
            <div className="w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-neutral-900 border border-neutral-800">
              <img
                src={project.col2Image}
                alt={`${project.title} showcase main`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-[340px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
    >
      <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
        <h2
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          className="hero-heading font-black uppercase tracking-tight leading-none text-center"
        >
          Project
        </h2>
      </FadeIn>

      <div className="relative pb-24">
        {PROJECTS.map((proj, idx) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            index={idx}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};
