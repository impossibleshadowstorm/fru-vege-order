import React from "react";

const ProductCategory = () => {
  return (
    <div className="mt-[90px] mr-[32px]">
      <div className="border flex flex-col justify-left gap-5 ">
        <div className="flex justify-left items-center gap-5 ">
          <div className="flex ">
            <p className=" rounded-3xl text-[54px] text-textColor">-</p>
            <p className="rounded-full text-[42px] text-textColor">.</p>
          </div>
          <p className="text-[19px] font-bold pt-2">Product Categories</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
