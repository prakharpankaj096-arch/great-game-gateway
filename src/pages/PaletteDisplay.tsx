
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ColorSwatch = ({ color, name, hex, usage }: { color: string; name: string; hex: string; usage: string }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col gap-3 group"
        >
            <div
                className={`h-32 w-full rounded-2xl shadow-sm border border-border relative cursor-pointer overflow-hidden ${color}`}
                onClick={copyToClipboard}
            >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 backdrop-blur-[2px]">
                    {copied ? <Check className="text-white w-6 h-6" /> : <Copy className="text-white w-6 h-6" />}
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">{name}</h3>
                    <code className="text-xs bg-muted px-2 py-1 rounded">{hex}</code>
                </div>
                <p className="text-sm text-muted-foreground">{usage}</p>
            </div>
        </motion.div>
    );
};

const PaletteDisplay = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-8 bg-background">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl font-bold mb-6">Product Design System</h1>
                        <p className="text-xl text-muted-foreground">
                            A minimalist palette based on the <span className="text-foreground font-semibold">60-30-10</span> rule.
                        </p>
                    </motion.div>
                </div>

                {/* The 60-30-10 Rule Section */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-white border border-border shadow-sm"
                        >
                            <h2 className="text-6xl font-bold mb-4 text-border">60%</h2>
                            <h3 className="text-2xl font-bold mb-2">Primary (Background)</h3>
                            <p className="text-muted-foreground">
                                White space to create breathing room, focus, and a clean modern aesthetic. Used for backgrounds and negative space.
                            </p>
                            <div className="mt-6 h-4 w-full bg-white border border-border rounded-full"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-3xl bg-secondary text-secondary-foreground border border-border/10 shadow-lg"
                        >
                            <h2 className="text-6xl font-bold mb-4 text-white/20">30%</h2>
                            <h3 className="text-2xl font-bold mb-2">Secondary (Content)</h3>
                            <p className="text-white/70">
                                Black for typography, ui elements, and high-contrast boundaries. Ensures readability and structure.
                            </p>
                            <div className="mt-6 h-4 w-full bg-black rounded-full"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl bg-primary text-white shadow-lg shadow-orange-500/20"
                        >
                            <h2 className="text-6xl font-bold mb-4 text-white/30">10%</h2>
                            <h3 className="text-2xl font-bold mb-2">Accent (Action)</h3>
                            <p className="text-white/90">
                                Vibrant Orange to guide user attention, confirm actions, and highlight critical information.
                            </p>
                            <div className="mt-6 h-4 w-full bg-white/20 rounded-full"></div>
                        </motion.div>
                    </div>
                </section>

                {/* Color Swatches */}
                <section>
                    <h2 className="text-3xl font-bold mb-10">Color Palette</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <ColorSwatch
                            color="bg-[#ffffff] border-gray-200"
                            name="Pure White"
                            hex="#FFFFFF"
                            usage="Main Background, Cards"
                        />
                        <ColorSwatch
                            color="bg-[#f5f5f5]"
                            name="Off-White"
                            hex="#F5F5F5"
                            usage="Section Backgrounds, Inputs"
                        />
                        <ColorSwatch
                            color="bg-[#000000]"
                            name="Pure Black"
                            hex="#000000"
                            usage="Headings, Main Text, Buttons"
                        />
                        <ColorSwatch
                            color="bg-[hsl(24,95%,53%)]"
                            name="Safety Orange"
                            hex="#FF5F15"
                            usage="CTAs, Links, Highlights"
                        />
                        <ColorSwatch
                            color="bg-[hsl(24,95%,65%)]"
                            name="Orange Light"
                            hex="#FF854D"
                            usage="Hover States, Glows"
                        />
                        <ColorSwatch
                            color="bg-[hsl(24,95%,40%)]"
                            name="Orange Dark"
                            hex="#CC4C11"
                            usage="Active States"
                        />
                        <ColorSwatch
                            color="bg-gray-400"
                            name="Medium Gray"
                            hex="#9CA3AF"
                            usage="Secondary Text, Borders"
                        />
                        <ColorSwatch
                            color="bg-gray-100"
                            name="Light Gray"
                            hex="#F3F4F6"
                            usage="Dividers, Subtle Backgrounds"
                        />
                    </div>
                </section>

                {/* Interactive Mockup */}
                <section className="py-12 border-t border-border">
                    <h2 className="text-3xl font-bold mb-10">Real Usage Example</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Guide */}
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold">Clear Hierarchy</h4>
                                    <p className="text-muted-foreground">Black text on white background offers maximum readability. Orange is used sparingly for the primary action.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold">Action-Oriented</h4>
                                    <p className="text-muted-foreground">The "Get Started" button uses the accent color to immediately draw the eye.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-white border border-border text-foreground flex items-center justify-center font-bold flex-shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold">Subtle Depth</h4>
                                    <p className="text-muted-foreground">Soft gray borders and shadows separate content without adding visual noise.</p>
                                </div>
                            </div>
                        </div>

                        {/* Mockup UI */}
                        <div className="rounded-3xl border border-border bg-background p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                            <div className="flex justify-between items-center mb-12">
                                <div className="font-bold text-xl tracking-tight">Product<span className="text-primary">.</span></div>
                                <div className="flex gap-4 text-sm font-medium">
                                    <span className="opacity-60">Features</span>
                                    <span className="opacity-60">Pricing</span>
                                    <span className="text-primary">Login</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase">
                                    New Release v2.0
                                </div>
                                <h1 className="text-4xl font-bold leading-tight">
                                    Build faster with <br />
                                    <span className="text-primary">intelligent</span> tools.
                                </h1>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Stop wasting time on configuration. Focus on shipping features that your users actually love.
                                </p>
                                <div className="flex gap-4 pt-2">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                                        Get Started
                                    </Button>
                                    <Button variant="outline" size="lg" className="rounded-full px-8 border-border hover:bg-muted">
                                        Documentation
                                    </Button>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
};

export default PaletteDisplay;
