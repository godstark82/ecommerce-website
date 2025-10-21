"use client";

import { addItem } from "@/components/cart/actions";
import { useCart } from "@/components/cart/cart-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/lib/shopify/types";
import { Heart, Loader2, ShoppingCart, Star, TrendingUp, Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  // Optional customization props
  showRank?: boolean;
  rank?: number;
  // showType?: boolean;
  // type?: 'trending' | 'bestseller';
  // showRating?: boolean;
  // rating?: number;
  // showSalesCount?: boolean;
  // salesCount?: number;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
}

export default function ProductCard({
  product,
  showRank = false,
  rank,
  className
}: ProductCardProps) {
  const { addCartItem } = useCart();
  const [message, formAction] = useActionState(addItem, null);
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const defaultVariant = product.variants[0];

  const handleAddToCart = async () => {
    if (!defaultVariant) return;
    setIsLoading(true);
    try {
      await addCartItem(defaultVariant, product);
      await formAction(defaultVariant.id);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (price: string) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(parseFloat(price));

  const hasDiscount =
    defaultVariant?.compareAtPrice &&
    parseFloat(defaultVariant.compareAtPrice.amount) >
    parseFloat(defaultVariant.price.amount);

  const discountPercentage =
    hasDiscount && defaultVariant.compareAtPrice?.amount
      ? Math.round(
        ((parseFloat(defaultVariant.compareAtPrice.amount) -
          parseFloat(defaultVariant.price.amount)) /
          parseFloat(defaultVariant.compareAtPrice.amount)) *
        100
      )
      : 0;

  return (
    <Card className={cn(
      "group overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl",
      "hover:shadow-xl hover:-translate-y-2",
      className
    )}>
      <CardContent className="p-0">
        {/* IMAGE WRAPPER */}
        <div className={cn(
          "relative bg-muted overflow-hidden rounded-t-2xl",
          "aspect-[4/5]"
        )}>
          {!isImageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-muted-foreground/10" />
          )}

          <Link href={`/products/${product.handle}`}>
            <Image
              src={product.featuredImage?.url || "/placeholder-product.jpg"}
              alt={product.featuredImage?.altText || product.title}
              fill
              onLoad={() => setIsImageLoaded(true)}
              className={cn(
                "object-cover transition-transform duration-500 ease-out",
                "group-hover:scale-105",
                !isImageLoaded && "opacity-0"
              )}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              loading="lazy"
            />
          </Link>

          {/* GRADIENT OVERLAY for readability */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          {/* LEFT BADGES (Rank, New, Discount) */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {/* Rank Badge */}
            {showRank && rank && (
              <Badge variant="default" className={cn(
                "text-xs font-bold backdrop-blur-sm",
                rank === 1 && 'bg-yellow-500 hover:bg-yellow-600',
                rank === 2 && 'bg-gray-400 hover:bg-gray-500',
                rank === 3 && 'bg-amber-600 hover:bg-amber-700',
                rank > 3 && 'bg-primary hover:bg-primary/90'
              )}>
                #{rank}
              </Badge>
            )}

            {/* New Badge */}
            {product.tags.includes("new") && (
              <Badge
                variant="default"
                className="bg-green-500/90 text-white backdrop-blur-sm shadow-sm"
              >
                New
              </Badge>
            )}

            {/* Discount Badge */}
            {hasDiscount && (
              <Badge variant="destructive" className="backdrop-blur-sm">
                -{discountPercentage}%
              </Badge>
            )}
          </div>

          {/* RIGHT BADGES (Type Badge) */}
          {/* <div className="absolute top-3 right-3 flex flex-col gap-2">
           
            {showType && type && (
              <Badge variant="secondary" className="text-xs backdrop-blur-sm">
                {type === 'trending' ? (
                  <><TrendingUp className="h-3 w-3 mr-1" />Trending</>
                ) : (
                  <><Crown className="h-3 w-3 mr-1" />Best Seller</>
                )}
              </Badge>
            )}
          </div> */}

          {/* QUICK ACTIONS */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full shadow-sm"
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full shadow-sm"
              onClick={handleAddToCart}
              disabled={!product.availableForSale || isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ShoppingCart className="h-4 w-4" />
              )}
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>

          {/* OUT OF STOCK OVERLAY */}
          {!product.availableForSale && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="secondary" className="text-white bg-black/70">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        {/* PRODUCT DETAILS */}
        <div className={cn(
          "space-y-3",
          "p-4"
        )}>
          {/* Category Badge */}
          {product.tags.length > 0 && (
            <Badge variant="outline" className="text-xs">
              {product.tags[0]}
            </Badge>
          )}

          <Link href={`/products/${product.handle}`}>
            <h3 className="font-semibold text-primary hover:text-primary/80 transition-colors line-clamp-2">
              {product.title}
            </h3>
          </Link>

          {/* Price and Rating Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-primary">
                {formatPrice(defaultVariant?.price.amount || "0")}
              </span>
              {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(defaultVariant.compareAtPrice?.amount || "0")}
                </span>
              )}
            </div>

          </div>

          <Button
            className="w-full rounded-lg"
            size={"sm"}
            onClick={handleAddToCart}
            disabled={!product.availableForSale || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : !product.availableForSale ? (
              "Out of Stock"
            ) : (
              "Add to Cart"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
