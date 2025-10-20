// components/sections/FeaturedCategories.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop",
    description: "Latest gadgets and tech",
    itemCount: 150
  },
  {
    id: 2,
    name: "Fashion",
    slug: "fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop",
    description: "Trending styles and apparel",
    itemCount: 320
  },
  {
    id: 3,
    name: "Home & Living",
    slug: "home-living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    description: "Comfort meets style",
    itemCount: 200
  },
  {
    id: 4,
    name: "Sports & Fitness",
    slug: "sports-fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    description: "Gear up for success",
    itemCount: 180
  },
  {
    id: 5,
    name: "Beauty",
    slug: "beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    description: "Premium skincare & cosmetics",
    itemCount: 120
  },
  {
    id: 6,
    name: "Books",
    slug: "books",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Knowledge at your fingertips",
    itemCount: 450
  }
];

export default function FeaturedCategories() {
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
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/collections/${category.slug}`}
              className="group"
              aria-label={`Browse ${category.name} category with ${category.itemCount} items`}
            >
              <Card className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                <CardContent className="p-0">
                  {/* Category Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.name} category`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Category Info */}
                  <div className="p-3 md:p-4 text-center">
                    <h3 className="font-semibold text-sm md:text-base text-primary mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">
                      {category.description}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {category.itemCount} items
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/collections">
              View All Categories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
