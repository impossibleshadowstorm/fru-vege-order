import React from "react";
import ShopProduct from "../../components/shop/shop/shop-product";
import SingleProductCard from "../../components/home/product/single-product-card";
import data from "../../utils/consts";
import ProductCategory from '../../components/shop/shop/product-category';
import FilterByPrize from "../../components/shop/shop/filter-by-prize";
import TopRatedProduct from "../../components/shop/product-details/top-rated-product";
import SearchObject from "../../components/shop/shop/search-object";
import PopularTag from "../../components/shop/shop/popular-tag";
import ProductSize from "../../components/shop/shop/product-size";
import DeliveryMode from "../../components/home/deliverymode/deliverymode";
import Footer from "../../components/common/footer/footer";

const Shop = () => {
  return (
    <div className="bg-fullBg">
      <div className="flex justify-center gap-2 mb-[70px]">
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
          <SearchObject />
          <PopularTag />
          <ProductSize />
          <img src="/images/shopProduct/banner-2.jpg" alt="banner" className="w-[325px] ml-3"  />
          </div>
      </div>
      <DeliveryMode />
      <Footer />
    </div>
  );
};

export default Shop;
