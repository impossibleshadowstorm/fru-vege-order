import React from "react";
import SingleProductCard from "../product/single-product-card";
import data from "../../../utils/consts.js";


const FeatureProduct = () => {
  return (
    <>
      <div className="container mx-auto md:pl-14 h-[100vh]">
        <div className="">
          <p className="text-center text-6xl font-bold">Featured Products</p>
        </div>
       <div className="flex flex-wrap gap-5 justify-center pt-2">
        {data.featuredata.map((item, index) => (
          <SingleProductCard key={index}  
          name={item.name}
          discountedPrice={item.discountedPrice}
          originalPrice={item.originalPrice}
          imageUrl={item.imgUrl}
          discountPercent={item.discountPercent} />
        ))}
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
