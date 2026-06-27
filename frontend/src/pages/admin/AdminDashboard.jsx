import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import DashboardStats from "../../components/admin/DashboardStats";
import RecentLeads from "../../components/admin/RecentLeads";
import LeadFunnel from "../../components/admin/LeadFunnel";
import { Link } from "react-router-dom";

function AdminDashboard() {
    return (
        <div className="flex bg-[#050505] min-h-screen text-stone-200 antialiased font-sans selection:bg-[#D4AF37]/30 selection:text-white">

            {/* STYLED LEFT SIDEBAR CONTAINER */}
            <AdminSidebar />

            <div className="flex-1 flex flex-col min-w-0">

                {/* TOP HEADER NAVIGATION */}
                <AdminNavbar />

                {/* MAIN CONTENT AREA */}
                <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-[1600px] w-full mx-auto">

                    {/* WELCOME BANNER - Architectural & Premium */}
                    <div className="relative overflow-hidden bg-[#0D0D0D]/40 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
                        {/* Soft decorative background glow */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none" />

                        <div>
                            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                                Good Morning, <span className="text-[#D4AF37]">Aditya</span> 👋
                            </h1>
                            <p className="text-stone-400 text-xs sm:text-sm font-light mt-1 tracking-wide">
                                Here's what's happening with <span className="text-stone-200 font-normal">EstateFlow</span> today.
                            </p>
                        </div>

                        {/* Live Status indicator */}
                        <div className="flex items-center gap-2 self-start md:self-center bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg text-xs text-emerald-400 font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            System Live
                        </div>
                    </div>

                    {/* METRIC ANALYTICS CONTAINER */}
                    <DashboardStats />

                    {/* EXECUTIVE QUICK ACTIONS GRID */}
                    <div>
                        <h2 className="text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-3.5 pl-1">
                            Executive Controls
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Primary Action Button */}
                            <Link to="/admin/add-property" className="block sm:self-center">
                                <button className="group relative bg-[#D4AF37] hover:bg-[#bfa032] text-neutral-950 p-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
                                    <span className="text-base group-hover:scale-110 transition-transform">+</span>
                                    Add New Property
                                </button>
                            </Link>

                            {/* Secondary Action - View Leads */}
                            <Link to="/admin/lead-management" className="block sm:self-center">
                                <button className="group relative bg-[#D4AF37] hover:bg-[#bfa032] text-neutral-950 p-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
                                    <span className="text-base group-hover:scale-110 transition-transform"></span>
                                    View Active Leads
                                </button>
                            </Link>

                            {/* Secondary Action - Schedule Visits */}
                            <button className="bg-[#0D0D0D]/60 backdrop-blur-md text-stone-200 hover:text-white p-4 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 hover:bg-white/5 active:scale-[0.99] transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md">
                                Schedule Private Visits
                            </button>

                            {/* Secondary Action - Generate Report */}
                            <button className="bg-[#0D0D0D]/60 backdrop-blur-md text-stone-200 hover:text-white p-4 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 hover:bg-white/5 active:scale-[0.99] transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md">
                                Export Performance Report
                            </button>
                        </div>
                    </div>

                    {/* ANALYTICS SECTIONS GRAPHICS */}
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Funnel chart takes 2 columns on wide layouts */}
                        <div className="lg:col-span-2 space-y-1">
                            <h2 className="text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-3 pl-1">
                                Conversion Pipelines
                            </h2>
                            <div className="bg-[#0D0D0D]/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 shadow-xl">
                                <LeadFunnel />
                            </div>
                        </div>

                        {/* Recent leads feed takes 1 column */}
                        <div className="space-y-1">
                            <h2 className="text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-3 pl-1">
                                Recent Enquiries
                            </h2>
                            <div className="bg-[#0D0D0D]/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 shadow-xl">
                                <RecentLeads />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;