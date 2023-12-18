import React, { useState } from "react";
import Products from "./products";

const OurProducts = () => {
  const [category, setCategory] = useState("food_drinks");

  const handleCategory = (categoryValue) => {
    setCategory(categoryValue);
  };

  return (
    <div className="container mx-auto md:pl-12 mt-[50px] mb-[50px]">
      <div className="">
        <p className="text-center text-6xl font-bold pt-14">Our Products</p>
      </div>

      <div className="flex flex-row justify-center items-center gap-10 mt-[49px] pb-[43px] text-base font-semibold">
        <div
          className="cursor-pointer"
          onClick={() => handleCategory("food_drinks")}
        >
          FOOD & DRINKS
        </div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategory("vegetables")}
        >
          VEGETABLES
        </div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategory("dried_food")}
        >
          DRIED FOOD
        </div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategory("bread_cake")}
        >
          BREAD & CAKE
        </div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div
          className="cursor-pointer active:text-[yellow] visited:text-[green]"
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
