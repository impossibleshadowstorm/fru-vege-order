import React from "react";

const RightLandingSection = ({ images, cIdx }) => {
  return (
    <div className="md:w-[50vw] w-[84vw] h-[50vh] md:h-[70vh] flex justify-center items-center">
      <img src={images[cIdx]} alt="veg1" className="" />
    </div>
  );
};

export default RightLandingSection;
