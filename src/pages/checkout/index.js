import React from "react";
import BillingDetails from "../../components/checkout/billing-details";
import PaymentMode from "../../components/checkout/payment-mode";
import CartTotal from "../../components/checkout/cart-total";
import DeliveryMode from "../../components/home/deliverymode/deliverymode";
import  Footer  from "../../components/common/footer/footer";

const Checkout = () => {
  return (
    <div className="">
    <div className="container mx-auto px-[60px] mb-[110px]">
      <BillingDetails />
      <div className="flex justify-between px-4 mt-[90px]">
      <PaymentMode />
      <CartTotal />
      </div>
      </div>
      <DeliveryMode />
      <Footer />
    </div>
  );
};

export default Checkout;
