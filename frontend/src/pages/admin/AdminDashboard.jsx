import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus, FaBriefcase, FaCalendarAlt, FaFileDownload, FaChartPie, FaInbox } from "react-icons/fa";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import DashboardStats from "../../components/admin/DashboardStats";
import RecentLeads from "../../components/admin/RecentLeads";
import LeadFunnel from "../../components/admin/LeadFunnel";

function AdminDashboard() {
    // Structural layout entrance presets
    const sectionVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="flex bg-[#050505] min-h-screen text-stone-200 antialiased font-sans selection:bg-[#D4AF37]/30 selection:text-white overflow-x-hidden">

            {/* STYLED LEFT SIDEBAR CONTAINER */}
            <AdminSidebar />

            <div className="flex-1 flex flex-col min-w-0">
                {/* TOP HEADER NAVIGATION */}
                <AdminNavbar />

                {/* MAIN CONTENT AREA */}
                <div className="p-4 sm:p-6 lg:p-8 space-y-10 max-w-[1600px] w-full mx-auto">

                    {/* WELCOME BANNER - Architectural & Premium */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Premium ambient asset glow */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

                        <div className="space-y-1">
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                                WELCOME BACK, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#D4AF37] to-amber-400">ADITYA</span> 👋
                            </h1>
                            <p className="text-stone-400 text-xs sm:text-sm font-light tracking-wide">
                                Your premium brokerage ecosystem is online. Monitoring <span className="text-stone-200 font-medium">EstateFlow</span> index.
                            </p>
                        </div>

                        {/* Live Status Indicator Capsule */}
                        <div className="flex items-center gap-2.5 self-start md:self-center bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl text-[10px] text-emerald-400 font-bold tracking-widest uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            SYSTEM PIPELINE LIVE
                        </div>
                    </motion.div>

                    {/* METRIC ANALYTICS CONTAINER */}
                    <div className="relative">
                        <DashboardStats />
                    </div>

                    {/* EXECUTIVE QUICK ACTIONS GRID */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                    >
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 pl-1">
                            Executive Asset Controls
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Primary Action Button */}
                            <Link to="/admin/add-property" className="block w-full">
                                <button className="w-full group bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-[#bfa032] hover:to-amber-600 text-neutral-950 p-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer select-none">
                                    <FaPlus className="text-[10px] stroke-[2]" /> Add New Property
                                </button>
                            </Link>

                            {/* Secondary Action - View Leads */}
                            <Link to="/admin/lead-management" className="block w-full">
                                <button className="w-full group bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-white p-4 rounded-xl font-bold text-xs uppercase tracking-wider active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer select-none">
                                    <FaBriefcase className="text-stone-400 group-hover:text-[#D4AF37] transition-colors" /> View Active Leads
                                </button>
                            </Link>

                            {/* Secondary Action - Schedule Visits */}
                            <button className="w-full bg-[#0D0D0D]/40 backdrop-blur-md text-stone-300 hover:text-white p-4 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 hover:bg-white/[0.04] active:scale-[0.98] transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-md select-none">
                                <FaCalendarAlt className="text-stone-600" /> Schedule Private Visits
                            </button>

                            {/* Secondary Action - Generate Report */}
                            <button className="w-full bg-[#0D0D0D]/40 backdrop-blur-md text-stone-300 hover:text-white p-4 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 hover:bg-white/[0.04] active:scale-[0.98] transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-md select-none">
                                <FaFileDownload className="text-stone-600" /> Export Performance Report
                            </button>
                        </div>
                    </motion.div>

                    {/* ANALYTICS SECTIONS GRAPHICS */}
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Funnel chart takes 2 columns on wide layouts */}
                        <motion.div
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                            className="lg:col-span-2 space-y-4"
                        >
                            <div className="flex items-center gap-2 pl-1">
                                <FaChartPie className="text-xs text-[#D4AF37]" />
                                <h2 className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                                    Conversion Pipelines
                                </h2>
                            </div>
                            <div className="bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-white/10 transition-colors duration-300">
                                <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500" />
                                <LeadFunnel />
                            </div>
                        </motion.div>

                        {/* Recent leads feed takes 1 column */}
                        <motion.div
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-2 pl-1">
                                <FaInbox className="text-xs text-[#D4AF37]" />
                                <h2 className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                                    Recent Enquiries
                                </h2>
                            </div>
                            <div className="bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-white/10 transition-colors duration-300">
                                <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500" />
                                <RecentLeads />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;