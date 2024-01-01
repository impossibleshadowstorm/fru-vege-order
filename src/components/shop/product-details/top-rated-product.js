import React from "react";
import { FaStar } from "react-icons/fa";
import data from "../../../utils/consts.js";

const TopRatedProduct = () => {
  return (
    <div className="border flex flex-col gap-5 px-[40px]">
      <div className="flex justify-left items-center gap-5 pl-[30px]">
        <div className="flex ">
          <p className=" rounded-3xl text-[54px] text-textColor">-</p>
          <p className="rounded-full text-[42px] text-textColor">.</p>
        </div>
        <p className="text-[19px] font-bold pt-2">Top Rated Product</p>
      </div>

      {data.categoryData.slice(0, 3).map((item, key) => (
        <div key={key} className="flex gap-5 pt-5">
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
            <p className="font-semibold hover:text-textColor cursor-pointer">
              {item.name}
            </p>
            <div className="flex gap-3 text-textColor">
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
