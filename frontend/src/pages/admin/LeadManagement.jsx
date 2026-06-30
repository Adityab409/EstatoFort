import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaUser, FaPhoneAlt, FaBuilding } from "react-icons/fa";

// 1. DATA SOURCE
const leads = [
    {
        id: 1,
        name: "Rahul Sharma",
        phone: "9876543210",
        property: "Luxury 3 BHK Apartment",
        status: "New"
    },
    {
        id: 2,
        name: "Priya Patil",
        phone: "9876543211",
        property: "Premium Villa",
        status: "Contacted"
    },
    {
        id: 3,
        name: "Amit Joshi",
        phone: "9876543212",
        property: "Modern Sky Residence",
        status: "Site Visit Scheduled"
    }
];

// Helper to match status styles explicitly with the LeadFunnel colors
const getStatusStyles = (status) => {
    switch (status) {
        case "New":
            return "bg-blue-500/10 text-blue-400 border-blue-500/20";
        case "Contacted":
            return "bg-amber-500/10 text-amber-400 border-amber-500/20";
        case "Site Visit Scheduled":
        case "Site Visit":
            return "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20";
        case "Closed":
            return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
        default:
            return "bg-stone-500/10 text-stone-400 border-stone-500/20";
    }
};

function LeadsDashboardOverview() {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    // Filter pipeline logic
    const filteredLeads = leads.filter((lead) => {
        const matchesSearch =
            lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.phone.includes(searchQuery);

        const matchesStatus =
            statusFilter === "all" ||
            lead.status.toLowerCase() === statusFilter.toLowerCase() ||
            (statusFilter === "site-visit" && lead.status === "Site Visit Scheduled");

        return matchesSearch && matchesStatus;
    });

    // Unified luxury animation curves
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.04 }
        }
    };

    const rowVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
        exit: { opacity: 0, x: 10, transition: { duration: 0.2 } }
    };

    return (
        <div className="w-full space-y-8 px-4 sm:px-6">

            {/* ==================== STATS GRID BLOCK ==================== */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Total Leads */}
                <div className="bg-white/[0.02] backdrop-blur-sm p-5 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Total Active Index</p>
                    <h2 className="text-3xl font-bold text-white mt-2 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-[#D4AF37]">53</span>
                    </h2>
                    <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* New Leads */}
                <div className="bg-white/[0.02] backdrop-blur-sm p-5 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Unassigned New</p>
                    <h2 className="text-3xl font-bold text-blue-400 mt-2 tracking-tight">12</h2>
                    <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Contacted */}
                <div className="bg-white/[0.02] backdrop-blur-sm p-5 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Outreach Vetted</p>
                    <h2 className="text-3xl font-bold text-amber-400 mt-2 tracking-tight">8</h2>
                    <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Closed Deals */}
                <div className="bg-white/[0.02] backdrop-blur-sm p-5 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Acquisitions Secured</p>
                    <h2 className="text-3xl font-bold text-emerald-400 mt-2 tracking-tight">2</h2>
                    <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>

            {/* ==================== CONTROL & FILTER PANEL ==================== */}
            <div className="bg-white/[0.01] backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Search Component Wrapper */}
                    <div className="relative flex items-center">
                        <span className="absolute left-4 text-stone-500 text-xs">
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search client name, portfolio asset or profile..."
                            className="w-full bg-white/[0.03] border border-white/5 text-white placeholder-stone-500 rounded-xl pl-10 pr-12 py-3 text-xs focus:outline-none focus:border-[#D4AF37]/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#D4AF37]/10 transition-all duration-200"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-4 text-[10px] uppercase font-bold tracking-wider text-stone-500 hover:text-white transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {/* Styled Selection Menu */}
                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full bg-[#0d0d0d] border border-white/5 text-stone-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#D4AF37]/40 focus:ring-1 focus:ring-[#D4AF37]/10 transition-all duration-200 appearance-none cursor-pointer"
                            style={{
                                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(212,175,55,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                                backgroundPosition: 'right 16px center',
                                backgroundSize: '14px',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <option value="all" className="bg-neutral-950">All Pipeline Tiers</option>
                            <option value="new" className="bg-neutral-950">New Enquiries</option>
                            <option value="contacted" className="bg-neutral-950">Contacted / Vetted</option>
                            <option value="site-visit" className="bg-neutral-950">Private Site Visits</option>
                            <option value="closed" className="bg-neutral-950">Closed Acquisitions</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* ==================== CONTENT DATA VIEW ==================== */}
            <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                <div className="p-4 px-6 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Integrated Pipeline Records</h3>
                    <span className="text-[10px] font-mono text-stone-600 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">
                        Active Results: {filteredLeads.length}
                    </span>
                </div>

                <div className="relative min-h-[150px]">
                    <AnimatePresence mode="popLayout">
                        {filteredLeads.length > 0 ? (
                            <motion.div
                                className="divide-y divide-white/5"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {filteredLeads.map((lead) => (
                                    <motion.div
                                        key={lead.id}
                                        variants={rowVariants}
                                        layoutId={`lead-row-${lead.id}`}
                                        className="p-5 px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-white/[0.02] transition-colors duration-200"
                                    >
                                        {/* Left Side Info Portal */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center text-[10px] text-stone-500 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                                                    <FaUser />
                                                </div>
                                                <h4 className="font-bold text-white text-sm group-hover:text-[#D4AF37] transition-colors duration-200">
                                                    {lead.name}
                                                </h4>
                                                <span className="text-[9px] font-mono font-bold text-stone-600 tracking-wider bg-neutral-900 px-1.5 py-0.5 rounded border border-white/5">
                                                    ID: 00{lead.id}
                                                </span>
                                            </div>

                                            {/* Sub Labels Flex Container */}
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-stone-400">
                                                <span className="inline-flex items-center gap-1.5 text-stone-400 font-medium">
                                                    <FaBuilding className="text-[11px] text-stone-600" /> {lead.property}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 text-stone-600 font-mono tracking-wide text-[11px]">
                                                    <FaPhoneAlt className="text-[10px]" /> {lead.phone}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Right Side Status Portal */}
                                        <div className="sm:text-right shrink-0">
                                            <span className={`inline-block text-[9px] font-black tracking-widest px-3 py-1 rounded-md uppercase border ${getStatusStyles(lead.status)} shadow-sm`}>
                                                {lead.status}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            /* Premium Empty State Module */
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="p-12 text-center flex flex-col items-center justify-center gap-1"
                            >
                                static <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">No Profile Logs Found</p>
                                <p className="text-xs text-stone-600 font-light max-w-xs">Adjust your search parameters or select a different pipeline tier to fetch asset interest updates.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default LeadsDashboardOverview;