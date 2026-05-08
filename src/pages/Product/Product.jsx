import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useCurrency } from "../../context/CurrencyContext";

export default function Product() {
  const { id } = useParams();
  const { currency, convertPrice } = useCurrency();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("/products.json");

      const data = await response.json();

      const matchedProduct = data.find(
        (item) => item.id === Number(id)
      );

      setProduct(matchedProduct);
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <section className="px-8 py-24">
        <p>Loading product...</p>
      </section>
    );
  }

  return (
    <section className="px-8 py-16">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        
        <div className="bg-[#f5f5f5]">
          <img
            src={product.image}
            alt={product.name}
            className="h-[800px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/50">
            {product.category}
          </p>

          <h1
            className="mb-6 text-6xl uppercase leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {product.name}
          </h1>

          <p className="mb-8 text-2xl">
            {currency} {convertPrice(product.priceINR)}
          </p>

          <p className="mb-12 max-w-lg text-black/60">
            Designed for contemporary streetwear aesthetics with a relaxed oversized fit and premium heavyweight construction.
          </p>

          <div className="mb-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em]">
              Select Size
            </p>

            <div className="flex gap-4">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-14 w-14 border text-sm transition ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-black/20"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(product, selectedSize)}
            className="w-full border border-black bg-black px-8 py-5 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-black"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}