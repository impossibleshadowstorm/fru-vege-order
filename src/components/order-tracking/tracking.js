import React from "react";
import RLTRAnimatedBtn from "../common/btnComponent/rltr-animated-btn";

const Tracking = () => {
  return (
    <div className="container mx-auto pb-[20px] w-[60vw] mt-20">
      <div className="border mx-[60px] my-20 bg-ordertracking p-14 text-textColorBlack">
        <p className="text-lg text-center px-2">
          To track your order please enter your Order ID in the box below and
          press the "Track Order" button. This was given to you on your receipt
          and in the confirmation email you should have received.
        </p>
        <div className="mt-5">
          <p className="text-lg">Order ID</p>
          <input
            type="text"
            placeholder="Found in your order confirmation email."
            name=""
            className="w-[40rem] h-[60px] px-3"
          />
        </div>
        <div className="mt-5 mb-[30px]">
          <p className="text-lg">Billing email</p>
          <input
            type="email"
            placeholder="Email you used during checkout."
            name=""
            className="w-[40rem] h-[60px] px-3"
          />
        </div>
        <div className="flex justify-center items-center">
          <RLTRAnimatedBtn name={"TRACK ORDER"} />
        </div>
      </div>
    </div>
  );
};

export default Tracking;
