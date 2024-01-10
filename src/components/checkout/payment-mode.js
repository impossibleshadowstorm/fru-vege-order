import React, { useState } from "react";
import RLTRAnimatedBtn from "../common/btnComponent/rltr-animated-btn";

const PaymentMode = () => {
  const CreatePaymentMethod = (title, description) => {
    const [visibility, setVisibility] = useState(false);

    return (
      <div className="flex flex-col border-b text-textColorBlack">
        <div
          onClick={() => setVisibility(!visibility)}
          className="flex justify-left items-center gap-4 pl-4 py-[30px]"
        >
          <input checked={visibility} type="radio" name="" className="w-4 h-4"/>
          <p className="text-lg font-bold">{title}</p>
          <div className="w-[120px] h-[26px]">
            <img src={`./images/${title.toLowerCase()}.png`} alt="" />
          </div>
        </div>
        <p
          style={{ display: visibility ? "block" : "none" }}
          className="border shadow-md px-[35px] py-3 mx-5 my-3"
        >
          {description}
        </p>
      </div>
    );
  };

  return (
      <div className="w-[50%] text-textColorBlack">
        <h2 className="font-bold text-3xl">Payment Method</h2>

        <div className="border my-[32px]">
          {CreatePaymentMethod(
            "Check payments",
            "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."
          )}
          {CreatePaymentMethod(
            "Cash on delivery",
            "Pay with cash upon delivery"
          )}
          {CreatePaymentMethod(
            "ApplePay",
            "Apple Pay is the modern way to pay."
          )}
          {CreatePaymentMethod(
            "PayPal",
            "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account."
          )}
        </div>

        <p className="py-3">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>

        <div className="my-5">
          <RLTRAnimatedBtn name={"PLACE ORDER"} />
        </div>
      </div>
  );
};

export default PaymentMode;

