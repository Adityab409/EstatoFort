import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import properties from "../../data/properties";

import PropertyGallery from "../../components/property/PropertyGallery";
import PropertyOverview from "../../components/property/PropertyOverview";
import PropertyAmenities from "../../components/property/PropertyAmenities";
import PropertyContactCard from "../../components/property/PropertyContactCard";
import PropertyHighlights from "../../components/property/PropertyHighlights";
import RelatedProperties from "../../components/property/RelatedProperties";

function PropertyDetails() {
    const { id } = useParams();



    const property = properties.find(
        (item) => item.id === Number(id)
    );

    // Premium Bezier easing curve matching your main sections
    const fadeInUp = (delay = 0) => ({
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
    });

    // Elegant Theme-compliant Error State
    if (!property) {
        return (
            <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative text-white px-6">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_400px_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />

                <motion.div {...fadeInUp(0)} className="text-center z-10 space-y-4">
                    <span className="text-[#D4AF37] text-sm tracking-widest font-semibold uppercase">Error 404</span>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Asset Profile Disconnected</h1>
                    <p className="text-stone-400 font-light max-w-sm mx-auto text-sm">
                        The requested property portfolio cannot be retrieved or has been reassigned to private status.
                    </p>
                </motion.div>
            </div>
        );
    }

    return (
        <section className="bg-[#050505] text-white pt-36 pb-24 relative overflow-hidden min-h-screen">

            {/* Structural Background Architectural Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-[700px] h-[600px] bg-[radial-gradient(circle_600px_at_top,rgba(212,175,55,0.04),transparent)] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

                {/* 1. MEDIA GALLERY DECK */}
                <motion.div {...fadeInUp(0)}>
                    <PropertyGallery property={property} />
                </motion.div>

                {/* 2. DUAL COLUMN LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12 items-start">

                    {/* LEFT COLUMN: PRIMARY DATA DOCK */}
                    <div className="lg:col-span-2 space-y-12">
                        <motion.div {...fadeInUp(0.1)}>
                            <PropertyOverview property={property} />
                        </motion.div>

                        <motion.div {...fadeInUp(0.2)}>
                            <PropertyHighlights property={property} />
                        </motion.div>

                        <motion.div {...fadeInUp(0.3)}>
                            <PropertyAmenities property={property} />
                        </motion.div>

                        <motion.div {...fadeInUp(0.4)} className="pt-8 border-t border-white/5">
                            <RelatedProperties currentPropertyId={property.id} />
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: STICKY CONCIERGE CARD */}
                    <motion.div
                        {...fadeInUp(0.25)}
                        className="lg:sticky lg:top-28 z-20"
                    >
                        <PropertyContactCard property={property} />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default PropertyDetails;