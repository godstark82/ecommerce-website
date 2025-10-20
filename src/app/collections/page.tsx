// app/collections/page.tsx
"use client";

import AllCollectionsGrid from "@/components/collection/all-collections-grid";
import CollectionsPageHeader from "@/components/collection/collection-page-header";
import CollectionsByCategory from "@/components/collection/collections-by-category";
import FeaturedCollections from "@/components/collection/featured-collections";


export default function CollectionsPage() {
  // Sample data - replace with actual data fetching
  const collections = [
    {
      id: 1,
      name: "Electronics",
      slug: "electronics",
      description: "Latest gadgets and tech innovations",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop",
      productCount: 150,
      category: "Technology",
      isFeatured: true,
      isNew: false,
      isTrending: true
    },
    {
      id: 2,
      name: "Fashion",
      slug: "fashion",
      description: "Trending styles and timeless classics",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      productCount: 320,
      category: "Apparel",
      isFeatured: true,
      isNew: false,
      isTrending: false
    },
    {
      id: 3,
      name: "Home & Living",
      slug: "home-living",
      description: "Transform your space with style",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      productCount: 200,
      category: "Home",
      isFeatured: true,
      isNew: true,
      isTrending: false
    },
    // Add more collections...
  ];

  const totalProducts = collections.reduce((sum, collection) => sum + collection.productCount, 0);

  return (
    <main>
      <CollectionsPageHeader 
        totalCollections={collections.length}
        totalProducts={totalProducts}
      />

      <FeaturedCollections collections={collections} />

      <AllCollectionsGrid collections={collections} />

      <CollectionsByCategory collections={collections} />
    </main>
  );
}
