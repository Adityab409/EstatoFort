function LoginModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* MODAL HOUSING - Glassmorphic Architectural Frame */}
            <div
                className="relative bg-[#0D0D0D]/90 backdrop-blur-xl rounded-2xl p-6 w-full max-w-sm border border-white/10 text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]"
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the card
            >
                {/* Micro Close Button (Top Right Cross) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors cursor-pointer"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* HEADER SECTION */}
                <div className="text-center mb-6 mt-2">
                    <h2 className="text-xl font-bold tracking-tight text-stone-100 uppercase">
                        Welcome <span className="text-[#D4AF37]">Back</span>
                    </h2>
                    <p className="text-stone-400 text-xs font-light mt-1 max-w-[280px] mx-auto leading-relaxed">
                        Save properties, schedule private tours, and manage your portfolio.
                    </p>
                </div>

                {/* FORM INPUTS */}
                <div className="space-y-3.5">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                    />
                </div>

                {/* PRIMARY CTA BUTTON */}
                <button
                    className="w-full bg-[#D4AF37] hover:bg-[#bfa032] text-neutral-950 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider mt-5 shadow-lg active:scale-[0.99] transition-all cursor-pointer"
                >
                    Sign In
                </button>

                {/* SEPARATOR RAIL */}
                <div className="flex items-center my-5">
                    <div className="flex-1 h-px bg-white/5"></div>
                    <span className="px-3 text-[10px] tracking-widest text-stone-500 font-bold">
                        OR
                    </span>
                    <div className="flex-1 h-px bg-white/5"></div>
                </div>

                {/* SWITCH MODE TOGGLE */}
                <p className="text-center text-xs text-stone-400 font-light">
                    Don't have an account?
                    <button
                        className="text-[#D4AF37] hover:text-[#bfa032] font-semibold ml-1.5 transition-colors underline underline-offset-4 decoration-[#D4AF37]/30 cursor-pointer"
                    >
                        Create Account
                    </button>
                </p>
            </div>
        </div>
    );
}

export default LoginModal;