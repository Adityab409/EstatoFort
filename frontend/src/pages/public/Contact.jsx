import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
    const fadeInUp = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
    });

    const inputClass = "w-full p-4 bg-white/[0.02] text-stone-200 placeholder-stone-600 border border-white/10 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition duration-200 text-sm";
    const labelClass = "block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2";

    return (
        <section className="min-h-screen bg-[#050505] text-white pt-36 pb-24 relative overflow-hidden">

            {/* Background Grid & Luxury Ambient Radial Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_600px_at_right_top,rgba(212,175,55,0.04),transparent)] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

                {/* Header Title Grid */}
                <div className="max-w-3xl mb-16 text-left">
                    <motion.div
                        {...fadeInUp(0)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-6"
                    >
                        <span className="text-[#D4AF37]">✦</span> Private Concierge
                    </motion.div>

                    <motion.h1
                        {...fadeInUp(0.1)}
                        className="text-4xl sm:text-5xl font-bold tracking-tight leading-none"
                    >
                        Initiate a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#D4AF37] to-amber-500">Consultation</span>
                    </motion.h1>

                    <motion.p
                        {...fadeInUp(0.2)}
                        className="mt-4 text-base text-stone-400 font-light max-w-xl leading-relaxed"
                    >
                        Whether acquiring a signature estate or exploring off-market portfolios, our advisory team ensures complete operational discretion.
                    </motion.p>
                </div>

                {/* Main Content Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT COLUMN: CONCIERGE DIRECT CONNECT */}
                    <motion.div
                        {...fadeInUp(0.3)}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium tracking-wide text-stone-200">
                                HQ Operations
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-[#D4AF37] shrink-0">
                                        <FaMapMarkerAlt size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Address</p>
                                        <p className="text-sm text-stone-300 mt-1 font-light leading-relaxed">
                                            Level 7, ICC Trade Tower, Senapati Bapat Road,<br />
                                            Pune, Maharashtra 411016
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-[#D4AF37] shrink-0">
                                        <FaPhoneAlt size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Private Line</p>
                                        <p className="text-sm text-stone-300 mt-1 font-light tracking-wide">+91 20 4911 8800</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-[#D4AF37] shrink-0">
                                        <FaEnvelope size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Electronic Mail</p>
                                        <p className="text-sm text-stone-300 mt-1 font-light tracking-wide hover:text-[#D4AF37] transition cursor-pointer">
                                            concierge@estatofort.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-[#D4AF37] shrink-0">
                                        <FaClock size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Availability</p>
                                        <p className="text-sm text-stone-300 mt-1 font-light">Mon — Sat: 09:00 AM – 07:00 PM IST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subtle security/discretion clause footer */}
                        <div className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl">
                            <p className="text-xs text-stone-500 leading-relaxed font-light">
                                <strong className="text-stone-400 font-medium">Data Privacy Protocol:</strong> Information submitted via this gateway encrypts under SSL standards and routes directly to an assigned portfolio manager. No public brokers are looped in.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: PREMIUM GLASS INQUIRY FORM */}
                    <motion.div
                        {...fadeInUp(0.4)}
                        className="lg:col-span-7 bg-white/[0.01] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] hover:border-white/15 transition-all duration-300"
                    >
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className={labelClass}>Full Name</label>
                                    <input type="text" placeholder="John Doe" className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Direct Phone</label>
                                    <input type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>Secure Email Address</label>
                                <input type="email" placeholder="john@example.com" className={inputClass} />
                            </div>

                            <div>
                                <label className={labelClass}>Interested Asset Profile</label>
                                <select className="w-full p-4 bg-[#0f0f0f] text-stone-300 border border-white/10 rounded-xl focus:outline-none focus:border-[#D4AF37] transition duration-200 text-sm cursor-pointer appearance-none">
                                    <option value="">Select Asset Focus...</option>
                                    <option value="penthouse">Premium Penthouses & Apartments</option>
                                    <option value="villa">Bespoke Villas & Estates</option>
                                    <option value="commercial">Commercial/High-Yield Assets</option>
                                    <option value="other">Off-Market Land Allocations</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelClass}>Portfolio Requirements / Messages</label>
                                <textarea
                                    rows={4}
                                    placeholder="Outline your specific location parameters or investment scope..."
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-semibold text-sm py-4 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.15)] active:scale-[0.99]"
                            >
                                Submit Request to Executive Desk
                            </button>
                        </form>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Contact;