import React from "react";
import { FaStar } from "react-icons/fa";
import data from "../../../utils/consts.js";
import { useLocation } from "react-router-dom";


const TopRatedProduct = () => {
  const location = useLocation();

  const isProductDetails = location.pathname === "/product/:id/";

  return (
    <div className={`border flex flex-col gap-3 ${isProductDetails ? "px-[30px] pb-0" : "pl-[9px] ml-3 w-[325px]"}`}>
      <div className="flex justify-left items-center gap-5 pl-[20px]">
        <div className="flex ">
          <p className=" rounded-3xl text-[54px] text-otherTextColor">-</p>
          <p className="rounded-full text-[42px] text-otherTextColor">.</p>
        </div>
        <p className="text-[19px] font-semibold pt-2 text-textColorBlack">Top Rated Product</p>
      </div>

      {data.categoryData.slice(0, 3).map((item, key) => (
        <div key={key} className={`flex gap-5 ${isProductDetails ? "pt-5" : "py-2.5"}`}>
          <img
            src={item.imgUrl}
            alt=""
            className="w-[90px] h-[80px] hover:duration-1000 hover:ease-in-out hover:transition"
          />
          <div className="">
            <ul className="flex text-starColor justify-left items-center gap-1">
              <li>
                <FaStar size={13} />
              </li>
              <li>
                <FaStar size={13} />
              </li>
              <li>
                <FaStar size={13} />
              </li>
              <li>
                <FaStar size={13} />
              </li>
              <li>
                <FaStar size={13} />
              </li>
            </ul>
            <p className="font-semibold text-textColorBlack hover:text-TextColor cursor-pointer">
              {item.name}
            </p>
            <div className="flex gap-3 text-otherTextColor">
              <p className="font-semibold">$49.00</p>
              <p className="line-through">$65.00</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRatedProduct;
