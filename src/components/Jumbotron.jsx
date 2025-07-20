import { useEffect, useState } from "react";

const Jumbotron = ({ products }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!products || !products.length) return null;

  const product = products[current];

  return (
    <div
      className="h-[90vh] bg-cover bg-center relative flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${product.image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative text-center">
        <h1 className="text-4xl font-bold mb-4">Today's Top Deals</h1>
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <div className="text-2xl font-semibold flex items-center justify-center gap-4">
          <span style={{ textDecoration: "line-through" }}>
            ${product.price}
          </span>
          <span className="text-green-400 font-bold">
            ${(product.price / 2).toFixed(2)}
          </span>
        </div>
        <span className="ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          50% OFF
        </span>
      </div>
    </div>
  );
};

export default Jumbotron;
