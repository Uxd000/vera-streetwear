import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("vera-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "vera-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  function addToCart(product, selectedSize) {
    const existingItem = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.selectedSize === selectedSize
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id &&
        item.selectedSize === selectedSize
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          selectedSize,
          quantity: 1,
        },
      ]);
    }

    openCart();
  }

  function increaseQuantity(id, selectedSize) {
    const updatedCart = cartItems.map((item) =>
      item.id === id &&
      item.selectedSize === selectedSize
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCartItems(updatedCart);
  }

  function decreaseQuantity(id, selectedSize) {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id &&
        item.selectedSize === selectedSize
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  }

  function removeItem(id, selectedSize) {
    const updatedCart = cartItems.filter(
      (item) =>
        !(
          item.id === id &&
          item.selectedSize === selectedSize
        )
    );

    setCartItems(updatedCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}