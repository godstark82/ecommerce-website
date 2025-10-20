// app/collections/[slug]/page.tsx
"use client";

import CollectionHeader from "@/components/collection/collection-header";
import FiltersAndSort from "@/components/collection/filter-sort";
import ProductGrid from "@/components/collection/product-grid";
import ProductPagination from "@/components/collection/product-pagination";
import SidebarFilters from "@/components/collection/sidebar-filters";
import { useState } from "react";

export default function CollectionPage() {
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(12);
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    // Sample data - replace with actual data fetching
    const collection = {
        title: "Electronics",
        description: "Discover the latest in technology and innovation",
        productCount: 120,
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=400&fit=crop"
    };

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Collections", href: "/collections" },
        { label: collection.title }
    ];

    return (
        <main>
            <CollectionHeader
                title={collection.title}
                description={collection.description}
                productCount={collection.productCount}
                image={collection.image}
                breadcrumbs={breadcrumbs}
            />

            <FiltersAndSort
                totalResults={collection.productCount}
                onViewChange={setView}
                currentView={view}
            />

            <section className="py-8">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex gap-8">
                        {/* Desktop Sidebar - Hidden on mobile */}
                        <div className="hidden lg:block">
                            <SidebarFilters
                                filterGroups={[
                                    {
                                        title: "Category",
                                        options: [
                                            { label: "Headphones", count: 24, value: "headphones" },
                                            { label: "Smartphones", count: 18, value: "smartphones" },
                                            { label: "Laptops", count: 12, value: "laptops" }
                                        ]
                                    }
                                ]}
                                activeFilters={activeFilters}
                                onFilterChange={(filterId, checked) => {
                                    if (checked) {
                                        setActiveFilters([...activeFilters, filterId]);
                                    } else {
                                        setActiveFilters(activeFilters.filter(f => f !== filterId));
                                    }
                                }}
                                onClearAll={() => setActiveFilters([])}
                            />
                        </div>

                        {/* Products Grid */}
                        <div className="flex-1">
                            <ProductGrid
                                products={[]} // Add your products here
                                view={view}
                            />

                            <ProductPagination
                                currentPage={currentPage}
                                totalPages={10}
                                totalProducts={collection.productCount}
                                productsPerPage={productsPerPage}
                                onPageChange={setCurrentPage}
                                onPerPageChange={setProductsPerPage}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
