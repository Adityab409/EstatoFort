import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Button from "./Button";

function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Monitor scroll position
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    // Automatically collapse mobile drawer if the window expands to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isTransparentTheme = isHomePage && !isScrolled;

    const menuListVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 15, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 pointer-events-none">
            <motion.header
                // Animates smoothly into an interactive floating oval pill
                animate={{
                    height: isScrolled ? "56px" : "72px",
                    maxWidth: isScrolled ? "1024px" : "1200px",
                    backgroundColor: isTransparentTheme ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.85)",
                    backdropFilter: isTransparentTheme ? "blur(4px)" : "blur(16px)",
                    boxShadow: isScrolled ? "0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" : "none",
                    borderColor: isTransparentTheme ? "rgba(255, 255, 255, 0.15)" : "rgba(241, 245, 249, 0.8)"
                }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="mx-auto w-full pointer-events-auto rounded-full border flex items-center justify-between px-8 text-[#0F172A] relative"
            >
                {/* LOGO */}
                <Link to="/" className="relative group text-xl md:text-2xl font-bold tracking-tight shrink-0">
                    <motion.span
                        animate={{ color: isTransparentTheme ? "#FFFFFF" : "#0F172A" }}
                        transition={{ duration: 0.3 }}
                    >
                        Estato<span className="text-[#D4AF37]">Fort</span>
                    </motion.span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden md:flex items-center gap-8 font-medium">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Properties", path: "/properties" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact" }
                    ].map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="relative py-1 transition-colors duration-200 text-sm md:text-base"
                        >
                            <motion.span
                                animate={{ color: isTransparentTheme ? "#E2E8F0" : "#334155" }}
                                whileHover={{ color: "#D4AF37" }}
                                transition={{ duration: 0.2 }}
                            >
                                {link.name}
                            </motion.span>
                            {location.pathname === link.path && (
                                <motion.span
                                    layoutId="activeIndicator"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* CALL TO ACTION BUTTON */}
                <div className="hidden md:block">
                    <Button
                        className="transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-sm font-semibold text-sm px-5 py-2 rounded-full"
                        style={{
                            backgroundColor: isScrolled ? "#D4AF37" : "#FDE047",
                            color: "#000000"
                        }}
                    >
                        Schedule Visit
                    </Button>
                </div>

                {/* MOBILE MENU TOGGLE ICON */}
                <button
                    className="md:hidden relative z-50 flex items-center justify-center p-2 rounded-full focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-5 h-5" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                        <motion.path
                            stroke={isMenuOpen ? "#0F172A" : (isTransparentTheme ? "#FFFFFF" : "#0F172A")}
                            animate={isMenuOpen ? { d: "M6 18L18 6" } : { d: "M4 6h16" }}
                            transition={{ duration: 0.3 }}
                            strokeLinecap="round"
                        />
                        <motion.path
                            stroke={isMenuOpen ? "#0F172A" : (isTransparentTheme ? "#FFFFFF" : "#0F172A")}
                            animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1, d: "M4 12h16" }}
                            transition={{ duration: 0.2 }}
                            strokeLinecap="round"
                        />
                        <motion.path
                            stroke={isMenuOpen ? "#0F172A" : (isTransparentTheme ? "#FFFFFF" : "#0F172A")}
                            animate={isMenuOpen ? { d: "M6 6l12 12" } : { d: "M4 18h16" }}
                            transition={{ duration: 0.3 }}
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                {/* INTERACTIVE MOBILE DRAWER */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="absolute top-14 left-0 w-full bg-white/95 backdrop-blur-xl pt-10 pb-6 px-8 shadow-xl flex flex-col justify-between md:hidden z-40 rounded-[2rem] border border-slate-100"
                        >
                            <motion.div
                                variants={menuListVariants}
                                initial="hidden"
                                animate="show"
                                className="flex flex-col gap-4 text-lg font-semibold tracking-wide"
                            >
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "Properties", path: "/properties" },
                                    { name: "About", path: "/about" },
                                    { name: "Contact", path: "/contact" }
                                ].map((link) => (
                                    <motion.div key={link.path} variants={itemVariants}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`block py-1.5 transition-colors ${location.pathname === link.path ? "text-[#D4AF37]" : "text-slate-800"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="w-full mt-6"
                            >
                                <Button
                                    className="w-full text-center py-3 rounded-full bg-[#D4AF37] text-black font-semibold text-sm shadow-md active:scale-[0.99] transition-transform"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Schedule Visit
                                </Button>
                            </motion.div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.header>
        </div>
    );
}

export default Navbar;