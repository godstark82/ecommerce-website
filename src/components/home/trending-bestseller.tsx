// components/sections/TrendingBestSellers.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProducts } from "@/lib/shopify";
import { Product } from "@/lib/shopify/types";
import { Crown, TrendingUp } from "lucide-react";
import Link from "next/link";
import ProductCard from "./product-card";
export default async function TrendingBestSellers() {
  let trendingProducts: Product[] = [];
  let bestSellerProducts: Product[] = [];

  try {
    const [trending, bestsellers] = await Promise.all([
      getProducts({
        sortKey: 'CREATED_AT',
        reverse: true,
        // first: 12
      }),
      getProducts({
        sortKey: 'BEST_SELLING',
        reverse: false,
        // first: 12
      })
    ]);

    trendingProducts = trending;
    bestSellerProducts = bestsellers;
  } catch (err) {
    console.error("Error fetching trending/bestseller products:", err);
  }

  const hasTrendingProducts = trendingProducts.length > 0;
  const hasBestSellerProducts = bestSellerProducts.length > 0;

  return (
    <section className="py-16 md:py-20 bg-muted/30" aria-label="Trending and Best Sellers">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What's Hot Right Now
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Discover what everyone's talking about and our top-performing products
          </p>
        </div>

        {/* Tabs for Trending vs Best Sellers */}
        <Tabs defaultValue="trending" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="trending" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending Now
              </TabsTrigger>
              <TabsTrigger value="bestsellers" className="flex items-center gap-2">
                <Crown className="h-4 w-4" />
                Best Sellers
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Trending Products */}
          <TabsContent value="trending">
            {hasTrendingProducts ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {trendingProducts.slice(0, 8).map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showRank={true}
                    rank={index + 1}
                    // showType={true}
                    // type="trending"
                    // showRating={true}
                    // rating={4.5}
                    // variant="compact"
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground text-base md:text-lg">
                No trending products available at the moment.
              </p>
            )}
          </TabsContent>

          {/* Best Sellers */}
          <TabsContent value="bestsellers">
            {hasBestSellerProducts ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {bestSellerProducts.slice(0, 8).map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showRank={true}
                    rank={index + 1}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground text-base md:text-lg">
                No bestseller products available at the moment.
              </p>
            )}
          </TabsContent>
        </Tabs>

        {/* View All Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {hasTrendingProducts && (
            <Button asChild variant="outline" size="lg">
              <Link href="/collections/all?sort_by=created-descending">
                View All Trending
              </Link>
            </Button>
          )}
          {hasBestSellerProducts && (
            <Button asChild size="lg">
              <Link href="/collections/all?sort_by=best-selling">
                View All Best Sellers
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
