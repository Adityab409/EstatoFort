function PropertyFilter({
    selectedBHK,
    setSelectedBHK,
    selectedType,
    setSelectedType,
    selectedBudget,    // Added to fix the original bug
    setSelectedBudget,  // Added to fix the original bug
    location,          // Optional: if you track location state
    setLocation        // Optional: if you track location state
}) {
    const selectClass = "w-full p-3 bg-white/[0.03] text-stone-300 border border-white/10 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition duration-200 cursor-pointer appearance-none";
    const labelClass = "block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2 mt-4";

    return (
        <div className="sticky top-28">
            <h3 className="text-xl font-semibold tracking-wide text-white border-b border-white/10 pb-4 mb-6">
                Filter <span className="text-[#D4AF37]">Properties</span>
            </h3>

            <div className="space-y-5">
                {/* Location Input */}
                <div>
                    <label className={labelClass}>Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation?.(e.target.value)}
                        placeholder="e.g., Baner, Koregaon Park"
                        className="w-full p-3 bg-white/[0.03] text-stone-200 placeholder-stone-600 border border-white/10 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition duration-200"
                    />
                </div>

                {/* Budget Select */}
                <div className="relative">
                    <label className={labelClass}>Budget</label>
                    <select
                        value={selectedBudget}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                        className={selectClass}
                    >
                        <option value="" className="bg-[#0f0f0f]">Any Budget</option>
                        <option value="25L-50L" className="bg-[#0f0f0f]">₹25L - ₹50L</option>
                        <option value="50L-1Cr" className="bg-[#0f0f0f]">₹50L - ₹1Cr</option>
                        <option value="1Cr+" className="bg-[#0f0f0f]">₹1Cr+</option>
                    </select>
                </div>

                {/* BHK Select */}
                <div className="relative">
                    <label className={labelClass}>BHK Configuration</label>
                    <select
                        value={selectedBHK}
                        onChange={(e) => setSelectedBHK(e.target.value)}
                        className={selectClass}
                    >
                        <option value="" className="bg-[#0f0f0f]">All BHK</option>
                        <option value="1 BHK" className="bg-[#0f0f0f]">1 BHK</option>
                        <option value="2 BHK" className="bg-[#0f0f0f]">2 BHK</option>
                        <option value="3 BHK" className="bg-[#0f0f0f]">3 BHK</option>
                        <option value="4 BHK" className="bg-[#0f0f0f]">4 BHK</option>
                    </select>
                </div>

                {/* Property Type Select */}
                <div className="relative">
                    <label className={labelClass}>Property Type</label>
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className={selectClass}
                    >
                        <option value="" className="bg-[#0f0f0f]">All Types</option>
                        <option value="Apartment" className="bg-[#0f0f0f]">Apartment</option>
                        <option value="Villa" className="bg-[#0f0f0f]">Villa</option>
                        <option value="Commercial" className="bg-[#0f0f0f]">Commercial</option>
                        <option value="Plot" className="bg-[#0f0f0f]">Plot</option>
                    </select>
                </div>

                {/* Reset Button */}
                <button
                    onClick={() => {
                        setSelectedBHK("");
                        setSelectedType("");
                        setSelectedBudget("");
                        if (setLocation) setLocation("");
                    }}
                    className="w-full mt-6 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-semibold py-3 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.15)] active:scale-[0.98]"
                >
                    Reset Filters
                </button>
            </div>
        </div>
    );
}

export default PropertyFilter;