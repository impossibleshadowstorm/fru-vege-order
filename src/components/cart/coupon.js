import React from "react";
import LTRAnimatedBtn from "../common/btnComponent/ltr-animated-btn";

const CartCoupon = () => {
  return (
    <div className="w-100% rid grid-cols-1 md:grid-cols-12 gap-4 border-b ">
      <div className=" col-span-8 px-6 pb-7 pt-3">
        <input
          type="text"
          name="cart-coupon"
          placeholder="Coupon code"
          className="px-10 py-4 border outline-1 outline-greenBorder mr-2"
        />

        <LTRAnimatedBtn name="Apply Coupon" customClass={"px-6 py-4"} />
      </div>
    </div>
  );
};

export default CartCoupon;
