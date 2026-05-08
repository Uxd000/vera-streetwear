export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b">
      <h1 className="text-3xl font-bold uppercase tracking-widest">
        VERA
      </h1>

      <div className="flex gap-6 text-sm uppercase tracking-wide">
        <p>Shop</p>
        <p>Cart</p>
      </div>
    </nav>
  );
}