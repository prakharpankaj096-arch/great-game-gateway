import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const GlowCard = ({ children, className = "", delay = 0 }: GlowCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1], type: "spring", stiffness: 100 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1], type: "spring", stiffness: 300, damping: 20 }
      }}
      className={`group relative rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 p-6 transition-all duration-300 ease-out hover:border-primary/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;
