import { useState } from "react";
import { motion } from "framer-motion";

const stats = [
    {
        number: "5,000+",
        label: "Properties Listed",
    },
    {
        number: "1,200+",
        label: "Happy Families",
    },
    {
        number: "15+",
        label: "Years Experience",
    },
    {
        number: "25+",
        label: "Builder Partners",
    },
];

function StatCard({ stat }) {
    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouseCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            whileHover={{ y: -4 }}
            className="group relative text-center bg-white/[0.01] rounded-3xl p-8 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:border-white/15 transition-all duration-300 overflow-hidden"
        >
            {/* Spotlight Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                    background: `radial-gradient(220px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(212, 175, 55, 0.05), transparent 80%)`
                }}
            />

            {/* Spotlight Border */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                    padding: '1px',
                    background: `radial-gradient(150px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(212, 175, 55, 0.2), transparent 80%)`,
                    mask: 'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)',
                    WebkitMask: 'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    borderRadius: '24px'
                }}
            />

            <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold tracking-tight text-[#D4AF37]">
                {stat.number}
            </h2>

            <p className="relative z-10 mt-3 text-stone-400 font-semibold tracking-wider text-[10px] sm:text-xs uppercase">
                {stat.label}
            </p>
        </motion.div>
    );
}

function StatsSection() {
    return (
        <section className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;