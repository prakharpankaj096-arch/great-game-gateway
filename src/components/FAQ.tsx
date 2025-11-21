import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium mb-6">
                        <span className="mr-2">?</span> FAQs
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Questions? We've got answers
                    </h2>
                    <p className="text-white/60">
                        Can't find the answer you're looking for?{" "}
                        <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                            Talk to me now 👋
                        </a>
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-white/10 rounded-2xl bg-white/5 px-6 overflow-hidden data-[state=open]:bg-white/[0.07] transition-colors"
                            >
                                <AccordionTrigger className="text-lg font-medium hover:no-underline py-6 [&[data-state=open]>div>svg.lucide-plus]:opacity-0 [&[data-state=open]>div>svg.lucide-minus]:opacity-100">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/60 pb-6 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
