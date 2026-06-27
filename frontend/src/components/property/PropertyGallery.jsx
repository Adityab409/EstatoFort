import { useState } from "react";

function PropertyGallery({ property }) {
    // Fallback images matching your array context if data doesn't provide them
    const galleryImages = property?.images || [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ];

    const [activeHero, setActiveHero] = useState(galleryImages[0]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#0D0D0D]/40 p-3 rounded-[2.5rem] border border-white/5 backdrop-blur-sm">

            {/* LARGE HERO FRAME DISPLAY */}
            <div className="md:col-span-3 relative group overflow-hidden rounded-[2rem] border border-white/10 h-[350px] sm:h-[450px] md:h-[512px]">
                <img
                    src={activeHero}
                    alt={property?.title || "Luxury Estate Feature View"}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                {/* Micro Ambient Shadow Gradient for Depth Over the Image Base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* VERTICAL THUMBNAIL TRACK */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-3 md:h-[512px]">
                {galleryImages.slice(1, 4).map((imgUrl, index) => {
                    const isCurrentlySelected = activeHero === imgUrl;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveHero(imgUrl)}
                            className={`relative group overflow-hidden rounded-2xl border transition-all duration-300 h-24 sm:h-32 md:h-[160px] w-full focus:outline-none ${isCurrentlySelected
                                    ? "border-[#D4AF37] ring-1 ring-[#D4AF37]/30 scale-[0.98]"
                                    : "border-white/10 hover:border-white/30"
                                }`}
                        >
                            <img
                                src={imgUrl}
                                alt={`Architecture Showcase Perspective ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Dark Mask for unselected images to accent the active highlight */}
                            <div className={`absolute inset-0 bg-[#050505]/20 transition-opacity duration-300 group-hover:opacity-0 ${isCurrentlySelected ? "opacity-0" : "opacity-100"
                                }`} />
                        </button>
                    );
                })}
            </div>

        </div>
    );
}

export default PropertyGallery;