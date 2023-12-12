import React from "react";

const Home = () => {
  return (
    <div className="bg-[#F7F5EB] h-[70vh] flex justify-center">
      <div className="flex justify-around w-[90vw]">
        <div className="ml-12 h-[50vh] flex flex-col items-center justify-center">
          <div className="flex gap-1 w-[29vw] justify-left items-left mb-4">
            <img src="pic1.png" alt="pic1" />
            <p>100% Genuine Product</p>
          </div>
          <div className="flex w-[30vw] justify-left">
            <p className="text-5xl font-bold">Tasty & Healthy Organic Food</p>
          </div>
          <div className="w-[30vw] mt-12">
        <button
          type="button"
          className="bg-headerCtaButtonBg text-white h-[52px] w-[198px] font-medium">
          Explore Products
        </button>
        </div>
        </div>
        <div className="">
          <img src="vegpic1.png" alt="veg1" className="w-[46vw] h-[48vh]" />
        </div>
      </div>
    </div>
  );
};

export default Home
