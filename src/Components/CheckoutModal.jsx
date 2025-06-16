import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Components/CartProvider"; // Adjust path if needed

const CheckoutModal = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60  px-4">
      <div className="bg-white w-full max-w-md md:max-w-lg rounded-lg p-6 md:p-10 space-y-6 text-center shadow-xl">
        {/* Checkmark icon */}
        <div className="w-14 h-14 mx-auto bg-orange-500 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="text-xl md:text-2xl font-bold uppercase">
          Thank you <br className="block md:hidden" /> for your order
        </h2>
        <p className="text-gray-600 text-sm">
          You will receive an email confirmation shortly.
        </p>

        {/* Summary box */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="p-4 space-y-2 border-b border-gray-300 text-left">
            {cartItems.slice(0, 1).map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image.mobile.replace("./", "/")}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-600">x{item.quantity}</span>
              </div>
            ))}

            {cartItems.length > 1 && (
              <p className="text-xs text-gray-500 text-center pt-2">
                and {cartItems.length - 1} other item(s)
              </p>
            )}
          </div>

          {/* Total */}
          <div className="bg-black text-white px-6 py-4 text-left">
            <p className="text-xs uppercase text-gray-400 mb-1">Grand Total</p>
            <p className="font-bold text-lg">
              ${(total + 50).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => {
            clearCart();
            navigate("/");
          }}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-sm uppercase tracking-wide rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
