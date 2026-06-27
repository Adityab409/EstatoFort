import React from "react";

function Settings() {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 px-1">

            {/* COMPONENT SUB-HEADER */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                    <h1 className="text-xl font-black uppercase tracking-wider text-white">
                        Console Settings
                    </h1>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-0.5">
                        System Configuration & Branding Controls
                    </p>
                </div>

                <button className="sm:self-center bg-[#D4AF37] text-stone-950 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#bfa032] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)] cursor-pointer">
                    Save Changes
                </button>
            </div>

            {/* TWO-COLUMN CONFIGURATION GRID */}
            <div className="grid md:grid-cols-3 gap-6">

                {/* LEFT NAVIGATION PROFILE SUMMARY */}
                <div className="md:col-span-1 space-y-4">
                    <div className="bg-[#111111] p-5 rounded-2xl border border-white/10 shadow-lg text-center relative overflow-hidden group">
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-stone-400 group-hover:border-[#D4AF37]/40 transition-colors duration-300">
                            <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.963-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>

                        <h3 className="text-white font-bold text-sm mt-3 tracking-tight">Admin Console</h3>
                        <p className="text-stone-500 font-mono text-[10px] mt-0.5 uppercase tracking-wider">Root Account</p>
                    </div>
                </div>

                {/* RIGHT SYSTEM INPUT FIELDS */}
                <div className="md:col-span-2 space-y-6">

                    {/* SECTION 1: CORE AGENCY PROFILING */}
                    <div className="bg-[#111111] p-5 rounded-2xl border border-white/10 shadow-lg space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] border-b border-white/5 pb-2">
                            Agency Parameters
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Enterprise Name</label>
                                <input
                                    type="text"
                                    defaultValue="Imperial Estates"
                                    className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Support Routing Email</label>
                                <input
                                    type="email"
                                    defaultValue="operations@imperialestates.in"
                                    className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: PLATFORM PREFERENCES & TOGGLES */}
                    <div className="bg-[#111111] p-5 rounded-2xl border border-white/10 shadow-lg space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] border-b border-white/5 pb-2">
                            System Preferences
                        </h2>

                        <div className="divide-y divide-white/5">
                            {/* Toggle Row 1 */}
                            <div className="flex justify-between items-center py-3 first:pt-0">
                                <div>
                                    <h4 className="text-xs font-bold text-stone-200">Lead Assignment Dispatches</h4>
                                    <p className="text-[11px] text-stone-500 mt-0.5">Alert regional agents immediately when new customer queries register.</p>
                                </div>
                                <div className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" id="toggle-leads" />
                                    <div className="w-8 h-4 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-stone-950 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-stone-400 peer-checked:after:bg-[#D4AF37] after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#D4AF37]/10" />
                                </div>
                            </div>

                            {/* Toggle Row 2 */}
                            <div className="flex justify-between items-center py-3 last:pb-0">
                                <div>
                                    <h4 className="text-xs font-bold text-stone-200">Automated Financial Reports</h4>
                                    <p className="text-[11px] text-stone-500 mt-0.5">Compile gross metrics to PDF archives on monthly cycles.</p>
                                </div>
                                <div className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" id="toggle-reports" />
                                    <div className="w-8 h-4 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-stone-950 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-stone-400 peer-checked:after:bg-[#D4AF37] after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#D4AF37]/10" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Settings;