import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaShieldAlt,
    FaUserTie,
    FaHandshake,
    FaHeadset,
} from "react-icons/fa";

const features = [
    {
        icon: <FaShieldAlt size={24} />,
        title: "Verified Properties",
        description: "Every property in our select portfolio undergoes strict verification checks.",
    },
    {
        icon: <FaUserTie size={24} />,
        title: "Trusted Experts",
        description: "Receive bespoke guidance from highly experienced real estate portfolio advisors.",
    },
    {
        icon: <FaHandshake size={24} />,
        title: "Transparent Process",
        description: "Zero hidden charges. Full structural and legal transparency from consultation to closure.",
    },
    {
        icon: <FaHeadset size={24} />,
        title: "Dedicated Support",
        description: "Our private advisory desk is available around the clock to support your journey.",
    },
];

function FeatureCard({ feature }) {
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
            whileHover={{ y: -6 }}
            className="group relative bg-white/[0.01] rounded-3xl p-8 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] hover:border-white/15 transition-all duration-300 overflow-hidden"
        >
            {/* Spotlight Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                    background: `radial-gradient(300px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(212, 175, 55, 0.06), transparent 80%)`
                }}
            />

            {/* Spotlight Border */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                    padding: '1px',
                    background: `radial-gradient(200px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(212, 175, 55, 0.22), transparent 80%)`,
                    mask: 'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)',
                    WebkitMask: 'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    borderRadius: '24px'
                }}
            />

            <div className="relative z-10 text-[#D4AF37] mb-6 inline-flex p-3 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
            </div>

            <h3 className="relative z-10 text-xl font-bold tracking-tight text-stone-100 group-hover:text-white transition-colors duration-200 mb-3">
                {feature.title}
            </h3>

            <p className="relative z-10 text-sm font-light text-stone-400 leading-relaxed">
                {feature.description}
            </p>
        </motion.div>
    );
}

function WhyChooseUs() {
    return (
        <section className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Why Choose EstateFlow
                    </h2>
                    <p className="mt-4 text-stone-400 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                        We blend institutional trust, complete transparency, and local expertise to design a fluid acquisition experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;