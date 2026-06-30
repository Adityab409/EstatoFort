import { useState } from "react";
import properties from "../../data/properties";
import PropertyCard from "./PropertyCard";

function PropertyGrid({
    selectedBHK,
    selectedType,
    selectedBudget
}) {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("Newest");

    const filteredProperties = properties.filter((property) => {
        const matchesSearch = property.location
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesBHK = selectedBHK === "" || property.bhk === selectedBHK;

        const matchesType = selectedType === "" || property.type === selectedType;

        let matchesBudget = true;
        if (selectedBudget === "25L-50L") matchesBudget = property.priceNumeric >= 2500000 && property.priceNumeric <= 5000000;
        if (selectedBudget === "50L-1Cr") matchesBudget = property.priceNumeric > 5000000 && property.priceNumeric <= 10000000;
        if (selectedBudget === "1Cr+") matchesBudget = property.priceNumeric > 10000000;

        return matchesSearch && matchesBHK && matchesType && matchesBudget;
    });

    const sortedProperties = [...filteredProperties].sort((a, b) => {
        if (sortBy === "Price Low to High") return a.priceNumeric - b.priceNumeric;
        if (sortBy === "Price High to Low") return b.priceNumeric - a.priceNumeric;
        return b.id - a.id;
    });

    return (
        <div>
            {/* SEARCH INPUT CONSOLE */}
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Search premium locations (e.g., Baner, Kalyani Nagar)..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-5 py-4 bg-white/[0.02] text-stone-200 placeholder-stone-600 border border-white/10 rounded-2xl outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition duration-200 text-sm"
                />
                {/* SVG Icon replaced the raw 🔍 emoji */}
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-stone-600 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                    </svg>
                </span>
            </div>

            {/* RESULTS METRIC HEADER PANEL */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 pb-4 border-b border-white/5">
                <h3 className="text-lg font-medium tracking-wide text-stone-300">
                    Showing <span className="text-[#D4AF37] font-semibold">{filteredProperties.length}</span> Verified Assets
                </h3>

                <div className="relative shrink-0">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-white/[0.02] text-stone-300 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#D4AF37] cursor-pointer appearance-none pr-8 font-medium"
                    >
                        <option value="Newest" className="bg-[#0f0f0f]">Sort: Newest</option>
                        <option value="Price Low to High" className="bg-[#0f0f0f]">Price: Low to High</option>
                        <option value="Price High to Low" className="bg-[#0f0f0f]">Price: High to Low</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none text-[10px]">▼</span>
                </div>
            </div>

            {/* ACTIVE PORTFOLIO GRID CONTAINER */}
            {sortedProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sortedProperties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))}
                </div>
            ) : (
                /* EMPTY FILTER MATCHES CONTAINER */
                <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
                    <p className="text-stone-500 font-light text-sm">
                        No exclusive luxury portfolios match your active search parameters.
                    </p>
                </div>
            )}
        </div>
    );
}

export default PropertyGrid;