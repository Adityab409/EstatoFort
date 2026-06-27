import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Home Buyer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        review:
            "EstateFlow made our property search incredibly smooth. Their advisory team guided us through structural evaluations at every single step.",
    },
    {
        name: "Priya Deshmukh",
        role: "Asset Investor",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        review:
            "A completely transparent transactional process, verified properties, and bespoke support. I highly recommend them for high-yield assets.",
    },
    {
        name: "Amit Patil",
        role: "Property Owner",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        review:
            "Unrivalled local intelligence and professional execution. Our premium estate was transacted much faster than expected.",
    },
];

function TestimonialCard({ item }) {
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
            className="group relative bg-white/[0.01] rounded-3xl p-8 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] hover:border-white/15 transition-all duration-300 overflow-hidden flex flex-col justify-between"
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

            <div className="relative z-10">
                <div className="flex gap-1 text-[#D4AF37] mb-6">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={12} />
                    ))}
                </div>

                <p className="text-stone-300 leading-relaxed text-sm font-light italic">
                    "{item.review}"
                </p>
            </div>

            <div className="relative z-10 flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                />
                <div>
                    <h4 className="font-bold text-stone-100 text-sm tracking-tight group-hover:text-white transition-colors duration-200">
                        {item.name}
                    </h4>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-stone-500 mt-0.5">
                        {item.role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function Testimonials() {
    return (
        <section className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-stone-400 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                        Trusted by families, corporate investors, and estate developers across primary markets.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <TestimonialCard key={index} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Testimonials;