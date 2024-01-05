import React from "react";
import RLTRAnimatedBtn from "../../common/btnComponent/rltr-animated-btn";

const Subscribe = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center mt-[140px] h-[50vh] w-[99vw] mr-1 bg-black border text-white  ">
        <p className="text-[37px] font-bold">We make your inbox better</p>
        <p className="text-center">
          Sign up to our newsletter to receive grooming tips, style inspiration,
          <br />
          exclusive access to pre-launch product pricing and more.
        </p>
        <div className="mt-5 flex justify-center items-center bg-[green]">
          <input
            type="email"
            placeholder="Email*"
            className="w-[37vw] h-[6vh] placeholder:pl-2 text-black pl-5 bg-boxBg border"
          />

          <div className="bg-white ">
            <RLTRAnimatedBtn name={"SUBSCRIBE"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
