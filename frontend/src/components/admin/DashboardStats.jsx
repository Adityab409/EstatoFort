function DashboardStats() {
    const stats = [
        {
            title: "Properties Listed",
            value: "124",
            trend: "+12 this week",
            isPositive: true,
            icon: (
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12" />
                </svg>
            )
        },
        {
            title: "Acquired Leads",
            value: "53",
            trend: "+8 vs yesterday",
            isPositive: true,
            icon: (
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-2.533-3.076m-10.5 0a4.125 4.125 0 00-2.533 3.076 9.317 9.317 0 004.12 1.01 9.345 9.345 0 002.625-.372m3-13.062a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm1.5 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            )
        },
        {
            title: "Private Site Visits",
            value: "18",
            trend: "4 scheduled today",
            isPositive: true,
            icon: (
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
            )
        },
        {
            title: "Gross Revenue",
            value: "₹4.2 Cr",
            trend: "+18.4% this MoM",
            isPositive: true,
            icon: (
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.214.116c.856.465 1.966.629 3.036.372a3.637 3.637 0 002.515-3.111 3.637 3.637 0 00-2.515-3.111 3.636 3.636 0 00-3.036-.372 3.637 3.637 0 01-2.515-3.111 3.637 3.637 0 012.515-3.111c1.07-.257 2.18-.093 3.036.372l.214.116" />
                </svg>
            )
        }
    ];

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="relative bg-[#0D0D0D]/40 backdrop-blur-md rounded-xl p-4 border border-white/5 shadow-md flex flex-col justify-between overflow-hidden group"
                >
                    {/* Top Decorative Card Line */}
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#D4AF37]/40 group-hover:w-full transition-all duration-500 ease-out" />

                    {/* TOP INFO LINE */}
                    <div className="flex justify-between items-start gap-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 group-hover:text-stone-400 transition-colors">
                            {stat.title}
                        </p>
                        <div className="bg-white/5 p-2 rounded-lg border border-white/5 shrink-0 shadow-inner">
                            {stat.icon}
                        </div>
                    </div>

                    {/* MAIN GRAPHIC NUMBERS */}
                    <div className="mt-4">
                        <h2 className="text-2xl font-black tracking-tight text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                            {stat.value}
                        </h2>

                        {/* MICRO ANALYTICS TREND TEXT */}
                        <p className="text-[10px] text-emerald-400 font-medium tracking-wide mt-1 flex items-center gap-1">
                            <span className="text-[8px]">▲</span> {stat.trend}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DashboardStats;