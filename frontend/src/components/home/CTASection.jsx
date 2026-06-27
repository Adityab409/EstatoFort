import { motion } from "framer-motion";
import Button from "../common/Button";
import PremiumCard from "../common/PremiumCard";

// ==========================================
// MAIN CTA SECTION COMPONENT
// ==========================================
function CTASection() {
    const fadeInUp = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
    });

    return (
        <section className="relative py-24 sm:py-32 px-6 bg-[#050505] overflow-hidden">

            {/* Minimal Grid Line Background matching Hero */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Premium Layout Wrapper Card */}
                <PremiumCard className="p-10 md:p-20 text-center relative overflow-hidden bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">

                    {/* Integrated Micro Ambient Glow Elements */}
                    <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-screen">
                        <div className="absolute w-80 h-80 bg-[radial-gradient(circle,rgba(212,175,55,0.15),transparent_70%)] -top-20 -left-20 animate-pulse duration-[6000ms]"></div>
                        <div className="absolute w-80 h-80 bg-[radial-gradient(circle,rgba(212,175,55,0.15),transparent_70%)] -bottom-20 -right-20 animate-pulse duration-[6000ms]"></div>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-10 flex flex-col items-center">

                        {/* Title */}
                        <motion.h2
                            {...fadeInUp(0)}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]"
                        >
                            Ready To Find Your{" "}
                            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#D4AF37] to-amber-500">
                                Dream Property?
                            </span>
                        </motion.h2>

                        {/* Premium Soft Copy */}
                        <motion.p
                            {...fadeInUp(0.15)}
                            className="text-stone-400 max-w-2xl mx-auto mt-6 text-base sm:text-lg font-light leading-relaxed"
                        >
                            Explore thoroughly verified luxury listings, connect directly with elite trusted experts,
                            and unlock premier high-yield investment structures across India's prime locations.
                        </motion.p>

                        {/* Action Dock */}
                        <motion.div
                            {...fadeInUp(0.3)}
                            className="flex flex-col sm:flex-row gap-4 justify-center mt-10 w-full sm:w-auto"
                        >
                            <Button
                                variant="accent"
                                className="w-full sm:w-auto px-8 py-3.5 shadow-xl shadow-amber-500/5"
                            >
                                Browse Properties
                            </Button>

                            <Button
                                variant="secondary"
                                className="w-full sm:w-auto px-8 py-3.5 text-stone-200 hover:text-white border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10"
                            >
                                Schedule Consultation
                            </Button>
                        </motion.div>

                    </div>
                </PremiumCard>
            </div>
        </section>
    );
}

export default CTASection;