import React from "react";
import ShopingCart from "../../components/cart/cart-single-item";
import CartCoupon from "../../components/cart/coupon";
import CartTotal from "../../components/cart/cart-total";
import Footer from "../../components/common/footer/footer";

const Cart = () => {
  return (
    <>
      <div className="cart-area my-20">
        <div className="container mx-auto ">
          <ShopingCart />
          <ShopingCart />
          <CartCoupon />
          <CartTotal />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
