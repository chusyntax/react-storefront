import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentProcessed from "./pages/PaymentProcessed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const { user } = useAuth();
  const isAuthenticated = !!(user && user.token);

  return (
    <CartProvider isAuthenticated={isAuthenticated}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment-processed" element={<PaymentProcessed />} />
          </Routes>
        </main>
        <ToastContainer />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
