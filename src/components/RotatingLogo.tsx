"use client";

import { motion } from "framer-motion";

type RotatingLogoProps = {
  /** Size variant for the logo */
  variant?: "default" | "hero";
};

const RotatingLogo = ({ variant = "default" }: RotatingLogoProps) => {
  const isHero = variant === "hero";

  return (
    <div
      className={`flex ${
        isHero ? "flex-col items-center gap-12" : "items-center gap-4"
      }`}
    >
      {/* Infinity Logo Container */}
      <motion.div
        className={`
          relative flex items-center justify-center
          rounded-[24px]
          ${isHero ? "w-[200px] h-[200px]" : "w-24 h-24 md:w-28 md:h-28"}
        `}
        style={{
          background: "linear-gradient(135deg, #2d3561 0%, #1a1d3a 100%)",
          boxShadow: isHero
            ? `
            0 0 40px rgba(79, 70, 229, 0.5),
            0 0 80px rgba(79, 70, 229, 0.3),
            0 0 120px rgba(79, 70, 229, 0.2),
            inset 0 0 60px rgba(79, 70, 229, 0.1)
          `
            : `
            0 0 30px rgba(79, 70, 229, 0.4),
            0 0 60px rgba(79, 70, 229, 0.2)
          `,
        }}
        animate={
          isHero
            ? {
                y: [0, -12, 0], // floating animation
              }
            : undefined
        }
        transition={
          isHero
            ? {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }
            : undefined
        }
      >
        {/* Glow Overlay */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-[24px]
            bg-[radial-gradient(circle_at_30%_0%,rgba(96,165,250,0.4),transparent),
               radial-gradient(circle_at_70%_100%,rgba(192,132,252,0.4),transparent)]
            opacity-70
          "
        />

        {/* Infinity Symbol (only rotates) */}
        <motion.span
          className={`
            infinity-symbol relative text-white font-bold
            drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]
            ${
              isHero
                ? "text-[100px] md:text-[120px]"
                : "text-4xl md:text-5xl"
            }
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
    </div>
  );
};

export default RotatingLogo;
