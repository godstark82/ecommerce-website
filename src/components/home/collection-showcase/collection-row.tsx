// components/home/collection-row.tsx
import { Button } from "@/components/ui/button";
import { getCollectionProducts } from "@/lib/shopify";
import { Collection, Product } from "@/lib/shopify/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "../product-card";

interface CollectionRowProps {
  collection: Collection;
  index: number;
}

export default async function CollectionRow({ collection, index }: CollectionRowProps) {
  let products: Product[] = [];

  try {
    // Fetch products for this collection
    products = await getCollectionProducts({
      collection: collection.handle,
    });
  } catch (error) {
    console.error(`Error fetching products for collection ${collection.handle}:`, error);
  }

  // If no products, don't render this collection
  if (products.length === 0) return null;

  // Take first 4 products for display
  const displayProducts = products.slice(0, 4);

  return (
    <div className="collection-row">
      {/* Collection Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-xl md:text-2xl font-semibold text-primary">
            {collection.title}
          </h3>
          {collection.description && (
            <p className="text-sm text-muted-foreground hidden md:block max-w-md line-clamp-1">
              {collection.description}
            </p>
          )}
        </div>
        
        {/* View All Button */}
        <Button 
          asChild 
          variant="outline" 
          size="sm"
          className="whitespace-nowrap"
        >
          <Link href={collection.path}>
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Products Horizontal Scroll */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
          {displayProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex-none w-[280px] sm:w-[300px] snap-start"
            >
              <ProductCard 
                product={product} 
                variant="compact"
                className="h-full"
              />
            </div>
          ))}
          
          {/* View More Card */}
          {products.length > 4 && (
            <div className="flex-none w-[280px] sm:w-[300px] snap-start">
              <div className="h-full border border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center p-6 hover:bg-muted/50 transition-colors">
                <h4 className="font-semibold text-primary mb-2">
                  +{products.length - 4} More
                </h4>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Discover more products in this collection
                </p>
                <Button asChild size="sm">
                  <Link href={collection.path}>
                    View Collection
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Scroll Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
