import properties from "../../data/properties";
import PropertyCard from "./PropertyCard";

function RelatedProperties({ currentPropertyId }) {
    // Basic filter to find other properties (can be updated to filter by builder or location if your data structure allows)
    const relatedProperties = properties
        .filter((property) => property.id !== currentPropertyId)
        .slice(0, 3);

    return (
        <section className="mt-20 max-w-7xl mx-auto px-4">
            {/* THEMED TITLE HEADER */}
            <div className="mb-10 border-l-2 border-[#D4AF37] pl-4">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-100 uppercase">
                    Related <span className="text-[#D4AF37]">Properties</span>
                </h2>
                <p className="text-stone-400 text-xs sm:text-sm font-light mt-1 tracking-wide">
                    Explore similar elite investments from our exclusive collection.
                </p>
            </div>

            {/* COMPACT ARCHITECTURAL GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-stretch">
                {relatedProperties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                    />
                ))}
            </div>
        </section>
    );
}

export default RelatedProperties;