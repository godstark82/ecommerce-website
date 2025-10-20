// components/sections/CollectionsByCategory.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  category: string;
}

interface CollectionsByCategoryProps {
  collections: Collection[];
}

export default function CollectionsByCategory({ collections }: CollectionsByCategoryProps) {
  // Group collections by category
  const collectionsByCategory = collections.reduce((acc, collection) => {
    if (!acc[collection.category]) {
      acc[collection.category] = [];
    }
    acc[collection.category]?.push(collection);
    return acc;
  }, {} as Record<string, Collection[]>);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Find exactly what you're looking for organized by categories
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {Object.entries(collectionsByCategory).map(([category, categoryCollections]) => (
            <div key={category}>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-1">{category}</h3>
                  <p className="text-muted-foreground">
                    {categoryCollections.length} collection{categoryCollections.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <Button asChild variant="outline">
                  <Link href={`/collections?category=${category.toLowerCase()}`}>
                    View All
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>

              {/* Collections Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryCollections.slice(0, 4).map((collection) => (
                  <Card 
                    key={collection.id}
                    className="group overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <Link href={`/collections/${collection.slug}`}>
                          <Image
                            src={collection.image}
                            alt={collection.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </Link>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <Link href={`/collections/${collection.slug}`}>
                            <h4 className="font-semibold text-primary hover:text-primary/80 transition-colors line-clamp-1">
                              {collection.name}
                            </h4>
                          </Link>
                          <Badge variant="outline" className="text-xs ml-2">
                            {collection.productCount}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {collection.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
