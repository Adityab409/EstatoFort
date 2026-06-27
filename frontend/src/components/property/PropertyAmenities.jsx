function PropertyAmenities() {
    // Array with custom crisp minimalist SVG path templates
    const amenities = [
        {
            name: "Swimming Pool",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h19.5M2.25 15.75h19.5M2.25 19.5h19.5M4.5 8.25V6a2.25 2.25 0 0 1 2.25-2.25h10.5A2.25 2.25 0 0 1 19.5 6v2.25" />
                </svg>
            )
        },
        {
            name: "Premium Gym",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6h16.5M6.75 6v12m10.5-12v12M2.25 12h1.5m16.5 0h1.5" />
                </svg>
            )
        },
        {
            name: "Exclusive Club House",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-3.75h16.5M5.25 7.5V13.5m13.5-6V13.5m-10.5-6V13.5m7.5-6V13.5M12 3v4.5M3 7.5h18" />
                </svg>
            )
        },
        {
            name: "Children's Play Park",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75Zm6 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
                </svg>
            )
        },
        {
            name: "24/7 Smart Security",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
            )
        },
        {
            name: "Reserved Parking",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h7.5m3 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.5m-1.5-3v-1.125c0-1.036-.84-1.875-1.875-1.875H5.625c-1.036 0-1.875.84-1.875 1.875v1.125m16.5 0h1.5m-1.5 0h-1.5m-13.5 0H3.75m1.5 0h13.5M9 10.5h6" />
                </svg>
            )
        }
    ];

    return (
        <div className="bg-[#0D0D0D]/90 border border-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl">

            <h2 className="text-xl font-bold mb-6 text-white tracking-tight">
                Premium Amenities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((item) => (
                    <div
                        key={item.name}
                        className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/[0.04] group"
                    >
                        {/* Vector Icon Housing */}
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-stone-400 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300 shrink-0">
                            {item.icon}
                        </div>

                        {/* Text Label */}
                        <span className="text-stone-300 group-hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default PropertyAmenities;