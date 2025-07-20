import { render, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { CartProvider } from "../context/CartContext";

const product = {
  id: 1,
  title: "Test Product",
  price: 20,
  image: "https://fakestoreapi.com/img/1.jpg",
};

test("renders product and adds to cart", () => {
  const handleMoreInfo = jest.fn();

  const { getByText } = render(
    <CartProvider>
      <ProductCard product={product} onMoreInfo={handleMoreInfo} />
    </CartProvider>
  );

  expect(getByText(/Test Product/i)).toBeInTheDocument();
  expect(getByText(/\$20/i)).toBeInTheDocument();

  fireEvent.click(getByText(/More Info/i));
  expect(handleMoreInfo).toHaveBeenCalled();
});
