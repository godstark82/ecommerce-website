// components/home/collection-showcase.tsx
import { getCollections, getCollectionProducts } from "@/lib/shopify";
import { Collection } from "@/lib/shopify/types";
import CollectionRow from "./collection-row";

export default async function CollectionShowcase() {
    let collections: Collection[] = [];

    try {
        // Fetch all collections
        collections = await getCollections();

        // Filter out homepage collections and get first 4-6 collections
        const filteredCollections = collections
            
            ; // Show 5 collections

        // If no collections, return null
        if (filteredCollections.length === 0) return null;

        return (
            <section className="py-8 md:py-10 bg-background" aria-label="Shop by Collections">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                            Shop by Collection
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                            Discover curated products from our popular collections
                        </p>
                    </div>

                    {/* Collection Rows */}
                    <div className="space-y-8">
                        {filteredCollections.map((collection, index) => (
                            <CollectionRow
                                key={collection.handle}
                                collection={collection}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Error fetching collections:", error);
        return null;
    }
}
