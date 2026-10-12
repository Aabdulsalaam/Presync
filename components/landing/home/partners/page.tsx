"use client"

import { useEffect, useState } from "react";
import svgPaths from "../../../svg-hir4f0sap1";

const partnerLogos = [
  { name: "Partner 1", src: "/cypherdevs.png", top: "40%", left: "8%", rotate: -4 },
  { name: "Partner 2", src: "/lg.png", top: "53%", left: "29%", rotate: 3 },
  { name: "Partner 3", src: "/worldbank.png", top: "37%", left: "49%", rotate: -2 },
  { name: "Partner 4", src: "/ioai.png", top: "39%", left: "78%", rotate: 5 },
  { name: "Partner 5", src: "/cypherdevs.png", top: "75%", left: "14%", rotate: 2 },
  { name: "Partner 6", src: "/unilorin.jpg", top: "81%", left: "39%", rotate: -3 },
  { name: "Partner 7", src: "/cypherdevs.png", top: "68%", left: "59%", rotate: 4 },
  { name: "Partner 8", src: "/cypherdevs.png", top: "77%", left: "80%", rotate: -5 },
];

function Shade() {
  return (
    <div
      className="absolute h-[134px] left-0 top-[880px] w-full max-w-[1440px]"
      data-name="shade"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 134"
      >
        <g id="shade">
          <rect
            fill="url(#paint0_linear_1_1448)"
            height="76"
            id="Shade Bottom Rectangle"
            width="1440"
            y="58"
          />
          <path
            d={svgPaths.p285cf880}
            fill="var(--fill-0, #EDE8FB)"
            id="Topgap"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_1448"
            x1="758"
            x2="757.5"
            y1="26"
            y2="134"
          >
            <stop offset="0.438296" stopColor="#EDE8FB" />
            <stop offset="1" stopColor="#EDE8FB" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PartnerLogos() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    partnerLogos.forEach((_, i) => {
      const t = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 400 + i * 400);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {partnerLogos.map((logo, i) => {
        const isVisible = i < visibleCount;
        return (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            className={`absolute h-16 w-32 object-contain transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100"
                : "opacity-0"
            }`}
            style={{
              top: logo.top,
              left: logo.left,
              transform: isVisible
                ? `rotate(${logo.rotate}deg) translateY(0px)`
                : `rotate(${logo.rotate}deg) translateY(16px)`,
            }}
          />
        );
      })}
    </>
  );
}

export default function Partners() {
  return (
    <div
      className="bg-[#dbe3ff] h-[644px] relative shrink-0 w-full max-w-[1440px] overflow-hidden"
      data-name="our partners"
    >
      <div
        className="absolute h-[644px] left-0 top-0 w-full"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 644.5"
        >
          <path
            d={svgPaths.p1feba5e8}
            id="Vector"
            opacity="0.42"
            stroke="var(--stroke-0, #AEB0B5)"
          />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Lato:Bold',sans-serif] leading-[38.4px] left-[calc(50%-143px)] not-italic text-[#1e2d66] text-[54px] top-[117px] whitespace-nowrap">
        Our partners
      </p>
      <p className="[word-break:break-word] absolute font-['Lato:Medium',sans-serif] leading-[19.2px] left-[calc(50%-156px)] not-italic text-[#1e2d66] text-[16px] top-[197px] whitespace-nowrap">
        Trusted by leading organizations worldwide
      </p>
      <PartnerLogos />
      <Shade />
    </div>
  );
}