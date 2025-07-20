import { useCart } from "../context/CartContext";

const ProductCard = ({ product, onMoreInfo }) => {
  const { addToCart, isAuthenticated } = useCart();

  return (
    <div className="border p-4 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110 bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain"
      />
      <h2 className="mt-2 font-semibold">{product.title}</h2>
      <span className="ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-purple-600 rounded-full">
        {product.category}
      </span>
      <p className="text-lg font-bold">${product.price}</p>

      <button
        className={`px-4 py-2 mt-2 ${
          isAuthenticated
            ? "bg-blue-600 text-white"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
        onClick={() => isAuthenticated && addToCart(product)}
        disabled={!isAuthenticated}
        title={
          !isAuthenticated ? "You must first log in to add to cart" : undefined
        }
      >
        Add to Cart
      </button>
      <button
        className="bg-yellow-400 text-white px-4 py-2 mt-1"
        onClick={() => onMoreInfo(product)}
      >
        More Info
      </button>
    </div>
  );
};

export default ProductCard;
