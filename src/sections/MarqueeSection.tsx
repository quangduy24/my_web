import React, { useEffect, useRef, useState } from 'react';

const GIF_URLS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const ROW1_IMAGES = [
  ...GIF_URLS.slice(0, 11),
  ...GIF_URLS.slice(0, 11),
  ...GIF_URLS.slice(0, 11),
];

const ROW2_IMAGES = [
  ...GIF_URLS.slice(11),
  ...GIF_URLS.slice(11),
  ...GIF_URLS.slice(11),
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const calcOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calcOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-x-hidden flex flex-col gap-3"
    >
      {/* Row 1 - Moves RIGHT on scroll */}
      <div
        style={{
          transform: `translate3d(${offset - 400}px, 0, 0)`,
          willChange: 'transform',
        }}
        className="flex gap-3 w-max transition-transform duration-75 ease-linear"
      >
        {ROW1_IMAGES.map((url, i) => (
          <div key={`row1-${i}`} className="w-[280px] h-[180px] sm:w-[350px] sm:h-[220px] md:w-[420px] md:h-[270px] rounded-2xl overflow-hidden shrink-0 bg-neutral-900 border border-neutral-800">
            <img
              src={url}
              alt="Portfolio visual showcase"
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Row 2 - Moves LEFT on scroll */}
      <div
        style={{
          transform: `translate3d(${-offset - 200}px, 0, 0)`,
          willChange: 'transform',
        }}
        className="flex gap-3 w-max transition-transform duration-75 ease-linear"
      >
        {ROW2_IMAGES.map((url, i) => (
          <div key={`row2-${i}`} className="w-[280px] h-[180px] sm:w-[350px] sm:h-[220px] md:w-[420px] md:h-[270px] rounded-2xl overflow-hidden shrink-0 bg-neutral-900 border border-neutral-800">
            <img
              src={url}
              alt="Portfolio visual showcase"
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
