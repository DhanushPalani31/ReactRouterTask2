import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ cartDetails }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-6 shadow-md">
      <div className="text-[#054C73] text-md font-bold">Vintage Online</div>
      <div className="flex gap-4 items-center justify-center">
        <div
          className="text-[#054C73] font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Products
        </div>
        <div className="relative">
          <button
            className=" font-semibold p-2 px-10 rounded-md bg-green-500 text-white"
            onClick={() => navigate("/cart")}
          >
            Cart
          </button>
          {/* Badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
            {cartDetails.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
