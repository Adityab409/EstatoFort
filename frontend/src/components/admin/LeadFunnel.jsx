import React from "react";

function LeadFunnel() {
    const funnelData = [
        {
            title: "New Enquiries",
            value: 12,
            percentage: "100%",
            colorText: "text-blue-400",
            colorBar: "bg-blue-500",
            desc: "Unassigned requests"
        },
        {
            title: "Contacted / Vetted",
            value: 8,
            percentage: "66%",
            colorText: "text-amber-400",
            colorBar: "bg-amber-500",
            desc: "Outreach completed"
        },
        {
            title: "Private Site Visits",
            value: 5,
            percentage: "41%",
            colorText: "text-[#D4AF37]",
            colorBar: "bg-[#D4AF37]",
            desc: "Property tours"
        },
        {
            title: "Closed Acquisitions",
            value: 2,
            percentage: "16%",
            colorText: "text-emerald-400",
            colorBar: "bg-emerald-500",
            desc: "Contracts signed"
        }
    ];

    return (
        <div className="w-full py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {funnelData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#111111] border border-white/10 rounded-xl p-5 flex flex-col justify-between min-h-[160px]"
                    >
                        {/* TOP ROW: STAGE & PERCENTAGE */}
                        <div className="flex justify-between items-center text-[11px] font-bold tracking-wider uppercase">
                            <span className="text-stone-500">Stage 0{index + 1}</span>
                            <span className={item.colorText}>{item.percentage} Conv.</span>
                        </div>

                        {/* CENTER ROW: MAIN METRIC */}
                        <div className="my-2">
                            <h3 className="text-3xl font-black text-white">
                                {item.value}
                            </h3>
                            <p className="text-xs font-bold text-stone-300 uppercase tracking-wide mt-1">
                                {item.title}
                            </p>
                            <p className="text-stone-500 text-xs mt-0.5 font-light">
                                {item.desc}
                            </p>
                        </div>

                        {/* BOTTOM ROW: SIMPLE PROGRESS BAR */}
                        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full ${item.colorBar}`}
                                style={{ width: item.percentage }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeadFunnel;