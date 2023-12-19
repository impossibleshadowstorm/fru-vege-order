import React from "react";
import { motion } from "framer-motion";

// const content = {
//   hidden: { opacity: 0, y: "100vw" },
//   show: {
//     opacity: 1,
//     x: "0",
//     transition: {
//       type: "spring",
//       delay: 0.2,
//     },
//   },
// };

const LeftLandingSection = ({ cIdx }) => {
  return (
    <motion.div className="font-rajdhani h-20vh md:h-[70vh] w-[100%] md:w-[50%] flex flex-col justify-center md:pt-0 pt-9">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: -20, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`flex flex-row gap-1 md:items-center w-[100%] md:w-[30vw] md:pt-0 pt-4 ${
          cIdx % 2 === 0 ? "md:justify-start" : "md:justify-end"
        } justify-center`}
      >
        <img src="/images/pic1.png" alt="pic1" />
        <p>100% Genuine Product</p>
      </motion.div>
      <div className={`flex flex-col md:w-[30vw] justify-center`}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={`md:text-5xl text-3xl font-rajdhani md:w-[30vw] ${
            cIdx % 2 === 0 ? "" : "w-[65vw]"
          } m-auto font-bold ${cIdx % 2 === 0 ? "" : "text-right"}`}
        >
          {cIdx % 2 === 0
            ? "Tasty & Healthy Organic Food"
            : "Our Garden's Most Favorite Food"}
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={`md:pt-5 pt-5 md:w-[30vw] w-[60vw] m-auto ${
            cIdx % 2 === 0 ? "" : "text-right"
          }`}
        >
          {cIdx % 2 === 0
            ? ""
            : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At autem modi provident suscipit itaque corrupti dolore dolor."}
        </motion.span>
      </div>
      <div
        className={`md:w-[30vw] mt-12 flex gap-3 ${
          cIdx % 2 === 0 ? "md:justify-start" : "md:justify-end"
        } justify-center`}
      >
        <motion.button
          type="button"

          // variants={content}
          // // initial="hidden"
          // animate="show"
          // // viewport={{once:false, amount:0}}
          // whileHover={{backgroundColor:'red', x:12}}

          initial={{ opacity: 0, backgroundColor: "[#80B500]" }}
          animate={{ y: -30, opacity: 1 }}
          transition={{ scale: { type: "spring", stiffness: 300 } ,duration: 1.5}}
          className="bg-headerCtaButtonBg text-white h-[52px] w-[198px] font-medium"
        >
          Explore Products
        </motion.button>
        <motion.button
          type="button"

          initial={{ opacity: 0, backgroundColor: "[#ffff]" }}
          animate={{ y: -30, opacity: 1 }}
          transition={{ scale: { type: "spring", stiffness: 300 } ,duration: 1.5}}

          className={`${
            cIdx % 2 === 0
              ? ""
              : "bg-[white] text-black h-[52px] w-[160px] font-medium"
          }`}
        >
          {cIdx % 2 === 0 ? "" : "Learn More"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LeftLandingSection;
