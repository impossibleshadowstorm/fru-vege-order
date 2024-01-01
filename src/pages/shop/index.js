import React from 'react'
import ShopProduct from '../../components/shop/shop/shop-product'
import SingleProductCard from '../../components/home/product/single-product-card'
import data from "../../utils/consts";
import ProductCategory from '../../components/shop/shop/product-category';

const Shop = () => {
  return (
    <div>
      <div className="flex container mx-auto">
      <ShopProduct />
      <ProductCategory />
      </div>
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
  )
}

export default Shop
