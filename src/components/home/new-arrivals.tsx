// components/sections/NewArrivals.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newArrivals = [
  {
    id: 1,
    name: "Sustainable Bamboo Water Bottle",
    slug: "bamboo-water-bottle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 12,
    arrivalDate: "2025-10-15",
    category: "Lifestyle"
  },
  {
    id: 2,
    name: "Wireless Charging Pad",
    slug: "wireless-charging-pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 8,
    arrivalDate: "2025-10-12",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Artisan Coffee Mug Set",
    slug: "coffee-mug-set",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 15,
    arrivalDate: "2025-10-10",
    category: "Home & Living"
  },
  {
    id: 4,
    name: "Ergonomic Laptop Stand",
    slug: "laptop-stand",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 21,
    arrivalDate: "2025-10-08",
    category: "Office"
  },
  {
    id: 5,
    name: "Organic Skincare Set",
    slug: "skincare-set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 18,
    arrivalDate: "2025-10-05",
    category: "Beauty"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    slug: "bluetooth-speaker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 9,
    arrivalDate: "2025-10-03",
    category: "Electronics"
  }
];


export default function NewArrivals() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {newArrivals.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Link href={`/products/${product.slug}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      loading="lazy"
                    />
                  </Link>

                  {/* New Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-xs">
                      New
                    </Badge>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>

                  <div>
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-medium text-sm text-primary hover:text-primary/80 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">
                      ${product.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/collections/new-arrivals">
              View All New Arrivals
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}