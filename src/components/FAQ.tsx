import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
    const faqs = [
        {
            question: "How does HelioAI work?",
            answer:
                "HelioAI integrates directly with your existing platforms to automate customer support and revenue generation. Our AI agents are trained on your specific business data to provide accurate, personalized responses 24/7.",
        },
        {
            question: "How quickly can I set up HelioAI?",
            answer:
                "Setting up HelioAI is quick and easy. Most stores are up and running within minutes. Our platform seamlessly integrates with Shopify and other eCommerce platforms, and our team provides dedicated onboarding support to ensure you get the most out of HelioAI from day one.",
        },
        {
            question: "What platforms does HelioAI integrate with?",
            answer:
                "We support major eCommerce platforms including Shopify, WooCommerce, and Magento, as well as customer support tools like Zendesk and Intercom. Check our integrations page for the full list.",
        },
        {
            question: "Can I customize the AI's responses?",
            answer:
                "Absolutely! You have full control over the AI's tone, style, and knowledge base. You can upload your own documents, set specific rules, and review conversation logs to continuously improve performance.",
        },
    ];

    return (
        <section className="py-20 md:py-24 bg-background text-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
            <div className="container-custom mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-border bg-card/60 text-sm font-medium mb-6"
                    >
                        <span className="mr-2">?</span> FAQs
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-primary to-foreground/60">
                        Questions? We've got answers
                    </h2>
                    <p className="text-muted-foreground">
                        Can't find the answer you're looking for?{" "}
                        <a href="#" className="text-primary hover:text-primary-glow transition-colors duration-300 ease-out">
                            Talk to me now 👋
                        </a>
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="border border-border rounded-2xl bg-card/60 px-6 overflow-hidden data-[state=open]:bg-card/80 transition-all duration-300 ease-out hover:border-primary/30"
                                >
                                    <AccordionTrigger className="text-lg font-medium hover:no-underline py-6 transition-colors duration-300 [&[data-state=open]>div>svg.lucide-plus]:opacity-0 [&[data-state=open]>div>svg.lucide-minus]:opacity-100">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed transition-colors duration-300">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
