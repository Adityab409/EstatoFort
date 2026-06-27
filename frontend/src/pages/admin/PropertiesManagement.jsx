import React, { useState } from "react";

const propertiesData = [
    {
        id: 1,
        title: "Luxury 3 BHK Apartment",
        location: "Baner, Pune",
        price: "₹85 Lakh",
        status: "Active"
    },
    {
        id: 2,
        title: "Premium Villa",
        location: "Wakad, Pune",
        price: "₹1.8 Cr",
        status: "Active"
    },
    {
        id: 3,
        title: "Modern Sky Residence",
        location: "Hinjewadi, Pune",
        price: "₹1.2 Cr",
        status: "Sold"
    }
];

const getStatusStyles = (status) => {
    switch (status) {
        case "Active":
            return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
        case "Sold":
            return "bg-stone-500/10 text-stone-400 border-stone-500/20";
        default:
            return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    }
};

function PropertiesManagement() {
    // Interactive states for pipeline indexing
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status Inventory");

    // Filter pipeline logic
    const filteredProperties = propertiesData.filter((property) => {
        const matchesSearch =
            property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            property.location.toLowerCase().includes(searchQuery.toLowerCase());

        if (statusFilter === "Active Listings") {
            return matchesSearch && property.status === "Active";
        }
        if (statusFilter === "Sold / Archived") {
            return matchesSearch && property.status === "Sold";
        }
        return matchesSearch;
    });

    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 px-1">

            {/* COMPONENT SUB-HEADER WITH INTERACTION TRIGGERS */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>

                    <h1 className="text-xl font-black uppercase tracking-wider text-white">
                        Property Portfolio
                    </h1>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-0.5">
                        Inventory & Asset Control ({filteredProperties.length})
                    </p>
                </div>

                <button
                    onClick={() => alert("Open Add Asset Modal/Form")}
                    className="sm:self-center bg-[#D4AF37] text-stone-950 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#bfa032] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)] cursor-pointer"
                >
                    + Add New Asset
                </button>
            </div>

            {/* QUICK FILTERS BLOCK */}
            <div className="bg-[#111111] p-4 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search real estate index by name or location..."
                            className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-stone-500 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-200"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-2.5 text-stone-500 hover:text-white text-xs"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                    <div className="w-full sm:w-64">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/10 text-stone-400 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-200 cursor-pointer appearance-none"
                            style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(168,162,158,0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundPosition: 'right 16px center', backgroundSize: '14px', backgroundRepeat: 'no-repeat' }}
                        >
                            <option value="All Status Inventory" className="bg-[#111111] text-white">All Status Inventory</option>
                            <option value="Active Listings" className="bg-[#111111] text-white">Active Listings</option>
                            <option value="Sold / Archived" className="bg-[#111111] text-white">Sold / Archived</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* PORTFOLIO GRID HOUSING DATA */}
            {filteredProperties.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {filteredProperties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-[#111111] border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col justify-between relative group hover:border-white/20 transition-all duration-300 overflow-hidden min-h-[200px]"
                        >
                            {/* Dynamic Top Edge Glow Trim */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-amber-400 group-hover:w-full transition-all duration-500 ease-out" />

                            {/* CARD CONTENT LAYER */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[9px] font-mono font-bold text-stone-600 tracking-wider">
                                        REG-ID #00{property.id}
                                    </span>
                                    <span className={`text-[9px] font-black tracking-widest px-2 py-0.5 rounded border uppercase ${getStatusStyles(property.status)}`}>
                                        {property.status}
                                    </span>
                                </div>

                                <h3 className="font-black text-white text-base tracking-tight group-hover:text-[#D4AF37] transition-colors duration-200 line-clamp-1">
                                    {property.title}
                                </h3>

                                <div className="flex items-center gap-1.5 mt-2 text-stone-400">
                                    <svg className="w-3.5 h-3.5 text-stone-600 group-hover:text-[#D4AF37] transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">{property.location}</span>
                                </div>
                            </div>

                            {/* BOTTOM VALUATION BLOCK */}
                            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                                <div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500 block">
                                        Market Value
                                    </span>
                                    <span className="text-xl font-black tracking-tight text-white mt-0.5 block">
                                        {property.price}
                                    </span>
                                </div>

                                <button
                                    onClick={() => alert(`Editing Asset ID: ${property.id}`)}
                                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/30 flex items-center justify-center text-stone-400 hover:text-[#D4AF37] transition-all cursor-pointer"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* EMPTY STATE CASE */
                <div className="text-center py-12 bg-[#111111] rounded-2xl border border-white/5">
                    <p className="text-sm text-stone-500 uppercase tracking-widest">No assets match your current search constraints.</p>
                </div>
            )}
        </div>
    );
}

export default PropertiesManagement;