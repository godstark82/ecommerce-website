"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Collection } from "@/lib/shopify/types";
import { Package } from "lucide-react";

interface CollectionCardProps {
  collection: Collection;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <Link
      href={collection.path}
      className="group block w-full"
      aria-label={`Browse ${collection.title} category`}
    >
      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
        <CardContent className="p-0">
          {/* Compact Image Container */}
          <div className="relative aspect-square overflow-hidden">
            {collection.image ? (
              <>
                {/* Background Image */}
                <Image
                  src={collection.image.url}
                  alt={collection.image.altText || `${collection.title} collection`}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  loading="lazy"
                />
                {/* Simple overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </>
            ) : (
              <>
                {/* Compact fallback background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-primary/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Package className="w-8 h-8 text-white/60" />
                </div>
              </>
            )}

            {/* Compact Text Overlay */}
            <div className="absolute inset-0 flex items-end p-2">
              <h3 className="text-white font-semibold text-xs md:text-sm leading-tight drop-shadow-lg line-clamp-2">
                {collection.title}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
