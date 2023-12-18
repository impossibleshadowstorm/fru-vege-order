import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const SingleProductCard = ({
  name,
  discountedPrice,
  originalPrice,
  imageUrl,
  discountPercent,
}) => {
  return (
    <div className="max-w-[300px] h-[50vh] rounded overflow-hidden shadow-md border hover:shadow-2xl">
      <div className="relative">
        <img className="w-[300px] h-[240px]" src={imageUrl} alt="Apple" />
        <div className="text-[white] absolute right-4 top-3 h-[4vh] bg-[#80B500] text-center px-4 rounded-b-lg rounded-r-md shadow-md hover:shadow-xl border">
          -{discountPercent} %
        </div>
      </div>
      <div className="px-6 py-4 text-center">
        <div className="py-1">
          <ul className="flex text-[#ffb800] justify-center items-center gap-2">
            <li>
              <FaStar size={16} />
            </li>
            <li>
              <FaStar size={16} />
            </li>
            <li>
              <FaStar size={16} />
            </li>
            <li>
              <FaStarHalfAlt size={16} />
            </li>
            <li>
              <FaRegStar size={16} />
            </li>
            <li className="text-[#80B500]">(24)</li>
          </ul>
        </div>
        <p className="text-base font-bold text-[#80B500]">{name}</p>
        <div className="flex gap-3 justify-center text-[#80B500] font-semibold">
          <span>${discountedPrice}</span>
          <span className="line-through">${originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
