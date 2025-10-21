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
    <section className="py-16 md:py-20 bg-muted/30" aria-label="Featured Products">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium products
          </p>
        </div>

        {/* Products Grid */}
        {hasProducts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-base md:text-lg">
            No featured products available at the moment.
          </p>
        )}

        {/* View All Button */}
        {hasProducts && (
          <div className="text-center mt-12">
            <Button asChild size="lg">
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
