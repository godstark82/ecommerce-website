// components/sections/TrendingBestSellers.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Crown, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trendingProducts = [
  {
    id: 1,
    name: "Ultra-Slim Power Bank",
    slug: "ultra-slim-power-bank",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    rating: 4.9,
    sales: 1250,
    rank: 1,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Memory Foam Pillow",
    slug: "memory-foam-pillow",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=400&fit=crop",
    rating: 4.7,
    sales: 980,
    rank: 2,
    category: "Home & Living"
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    slug: "steel-water-bottle",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop",
    rating: 4.6,
    sales: 875,
    rank: 3,
    category: "Lifestyle"
  },
  {
    id: 4,
    name: "Wireless Mouse",
    slug: "wireless-mouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.5,
    sales: 720,
    rank: 4,
    category: "Electronics"
  }
];

const bestSellers = [
  {
    id: 5,
    name: "Classic White Sneakers",
    slug: "classic-white-sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    rating: 4.8,
    sales: 2100,
    rank: 1,
    category: "Fashion"
  },
  {
    id: 6,
    name: "Ceramic Plant Pot Set",
    slug: "ceramic-plant-pots",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    rating: 4.6,
    sales: 1850,
    rank: 2,
    category: "Home & Living"
  },
  {
    id: 7,
    name: "Essential Oil Diffuser",
    slug: "oil-diffuser",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    rating: 4.7,
    sales: 1600,
    rank: 3,
    category: "Wellness"
  },
  {
    id: 8,
    name: "Adjustable Desk Organizer",
    slug: "desk-organizer",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.4,
    sales: 1420,
    rank: 4,
    category: "Office"
  }
];


function ProductCard({ product, type }: { product: any; type: 'trending' | 'bestseller' }) {
  return (
    <Card className="group overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Link href={`/products/${product.slug}`}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              loading="lazy"
            />
          </Link>

          {/* Rank Badge */}
          <div className="absolute top-2 left-2">
            <Badge variant="default" className={`
              text-xs font-bold
              ${product.rank === 1 ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
              ${product.rank === 2 ? 'bg-gray-400 hover:bg-gray-500' : ''}
              ${product.rank === 3 ? 'bg-amber-600 hover:bg-amber-700' : ''}
              ${product.rank > 3 ? 'bg-primary hover:bg-primary/90' : ''}
            `}>
              #{product.rank}
            </Badge>
          </div>

          {/* Type Badge */}
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="text-xs">
              {type === 'trending' ? (
                <><TrendingUp className="h-3 w-3 mr-1" />Trending</>
              ) : (
                <><Crown className="h-3 w-3 mr-1" />Best Seller</>
              )}
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>

          <div>
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-semibold text-primary hover:text-primary/80 transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              ${product.price}
            </span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                {product.rating}
              </span>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            {product.sales.toLocaleString()} sold
          </div>

          <Button className="w-full" size="sm">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TrendingBestSellers() {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {trendingProducts.map((product) => (
                <ProductCard key={product.id} product={product} type="trending" />
              ))}
            </div>
          </TabsContent>

          {/* Best Sellers */}
          <TabsContent value="bestsellers">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} type="bestseller" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* View All Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/collections/trending">
              View All Trending
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/collections/best-sellers">
              View All Best Sellers
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}