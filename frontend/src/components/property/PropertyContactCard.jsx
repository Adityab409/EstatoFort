import { useState } from "react";
import LoginModal from "../auth/LoginModal";

function PropertyContactCard({ property }) {
    const [showLogin, setShowLogin] = useState(false);

    const inputClass = "w-full bg-white/[0.02] text-stone-200 placeholder-stone-600 border border-white/10 rounded-xl px-4 py-3.5 mb-4 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all duration-200 text-sm font-light";

    return (
        <>
            <div className="bg-[#0D0D0D]/90 border border-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl lg:sticky lg:top-28">

                {/* PRICE METRIC */}
                <p className="text-stone-500 text-xs uppercase tracking-widest font-medium">
                    Investment Value
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mt-1 tracking-tight">
                    {property.price}
                </h2>

                {/* THEMED METALLIC DIVIDER */}
                <div className="border-t border-white/5 my-6" />

                {/* FORM CONSOLE HEADER */}
                <h3 className="text-lg font-semibold mb-6 text-white tracking-wide">
                    Request Concierge Callback
                </h3>

                {/* INTERACTIVE INPUT FIELD FIELDS */}
                <input
                    type="text"
                    placeholder="Your Name"
                    className={inputClass}
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    className={inputClass}
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    className={`${inputClass} mb-6`} // Swaps out custom separation gap natively
                />

                {/* CALL TO ACTION CONSOLE */}
                <button
                    onClick={() => alert("Lead Portfolio Logged Successfully")}
                    className="w-full bg-gradient-to-r from-[#D4AF37] via-[#E6C35C] to-[#D4AF37] text-black py-4 rounded-xl font-semibold hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.15)] text-sm tracking-wide uppercase"
                >
                    Get Free Consultation
                </button>

                {/* METRIC FOOTNOTE TRUST OVERLAY */}
                <p className="text-center text-xs text-stone-500 mt-4 font-light tracking-wide flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Response Time: Within 15 Minutes
                </p>

            </div>

            {/* KEEP MODAL INSTANTIATION TRACKING IF LINKED SEAMLESSLY */}
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </>
    );
}

export default PropertyContactCard;