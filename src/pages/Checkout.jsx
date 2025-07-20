import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const Checkout = () => {
  const { setCartItems } = useCart();
  const navigate = useNavigate();
  const handlePayNow = () => {
    setCartItems([]);
    navigate("/payment-processed");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Secure Checkout
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <form className="space-y-4">
            <InputField
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Full Name"
            />
            <InputField
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Street Address"
            />
            <InputField
              className="w-full p-2 border rounded"
              type="text"
              placeholder="City"
            />
            <InputField
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Postal Code"
            />
            <InputField
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Country"
            />
          </form>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Credit Card Details
          </h2>
          <form className="space-y-4">
            <InputField
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Cardholder Name"
            />
            <InputField
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Card Number"
            />
            <div className="flex space-x-4">
              <InputField
                className="w-1/2 p-2 border rounded"
                type="text"
                placeholder="MM/YY"
              />
              <InputField
                className="w-1/2 p-2 border rounded"
                type="text"
                placeholder="CVV"
              />
            </div>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Other Payment Options</h2>
          <div className="space-y-4">
            {[
              "PayPal",
              "Apple Pay",
              "Google Pay",
              "Shop Pay",
              "Klarna",
              "Afterpay",
              "Alipay",
              "Amazon Pay",
            ].map((method) => (
              <button
                key={method}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 border rounded-lg"
              >
                {method}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-12">
        <div className="flex flex-col items-end">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-lg"
            onClick={handlePayNow}
          >
            Pay Now
          </button>
          <span className="mt-2 text-sm text-gray-700 bg-white rounded px-2 py-1 shadow">
            Clicking Pay Now will empty your cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
