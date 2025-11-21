"use client";

import { motion } from "framer-motion";

type RotatingLogoProps = {
  variant?: "default" | "hero";
};

const RotatingLogo = ({ variant = "default" }: RotatingLogoProps) => {
  const isHero = variant === "hero";

  return (
    <div
      className={`
        flex
        ${isHero ? "flex-col items-center gap-12" : "items-center gap-4"}
      `}
    >
      {/* Infinity Card */}
      <div
        className={`
          relative flex items-center justify-center
          ${isHero ? "w-[200px] h-[200px]" : "w-[140px] h-[140px]"}
          rounded-[24px]
        `}
        style={{
          background: "linear-gradient(135deg, #2d3561 0%, #1a1d3a 100%)",
          boxShadow: `
            0 0 40px rgba(79, 70, 229, 0.5),
            0 0 80px rgba(79, 70, 229, 0.3),
            0 0 120px rgba(79, 70, 229, 0.2),
            inset 0 0 60px rgba(79, 70, 229, 0.1)
          `,
        }}
      >
        {/* Infinity Symbol */}
        <span
          className={`
            text-white font-bold
            ${isHero ? "text-[100px]" : "text-[60px]"}
          `}
          style={{
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
          }}
        >
          ∞
        </span>
      </div>
    </div>
  );
};

export default RotatingLogo;
