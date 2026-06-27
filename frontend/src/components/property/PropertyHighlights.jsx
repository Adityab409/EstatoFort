import { motion } from "framer-motion";

function PropertyHighlights({ property }) {
    const highlightCardClass = "bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-2xl p-5 text-center flex flex-col justify-center items-center transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.2)]";
    const titleClass = "text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-[#D4AF37]";
    const labelClass = "text-xs uppercase tracking-wider text-stone-500 font-medium mt-2";

    return (
        <div className="bg-[#0D0D0D]/90 border border-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl">

            <h2 className="text-xl font-bold mb-6 text-white tracking-tight">
                Property Highlights
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

                {/* Configuration */}
                <div className={highlightCardClass}>
                    <p className={titleClass}>
                        {property.bhk}
                    </p>
                    <p className={labelClass}>
                        Configuration
                    </p>
                </div>

                {/* Area */}
                <div className={highlightCardClass}>
                    <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {property.area}
                    </p>
                    <p className={labelClass}>
                        Total Area
                    </p>
                </div>

                {/* Rating */}
                <div className={highlightCardClass}>
                    <p className={titleClass}>
                        ★ {property.rating || "4.8"}
                    </p>
                    <p className={labelClass}>
                        Class Rating
                    </p>
                </div>

                {/* Possession */}
                <div className={highlightCardClass}>
                    <p className="text-sm sm:text-base font-semibold text-stone-200 tracking-wide line-clamp-2">
                        {property.possession}
                    </p>
                    <p className={labelClass}>
                        Possession
                    </p>
                </div>

                {/* RERA */}
                <div className={highlightCardClass}>
                    <p className="text-base sm:text-lg font-bold text-emerald-500 tracking-wider uppercase">
                        {property.rera ? "Verified" : "Pending"}
                    </p>
                    <p className={labelClass}>
                        RERA Status
                    </p>
                </div>

            </div>
        </div>
    );
}

export default PropertyHighlights;