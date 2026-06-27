import { useState } from "react";
import { Link } from "react-router-dom";
import PremiumCard from "../common/PremiumCard";
import LoginModal from "../auth/LoginModal";
import Button from "../common/Button";

function PropertyCard({ property }) {
    const [showLogin, setShowLogin] = useState(false);
    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouseCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <>
            <PremiumCard
                onMouseMove={handleMouseMove}
                className="group relative bg-[#0D0D0D]/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#D4AF37]/30 flex flex-col h-full text-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]"
            >
                {/* Immersive Spotlight Radial Glow */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                        background: `radial-gradient(280px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(212, 175, 55, 0.05), transparent 80%)`
                    }}
                />

                {/* SLIM IMAGE CONTAINER WITH INSET */}
                <div className="relative p-2.5 pb-0 z-10">
                    <div className="relative overflow-hidden rounded-xl aspect-[16/9] shadow-md">
                        {property.featured && (
                            <span className="absolute top-3 left-3 z-20 bg-[#D4AF37] text-neutral-950 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase shadow-md">
                                Featured
                            </span>
                        )}

                        <img
                            src={property.image}
                            alt={property.title}
                            className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/10 to-transparent" />

                        {/* Floating Action Button */}
                        <button
                            onClick={() => setShowLogin(true)}
                            className="absolute top-3 right-3 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 text-stone-400 hover:text-red-500 hover:bg-black/60 transition-all z-20 cursor-pointer"
                        >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                        </button>

                        {/* RERA Floating Ribbon */}
                        {property.rera && (
                            <div className="absolute bottom-2.5 left-2.5 z-20 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded text-[8px] uppercase font-bold tracking-widest">
                                RERA Verified
                            </div>
                        )}
                    </div>
                </div>

                {/* COMPACT CONTENT HOUSING */}
                <div className="p-4 pt-3 flex flex-col flex-grow relative z-10">

                    {/* Header Row: Builder & Rating */}
                    <div className="flex justify-between items-center gap-2 mb-1.5">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37]">
                            {property.builder}
                        </p>
                        <div className="flex items-center gap-1 bg-white/5 border border-white/5 px-1.5 py-0.5 rounded text-[10px]">
                            <span className="text-[#D4AF37]">★</span>
                            <span className="font-semibold text-stone-200">{property.rating}</span>
                        </div>
                    </div>

                    {/* Title & Location */}
                    <div className="mb-3">
                        <h3 className="text-lg font-bold tracking-tight text-stone-100 group-hover:text-white transition-colors duration-200 line-clamp-1">
                            {property.title}
                        </h3>
                        <div className="flex items-center gap-1 mt-0.5 text-stone-400 text-xs font-light">
                            <svg className="w-3 h-3 text-stone-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span className="truncate">{property.location}</span>
                        </div>
                    </div>

                    {/* INTERMEDIATE METRICS MINI-BAR */}
                    <div className="grid grid-cols-3 gap-1.5 py-2.5 border-y border-white/5 my-auto">
                        <div className="text-center border-r border-white/5 last:border-0">
                            <p className="text-[9px] text-stone-500 uppercase tracking-wider">Layout</p>
                            <p className="text-xs font-medium text-stone-200 mt-0.5">{property.bhk}</p>
                        </div>
                        <div className="text-center border-r border-white/5 last:border-0">
                            <p className="text-[9px] text-stone-500 uppercase tracking-wider">Area</p>
                            <p className="text-xs font-medium text-stone-200 mt-0.5">{property.area}</p>
                        </div>
                        <div className="text-center last:border-0">
                            <p className="text-[9px] text-stone-500 uppercase tracking-wider">Possession</p>
                            <p className="text-xs font-medium text-stone-200 mt-0.5 truncate">{property.possession}</p>
                        </div>
                    </div>

                    {/* MINIFIED VALUATION & CTA FLOOR */}
                    <div className="mt-4 pt-1 flex justify-between items-center gap-4">
                        <div>
                            <span className="block text-[9px] uppercase tracking-widest text-stone-400 font-medium">Value</span>
                            <p className="text-xl font-bold text-[#D4AF37] tracking-tight -mt-0.5">
                                {property.price}
                            </p>
                        </div>

                        <Link to={`/property/${property.id}`} className="shrink-0">
                            <Button variant="secondary" className="px-4 py-2 text-[11px] font-semibold border-white/10 hover:border-[#D4AF37]/30 bg-white/5 hover:bg-white/10 text-stone-200 hover:text-white rounded-lg shadow-md transition-all duration-300">
                                View Details
                            </Button>
                        </Link>
                    </div>
                </div>
            </PremiumCard>

            <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        </>
    );
}

export default PropertyCard;