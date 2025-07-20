import { useCart } from "../context/CartContext";

const Modal = ({ product, onClose }) => {
  const { addToCart, isAuthenticated } = useCart();
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl max-w-3xl w-[120%] relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          ✖
        </button>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
          <div className="flex items-center justify-center md:h-full md:w-1/2 w-full min-h-[18rem]">
            <img
              src={product.image}
              alt={product.title}
              className="h-56 w-56 object-contain rounded-lg bg-gray-100"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="mb-2 text-gray-700">{product.description}</p>
            <p className="font-bold text-xl mb-2">${product.price}</p>
            <p className="font-semibold mb-4 text-yellow-600">
              Voted {product.rating.rate} out of 5 from {product.rating.count}{" "}
              users
            </p>
            <button
              className={`w-full px-4 py-2 rounded-lg font-bold transition-colors ${
                isAuthenticated
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              onClick={() => isAuthenticated && addToCart(product)}
              disabled={!isAuthenticated}
              title={
                !isAuthenticated
                  ? "You must first log in to add to cart"
                  : undefined
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
