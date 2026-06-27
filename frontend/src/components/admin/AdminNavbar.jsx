function AdminNavbar() {
    return (
        <div className="bg-[#0D0D0D]/40 backdrop-blur-md px-6 sm:px-8 py-4 flex justify-between items-center border-b border-white/5 sticky top-0 z-40 text-white">

            {/* BRAND SUBTITLE / CONSOLE SECTION */}
            <div>
                <h2 className="text-base sm:text-lg font-bold tracking-wider text-stone-100 uppercase pl-12 sm:pl-0">
                    <span className="text-[#D4AF37] font-light">Dashboard</span>
                </h2>
            </div>

            {/* INTERACTION HUB */}
            <div className="flex items-center gap-4">

                {/* Glass Notifications Hub Trigger */}
                <button className="relative bg-white/5 hover:bg-white/10 p-2 rounded-lg border border-white/10 hover:border-[#D4AF37]/30 text-stone-400 hover:text-white transition-all cursor-pointer group focus:outline-none">
                    {/* Inline Vector Bell Icon */}
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a3 3 0 11-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>

                    {/* Unread Indicator PING */}
                    <span className="absolute top-1 right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                    </span>
                </button>

                {/* EXECUTIVE ACCOUNT BOUNDARY */}
                <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
                    <div className="hidden sm:block text-right">
                        <p className="text-xs font-semibold text-stone-200">Aditya</p>
                        <p className="text-[10px] text-stone-500 font-medium tracking-wide uppercase">Administrator</p>
                    </div>

                    {/* User Profile Frame */}
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-[#bfa032] to-[#D4AF37] p-[1px] shadow-md ring-2 ring-black/40">
                        <div className="h-full w-full bg-[#0D0D0D] rounded-[7px] flex items-center justify-center text-[11px] font-bold text-[#D4AF37]">
                            AD
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AdminNavbar;