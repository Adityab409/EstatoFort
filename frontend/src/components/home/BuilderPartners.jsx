import { motion } from "framer-motion";
import LogoLoop from "../common/LogoLoop";

const builders = [
    { name: "Godrej Properties", logo: "https://companieslogo.com/img/orig/GODREJPROP.NS-202094de.png?t=1720244492" },
    { name: "Lodha Group", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Lodha---New-LOgo.png?_=20220103050849" },
    { name: "Prestige Group", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Prestige_Group.svg/960px-Prestige_Group.svg.png" },
    { name: "Kolte Patil", logo: "https://koltepatil.homes/wp-content/uploads/elementor/thumbs/kolte-patil-logo-rcpgp1xyvxb5hih8opje2x6hhltmrrhei3cbd69mxq.webp" },
    { name: "Shapoorji Pallonji", logo: "https://upload.wikimedia.org/wikipedia/en/5/55/Shapoorji_Pallonji_Group_logo.svg" },
    { name: "Sobha Limited", logo: "https://urbanmetroventures.com/wp-content/uploads/2024/02/unnamed.png" }
];

function BuilderPartners() {
    return (
        <section className="bg-[#050505] border-t border-white/5 py-20 relative z-10 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-stone-200 tracking-tight">
                        Trusted Builder Partners
                    </h2>
                    <p className="text-xs text-stone-500 mt-2 tracking-wide uppercase font-semibold">
                        Collaborating with India's premier real estate brands
                    </p>
                </div>

                {/* FIX: Removed the grid wrapper so the loop occupies full width */}
                <div className="w-full relative">
                    <LogoLoop logos={builders.map(b => b.logo)} />
                </div>

            </div>
        </section>
    );
}

export default BuilderPartners;