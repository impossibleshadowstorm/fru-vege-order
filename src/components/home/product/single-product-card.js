import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaRegEye, FaShoppingCart,FaRegHeart } from "react-icons/fa";

const SingleProductCard = ({
  name,
  discountedPrice,
  originalPrice,
  imageUrl,
  discountPercent,
}) => {

  const [isShown, setIsShown] = useState(false);

  return (
    <div 
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}

     className="max-w-[280px] h-[50vh] rounded overflow-hidden shadow-md border hover:shadow-2xl md:my-5">
      <div className="relative">
        <img className="w-[300px] h-[240px]" src={imageUrl} alt="Apple" />

        {isShown && (
        <div className="flex flex-row justify-center items-center gap-2">
        <div className="absolute bottom-20 right-16 md:block md:bg-[white] rounded-full p-3 hover:text-white hover:bg-headerCtaButtonBg">
          <FaRegHeart size={16} /> 
        </div>
        <div className="absolute bottom-20 right-28 md:block md:bg-[white] rounded-full p-3 hover:text-white hover:bg-headerCtaButtonBg">
        <FaShoppingCart size={16} />
        </div>
        <div className="absolute bottom-20 right-40 md:block md:bg-[white] rounded-full p-3 hover:text-white hover:bg-headerCtaButtonBg">
        <FaRegEye size={16} /> 
        </div>
        </div>
        )}
        <div className="text-[white] absolute right-4 top-3 h-[4vh] bg-headerCtaButtonBg text-center px-4 rounded-b-lg rounded-r-md shadow-md hover:shadow-xl border">
          -{discountPercent} %
        </div>
      </div>
      <div className="px-6 py-4 text-center">
        <div className="py-1">
          <ul className="flex text-starColor justify-center items-center gap-2">
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
            <li className="text-textColor">(24)</li>
          </ul>
        </div>
        <p className="text-base font-bold text-textColor">{name}</p>
        <div className="flex gap-3 justify-center text-textColor font-semibold">
          <span>${discountedPrice}</span>
          <span className="line-through">${originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;