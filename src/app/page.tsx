import { Suspense } from "react";
import { HeroSectionComponent } from "@/components/HeroSectionComponent";
import ProductsCartListComponent from "@/components/products/ProductsCartListComponent";
import { ProductType } from "@/components/products/ProductsCartComponent";

async function fetchProducts(): Promise<ProductType[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 } // Caches data for 1 hour
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default function Home() {
  const productPromise = fetchProducts();

  return (
    <main className="min-h-screen bg-background">
      <HeroSectionComponent />

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <p className="text-muted-foreground animate-pulse">Loading products...</p>
          </div>
        }
      >
        <ProductsCartListComponent productFromApi={productPromise} />
      </Suspense>
    </main>
  );
}