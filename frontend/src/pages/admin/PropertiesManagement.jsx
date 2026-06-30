import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaSearch, FaPlus, FaRegEdit } from "react-icons/fa";

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
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status Inventory");

    // Animation presets to match Hero Section ease-out curves
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (idx) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }
        }),
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
    };

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
        <div className="w-full max-w-6xl mx-auto space-y-8 px-4 sm:px-6">

            {/* HEADER METRICS PORTAL */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 border-b border-white/5 pb-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        Property <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#D4AF37] to-amber-500">Portfolio</span>
                    </h1>
                    <p className="text-[10px] sm:text-xs font-semibold text-stone-500 uppercase tracking-widest mt-1">
                        Live Inventory & Asset Control ({filteredProperties.length})
                    </p>
                </div>

                <button
                    onClick={() => alert("Open Add Asset Modal/Form")}
                    className="sm:self-center inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-stone-950 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#bfa032] active:scale-[0.98] transition-all shadow-lg shadow-amber-500/5 cursor-pointer select-none"
                >
                    <FaPlus className="text-[10px]" /> Add New Asset
                </button>
            </div>

            {/* PREMIUM FILTERS SYSTEM DOCK */}
            <div className="bg-white/[0.01] backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search Field Input */}
                    <div className="relative flex-1">
                        <span className="absolute left-4 top-3.5 text-stone-500 text-xs">
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search real estate index by asset title or location..."
                            className="w-full bg-white/[0.03] border border-white/5 text-white placeholder-stone-500 rounded-xl pl-10 pr-12 py-3 text-xs focus:outline-none focus:border-[#D4AF37]/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#D4AF37]/10 transition-all duration-200"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-4 top-3 text-[10px] uppercase font-bold tracking-wider text-stone-500 hover:text-white transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {/* Select Dropdown Menu */}
                    <div className="w-full sm:w-64 relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full bg-[#0d0d0d] border border-white/5 text-stone-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#D4AF37]/40 focus:ring-1 focus:ring-[#D4AF37]/10 transition-all duration-200 cursor-pointer appearance-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(212,175,55,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                                backgroundPosition: 'right 16px center',
                                backgroundSize: '14px',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <option value="All Status Inventory" className="bg-neutral-950">All Status Inventory</option>
                            <option value="Active Listings" className="bg-neutral-950">Active Listings</option>
                            <option value="Sold / Archived" className="bg-neutral-950">Sold / Archived</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* PORTFOLIO PIPELINE REALESTATE CARDS GRID */}
            <div className="relative min-h-[250px]">
                <AnimatePresence mode="popLayout">
                    {filteredProperties.length > 0 ? (
                        <motion.div
                            layout
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {filteredProperties.map((property, idx) => (
                                <motion.div
                                    key={property.id}
                                    custom={idx}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    layoutId={`card-${property.id}`}
                                    whileHover={{ y: -4 }}
                                    className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col justify-between relative group hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 overflow-hidden min-h-[190px]"
                                >
                                    {/* Ambient Luxury Top Glow Trim */}
                                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500 opacity-30 group-hover:opacity-100 transition-all duration-500" />

                                    {/* TOP SECTION: ID & STATUS BADGE */}
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-[9px] font-mono font-bold text-stone-600 tracking-wider">
                                                REG-ID #00{property.id}
                                            </span>
                                            <span className={`text-[9px] font-black tracking-widest px-2.5 py-0.5 rounded-md border uppercase ${getStatusStyles(property.status)}`}>
                                                {property.status}
                                            </span>
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="font-bold text-white text-base tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-1">
                                            {property.title}
                                        </h3>

                                        {/* LOCATION SUB-LABEL */}
                                        <div className="flex items-center gap-1.5 mt-2 text-stone-400">
                                            <FaMapMarkerAlt className="text-[11px] text-stone-600 group-hover:text-[#D4AF37] transition-colors shrink-0" />
                                            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                                                {property.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* BOTTOM SECTION: PRICING GUIDE & EDIT ATTACHMENT */}
                                    <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                                        <div>
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500 block">
                                                Market Asset Valuation
                                            </span>
                                            <span className="text-xl font-black tracking-tight text-white mt-0.5 block">
                                                {property.price}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => alert(`Editing Asset ID: ${property.id}`)}
                                            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/20 flex items-center justify-center text-stone-400 hover:text-[#D4AF37] active:scale-95 transition-all cursor-pointer"
                                            title="Edit Property Asset"
                                        >
                                            <FaRegEdit className="text-sm" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        /* LUXURY EMPTY DATA SYSTEM STATE */
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 text-center py-16 bg-white/[0.01] rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-2"
                        >
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">No Verified Matches Found</p>
                            <p className="text-xs text-stone-600 font-light max-w-xs">Adjust your search parameters or filter preferences to inventory another premium asset tier.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default PropertiesManagement;