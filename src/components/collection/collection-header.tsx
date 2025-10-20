// components/sections/CollectionHeader.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Image from "next/image";

interface CollectionHeaderProps {
  title: string;
  description: string;
  productCount: number;
  image?: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
}

export default function CollectionHeader({ 
  title, 
  description, 
  productCount, 
  image,
  breadcrumbs 
}: CollectionHeaderProps) {
  return (
    <section className="relative py-12 md:py-16 bg-muted/30">
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={index} className="flex items-center">
                <BreadcrumbItem>
                  {breadcrumb.href ? (
                    <BreadcrumbLink href={breadcrumb.href}>
                      {breadcrumb.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Collection Info */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-4">
            {description}
          </p>
          <Badge variant="secondary" className="text-sm">
            {productCount} Products
          </Badge>
        </div>
      </div>
    </section>
  );
}
