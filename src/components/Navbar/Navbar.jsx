import { Link } from "react-router-dom";
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const {cartItems, openCart,} = useCart();

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between border-b border-black/10 bg-white/80 px-8 py-6 backdrop-blur-md">
      
      <Link to="/">
        <h1
          className="text-4xl uppercase tracking-[0.3em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          VERA
        </h1>
      </Link>

      <div className="flex items-center gap-8 text-xs uppercase tracking-[0.25em]">
        
        <Link
          to="/shop"
          className="transition-opacity duration-300 hover:opacity-60"
        >
          Shop
        </Link>

        <CurrencySwitcher />

        <button
          onClick={openCart}
          className="transition-opacity duration-300 hover:opacity-60"
        >
          Cart ({cartItems.length})
        </button>

      </div>
    </nav>
  );
}