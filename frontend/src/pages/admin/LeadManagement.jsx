// 1. DATA SOURCE (Kept completely pure to your original structure)
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
    return (
        <div className="w-full space-y-6">

            {/* ==================== STATS GRID BLOCK ==================== */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Leads */}
                <div className="bg-[#111111] p-5 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group">
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Total Leads</p>
                    <h2 className="text-3xl font-black text-[#D4AF37] mt-2 tracking-tight">53</h2>
                    <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/40 via-[#D4AF37]/20" />
                </div>

                {/* New Leads */}
                <div className="bg-[#111111] p-5 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group">
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">New Leads</p>
                    <h2 className="text-3xl font-black text-blue-400 mt-2 tracking-tight">12</h2>
                    <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent to-blue-500/40 via-blue-500/20" />
                </div>

                {/* Contacted */}
                <div className="bg-[#111111] p-5 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group">
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Contacted</p>
                    <h2 className="text-3xl font-black text-amber-400 mt-2 tracking-tight">8</h2>
                    <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent to-amber-500/40 via-amber-500/20" />
                </div>

                {/* Closed Deals */}
                <div className="bg-[#111111] p-5 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group">
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Closed Deals</p>
                    <h2 className="text-3xl font-black text-emerald-400 mt-2 tracking-tight">2</h2>
                    <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent to-emerald-500/40 via-emerald-500/20" />
                </div>
            </div>

            {/* ==================== CONTROL & FILTER PANEL ==================== */}
            <div className="bg-[#111111] p-4 rounded-2xl border border-white/10 shadow-lg">
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Dark Styled Search Input */}
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Search customer..."
                            className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-stone-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-200"
                        />
                    </div>

                    {/* Dark Styled Custom Dropdown */}
                    <select
                        className="w-full bg-white/[0.03] border border-white/10 text-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-200 appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(168,162,158,0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
                    >
                        <option value="all" className="bg-[#111111] text-white">All Status</option>
                        <option value="new" className="bg-[#111111] text-white">New</option>
                        <option value="contacted" className="bg-[#111111] text-white">Contacted</option>
                        <option value="site-visit" className="bg-[#111111] text-white">Site Visit</option>
                        <option value="closed" className="bg-[#111111] text-white">Closed</option>
                    </select>
                </div>
            </div>

            {/* ==================== CONTENT DATA VIEW ==================== */}
            <div className="bg-[#111111] rounded-2xl border border-white/10 shadow-lg overflow-hidden">
                <div className="p-4 border-b border-white/5 bg-white/[0.01]">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400">Pipeline Records</h3>
                </div>
                <div className="divide-y divide-white/5">
                    {leads.map((lead) => (
                        <div key={lead.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-white/[0.01] transition-colors duration-150">
                            <div className="space-y-0.5">
                                <div className="flex items-center gap-2.5">
                                    <h4 className="font-bold text-white text-sm group-hover:text-[#D4AF37] transition-colors">
                                        {lead.name}
                                    </h4>
                                    <span className="text-[10px] font-mono text-stone-500">#{lead.id}</span>
                                </div>
                                <p className="text-xs font-medium text-stone-400">{lead.property}</p>
                                <p className="text-[11px] font-mono text-stone-600">{lead.phone}</p>
                            </div>

                            <div>
                                <span className={`text-[10px] font-black tracking-wider px-2.5 py-1 rounded-md uppercase border ${getStatusStyles(lead.status)}`}>
                                    {lead.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default LeadsDashboardOverview;