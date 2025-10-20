// components/sections/AllCollectionsGrid.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Collection {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  category: string;
  isNew?: boolean;
  isTrending?: boolean;
}

interface AllCollectionsGridProps {
  collections: Collection[];
}

export default function AllCollectionsGrid({ collections }: AllCollectionsGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(collections.map(c => c.category)))];

  // Filter and sort collections
  const filteredCollections = collections
    .filter(collection => {
      const matchesSearch = collection.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterBy === "all" || collection.category === filterBy;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "products":
          return b.productCount - a.productCount;
        case "newest":
          return a.isNew ? -1 : b.isNew ? 1 : 0;
        default:
          return 0;
      }
    });

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header with Controls */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            All Collections
          </h2>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search collections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter by Category */}
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="products">Most Products</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredCollections.length} of {collections.length} collections
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCollections.map((collection) => (
            <Card 
              key={collection.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/20"
            >
              <CardContent className="p-0">
                {/* Collection Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Link href={`/collections/${collection.slug}`}>
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </Link>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {collection.isNew && (
                      <Badge variant="default" className="bg-green-500 text-xs">
                        New
                      </Badge>
                    )}
                    {collection.isTrending && (
                      <Badge variant="default" className="bg-orange-500 text-xs">
                        Trending
                      </Badge>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button asChild variant="secondary">
                      <Link href={`/collections/${collection.slug}`}>
                        View Collection
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Collection Info */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <Badge variant="outline" className="text-xs">
                      {collection.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {collection.productCount} items
                    </span>
                  </div>

                  <div>
                    <Link href={`/collections/${collection.slug}`}>
                      <h3 className="font-semibold text-primary hover:text-primary/80 transition-colors line-clamp-2 mb-1">
                        {collection.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {collection.description}
                    </p>
                  </div>

                  <Button asChild variant="outline" className="w-full" size="sm">
                    <Link href={`/collections/${collection.slug}`}>
                      Explore Collection
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCollections.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              No collections found matching your criteria
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setFilterBy("all");
                setSortBy("name");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
