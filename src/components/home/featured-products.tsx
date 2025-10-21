import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/shopify";
import Link from "next/link";
import { Product } from "@/lib/shopify/types";
import ProductCard from "./product-card";

export default async function FeaturedProducts() {
  let products: Product[] = [];

  try {
    // Fetch featured products from Shopify
    products = await getProducts({
      query: 'tag:featured',
      sortKey: 'BEST_SELLING',
      reverse: false,
    });
  } catch (err) {
    console.error("Error fetching featured products:", err);
  }

  const hasProducts = products.length > 0;

  return (
    <section className="py-8 md:py-12 bg-muted/30" aria-label="Featured Products">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Compact Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Discover our handpicked selection
          </p>
        </div>

        {/* Compact Products Grid */}
        {hasProducts ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {products.slice(0, 8).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                variant="compact" 
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-sm md:text-base">
            No featured products available at the moment.
          </p>
        )}

        {/* Compact View All Button */}
        {hasProducts && (
          <div className="text-center mt-6">
            <Button asChild>
              <Link href="/products">
                View All Products
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
