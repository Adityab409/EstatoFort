import React from "react";

function Button({ children, variant = "primary", className = "", ...props }) {
    const baseStyles = "inline-flex items-center justify-center font-semibold tracking-tight rounded-xl transition-all duration-200 cursor-pointer select-none outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
        primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-2 focus:ring-slate-500/20 px-6 py-3 text-sm",
        secondary: "border border-slate-200 bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 focus:ring-2 focus:ring-slate-200 px-6 py-3 text-sm",
        minimal: "text-slate-600 hover:text-slate-900 px-4 py-2 text-sm",
        accent: "bg-[#D4AF37] text-slate-900 hover:bg-[#bfa032] focus:ring-2 focus:ring-[#D4AF37]/20 px-6 py-3 text-sm",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;