import { render, fireEvent } from "@testing-library/react";
import Cart from "../pages/Cart";
import { CartProvider, useCart } from "../context/CartContext";

test("shows empty cart message", () => {
  const { getByText } = render(
    <CartProvider>
      <Cart />
    </CartProvider>
  );

  expect(getByText(/No items in cart/i)).toBeInTheDocument();
});
