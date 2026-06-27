import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: "Navigation",
            links: [
                { name: "Home", path: "/" },
                { name: "Properties", path: "/properties" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" }
            ]
        },
        {
            title: "Admin Services",
            links: [
                { name: "Admin Portal", path: "/admin" },
                { name: "Lead Manager", path: "/admin" },
                { name: "Property Manager", path: "/admin" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", path: "/" },
                { name: "Terms of Service", path: "/" },
                { name: "RERA Details", path: "/" }
            ]
        }
    ];

    return (
        <footer className="relative bg-[#050505] text-stone-300 border-t border-white/5 overflow-hidden z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

                {/* Brand / Info column */}
                <div className="lg:col-span-2 space-y-6">
                    <Link to="/" className="text-2xl font-bold tracking-tight text-white select-none">
                        Estato<span className="text-[#D4AF37]">Fort</span>
                    </Link>
                    <p className="text-sm font-light text-stone-500 max-w-sm leading-relaxed">
                        Curating exceptional residential properties and architectural masterpieces in prime Indian locations with total transparency.
                    </p>
                    <div className="flex gap-4">
                        {[
                            { icon: <FaFacebookF size={14} />, url: "#" },
                            { icon: <FaTwitter size={14} />, url: "#" },
                            { icon: <FaInstagram size={14} />, url: "#" },
                            { icon: <FaLinkedinIn size={14} />, url: "#" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                className="w-8 h-8 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center hover:bg-white/5 hover:text-white transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link Columns */}
                {sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                        <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-widest">
                            {section.title}
                        </h4>
                        <ul className="space-y-2 text-sm font-light">
                            {section.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Newsletter Column */}
                <div className="lg:col-span-1 space-y-4">
                    <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-widest">
                        Updates
                    </h4>
                    <p className="text-xs font-light text-stone-500 leading-relaxed">
                        Subscribe to our newsletter for exclusive estate launch details.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-3 py-2 text-xs rounded-xl bg-white/[0.03] border border-white/5 focus:border-amber-500/50 text-white placeholder-stone-600 outline-none transition-all"
                        />
                        <button
                            type="submit"
                            className="w-full bg-white text-neutral-950 hover:bg-stone-200 font-bold text-[10px] uppercase tracking-wider py-2 rounded-xl transition duration-300 cursor-pointer select-none"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            <div className="border-t border-white/5 py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-stone-600">
                    <p>© {currentYear} EstateFlow Private Limited. All rights reserved.</p>
                    <p className="flex gap-4">
                        <a href="#" className="hover:text-stone-400">RERA Registration No. PRM/KA/RERA/1251</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;