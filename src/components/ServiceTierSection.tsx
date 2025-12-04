import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Tier {
    name: string;
    features: string[];
    highlighted?: boolean;
}

interface ServiceTierSectionProps {
    title: string;
    description: string;
    tiers: Tier[];
    gradient?: string;
    id?: string;
}

const ServiceTierSection = ({
    title,
    description,
    tiers,
    gradient = "from-white to-white",
    id
}: ServiceTierSectionProps) => {
    return (
        <section className="py-24 relative overflow-hidden" id={id}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
            <div className="container-custom mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 120, damping: 20 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`
                relative p-8 rounded-3xl border backdrop-blur-sm overflow-hidden
                ${tier.highlighted
                                    ? "bg-card/60 border-primary/40 shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                                    : "bg-card/40 border-white/10 hover:border-primary/20"}
                transition-all duration-300 ease-out group
              `}
                        >
                            {/* Subtle gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                            
                            {tier.highlighted && (
                                <>
                                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                                </>
                            )}

                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.1 }}
                                className="text-2xl font-bold mb-6 tracking-tight"
                            >
                                {tier.name}
                            </motion.h3>

                            <ul className="space-y-4 relative z-10">
                                {tier.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2 + i * 0.05, duration: 0.4 }}
                                        className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                                    >
                                        <Check className={`w-5 h-5 mt-0.5 shrink-0 ${tier.highlighted ? "text-primary" : "text-muted-foreground/50 group-hover:text-primary/60"} transition-colors`} />
                                        <span className="text-sm md:text-base">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceTierSection;
