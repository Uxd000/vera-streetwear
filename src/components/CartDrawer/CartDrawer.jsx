import { useCart } from "../../context/CartContext";
import { useCurrency } from "../../context/CurrencyContext";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  const {
    currency,
    convertPrice,
  } = useCurrency();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.priceINR * item.quantity,
    0
  );

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isCartOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white transition-transform duration-500 ${
          isCartOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-6">
          <h2
            className="text-3xl uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your Cart
          </h2>

          <button
            onClick={closeCart}
            className="text-2xl transition-opacity duration-300 hover:opacity-60"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <p className="text-sm uppercase tracking-[0.2em] text-black/50">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}`}
                  className="flex gap-4"
                >
                  <div className="h-32 w-24 overflow-hidden bg-[#f5f5f5]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-black/50">
                        {item.category}
                      </p>

                      <h3
                        className="text-2xl uppercase leading-none"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.name}
                      </h3>
                    </div>

                    <div>
                      <p className="mb-2 text-sm">
                        Size: {item.selectedSize}
                      </p>

                      <div className="mb-3 flex items-center gap-3">
                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.id,
                              item.selectedSize
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center border border-black/20 transition hover:bg-black hover:text-white"
                        >
                          -
                        </button>

                        <span className="text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id,
                              item.selectedSize
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center border border-black/20 transition hover:bg-black hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-sm">
                        {currency}{" "}
                        {convertPrice(
                          item.priceINR * item.quantity
                        )}
                      </p>

                      <button
                        onClick={() =>
                          removeItem(
                            item.id,
                            item.selectedSize
                          )
                        }
                        className="mt-3 text-xs uppercase tracking-[0.2em] text-black/40 transition hover:text-black"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-black/10 px-6 py-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em]">
              Subtotal
            </p>

            <p className="text-lg">
              {currency}{" "}
              {convertPrice(subtotal)}
            </p>
          </div>

          <button className="w-full bg-black px-6 py-5 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-black/90">
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}