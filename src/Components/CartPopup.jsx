import React, { useEffect } from "react";
import { useCart } from "../Components/CartProvider";
import { useNavigate } from "react-router-dom";

const CartPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const { cartItems, clearCart, increaseQty, decreaseQty } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/60 z-40"></div>
      {/* Popup */}
      <div className="fixed top-24 right-6 w-[95%] md:w-[400px] bg-white rounded-lg shadow-lg z-50 p-6 animate-slide-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold uppercase">
            Cart ({cartItems.length})
          </h2>
          <button
            onClick={clearCart}
            className="text-gray-500 text-sm hover:underline"
          >
            Remove all
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          aria-label="Close cart"
        >
          ✕
        </button>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src={item.image.mobile.replace("./", "/")}
                alt={item.name}
                className="w-14 h-14 rounded"
              />
              <div>
                <p className="font-bold text-[15px] font-Manrope ">
                  {item.name}
                </p>
                <p className="text-[14px] font-Manrope text-gray-500">
                  ${item.price.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center border border-gray-300 px-2 py-1">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span className="px-2">{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>
        ))}

        {/* Total and Checkout */}
        <div className="flex justify-between text-[#808080] font-bold text-lg mt-4">
          <p className="font-bold font-Manrope text-[18px]">Total</p>
          <p className="font-bold text-custom5 text-[18px]">
            ${total.toLocaleString()}
          </p>
        </div>

        <button
          onClick={() => {
            onClose();
            navigate("/checkout");
          }}
          className="w-full mt-6 bg-primary hover:bg-custom3 text-white py-3 uppercase text-sm tracking-wide"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartPopup;
