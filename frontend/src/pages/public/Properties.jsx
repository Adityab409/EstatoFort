import PropertyFilter from "../../components/property/PropertyFilter";
import PropertyGrid from "../../components/property/PropertyGrid";
import { useState } from "react";
import { motion } from "framer-motion";

function Properties() {
    const [selectedBHK, setSelectedBHK] = useState("");
    const [selectedType, setSelectedType] = useState("");

    // Animation presets matching the Hero Section's custom luxury ease
    const fadeInUp = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
    });

    return (
        <section className="min-h-screen bg-[#050505] text-white py-32 relative overflow-hidden">

            {/* Grid & Ambient Radial Glow Background (Perfect symmetry with Hero Section) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_600px_at_50%_-100px,rgba(212,175,55,0.05),transparent)] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

                {/* Header Section */}
                <div className="mb-14 text-left">
                    <motion.h1
                        {...fadeInUp(0)}
                        className="text-4xl sm:text-5xl font-bold tracking-tight leading-none"
                    >
                        Properties in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#D4AF37] to-amber-500">Pune</span>
                    </motion.h1>

                    <motion.p
                        {...fadeInUp(0.1)}
                        className="mt-3 text-sm sm:text-base text-stone-400 font-light tracking-wide"
                    >
                        1,248 Premium Properties Available with Absolute Transparency
                    </motion.p>
                </div>

                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 items-start">

                    {/* Left Column: Filter Sidebar Wrapper */}
                    <motion.div
                        {...fadeInUp(0.2)}
                        className="lg:col-span-1 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] hover:border-white/20 transition-all duration-300"
                    >
                        <PropertyFilter
                            selectedBHK={selectedBHK}
                            setSelectedBHK={setSelectedBHK}
                            selectedType={selectedType}
                            setSelectedType={setSelectedType}
                        />
                    </motion.div>

                    {/* Right Column: Active Property Grid Display */}
                    <motion.div
                        {...fadeInUp(0.3)}
                        className="lg:col-span-3"
                    >
                        <PropertyGrid
                            selectedBHK={selectedBHK}
                            selectedType={selectedType}
                        />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Properties;