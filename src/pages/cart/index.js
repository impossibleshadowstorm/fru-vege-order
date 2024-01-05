import React from "react";
import ShopingCart from "../../components/cart/cart-single-item";
import CartCoupon from "../../components/cart/coupon";
import CartTotal from "../../components/cart/cart-total";
import Footer from "../../components/common/footer/footer";
import DeliveryMode from "../../components/home/deliverymode/deliverymode";

const Cart = () => {
  return (
    <div className="bg-fullBg">
        <div className="container mx-auto px-[60px] pt-20 pb-2 border-b mb-[90px]">
          <ShopingCart />
          <ShopingCart />
          <CartCoupon />
          <CartTotal />
        </div>
      <DeliveryMode />
      <Footer />
    </div>
  );
};

export default Cart;
