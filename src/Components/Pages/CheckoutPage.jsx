import React, { useState } from "react";
import { useCart } from "../CartProvider";
import CheckoutModal from "../CheckoutModal";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-Money",
    eMoneyNum: "", // ✅ add this
    eMoneyPin: "",
  });

  const [showModal, setShowModal] = useState(false);

  const [errors, setErrors] = useState({});
  const shipping = 50;
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = total * 0.2;
  const grandTotal = total + shipping;

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Required";
    if (!form.phone) newErrors.phone = "Required";
    if (!form.address) newErrors.address = "Required";
    if (!form.zip) newErrors.zip = "Required";
    if (!form.city) newErrors.city = "Required";
    if (!form.country) newErrors.country = "Required";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Wrong format";
    }
    if (form.paymentMethod === "e-Money") {
      if (!form.eMoneyNum) newErrors.eMoneyNum = "Required";
      if (!form.eMoneyPin) newErrors.eMoneyPin = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
      {/* Go Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-orange-500 font-medium uppercase tracking-wide"
        >
          Go Back
        </button>
      </div>
      {/* Left Form Section */}
      <div className="flex-1 space-y-10 mt-10">
        <h2 className="text-2xl font-bold uppercase">Checkout</h2>

        {/* Billing Details */}
        <section>
          <h3 className="text-orange-500 font-semibold mb-4 uppercase">
            Billing Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Name
              </label>
              <input
                name="name"
                placeholder="Alexei Ward"
                value={form.name}
                onChange={handleChange}
                className={`p-3 w-full rounded border bg-white text-black placeholder:text-gray-400
    ${
      errors.name
        ? "border-[#CD2C2C] focus:outline-none focus:ring-2 focus:ring-[#CD2C2C]"
        : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    }
  `}
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Email
              </label>
              <input
                name="email"
                placeholder="alexei@mail.com"
                value={form.email}
                onChange={handleChange}
                className={`p-3 w-full rounded border ${
                  errors.name
                    ? "border-[#CD2C2C] focus:outline-none focus:ring-2 focus:ring-[#CD2C2C]"
                    : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                }
  `}
              />
              {errors.email && (
                <p className="text-[#CD2C2C] text-sm mt-1">Wrong format</p>
              )}
            </div>

            {/* Phone Field */}
            <label
              htmlFor="address"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Phone
            </label>
            <input
              name="phone"
              placeholder="+1 202-555-0136"
              value={form.phone}
              onChange={handleChange}
              className={`p-3 w-full rounded border md:col-span-2 ${
                errors.name
                  ? "border-[#CD2C2C] focus:outline-none focus:ring-2 focus:ring-[#CD2C2C]"
                  : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              }
  `}
            />
          </div>
        </section>

        {/* Shipping Info */}
        <section>
          <h3 className="text-orange-500 font-semibold mb-4 uppercase">
            Shipping Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label
              htmlFor="address"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Address
            </label>
            <input
              name="address"
              placeholder="1137 Williams Avenue"
              value={form.address}
              onChange={handleChange}
              className={`border p-3 w-full rounded md:col-span-2 ${
                errors.name
                  ? "border-[#CD2C2C] focus:outline-none focus:ring-2 focus:ring-[#CD2C2C]"
                  : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              }
  `}
            />
            <input
              name="zip"
              placeholder="10001"
              value={form.zip}
              onChange={handleChange}
              className={`border p-3 w-full rounded ${
                errors.name
                  ? "border-[#CD2C2C] focus:outline-none focus:ring-2 focus:ring-[#CD2C2C]"
                  : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              }
  `}
            />

            <input
              name="city"
              placeholder="New York"
              value={form.city}
              onChange={handleChange}
              className={`border p-3 w-full rounded ${
                errors.name
                  ? "border-[#CD2C2C] focus:outline-none focus:ring-2 focus:ring-[#CD2C2C]"
                  : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              }
  `}
            />
            <label
              htmlFor="address"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Country
            </label>
            <input
              name="country"
              placeholder="United States"
              value={form.country}
              onChange={handleChange}
              className={`border p-3 w-full rounded md:col-span-2 ${
                errors.name
                  ? "border-[#CD2C2C] focus:outline-none focus:ring-2 focus:ring-[#CD2C2C]"
                  : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              }
  `}
            />
          </div>
        </section>

        {/* Payment */}
        <section className="mt-10">
          <h3 className="text-orange-500 font-semibold mb-4 uppercase">
            Payment Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left: Label */}
            <label className="text-sm font-bold text-gray-700 mt-3">
              Payment Method
            </label>

            {/* Right: Radio options */}
            <div className="flex flex-col gap-4 w-full">
              {/* e-Money */}
              <label
                htmlFor="eMoney"
                className={`flex items-center border rounded-lg p-4 cursor-pointer ${
                  form.paymentMethod === "e-Money"
                    ? "border-orange-500"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  id="eMoney"
                  name="paymentMethod"
                  value="e-Money"
                  checked={form.paymentMethod === "e-Money"}
                  onChange={handleChange}
                  className="accent-orange-500 mr-4"
                />
                e-Money
              </label>

              {/* Cash on Delivery */}
              <label
                htmlFor="cash"
                className={`flex items-center border rounded-lg p-4 cursor-pointer ${
                  form.paymentMethod === "Cash on Delivery"
                    ? "border-orange-500"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked={form.paymentMethod === "Cash on Delivery"}
                  onChange={handleChange}
                  className="accent-orange-500 mr-4"
                />
                Cash on Delivery
              </label>
            </div>
            {form.paymentMethod === "e-Money" && (
              <>
                <input
                  name="eMoneyNum"
                  placeholder="e-Money Number"
                  value={form.eMoneyNum}
                  onChange={handleChange}
                  className={`border p-3 w-full rounded ${
                    errors.eMoneyNum
                      ? "border-[#CD2C2C] focus:outline-none focus:ring-2 focus:ring-[#CD2C2C]"
                      : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  }`}
                />
                <input
                  name="eMoneyPin"
                  placeholder="e-Money PIN"
                  value={form.eMoneyPin}
                  onChange={handleChange}
                  className={`border p-3 w-full rounded ${
                    errors.eMoneyPin
                      ? "border-[#CD2C2C] focus:outline-none focus:ring-2 focus:ring-[#CD2C2C]"
                      : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  }`}
                />
              </>
            )}

            {form.paymentMethod === "Cash on Delivery" && (
              <div className="md:col-span-2 flex gap-4 items-start mt-4">
                <img
                  src="/assets/icon-cash-on-delivery.svg"
                  alt="Cash Icon"
                  className="w-6 h-6 mt-1"
                />
                <p className="text-sm text-gray-600">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="w-full lg:w-1/3 bg-white shadow p-6 rounded-lg space-y-6">
        <h3 className="text-lg font-bold uppercase">Summary</h3>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img
                  src={item.image.mobile.replace("./", "/")}
                  className="w-12 h-12 rounded"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <span className="font-bold text-sm">x{item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Total</span>
            <span className="font-bold text-black">
              ${total.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between">
            <span>VAT (Included)</span>
            <span>${vat.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-orange-600 pt-4 border-t">
            <span>Grand Total</span>
            <span>${grandTotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="relative">
          {" "}
          <button
            onClick={() => {
              const isValid = validate();
              if (isValid) {
                setShowModal(true);
              }
            }}
            className="w-full mt-6 bg-primary hover:bg-custom3 text-white py-3 uppercase text-sm tracking-wide transition"
          >
            Continue & Pay
          </button>
          {showModal && <CheckoutModal />}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
