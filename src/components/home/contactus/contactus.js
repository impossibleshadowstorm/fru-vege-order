import React from "react";
import RLTRAnimatedBtn from "../../common/btnComponent/rltr-animated-btn";
import LTRAnimatedBtn from "../../common/btnComponent/ltr-animated-btn";

const ContactUs = () => {
  return (
    <div>
      <div
        className="md:bg-cover md:bg-center h-[60vh] mt-[280px] overflow-y-hidden"
        style={{
          backgroundImage:
            "url('/images/home/category/6thsection/backgroundpic.jpg')",
        }}
      >
        <div className="flex justify-between items-center ">
          <div className="w-[549px] h-[487px]">
            <img
              src="/images/home/category/6thsection/vegfruit.png"
              alt="vegfruit"
            />
          </div>
          <div className="text-white flex flex-col items-center gap-12 mb-14">
            <div className="flex flex-col items-center gap-5">
              <p className="text-base text-textColor">
                <b>{"//"} ANY QUESTION YOU HAVE {"//"}</b>
              </p>
              <p className="text-5xl">
                <b>897-876-987-90</b>
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <RLTRAnimatedBtn name={"MAKE A CALL"}/>   
              
              <LTRAnimatedBtn name={"CONTACT US"} />           
            </div>
          </div>
          <div className="w-[400px] h-[500px]">
            <img
              src="/images/home/category/6thsection/manimg.png"
              alt="manimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
