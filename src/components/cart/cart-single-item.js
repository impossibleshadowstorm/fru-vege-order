import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartSingleItem = () => {
  const [counter, setCounter] = useState(0);
  const increaseItem = () => {
    setCounter(counter + 1);
  };
  const decreaseItem = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b mb-4">
      <div className=" flex flex-row items-center justify-center w-[100%] text-textColorBlack ">
        <FaTrashAlt />
      </div>
      <div className="col-span-2 px-6 py-7">
        <a href="/">
          <img
            className="max-w-28 max-h-28"
            src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/1.png"
            alt=""
          />
        </a>
      </div>
      <div className="bg-boxBg col-span-4  px-6  py-7 flex items-center">
        <h4>
          <a href="/" className="text-xl font-bold text-textColorBlack hover:text-hoverTextColor ">
            Vegetables Juices
          </a>
        </h4>
      </div>
      <div className=" cart-product-price col-span-1 px-6 py-7 flex items-center text-textColorBlack">
        $149.00
      </div>

      <div className=" cart-product-quantity col-span-2  px-6  py-7 flex items-center text-textColorBlack">
        <div className="cart-plus-minus border border-[#ededed] w-36 h-16  flex font-bold ">
          <div
            className="dec dec qtybutton h-16 w-10 cursor-pointer items-center flex justify-center text-xl"
            onClick={decreaseItem}
          >
            -
          </div>
          <input
            type="text"
            value={counter + 1}
            name="qtybutton"
            className="cart-plus-minus-box  h-16 w-14 text-center bg-transparent border-x-2"
          ></input>
          <div
            className="inc qtybutton h-16 w-10 cursor-pointer items-center flex justify-center text-xl"
            onClick={increaseItem}
          >
            +
          </div>
        </div>
      </div>
      <div className="cart-product-subtotal text-textColorBlack col-span-2 px-6  py-7 flex items-center font-bold">
        ${149 * (counter+1)}.00
      </div>
    </div>
  );
};

export default CartSingleItem;
