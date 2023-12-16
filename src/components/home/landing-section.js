import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RightLandingSection from "./rightlanding-section";
import LeftLandingSection from "./leftlanding-section";
import {motion} from 'framer-motion';

const images = ["/images/vegpic1.png", "/images/vegpic2.png"];

const LandingSection = () => {
  const [cIdx, setCIdx] = useState(0);

  const moveForward = () => {
    if (cIdx !== images.length - 1) {
      setCIdx(cIdx + 1);
    } else {
      setCIdx(0);
    }
  };

  const moveBackward = () => {
    if (cIdx !== 0) {
      setCIdx(cIdx - 1);
    } else {
      setCIdx(images.length - 1);
    }
  };

  return (
    <div className="bg-landingSecBg md:h-[70vh] h-[100vh] flex justify-center items-center">
      {/* left arrow */}
      <motion.div animate={{ x: 20, scale:1 }} initial={{scale:0}} transition={{ duration: 1.5 }}
        onClick={moveBackward}
        className="w-[60px] h-[60px] text-size-2 flex justify-center items-center md:ml-8 ml-1 border border-solid border-gray-200 hover:bg-headerCtaButtonBg hover:text-[white]"
      >
        <FaArrowLeft size={22} className="w-6 h-5" />
      </motion.div>
      <div
        className={`flex md:flex-row ${
          cIdx % 2 === 0 ? "" : "md:flex-row-reverse"
        } flex-col-reverse w-[100vw] md:pb-0 pb-14 container mx-auto md:pl-12 items-center`}
      >
        {/* Left Content Div */}
        <LeftLandingSection cIdx={cIdx} />
        <RightLandingSection images={images} cIdx={cIdx} />
        {/* Right Image Div */}
      </div>
      {/* right arrow */}
      <motion.div animate={{ x:-20, scale:1 }} initial={{scale:0}} transition={{ duration: 1.5 }}
        onClick={moveForward}
        className="w-[60px] h-[60px] text-size-2 flex justify-center items-center md:mr-8 mr-1 border border-solid border-gray-200 hover:bg-headerCtaButtonBg hover:text-[white]"
      >
        <FaArrowRight size={22} className="w-6 h-5" />
      </motion.div>
    </div>
  );
};

export default LandingSection;
