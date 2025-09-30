import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartDetails, setCartDetails }) {
  const navigate = useNavigate();

  // ✅ Remove single item
  function handleRemoveCartBtn(data) {
    const filterData = cartDetails.filter((details) => details.id !== data.id);
    setCartDetails(filterData);
  }

  // ✅ Clear entire cart
  function handleClearCart() {
    setCartDetails([]);
  }

  // ✅ Increment quantity
  function handleIncrement(data) {
    const updatedCart = cartDetails.map((item) =>
      item.id === data.id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    setCartDetails(updatedCart);
  }

  // ✅ Decrement quantity
  function handleDecrement(data) {
    const updatedCart = cartDetails.map((item) =>
      item.id === data.id && (item.quantity || 1) > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartDetails(updatedCart);
  }

  // ✅ Total price calculation
  const totalPrice = cartDetails.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  // ✅ Format currency INR
  const formatCurrency = (amount) =>
    amount.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  return (
    <div className="p-4 md:p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {cartDetails.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-4xl">
          {cartDetails.map((data) => (
            <div
              key={data.id}
              className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border rounded-lg shadow-sm"
            >
              {/* Left side: Image + Details */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex flex-col">
                  <div className="font-semibold">{data.title.slice(0,10)}...</div>
                  <div className="text-gray-600">
                    {formatCurrency(data.price)} × {data.quantity || 1}
                  </div>
                </div>
              </div>

              {/* Middle: Quantity */}
              <div className="flex items-center gap-2">
                <button
                  className="bg-gray-300 px-2 rounded"
                  onClick={() => handleDecrement(data)}
                >
                  -
                </button>
                <span className="px-2">{data.quantity || 1}</span>
                <button
                  className="bg-gray-300 px-2 rounded"
                  onClick={() => handleIncrement(data)}
                >
                  +
                </button>
              </div>

              {/* Right: Remove */}
              <button
                className="text-[#333333] font-semibold px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                onClick={() => handleRemoveCartBtn(data)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Totals */}
          <div className="mt-6 p-4 border rounded-lg shadow-md w-full">
            <div className="flex justify-between text-lg">
              <span>Total Price:</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-lg text-green-600">
              <span>Discount (10%):</span>
              <span>- {formatCurrency(discount)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold mt-2">
              <span>Final Price:</span>
              <span>{formatCurrency(finalPrice)}</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button
                onClick={() => navigate("/")}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
