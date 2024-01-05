import React, { useState } from "react";
import Products from "./products";
import { useSelector } from "react-redux";
import alldata from "../../../utils/consts"


const OurProducts = () => {
  const [category, setCategory] = useState("food_drinks");
  const theme = useSelector((state) => state.websiteTheme.theme);

  const handleCategory = (categoryValue) => {
    setCategory(categoryValue);
  };

  const changeColor = (text) => {
    return category === text ? "text-hoverTextColor":(theme === alldata.themeConstants.DARK_THEME ? "text-white" : "text-black");
  };
 

  return (
    <div className="container mx-auto md:pl-12 mt-[50px] mb-[50px] text-textColorBlack">
      <div className="">
        <p className="text-center text-6xl font-bold pt-14 text-textColorBlack">Our Products</p>
      </div>

      <div className="flex flex-row justify-center items-center gap-10 mt-[49px] pb-[43px] text-md font-semibold">
        <div
          className={`${changeColor("food_drinks")} cursor-pointer`}
          onClick={() => handleCategory("food_drinks")}
        
        >
          FOOD & DRINKS
         
        {/* <div className="h-[2px] w-[120px] border border-2 border-[#80B500]"></div> */}
     
        </div>

        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div
          className={`${changeColor("vegetables")} cursor-pointer`}
          onClick={(() => handleCategory("vegetables"))}
        >
          VEGETABLES
        </div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div
          className={`${changeColor("dried_food")} cursor-pointer`}
          onClick={() => handleCategory("dried_food")}
        >
          DRIED FOOD
        </div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div
          className={`${changeColor("bread_cake")} cursor-pointer`}
          onClick={() => handleCategory("bread_cake")}
        >
          BREAD & CAKE
        </div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div
          className={`${changeColor("fish_meat")} cursor-pointer`}
          onClick={() => handleCategory("fish_meat")}
        >
          FISH & MEAT
        </div>
      </div>

      <Products category={category} />
    </div>
  );
};

export default OurProducts;
