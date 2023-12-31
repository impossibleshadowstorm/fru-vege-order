import React from "react";
import SingleProductCard from "../product/single-product-card";
import data from "../../../utils/consts.js";

// const data = [
//   {
//     name: "Cake with Juice",
//     items: 45,
//     imgUrl: "/images/bocali pic/6.png",
//     discountPercent: 23,
//     discountedPrice: 19.23,
//     originalPrice: 2000,
//   },
//   {
//     name: "Juice",
//     items: 45,
//     imgUrl: "/images/bocali pic/14.png",
//     discountPercent: 23,
//     discountedPrice: 19.23,
//     originalPrice: 2000,
//   },
//   {
//     name: "Ice-Drinks",
//     items: 15,
//     imgUrl: "/images/bocali pic/15.png",
//     discountPercent: 23,
//     discountedPrice: 19.23,
//     originalPrice: 2000,
//   },
//   {
//     name: "Cold-Juice",
//     items: 15,
//     imgUrl: "/images/bocali pic/9.png",
//     discountPercent: 23,
//     discountedPrice: 19.23,
//     originalPrice: 2000,
//   },
//   {
//     name: "Beer-Ice",
//     items: 85,
//     imgUrl: "/images/bocali pic/10.png",
//     discountPercent: 23,
//     discountedPrice: 19.23,
//     originalPrice: 2000,
//   },
//   {
//     name: "Ice-Drinks",
//     items: 85,
//     imgUrl: "/images/bocali pic/12.png",
//     discountPercent: 23,
//     discountedPrice: 19.23,
//     originalPrice: 2000,
//   },

//   {
//     name: "Fruit-Juice",
//     items: 45,
//     imgUrl: "/images/bocali pic/tomato.png",
//     discountPercent: 23,
//     discountedPrice: 19.23,
//     originalPrice: 2000,
//   },
//   {
//     name: "Beer-Ice",
//     items: 15,
//     imgUrl: "/images/bocali pic/8.png",
//     discountPercent: 23,
//     discountedPrice: 19.23,
//     originalPrice: 2000,
//   },
  
// ];

const FeatureProduct = () => {
  return (
    <>
      <div className="container mx-auto md:pl-14 h-[100vh]">
        <div className="">
          <p className="text-center text-6xl font-bold">Featured Products</p>
        </div>
       <div className="flex flex-wrap gap-4 justify-center pt-5">
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
