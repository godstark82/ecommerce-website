// components/sections/FeaturedCollections.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Collection {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  isFeatured?: boolean;
  isNew?: boolean;
}

interface FeaturedCollectionsProps {
  collections: Collection[];
}

export default function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  const featuredCollections = collections.filter(c => c.isFeatured).slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Collections
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Discover our most popular and trending product collections
          </p>
        </div>

        {/* Featured Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredCollections.map((collection, index) => (
            <Card 
              key={collection.id} 
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className={`relative overflow-hidden ${
                  index === 0 ? 'aspect-[2/1] lg:aspect-[2/1]' : 'aspect-[4/3]'
                }`}>
                  <Link href={`/collections/${collection.slug}`}>
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={index === 0}
                    />
                  </Link>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {collection.isFeatured && (
                      <Badge variant="default" className="bg-primary">
                        Featured
                      </Badge>
                    )}
                    {collection.isNew && (
                      <Badge variant="default" className="bg-green-500">
                        New
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className={`font-bold mb-2 ${
                      index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                    }`}>
                      {collection.name}
                    </h3>
                    <p className={`mb-4 opacity-90 ${
                      index === 0 ? 'text-base md:text-lg' : 'text-sm'
                    }`}>
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-75">
                        {collection.productCount} products
                      </span>
                      <Button asChild variant="secondary" size="sm">
                        <Link href={`/collections/${collection.slug}`}>
                          Shop Now
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
