import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCollections } from '@/lib/shopify';
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedCategories() {
  const collections = await getCollections();

  // Filter out the "All" collection and limit to 6 collections
  const featuredCollections = collections
    .filter((collection) => collection.handle !== '')
    .slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-background" aria-label="Featured Categories">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Explore our carefully curated collections across various categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {featuredCollections.map((collection: any) => (
            <Link
              key={collection.handle}
              href={collection.path}
              className="group"
              aria-label={`Browse ${collection.title} category`}
            >
              <Card className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                <CardContent className="p-0">
                  {/* Category Image */}
                  <div className="relative aspect-square overflow-hidden">
                    {collection?.image ? (
                      <Image
                        src={collection.image.url}
                        alt={collection.image.altText || `${collection.title} collection`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">
                          {collection.title}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Category Info */}
                  <div className="p-3 md:p-4 text-center">
                    <h3 className="font-semibold text-sm md:text-base text-primary mb-1">
                      {collection.title}
                    </h3>
                    {collection.description && (
                      <p className="text-xs md:text-sm text-muted-foreground mb-2 line-clamp-2">
                        {collection.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/search">
              View All Categories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
