import React from "react";

// Mock data structure tailored for Real Estate platform administrators
const users = [
    {
        id: 1,
        name: "Vikram Malhotra",
        email: "vikram@luxuryestates.in",
        role: "Agent",
        status: "Active",
        joinedDate: "12 May 2025"
    },
    {
        id: 2,
        name: "Ananya Deshmukh",
        email: "ananya.d@gmail.com",
        role: "Client / Buyer",
        status: "Active",
        joinedDate: "04 Jan 2026"
    },
    {
        id: 3,
        name: "Rohan Mehta",
        email: "rohan.mehta@outlook.com",
        role: "Agent",
        status: "Suspended",
        joinedDate: "18 Aug 2024"
    }
];

const getStatusStyles = (status) => {
    switch (status) {
        case "Active":
            return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
        case "Suspended":
            return "bg-rose-500/10 text-rose-400 border-rose-500/20";
        default:
            return "bg-stone-500/10 text-stone-400 border-stone-500/20";
    }
};

const getRoleStyles = (role) => {
    return role === "Agent"
        ? "text-[#D4AF37] bg-[#D4AF37]/5 border-[#D4AF37]/10"
        : "text-stone-300 bg-white/[0.02] border-white/5";
};

function UserManagement() {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 px-1">

            {/* COMPONENT SUB-HEADER */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                    <h1 className="text-xl font-black uppercase tracking-wider text-white">
                        User Registry
                    </h1>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-0.5">
                        Access Control & Account Privileges
                    </p>
                </div>

                <button className="sm:self-center bg-[#D4AF37] text-stone-950 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#bfa032] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)] cursor-pointer">
                    + Provision User
                </button>
            </div>

            {/* QUICK FILTERS BLOCK */}
            <div className="bg-[#111111] p-4 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search by name, email, or signature keys..."
                            className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-stone-500 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-200"
                        />
                    </div>
                    <div className="w-full sm:w-48">
                        <select
                            className="w-full bg-white/[0.03] border border-white/10 text-stone-400 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-200 cursor-pointer appearance-none"
                            style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(168,162,158,0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundPosition: 'right 16px center', backgroundSize: '14px', backgroundRepeat: 'no-repeat' }}
                        >
                            <option className="bg-[#111111] text-white">All System Roles</option>
                            <option className="bg-[#111111] text-white">Agents</option>
                            <option className="bg-[#111111] text-white">Clients / Buyers</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* RESPONSIVE DATA TABLE INDEX */}
            <div className="bg-[#111111] border border-white/10 rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/[0.01]">
                                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">Identified User</th>
                                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">Security Clearance</th>
                                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">Status</th>
                                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">Registration Date</th>
                                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-stone-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-xs">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-white/[0.01] transition-colors group">
                                    {/* User Profiling Block */}
                                    <td className="p-4">
                                        <div className="font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-200">
                                            {user.name}
                                        </div>
                                        <div className="text-stone-500 font-mono text-[11px] mt-0.5">
                                            {user.email}
                                        </div>
                                    </td>

                                    {/* System Authority Level */}
                                    <td className="p-4">
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium tracking-wide border ${getRoleStyles(user.role)}`}>
                                            {user.role}
                                        </span>
                                    </td>

                                    {/* Operational Flag */}
                                    <td className="p-4">
                                        <span className={`px-2 py-0.5 rounded text-[9px] font-black tracking-widest uppercase border ${getStatusStyles(user.status)}`}>
                                            {user.status}
                                        </span>
                                    </td>

                                    {/* Historical Meta */}
                                    <td className="p-4 text-stone-400 font-medium">
                                        {user.joinedDate}
                                    </td>

                                    {/* Controls Menu */}
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="w-7 h-7 rounded bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-stone-400 hover:text-white transition-all cursor-pointer">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default UserManagement;