import React, { useState } from "react";

function AddProperty() {
    // Form States
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        price: "",
        status: "Active",
        type: "Apartment",
        bedrooms: "3",
        bathrooms: "2",
        area: "",
        description: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            alert(`Asset "${formData.title}" registered successfully in index!`);
            setIsSubmitting(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-[#0e0e0e] p-6 lg:p-8 overflow-y-auto">
            <div className="w-full max-w-4xl mx-auto space-y-6 px-1">

                {/* BREADCRUMB HEADER */}
                <div className="flex flex-col gap-1">
                    <h2 className="text-base sm:text-lg font-bold tracking-wider text-stone-100 uppercase mb-1">
                        <span className="text-[#D4AF37] font-light"></span>
                        <span className="text-stone-500 font-light"> Add Property</span>
                    </h2>
                    <h1 className="text-xl font-black uppercase tracking-wider text-white">
                        Register Real Estate Asset
                    </h1>
                    <p className="text-xs text-stone-500 uppercase tracking-widest">
                        Input formal validation data to update the regional ledger.
                    </p>
                </div>

                {/* FORM BLOCK */}
                <form onSubmit={handleSubmit} className="bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-xl space-y-6 relative overflow-hidden">
                    {/* Decorative Top Accent Glow */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-amber-500" />

                    {/* SECTION 1: CORE DETAILED INFO */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#D4AF37] border-b border-white/5 pb-2">
                            01. Core Asset Details
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Property Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g., Luxury 3 BHK Apartment"
                                    className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-stone-600 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Location Tag</label>
                                <input
                                    type="text"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="e.g., Baner, Pune"
                                    className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-stone-600 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: METRICS & VALUATION */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#D4AF37] border-b border-white/5 pb-2">
                            02. Valuation & Inventory Parameters
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Market Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    required
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="e.g., ₹85 Lakh / ₹1.8 Cr"
                                    className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-stone-600 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Initial Asset Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full bg-[#161616] border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all cursor-pointer"
                                >
                                    <option value="Active">Active Listing</option>
                                    <option value="Under Review">Under Review</option>
                                    <option value="Sold">Sold / Legacy</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Structural Build</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full bg-[#161616] border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all cursor-pointer"
                                >
                                    <option value="Apartment">Apartment Suite</option>
                                    <option value="Villa">Premium Villa</option>
                                    <option value="Penthouse">Sky Penthouse</option>
                                    <option value="Commercial">Commercial Plot</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: SPECIFICATIONS */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#D4AF37] border-b border-white/5 pb-2">
                            03. Dimensional Specifications
                        </h3>

                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Bedrooms Count</label>
                                <input
                                    type="number"
                                    name="bedrooms"
                                    value={formData.bedrooms}
                                    onChange={handleChange}
                                    className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Bathrooms Count</label>
                                <input
                                    type="number"
                                    name="bathrooms"
                                    value={formData.bathrooms}
                                    onChange={handleChange}
                                    className="w-full bg-white/[0.03] border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>

                            <div className="w-full col-span-2 sm:col-span-1 space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Total Carpet Area</label>
                                <input
                                    type="text"
                                    name="area"
                                    required
                                    value={formData.area}
                                    onChange={handleChange}
                                    placeholder="e.g., 1,450 Sq. Ft."
                                    className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-stone-600 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SECTION 4: TEXT CONTEXT CONTAINER */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#D4AF37] border-b border-white/5 pb-2">
                            04. Public Description
                        </h3>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Market Dossier / Notes</label>
                            <textarea
                                name="description"
                                rows="4"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter exhaustive structural configurations, nearby amenities, or specific investor contractual summaries..."
                                className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-stone-600 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* FORM INTERACTIVE FOOTHOLD */}
                    <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-end items-center gap-3">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                        >
                            Cancel Process
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto bg-[#D4AF37] disabled:bg-stone-700 text-stone-950 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#bfa032] active:scale-[0.99] transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)] cursor-pointer disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Writing Asset Ledger..." : "Commit Asset Entry"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProperty;