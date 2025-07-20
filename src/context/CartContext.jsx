import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children, isAuthenticated }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      toast.info("Increased quantity in cart");
    } else {
      toast.success("Item added to cart");
    }
  };

  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) return;

    setCartItems((prevItems) => {
      if (item.quantity > 1) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevItems.filter((item) => item.id !== id);
    });

    if (item.quantity > 1) {
      toast.info("Decreased quantity in cart");
    } else {
      toast.error("Item removed from cart");
    }
  };

  const updateQuantity = (id, quantity) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) return;

    setCartItems((prevItems) => {
      if (quantity < 1) {
        return prevItems.filter((item) => item.id !== id);
      }
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });

    if (quantity < 1) {
      toast.error("Item removed from cart");
    } else if (quantity < item.quantity) {
      toast.info("Decreased quantity in cart");
    } else if (quantity > item.quantity) {
      toast.success("Increased quantity");
    } else {
      toast.info("Quantity updated");
    }
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        isAuthenticated,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
