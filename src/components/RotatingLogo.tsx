"use client";

import { motion } from "framer-motion";

type RotatingLogoProps = {
  /** Size variant for the logo */
  variant?: "default" | "hero";
};

const RotatingLogo = ({ variant = "default" }: RotatingLogoProps) => {
  const isHero = variant === "hero";
  
  return (
    <div className={`flex ${isHero ? 'flex-col items-center gap-12' : 'items-center gap-4'}`}>
      {/* Icon tile */}
      <motion.div
        className={`
          relative flex items-center justify-center
          ${isHero ? 'w-[180px] h-[180px] md:w-[200px] md:h-[200px]' : 'w-24 h-24 md:w-28 md:h-28'}
          rounded-[24px]
          bg-[#1a1d3a]
        `}
        style={{
          boxShadow: isHero 
            ? '0 0 40px rgba(99, 102, 241, 0.6), 0 0 80px rgba(99, 102, 241, 0.3), 0 0 120px rgba(99, 102, 241, 0.2)'
            : '0 0 40px rgba(88, 101, 242, 0.6)'
        }}
        animate={isHero ? {
          y: [0, -15, 0],
        } : undefined}
        transition={isHero ? {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        } : undefined}
      >
        {/* Glow / gradient overlay */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-[24px]
            bg-[radial-gradient(circle_at_30%_0%,rgba(96,165,250,0.4),transparent),radial-gradient(circle_at_70%_100%,rgba(192,132,252,0.4),transparent)]
            opacity-70
          "
        />

        {/* Infinity symbol */}
        <motion.span
          className={`
            relative font-semibold text-white
            ${isHero ? 'text-[100px] md:text-[120px]' : 'text-4xl md:text-5xl'}
          `}
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          ∞
        </motion.span>
      </motion.div>

      {/* Wordmark */}
      <span className={`font-semibold gradient-text tracking-tight ${isHero ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>
        g8g
      </span>
    </div>
  );
};

export default RotatingLogo;
