import { Link } from "react-router-dom";

const PaymentProcessed = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your delivery will arrive in 24 hours.
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Start shopping again</h2>
          <Link to="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessed;
