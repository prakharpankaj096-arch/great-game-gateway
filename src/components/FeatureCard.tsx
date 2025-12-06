import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    delay?: number;
}

const FeatureCard = ({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, type: "spring", stiffness: 120, damping: 20 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-6 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/20 transition-all duration-300 ease-out overflow-hidden"
        >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent-blue/3 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
                {Icon && (
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mb-4 inline-flex p-3 rounded-xl bg-card/60 group-hover:bg-primary/10 border border-border group-hover:border-primary/20 transition-all duration-300"
                    >
                        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                )}

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default FeatureCard;
