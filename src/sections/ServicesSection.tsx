import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  description: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "01",
    period: "11/2025 -- 03/2026",
    company: "Holdstation",
    role: "Strategic Trading (Full-time)",
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Engineered real-time On-chain Trading Bot Signals and deployed visualization frameworks (Heatmap/Footprint systems) to streamline asset tracking within the decentralized ecosystem.",
      "Produced high-engagement educational video series and technical tutorials, onboarding users onto Web3 wallet operations, account abstraction, and DEX trading workflows.",
      "Formulated data-driven initiatives with Marketing to design growth campaigns, boosting user retention and platform transaction revenue."
    ]
  },
  {
    id: "02",
    period: "06/2025 -- 11/2025",
    company: "Maker Space -- HCMC UTE",
    role: "AI Researcher (Intern)",
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Developed an intelligent Smart Building Management System hosted at the Maker Space Research and Technology Transfer Center.",
      "Built and deployed custom Retrieval-Augmented Generation (RAG) structures and performed language model Fine-tuning to seamlessly index and query complex internal technical documentation.",
      "Created clear step-by-step developer guides and documentation to enable rapid deployment of decentralized AI utilities."
    ]
  },
  {
    id: "03",
    period: "07/2023 -- 02/2024",
    company: "MEXC Exchange",
    role: "Business Development Intern",
    location: "Remote / Ho Chi Minh City",
    description: [
      "Achieved a peak monthly trading volume of $40M by successfully scaling network growth and coordinating strategic partnerships with key community KOLs.",
      "Drove regional acquisition and channel onboarding for the Affiliate model, managing engagement with high-volume Web3 communities and developer-focused trading networks.",
      "Analyzed precise user personas and maintained continuous developer/trader communication channels to relay technical integration feedback directly to internal API and product teams."
    ]
  },
  {
    id: "04",
    period: "06/2018 -- 12/2023",
    company: "IS Lab -- HCMC UTE",
    role: "AI & Embedded System Technician",
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Managed core technical laboratory environments and spearheaded academic research in computer vision, deep learning, and advanced robotic navigation algorithms under Prof. PhD. Le My Ha.",
      "Served as an internal Technical Evangelist: Drafted educational system blueprints, modular code repositories, and user manuals to onboard junior engineering researchers."
    ]
  },
  {
    id: "05",
    period: "12/2020 -- 12/2021",
    company: "Decentralized GameFi & NFT",
    role: "Community Manager",
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Spearheaded ecosystem growth and community engagement by organizing interactive GameFi tournaments and leaderboard racing events on the Binance Chain.",
      "Hosted engaging AMAs and live streams to educate and onboard new non-technical users onto dApps and NFT functionalities.",
      "Established a critical developer feedback loop by reporting smart contract and NFT bugs directly to the Dev Lead."
    ]
  },
  {
    id: "06",
    period: "12/2019 -- 09/2020",
    company: "Digital Race -- FPT",
    role: "Autonomous Vehicle Software (Apprenticeship)",
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Developed real-time computer vision and digital lane-detection algorithms for autonomous model vehicles participating in the national FPT Digital Race competition."
    ]
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30} className="w-full mb-16 sm:mb-20 md:mb-28 text-center">
          <h2
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
            className="font-black uppercase tracking-tight leading-none text-[#0C0C0C]"
          >
            Experience
          </h2>
          <p className="mt-4 text-sm sm:text-lg uppercase tracking-widest font-semibold text-[#2563EB]">
            Professional &amp; Academic Research Journey
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto flex flex-col border-t border-[#0C0C0C]/15">
          {EXPERIENCES.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08} y={25}>
              <div className="flex flex-col md:flex-row md:items-start justify-between py-10 sm:py-12 border-b border-[#0C0C0C]/15 gap-6 md:gap-12 hover:bg-neutral-50/90 transition-colors px-4 rounded-2xl">
                {/* Left Column: Number and Period */}
                <div className="flex flex-col gap-2 shrink-0 md:w-64">
                  <span
                    style={{ fontSize: 'clamp(3rem, 8vw, 110px)' }}
                    className="font-black leading-none text-[#0C0C0C] select-none tracking-tighter"
                  >
                    {item.id}
                  </span>
                  <div className="inline-block mt-2 px-3 py-1 bg-[#0F172A] text-white rounded-full text-xs font-semibold uppercase tracking-wider w-max">
                    {item.period}
                  </div>
                  <span className="text-xs font-medium text-neutral-500 tracking-wide mt-1">
                    {item.location}
                  </span>
                </div>
                
                {/* Right Column: Company, Role & Bullet Points */}
                <div className="flex flex-col gap-4 flex-1 text-left pt-2">
                  <div>
                    <h3
                      style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2.3rem)' }}
                      className="font-bold uppercase text-[#0C0C0C] tracking-tight leading-tight"
                    >
                      {item.company}
                    </h3>
                    <h4 className="text-base sm:text-lg font-semibold text-[#2563EB] tracking-wide mt-1">
                      {item.role}
                    </h4>
                  </div>

                  <ul className="flex flex-col gap-2.5 mt-2">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
                        <span
                          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
                          className="font-normal leading-relaxed text-[#0C0C0C]/80"
                        >
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
