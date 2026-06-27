function PropertyOverview({ property }) {
    return (
        <div className="bg-[#0D0D0D]/90 border border-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl">

            {/* BUILDER / DEVELOPER */}
            <p className="text-[#D4AF37] font-medium tracking-widest text-xs uppercase">
                {property.builder}
            </p>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-white tracking-tight">
                {property.title}
            </h1>

            {/* LOCATION */}
            <p className="text-stone-400 mt-3 font-light text-sm flex items-center gap-1">
                <span className="text-stone-500">📍</span> {property.location}
            </p>

            {/* SPECIFICATION BADGES */}
            <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-white/5 border border-white/10 text-stone-200 text-sm px-5 py-2.5 rounded-full font-medium">
                    {property.bhk}
                </span>

                <span className="bg-white/5 border border-white/10 text-stone-200 text-sm px-5 py-2.5 rounded-full font-medium">
                    {property.area}
                </span>

                <span className="bg-white/5 border border-white/10 text-stone-200 text-sm px-5 py-2.5 rounded-full font-medium">
                    {property.possession}
                </span>

                {property.rera && (
                    <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm px-5 py-2.5 rounded-full font-medium tracking-wide">
                        ✓ RERA Approved
                    </span>
                )}
            </div>

            {/* SEPARATOR */}
            <div className="h-px bg-white/5 my-8" />

            {/* DESCRIPTION SECTION */}
            <div>
                <h2 className="text-xl font-bold mb-4 text-white tracking-tight">
                    Overview
                </h2>

                <p className="text-stone-400 leading-relaxed font-light text-base">
                    Premium property developed by <span className="text-white font-normal">{property.builder}</span>.
                    Strategically located in <span className="text-white font-normal">{property.location}</span> with excellent regional connectivity,
                    bespoke architectural finishes, and an unmatched suite of premium lifestyle features designed for elite comfort.
                </p>
            </div>

        </div>
    );
}

export default PropertyOverview;