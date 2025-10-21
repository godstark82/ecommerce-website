import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/shopify";
import { Product } from "@/lib/shopify/types";
import { Calendar } from "lucide-react";
import Link from "next/link";
import ProductCard from "./product-card";



export default async function NewArrivals() {
  let newArrivals: Product[] = [];

  try {
    // Fetch featured products from Shopify
    newArrivals = await getProducts({
      query: 'tag:new',
      sortKey: 'BEST_SELLING',
      reverse: false,
    });
  } catch (err) {
    console.error("Error fetching featured products:", err);
  }

  const hasProducts = newArrivals.length > 0;
  return (
    <section className="py-16 md:py-20 bg-background" aria-label="New Arrivals">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              New Arrivals
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Fresh finds just landed! Be the first to discover our latest additions
          </p>
        </div>

        {/* Products Grid */}
        {hasProducts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {newArrivals.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-base md:text-lg">
            No new products available at the moment.
          </p>
        )}

        {/* View All Button */}
        {hasProducts && <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/collections/new-arrivals">
              View All New Arrivals
            </Link>
          </Button>
        </div>}
      </div>
    </section>
  );
}