import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Button from "../common/Button";
import heroImage from "../../assets/images/hero-property.jpg";
import { FaMapMarkerAlt, FaStar, FaBuilding, FaRegClock, FaSearch } from "react-icons/fa";

// ==========================================
// INTERNAL COUNTER COMPONENT (Self-Contained)
// ==========================================
function AnimatedCounter({ from = 0, to, duration = 2, suffix = "" }) {
    const nodeRef = useRef(null);
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, {
                duration: duration,
                ease: [0.16, 1, 0.3, 1], // Luxury cubic ease-out
            });
            return () => controls.stop();
        }
    }, [isInView, count, to, duration]);

    return (
        <span ref={nodeRef}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

// ==========================================
// MAIN HERO SECTION COMPONENT
// ==========================================
function HeroSection() {
    const fadeInUp = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
    });

    const statsData = [
        { value: 1200, suffix: "+", label: "Discerning Families" },
        { value: 450, suffix: "+", label: "Luxury Estates" },
        { value: 25, suffix: "+", label: "Major Cities" },
        { value: 12, suffix: "B+", label: "Portfolios" }
    ];

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050505] text-white py-24 sm:py-32">

            {/* Grid & Ambient Radial Glow Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(212,175,55,0.08),transparent)] pointer-events-none z-0" />
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-0" />

            {/* Core Grid Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col gap-16 md:gap-24">

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Heading, badge, description, CTAs & Stats */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">

                        {/* Micro-Badge */}
                        <motion.div
                            {...fadeInUp(0)}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs font-semibold tracking-wider uppercase text-stone-300 mb-6"
                        >
                            <span className="text-[#D4AF37]">★</span> Elite Real Estate Firm
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            {...fadeInUp(0.15)}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-2xl"
                        >
                            Discover Premium Properties Across India's Most
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#D4AF37] to-amber-500 mt-2">
                                Desirable Locations
                            </span>
                        </motion.h1>

                        {/* Subheading Description */}
                        <motion.p
                            {...fadeInUp(0.3)}
                            className="mt-6 text-base sm:text-lg text-stone-400 font-light max-w-xl leading-relaxed"
                        >
                            Explore thoroughly verified homes, architectural masterpieces, ultra-luxury villas, and high-yield investment opportunities with absolute structural transparency.
                        </motion.p>

                        {/* Interactive Buttons */}
                        <motion.div
                            {...fadeInUp(0.4)}
                            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Button variant="accent" className="w-full sm:w-auto px-8 py-3.5 shadow-xl shadow-amber-500/5">
                                Explore Properties
                            </Button>
                            <Button variant="secondary" className="w-full sm:w-auto px-8 py-3.5 text-stone-200 hover:text-white border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10">
                                Schedule Consultation
                            </Button>
                        </motion.div>

                        {/* Stats Banner */}
                        <motion.div
                            {...fadeInUp(0.5)}
                            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full border-t border-white/10 pt-8"
                        >
                            {statsData.map((stat, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <span className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-100">
                                        <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                                    </span>
                                    <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-stone-500 uppercase mt-1">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Floating Property Mock Card */}
                    <div className="lg:col-span-5 flex justify-center z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                            whileHover={{ y: -8 }}
                            className="group relative w-full max-w-[420px] bg-white/[0.02] backdrop-blur-md rounded-3xl border border-white/10 p-4 transition-all duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:border-white/20"
                        >
                            {/* Accent Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative overflow-hidden rounded-2xl h-[320px] w-full">
                                <img
                                    src={heroImage}
                                    alt="Luxury Estate Exterior"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                {/* Detail Overlays */}
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div className="space-y-1">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/90 text-neutral-900 text-[10px] font-bold uppercase tracking-wider">
                                            Featured Estate
                                        </span>
                                        <h3 className="text-white text-lg font-bold">The Aurelia Mansion</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1 text-amber-400 text-xs justify-end font-semibold">
                                            <FaStar /> <span>4.9</span>
                                        </div>
                                        <p className="text-stone-300 text-xs">Baner, Pune</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating details inside card */}
                            <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-3 gap-2 text-center text-xs text-stone-400">
                                <div>
                                    <p className="font-semibold text-stone-200">4 BHK</p>
                                    <p className="text-[10px] text-stone-500">Configuration</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-stone-200">3,600 sq.ft</p>
                                    <p className="text-[10px] text-stone-500">Area</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#D4AF37]">₹4.5 Cr</p>
                                    <p className="text-[10px] text-stone-500">Price Guide</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Integrated Sleek SaaS Search Dock */}
                <motion.div
                    {...fadeInUp(0.6)}
                    className="w-full max-w-5xl mx-auto bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] p-4 sm:p-5 lg:p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] text-left hover:border-white/20 transition-all duration-300"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 lg:gap-5 items-end">

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1 flex items-center gap-1.5">
                                <FaMapMarkerAlt className="text-amber-500" /> Location
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Baner, Wakad"
                                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/5 focus:border-amber-500/50 text-white placeholder-stone-500 outline-none text-sm transition-all focus:ring-1 focus:ring-amber-500/20"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1 flex items-center gap-1.5">
                                <FaBuilding className="text-amber-500" /> Type
                            </label>
                            <select className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/5 focus:border-amber-500/50 text-stone-300 outline-none text-sm transition-all cursor-pointer focus:ring-1 focus:ring-amber-500/20">
                                <option className="bg-neutral-950">All Types</option>
                                <option className="bg-neutral-950">Apartment</option>
                                <option className="bg-neutral-950">Villa</option>
                                <option className="bg-neutral-950">Penthouse</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1 flex items-center gap-1.5">
                                <span className="text-amber-500 font-bold">₹</span> Budget
                            </label>
                            <select className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/5 focus:border-amber-500/50 text-stone-300 outline-none text-sm transition-all cursor-pointer focus:ring-1 focus:ring-amber-500/20">
                                <option className="bg-neutral-950">Select Budget</option>
                                <option className="bg-neutral-950">₹50L - ₹1Cr</option>
                                <option className="bg-neutral-950">₹1Cr - ₹3Cr</option>
                                <option className="bg-neutral-950">₹3Cr+</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1 flex items-center gap-1.5">
                                <FaRegClock className="text-amber-500" /> Possession
                            </label>
                            <select className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/5 focus:border-amber-500/50 text-stone-300 outline-none text-sm transition-all cursor-pointer focus:ring-1 focus:ring-amber-500/20">
                                <option className="bg-neutral-950">Timeline</option>
                                <option className="bg-neutral-950">Ready To Move</option>
                                <option className="bg-neutral-950">Under Construction</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2 md:col-span-1 mt-2 sm:mt-0">
                            <button className="w-full bg-[#D4AF37] hover:bg-[#bfa032] active:scale-[0.98] text-neutral-950 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/5 flex items-center justify-center gap-2 cursor-pointer select-none">
                                <FaSearch className="text-xs" /> Search
                            </button>
                        </div>

                    </div>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone-500 text-[10px] tracking-widest font-semibold uppercase flex flex-col items-center gap-2 select-none pointer-events-none z-10">
                <span className="animate-bounce">↓</span>
                Scroll
            </div>

        </section>
    );
}

export default HeroSection;