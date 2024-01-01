import React from "react";
import ProductDetails from "../../components/shop/product-details/product-description";
import DeliveryMode from "../../components/home/deliverymode/deliverymode";
import Footer from "../../components/common/footer/footer";
import RelatedProduct from "../../components/shop/product-details/related-product";
import TopRatedProduct from "../../components/shop/product-details/top-rated-product";
import LandingSection from "../../components/shop/product-details/landing-section";

const ProductDetail = () => {
  return (
    <>
      <div className="container mx-auto px-[60px] mt-[130px] flex gap-5 ">
        <LandingSection />
        <TopRatedProduct />
      </div>
      <ProductDetails />
      <RelatedProduct />
      <DeliveryMode />
      <Footer />
    </>
  );
};

export default ProductDetail;
