import React from "react";
import { motion } from "framer-motion";

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
                <b>// ANY QUESTION YOU HAVE //</b>
              </p>
              <p className="text-5xl">
                <b>897-876-987-90</b>
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <motion.button
                type="button"
                initial={{ opacity: 0, backgroundColor: "[#80B500]" }}
                animate={{ y: -30, opacity: 1 }}
                transition={{
                  scale: { type: "spring", stiffness: 300 },
                  duration: 1.5,
                }}
                // className="bg-headerCtaButtonBg text-white h-[52px] w-[198px] font-medium"
                className="relative bg-headerCtaButtonBg py-2.5 px-3 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100"
              >
                MAKE A CALL
              </motion.button>

              <motion.button
                type="button"
                initial={{ opacity: 0, backgroundColor: "[#80B500]" }}
                animate={{ y: -30, opacity: 1 }}
                transition={{
                  scale: { type: "spring", stiffness: 300 },
                  duration: 1.5,
                }}
                // className="bg-headerCtaButtonBg text-white h-[52px] w-[198px] font-medium"
                className="relative bg-transparent border py-2.5 px-3 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-headerCtaButtonBg before:transition-transform before:duration-300 before:content-[''] hover:text-white hover:border hover:border-gray-800 before:hover:scale-x-100"
              >
                CONTACT US
              </motion.button>

              {/* <button type="button" className='border border-5 bg-headerCtaButtonBg text-white p-3'>MAKE A CALL</button> */}
              {/* <button type="button"  className="border border-5 bg-black text-white p-3">CONTACT US</button> */}
             
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
