import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-black/10">
      <Link to="/">
        <h1
          className="text-4xl uppercase tracking-[0.3em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          VERA
        </h1>
      </Link>

      <div className="flex items-center gap-8 text-xs uppercase tracking-[0.25em]">
        <Link to="/shop">Shop</Link>

        <button>Cart (0)</button>
      </div>
    </nav>
  );
}