import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b border-gray-200">
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-lg font-semibold text-gray-800 hover:text-blue-600"
        >
          Home
        </Link>

        {user && (
          <>
            <Link
              to="/cart"
              className="relative text-gray-800 hover:text-blue-600 font-medium"
            >
              Cart
              <span className="ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full">
                {cartItems.length}
              </span>
            </Link>

            {cartItems.length > 0 && (
              <Link
                to="/checkout"
                className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg animate-pulse hover:bg-green-700"
              >
                Proceed to Checkout
              </Link>
            )}
          </>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-sm text-gray-600">Hi there DVT!</span>
            <button
              onClick={logout}
              className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
