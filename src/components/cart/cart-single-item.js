import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartSingleItem = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b">
      <div className=" flex flex-row items-center justify-center w-[100%] ">
        <FaTrashAlt />
      </div>
      <div className="bg-white col-span-2  px-6  py-7 ">
        <a href="/">
          <img
            className="max-w-28 max-h-28 "
            src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/1.png"
            alt=""
          />
        </a>
      </div>
      <div className="bg-white col-span-4  px-6  py-7 flex items-center">
        <h4>
          <a href="/" className="text-xl font-bold hover:text-hoverTextColor ">
            Vegetables Juices
          </a>
        </h4>
      </div>
      <div className=" cart-product-price  col-span-1 px-6  py-7 flex items-center">
        $149.00
      </div>

      <div className=" cart-product-quantity col-span-2  px-6  py-7 flex items-center ">
        <div className="cart-plus-minus border border-[#ededed] w-36 h-16  flex font-bold ">
          <div className="dec dec qtybutton h-16 w-10 cursor-pointer items-center flex justify-center text-xl	">
            -
          </div>
          <input
            type="text"
            value="02"
            name="qtybutton"
            className="cart-plus-minus-box  h-16 w-14 text-center bg-transparent border-x-2"
          ></input>
          <div className="inc qtybutton h-16 w-10  cursor-pointer items-center flex justify-center text-xl">
            +
          </div>
        </div>
      </div>
      <div className="cart-product-subtotal  col-span-2 px-6  py-7 flex items-center font-bold">
        $298.00
      </div>
    </div>
  );
};

export default CartSingleItem;
