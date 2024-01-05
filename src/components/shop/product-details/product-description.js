import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DescriptionforProduct from "./description";
import ReviewOfProduct from "./review";

function ProductDescription() {
  const [indexNumber, setIndexNumber] = useState(0);

  const descHandler = () => {
    setIndexNumber(0);
  };
  const reviewHandler = () => {
    setIndexNumber(1);
  };

  return (
    <div className="flex justify-center gap-4">
      <div className="container mx-auto mt-[150px] px-[60px] w-[100vw]">
        <div className="flex gap-9 pb-5">
          <button
            type="button"
            onClick={descHandler}
            className="text-lg font-semibold text-textColorBlack focus:text-TextColor"
          >
            Description
          </button>

          <button
            type="button"
            onClick={reviewHandler}
            className="text-lg font-semibold text-textColorBlack focus:text-TextColor"
          >
            Reviews
          </button>
        </div>
        <hr />

        <div className="pt-5 w-[100%]">
          {indexNumber === 0 ? <DescriptionforProduct /> : <ReviewOfProduct />}
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
