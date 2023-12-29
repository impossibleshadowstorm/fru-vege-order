import React from "react";

const FeatureAbout = () => {
  return (
    <div className="h-[80vh] bg-homeHeaderBg flex flex-col justify-center items-center gap-6">
      <div className="">
        <p className="text-textColor font-bold">{"//"} FEATURES {"//"}</p>
      </div>
      <div className="mt-[-22px]">
        <p className="text-[60px] font-semibold">Why Choose Us.</p>
      </div>
      <div className="flex gap-8">
        <div className="w-[370px] bg-white border">
          <div className="pt-[40px] pb-[20px] px-[40px] flex gap-4 items-center">
            <img src="/images/about/1.png" alt="" />
            <p className="text-[21px] font-bold">All Kind Brand</p>
          </div>
          <p className="px-[40px] pb-[30px]">
            Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
            eiusmod te mp or incididunt ut labore.
          </p>
        </div>
        <div className="w-[370px] bg-white border">
          <div className="pt-[40px] pb-[20px] px-[40px] flex gap-4 items-center">
            <img src="/images/about/2.png" alt="" />
            <p className="text-[21px] font-bold">Curated Products</p>
          </div>
          <p className="px-[40px] pb-[30px]">
            Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
            eiusmod te mp or incididunt ut labore.
          </p>
        </div>
        <div className="w-[370px] bg-white border">
          <div className="pt-[40px] pb-[20px] px-[40px] flex gap-4 items-center">
            <img src="/images/about/3.png" alt="" />
            <p className="text-[21px] font-bold">Pesticide Free Goods</p>
          </div>
          <p className="px-[40px] pb-[30px]">
            Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
            eiusmod te mp or incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureAbout;
