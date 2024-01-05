import React from "react";
import ShopProduct from "../../components/shop/shop/shop-product";
import SingleProductCard from "../../components/home/product/single-product-card";
import data from "../../utils/consts";
import ProductCategory from '../../components/shop/shop/product-category';
import FilterByPrize from "../../components/shop/shop/filter-by-prize";
import TopRatedProduct from "../../components/shop/product-details/top-rated-product";

const Shop = () => {
  return (
    <div>
      <div className="flex justify-center gap-2">
        <div className="flex flex-col justify-left items-left mt-[100px] w-[50rem] gap-5">
          <ShopProduct />
          <div className="flex flex-wrap justify-left gap-[15px]">
            {data.featuredata.map((item, index) => (
              <SingleProductCard
                key={index}
                name={item.name}
                discountedPrice={item.discountedPrice}
                originalPrice={item.originalPrice}
                imageUrl={item.imgUrl}
                discountPercent={item.discountPercent}
              />
            ))}
          </div>
        </div>
        <div className="w-[350px] mt-[90px]">
          <ProductCategory />
          <FilterByPrize />
          <TopRatedProduct />
          </div>
      </div>
    </div>
  );
};

export default Shop;
