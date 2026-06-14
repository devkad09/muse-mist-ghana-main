import { Product } from "@/lib/products";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
        {product.featured && (
          <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between">
          <div className="flex-1">
            <p className="text-xs font-medium text-muted-foreground">{product.brand}</p>
            <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
          </div>
        </div>

        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="mb-3 flex items-center gap-2">
          <span className="inline-block rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground capitalize">
            {product.type.replace("-", " ")}
          </span>
          <span className="text-xs text-muted-foreground">{product.volume}</span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground">
              {product.price.toFixed(2)}
            </p>
            <p className="text-xs text-muted-foreground">{product.currency}</p>
          </div>
          <button
            onClick={() => onAddToCart?.(product)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
