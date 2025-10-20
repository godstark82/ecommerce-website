// components/sections/CollectionsPageHeader.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Grid3X3, Package } from "lucide-react";

interface CollectionsPageHeaderProps {
  totalCollections: number;
  totalProducts: number;
}

export default function CollectionsPageHeader({ totalCollections, totalProducts }: CollectionsPageHeaderProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Collections</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Grid3X3 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-5xl font-bold text-primary">
              All Collections
            </h1>
          </div>
          
          <p className="text-muted-foreground text-base md:text-lg mb-6">
            Explore our carefully curated collections featuring the best products across all categories
          </p>

          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <Grid3X3 className="h-3 w-3" />
                {totalCollections} Collections
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1">
                <Package className="h-3 w-3" />
                {totalProducts} Products
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
