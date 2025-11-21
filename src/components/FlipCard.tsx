import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
  delay?: number;
}

const FlipCard = ({ frontContent, backContent, className = "", delay = 0 }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative h-full min-h-[280px] pb-8 ${className}`}
      style={{ perspective: "1000px" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />
          <div className="relative z-10 h-full flex flex-col justify-center">
            {frontContent}
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-card/80 to-primary-glow/20 backdrop-blur-sm border border-primary/40 p-6 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative z-10 h-full flex flex-col justify-center">
            {backContent}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard;
