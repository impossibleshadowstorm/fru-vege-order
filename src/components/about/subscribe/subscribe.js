import React from "react";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center mt-[140px] h-[50vh] bg-black text-white  ">
        <p className="text-[37px] font-bold">We make your inbox better</p>
        <p className="text-center">
          Sign up to our newsletter to receive grooming tips, style inspiration,
          <br />
          exclusive access to pre-launch product pricing and more.
        </p>
        <div className="pt-2">
          <input
            type="email"
            placeholder="Email*"
            className="w-[37vw] h-[8vh] placeholder:pl-4"
          />
          {/* <button type="button" className="bg-headerCtaButtonBg text-white h-[8vh] w-[160px]">SUBSCRIBE</button> */}
          <motion.button
            type="button"
            initial={{ opacity: 0, backgroundColor: "[#80B500]" }}
            animate={{ y: 0.2, opacity: 1 }}
            transition={{
              scale: { type: "spring", stiffness: 300 },
              duration: 1.5,
            }}
            // className="bg-headerCtaButtonBg text-white h-[52px] w-[198px] font-medium"
            className="relative bg-headerCtaButtonBg w-[160px] h-[60px] font-medium text-white transition-colors 
            before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left 
            before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] 
            hover:text-black hover:border hover:border-2 before:hover:scale-x-100"
          >
            SUBSCRIBE
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
