import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useCart } from "../context/CartContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const FreeDelivery = () => {
  const [expanded, setExpanded] = useState(true);
  const { cartTotal, isAuthenticated } = useCart();
  if (!isAuthenticated) return null;
  const safeCartTotal =
    typeof cartTotal === "number" && !isNaN(cartTotal) ? cartTotal : 0;
  const goal = 1000;
  const remaining = goal - safeCartTotal;
  const progress = safeCartTotal > goal ? goal : safeCartTotal;

  const data = {
    labels: ["Progress", "Remaining"],
    datasets: [
      {
        data: [
          parseFloat(progress.toFixed(2)),
          Math.max(0, parseFloat(remaining.toFixed(2))),
        ],
        backgroundColor: ["#22c55e", "#e5e7eb"],
        borderWidth: 1,
      },
    ],
  };

  const centerText = `$${progress.toFixed(2)} / $${goal.toFixed(2)}`;

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 w-full max-w-sm rounded-2xl bg-white ${
        expanded ? "border-2 border-black" : ""
      }`}
    >
      <div
        className={`transition-all duration-300 overflow-hidden ${
          expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="flex flex-col items-center bg-white p-6 shadow-2xl rounded-t-2xl w-full"
          style={{ pointerEvents: "auto", paddingBottom: "70px" }}
        >
          <h2 className="text-xl font-bold mb-4">Free Delivery Progress</h2>
          <div className="relative w-64 h-64 mb-8">
            <Pie data={data} />
            <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
              {centerText}
            </div>
          </div>
          {safeCartTotal >= goal && (
            <p className="mt-4 text-green-600 font-medium text-center">
              🎉 You are now eligible for free delivery!
            </p>
          )}
        </div>
      </div>
      <button
        className={`w-10 h-10 flex items-center justify-center rounded-full shadow-lg bg-green-500 text-white absolute left-1/2 -translate-x-1/2 bottom-0 z-10 border-4 border-white`}
        style={{
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          marginBottom: "25px",
          marginLeft: "25px",
        }}
        onClick={() => setExpanded((prev) => !prev)}
        aria-label={expanded ? "Collapse" : "Expand"}
        title={expanded ? "Collapse" : "Expand"}
      >
        {expanded ? (
          <span className="text-xl">–</span>
        ) : (
          <span className="text-xl">+</span>
        )}
      </button>
    </div>
  );
};

export default FreeDelivery;
