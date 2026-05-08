import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="overflow-hidden bg-[#f5f5f5]">
        <img
          src={product.image}
          alt={product.name}
          className="h-[500px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">
          {product.category}
        </p>

        <h3
          className="text-2xl uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {product.name}
        </h3>

        <p className="text-sm">
          Rs. {product.priceINR}
        </p>
      </div>
    </Link>
  );
}