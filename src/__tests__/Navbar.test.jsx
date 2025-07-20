import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";

test("renders navbar with links", () => {
  const { getByText } = render(
    <CartProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </CartProvider>
  );

  expect(getByText(/Storefront/i)).toBeInTheDocument();
  expect(getByText(/Home/i)).toBeInTheDocument();
  expect(getByText(/Cart/i)).toBeInTheDocument();
});
