import React from "react";

const RightLandingSection = ({ images, cIdx }) => {
  return (
    <div className="md:w-[50vw] w-[84vw] h-[70vh] md:h-[70vh] flex justify-center items-center md:pt-0 pt-14">
      <img src={images[cIdx]} alt="veg1" className="md:h-[400px] h-[270px]" />
    </div>
  );
};

export default RightLandingSection;
