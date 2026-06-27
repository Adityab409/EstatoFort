import properties from "../../data/properties";
import PropertyCard from "../property/PropertyCard";

function FeaturedProperties() {
    const featuredList = properties.filter((property) => property.featured);

    return (
        <section className="bg-[#050505] border-t border-white/5 py-24 relative z-10"><div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Featured Portfolio
                    </h2>
                    <p className="mt-4 text-stone-400 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                        Explore carefully curated luxury properties across India's premium developments.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredList.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturedProperties;