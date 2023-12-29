import React from "react";
import SingleProductCard from "../product/single-product-card";

const data = [
  {
    name: "Cake with Juice",
    items: 45,
    imgUrl: "/images/home/product/food-drinks/1.webp",
    discountPercent: 23,
    discountedPrice: 19.23,
    originalPrice: 2000,
  },
  {
    name: "Juice",
    items: 45,
    imgUrl: "/images/home/product/food-drinks/2.webp",
    discountPercent: 23,
    discountedPrice: 19.23,
    originalPrice: 2000,
  },
  {
    name: "Ice-Drinks",
    items: 15,
    imgUrl: "/images/home/product/food-drinks/3.webp",
    discountPercent: 23,
    discountedPrice: 19.23,
    originalPrice: 2000,
  },
  {
    name: "Cold-Juice",
    items: 15,
    imgUrl: "/images/home/product/food-drinks/4.webp",
    discountPercent: 23,
    discountedPrice: 19.23,
    originalPrice: 2000,
  },
  {
    name: "Beer-Ice",
    items: 85,
    imgUrl: "/images/home/product/food-drinks/5.webp",
    discountPercent: 23,
    discountedPrice: 19.23,
    originalPrice: 2000,
  },
  {
    name: "Ice-Drinks",
    items: 85,
    imgUrl: "/images/home/product/food-drinks/6.webp",
    discountPercent: 23,
    discountedPrice: 19.23,
    originalPrice: 2000,
  },

  {
    name: "Fruit-Juice",
    items: 45,
    imgUrl: "/images/home/product/food-drinks/7.webp",
    discountPercent: 23,
    discountedPrice: 19.23,
    originalPrice: 2000,
  },
  {
    name: "Beer-Ice",
    items: 15,
    imgUrl: "/images/home/product/food-drinks/8.webp",
    discountPercent: 23,
    discountedPrice: 19.23,
    originalPrice: 2000,
  },
  
];

const FeatureProduct = () => {
  return (
    <>
      <div className="container mx-auto md:pl-14 h-[100vh]">
        <div className="">
          <p className="text-center text-6xl font-bold">Featured Products</p>
        </div>
       <div className="flex flex-wrap gap-4 justify-center pt-5">
        {data.map((item, index) => (
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
