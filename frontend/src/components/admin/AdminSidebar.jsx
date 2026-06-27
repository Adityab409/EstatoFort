import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
    const location = useLocation();
    // State to handle mobile menu open/close
    const [isOpen, setIsOpen] = useState(false);

    // Helper function to handle active navigation accenting
    const isActivePath = (path) => location.pathname === path;

    const navItems = [
        {
            label: "Dashboard",
            to: "/admin",
            icon: (
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            )
        },
        {
            label: "Properties",
            to: "/admin/properties-management",
            icon: (
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12" />
                </svg>
            )
        },
        {
            label: "Leads",
            to: "/admin/lead-management",
            icon: (
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.942-6.942l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            )
        },
        {
            label: "Users",
            to: "/admin/users-management",
            icon: (
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-2.533-3.076m-10.5 0a4.125 4.125 0 00-2.533 3.076 9.317 9.317 0 004.12 1.01 9.345 9.345 0 002.625-.372m3-13.062a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm1.5 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            )
        },
        {
            label: "Settings",
            to: "/admin/settings",
            icon: (
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.242-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827a1.125 1.125 0 01.26 1.43l-1.297 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.354-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.241.437-.613.43-.992a7.723 7.723 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ];

    return (
        <>
            {/* BURGER MENU TRIGGER BUTTON (Visible only on mobile/tablets) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#090909] border border-white/10 text-white hover:text-[#D4AF37] focus:outline-none transition-all"
                aria-label="Toggle Sidebar"
            >
                {isOpen ? (
                    // Close Icon X
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Hamburger Menu Icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* DARK BACKDROP OVERLAY (Closes menu when clicking outside on mobile) */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
                />
            )}

            {/* SIDEBAR WRAPPER */}
            <aside
                className={`
                    w-64 min-h-screen bg-[#090909] border-r border-white/5 p-5 flex flex-col justify-between text-white select-none shrink-0
                    fixed top-0 bottom-0 left-0 z-40 transition-transform duration-300 ease-in-out
                    lg:static lg:translate-x-0 
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                {/* BRAND HEADER LAYER */}
                <div>
                    <div className="px-3 py-4 mb-8 border-b border-white/5 flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-black tracking-widest text-white uppercase flex items-center gap-2">
                                Estato<span className="text-[#D4AF37]">Fort</span>
                            </h1>
                            <span className="text-[9px] uppercase font-bold tracking-widest text-stone-500 block mt-0.5">
                                Enterprise Console
                            </span>
                        </div>
                    </div>

                    {/* DYNAMIC ROUTE HUB */}
                    <nav className="space-y-1">
                        {navItems.map((item) => {
                            const active = isActivePath(item.to);
                            return (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setIsOpen(false)} // Closes mobile menu after navigating
                                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 group ${active
                                        ? "bg-white/5 text-[#D4AF37] border-l-2 border-[#D4AF37] pl-2.5"
                                        : "text-stone-400 hover:text-white hover:bg-white/[0.02]"
                                        }`}
                                >
                                    <span className={`transition-colors duration-200 ${active ? "text-[#D4AF37]" : "text-stone-500 group-hover:text-stone-300"
                                        }`}>
                                        {item.icon}
                                    </span>
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* EXIT CONTROLS FOOTER */}
                <div className="pt-4 border-t border-white/5">
                    <button className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-red-950/20 hover:bg-red-900/30 border border-red-900/20 text-red-400 hover:text-red-300 transition-all duration-200 cursor-pointer active:scale-[0.99]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        Logout System
                    </button>
                </div>
            </aside>
        </>
    );
}

export default AdminSidebar;