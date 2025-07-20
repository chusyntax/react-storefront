import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import FreeDelivery from "../components/FreeDelivery";

const Cart = () => {
  const { cartItems, addToCart, updateQuantity, isAuthenticated } = useCart();

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl text-center font-bold mb-6">Your Cart</h1>
        <h3 className="text-gray-500 text-center">
          You must be logged in to view your cart.
        </h3>
      </div>
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <FreeDelivery />
      <h1 className="text-5xl text-center font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <h3 className="text-gray-500 text-center">
          Your cart is currently empty.
        </h3>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <button
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => updateQuantity(item.id, 0)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>
          <div className="text-center text-gray-500">
            <p>
              You have{" "}
              <span className="font-semibold">
                {cartItems.length} item(s) in your cart
              </span>
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <Link to="/checkout">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg animate-pulse">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
