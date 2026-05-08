import { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/products.json");

      const data = await response.json();

      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/50">
              Featured Collection
            </p>

            <h2
              className="text-5xl uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Latest Drops
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}