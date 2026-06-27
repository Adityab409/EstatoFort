import { motion } from "framer-motion";
import { FaRegCompass, FaAward, FaHandshake, FaShieldAlt } from "react-icons/fa";

function About() {
    // Shared high-end layout animation curve
    const fadeInUp = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
    });

    const pillars = [
        {
            icon: <FaShieldAlt className="text-[#D4AF37] text-2xl" />,
            title: "Absolute Structural Transparency",
            desc: "Every asset in our luxury profile passes painstaking legal title inspections and engineering audits before discovery."
        },
        {
            icon: <FaAward className="text-[#D4AF37] text-2xl" />,
            title: "The Billionaire's Standard",
            desc: "Curating architectural marvels, ultra-high-yield pethouses, and estates engineered for multi-generational wealth preservation."
        },
        {
            icon: <FaRegCompass className="text-[#D4AF37] text-2xl" />,
            title: "Bespoke Discretionary Advisory",
            desc: "We serve families with tailor-made strategic guidance, protecting client privacy with institutional-grade protocols."
        },
    ];

    return (
        <section className="min-h-screen bg-[#050505] text-white pt-36 pb-24 relative overflow-hidden">

            {/* Background Architecture Symmetry */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_500px_at_right,rgba(212,175,55,0.04),transparent)] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_600px_at_left_bottom,rgba(212,175,55,0.03),transparent)] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full space-y-24">

                {/* 1. HERO TITLE SECTION */}
                <div className="max-w-3xl text-left">
                    <motion.div
                        {...fadeInUp(0)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-6"
                    >
                        <span className="text-[#D4AF37]">★</span> Legacy & Lineage
                    </motion.div>

                    <motion.h1
                        {...fadeInUp(0.1)}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
                    >
                        Redefining Real Estate into Fine Art and Assets of{" "}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#D4AF37] to-amber-500 mt-2">
                            Enduring Distinction.
                        </span>
                    </motion.h1>

                    <motion.p
                        {...fadeInUp(0.2)}
                        className="mt-6 text-base sm:text-lg text-stone-400 font-light leading-relaxed"
                    >
                        EstatoFort wasn't built to scale transactions—it was established to elevate them. We act as a trusted private gateway for discerning investors searching for ultra-premium properties in Pune and elite markets across India.
                    </motion.p>
                </div>

                {/* 2. CORE STRATEGY / METRICS SPLIT BOARD */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-white/5 items-center">

                    <motion.div {...fadeInUp(0)} className="lg:col-span-5 space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-100">
                            Our Operational Philosophy
                        </h2>
                        <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
                            We believe luxury is a measurement of precision, not just a label. Every villa, commercial space, or penthouse portfolio on our platform undergoes deep title checks, structural evaluation, and value safety modeling.
                        </p>
                        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex items-start gap-4">
                            <div className="p-3 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37] mt-0.5">
                                <FaHandshake size={20} />
                            </div>
                            <div>
                                <h4 className="text-stone-200 text-sm font-semibold">Fiduciary Responsibility</h4>
                                <p className="text-xs text-stone-500 mt-1 font-light">We place client long-term equity security above quick brokerage gains.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* PILLARS GRAPHIC CONTAINERS */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp(i * 0.1)}
                                className="group p-6 bg-white/[0.01] backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                            >
                                <div className="p-3 bg-white/[0.03] group-hover:bg-[#D4AF37]/10 transition-colors rounded-xl flex-shrink-0">
                                    {pillar.icon}
                                </div>
                                <div className="space-y-1 text-left">
                                    <h3 className="text-base font-semibold text-stone-200 group-hover:text-white transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* 3. FINAL STATEMENT DOCK */}
                <motion.div
                    {...fadeInUp(0.1)}
                    className="w-full text-center bg-gradient-to-b from-white/[0.02] to-transparent border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
                >
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#D4AF37]/5 blur-[80px] rounded-full pointer-events-none" />
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white max-w-xl mx-auto leading-relaxed">
                        Ready to establish your real estate footprint with institutional certainty?
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-400 mt-2 font-light max-w-md mx-auto">
                        Speak directly with an elite portfolio manager regarding off-market acquisitions.
                    </p>
                    <div className="mt-6">
                        <button className="bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 active:scale-[0.98]">
                            Connect With Our Founders
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default About;