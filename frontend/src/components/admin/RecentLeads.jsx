function RecentLeads() {
    const leads = [
        {
            name: "Rahul Sharma",
            property: "Luxury Apartment"
        },
        {
            name: "Priya Patil",
            property: "Premium Villa"
        },
        {
            name: "Amit Joshi",
            property: "Sky Residence"
        }
    ];

    return (
        <div className="bg-[#111111] rounded-2xl p-5 border border-white/10 shadow-lg">
            {/* COMPONENT HEADER */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
                <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400">
                    Recent Leads
                </h2>
                <span className="text-[10px] font-black text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2 py-0.5 rounded uppercase tracking-wider">
                    Live Feed
                </span>
            </div>

            {/* LEADS LIST */}
            <div className="divide-y divide-white/5">
                {leads.map((lead, index) => (
                    <div
                        key={index}
                        className="py-3.5 flex justify-between items-center group first:pt-1 last:pb-1"
                    >
                        <div>
                            <h3 className="font-bold text-white text-sm group-hover:text-[#D4AF37] transition-colors duration-200">
                                {lead.name}
                            </h3>
                            <p className="text-stone-500 text-xs mt-0.5 font-medium">
                                {lead.property}
                            </p>
                        </div>

                        {/* RIGHT ACCENT GRAPHIC CHIP */}
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-40 group-hover:opacity-100 shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentLeads;