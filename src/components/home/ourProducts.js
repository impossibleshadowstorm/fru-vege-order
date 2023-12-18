import React from "react";
import Products from "./products";

const OurProducts = () => {
  return (
    <div className="container mx-auto md:pl-12 mt-[50px] mb-[50px]">
      <div className="">
        <p className="text-center text-6xl font-bold pt-14">Our Products</p>
      </div>

      <div className="flex flex-row justify-center items-center gap-10 mt-[49px] pb-[43px] text-base font-semibold">
        <div className="cursor-pointer">FOOD & DRINKS</div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div className="cursor-pointer">VEGETABLES</div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div className="cursor-pointer">DRIED FOOD</div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div className="cursor-pointer">BREAD & CAKE</div>
        <div className="h-[15px] border border-5 border-[#80B500]"></div>
        <div className="cursor-pointer active:text-[yellow] visited:text-[green]">
          FISH & MEAT
        </div>
      </div>

      <Products/>
    </div>
  );
};

export default OurProducts;
