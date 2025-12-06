import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
  delay?: number;
}

const FlipCard = ({ frontContent, backContent, className = "min-h-[320px]", delay = 0 }: FlipCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative h-full cursor-pointer group ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      role="button"
      tabIndex={0}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,95,21,0.15)] border border-white/5 group-hover:border-primary/50 bg-black">

        {/* Front Content (Visible by default) */}
        <motion.div
          className="relative w-full h-full p-8 rounded-3xl bg-black border border-white/5 flex flex-col justify-center"
          animate={{
            opacity: isHovered ? 0 : 1,
            y: isHovered ? -20 : 0,
            scale: isHovered ? 0.95 : 1
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Front Background Effects */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-60" />
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />

          <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
            {frontContent}
          </div>
        </motion.div>

        {/* Back Content (Reveals on Hover) */}
        <motion.div
          className="absolute inset-0 w-full h-full p-8 rounded-3xl bg-black/90 backdrop-blur-xl border border-white/10 flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
            scale: isHovered ? 1 : 0.95,
            pointerEvents: isHovered ? "auto" : "none"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Back Background Effects */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-40" />
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,95,21,0.1),transparent_60%)]" />

          <div className="relative z-10 text-white">
            {backContent}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default FlipCard;
