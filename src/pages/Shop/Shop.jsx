import { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/products.json");

      const data = await response.json();

      setProducts(data);
    }

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/50">
            Collection
          </p>

          <h1
            className="text-6xl uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Shop All
          </h1>
        </div>

        <div className="mb-12 flex flex-wrap gap-4">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`border px-6 py-3 text-xs uppercase tracking-[0.25em] transition ${
              selectedCategory === "All"
                ? "bg-black text-white"
                : "border-black/20"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setSelectedCategory("T-Shirts")}
            className={`border px-6 py-3 text-xs uppercase tracking-[0.25em] transition ${
              selectedCategory === "T-Shirts"
                ? "bg-black text-white"
                : "border-black/20"
            }`}
          >
            T-Shirts
          </button>

          <button
            onClick={() => setSelectedCategory("Shirts")}
            className={`border px-6 py-3 text-xs uppercase tracking-[0.25em] transition ${
              selectedCategory === "Shirts"
                ? "bg-black text-white"
                : "border-black/20"
            }`}
          >
            Shirts
          </button>

          <button
            onClick={() => setSelectedCategory("Pants")}
            className={`border px-6 py-3 text-xs uppercase tracking-[0.25em] transition ${
              selectedCategory === "Pants"
                ? "bg-black text-white"
                : "border-black/20"
            }`}
          >
            Pants
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
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