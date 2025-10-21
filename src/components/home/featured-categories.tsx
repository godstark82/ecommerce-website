import { Button } from "@/components/ui/button";
import { getCollections } from "@/lib/shopify";
import { Collection } from "@/lib/shopify/types";
import Link from "next/link";
import { CollectionCard } from "../collection/collection-card";

export default async function FeaturedCategories() {
  const collections = await getCollections();

  const featuredCollections = collections
    .filter((collection) => collection.handle !== "" && !collection.title.includes('homepage-'))
    .slice(0, 6);

  return (
    <section className="py-8 md:py-12 bg-background" aria-label="Featured Categories">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Compact Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Explore our curated collections
          </p>
        </div>

        {/* Compact Categories Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 justify-items-center">
          {featuredCollections.map((collection: Collection) => (
            <CollectionCard key={collection.handle} collection={collection} />
          ))}
        </div>

        {/* Compact View All Button */}
        <div className="text-center mt-6">
          <Button asChild variant="outline">
            <Link href="/search">View All</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
