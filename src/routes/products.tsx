import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, type Product } from "@/lib/products";
import { ProductGrid } from "@/components/ProductGrid";
import { Filter, X } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop Perfumes | M&M — Mist & Muse" },
      {
        name: "description",
        content: "Browse our collection of luxury perfumes and fragrances from around the world.",
      },
    ],
  }),
  component: ProductsPage,
});

type FilterType = "all" | "womens" | "mens" | "unisex" | "premium" | "body-spray" | "fragrance-mist";

const CATEGORIES: { value: FilterType; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "womens", label: "Women's" },
  { value: "mens", label: "Men's" },
  { value: "unisex", label: "Unisex" },
  { value: "premium", label: "Premium" },
  { value: "body-spray", label: "Body Sprays" },
  { value: "fragrance-mist", label: "Fragrance Mists" },
];

function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name");

  const getFilteredProducts = () => {
    let filtered = products;

    if (activeFilter !== "all") {
      filtered = filtered.filter((p) => p.category === activeFilter);
    }

    // Sort
    if (sortBy === "price-asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const handleAddToCart = (product: Product) => {
    // TODO: Implement add to cart functionality
    console.log("Added to cart:", product.name);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground">Our Collection</h1>
          <p className="mt-2 text-muted-foreground">
            Discover our curated selection of luxury perfumes and fragrances
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {filteredProducts.length} products found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Category Filter */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-foreground" />
                <h2 className="font-semibold text-foreground">Filter</h2>
              </div>

              <div className="space-y-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setActiveFilter(category.value)}
                    className={`block w-full text-left rounded-md px-3 py-2 text-sm transition-colors ${
                      activeFilter === category.value
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="mt-8 space-y-4 border-t border-border pt-6">
              <h3 className="font-semibold text-foreground">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
