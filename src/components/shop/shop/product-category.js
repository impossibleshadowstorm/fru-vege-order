import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProductCategory = () => {
  return (
    <div className="p-3">
      <div className="border">
        <div className="flex justify-left items-center gap-5 px-5">
          <div className="flex">
            <p className="rounded-3xl text-[54px] text-otherTextColor">-</p>
            <p className="rounded-full text-[42px] text-otherTextColor">.</p>
          </div>
          <p className="text-[19px] font-semibold pt-2 text-textColorBlack">Product Categories</p>
        </div>

        <div className="px-5 text-textColorBlack">
          <div className="flex justify-between pt-2">
          <p>Body</p>
          <FaLongArrowAltRight className="text-otherTextColor"/>
          </div>
          <div className="flex justify-between pt-2">
          <p>Interior</p>
          <FaLongArrowAltRight className="text-otherTextColor"/>
          </div>
          <div className="flex justify-between pt-2">
          <p>Lights</p>
          <FaLongArrowAltRight className="text-otherTextColor"/>
          </div>
          <div className="flex justify-between pt-2">
          <p>Parts</p>
          <FaLongArrowAltRight className="text-otherTextColor"/>
          </div>
          <div className="flex justify-between pt-2">
          <p>Tires</p>
          <FaLongArrowAltRight className="text-otherTextColor"/>
          </div>
          <div className="flex justify-between pt-2">
          <p>Uncategorized</p>
          <FaLongArrowAltRight className="text-otherTextColor"/>
          </div>
          <div className="flex justify-between pt-2 pb-[37px]">
          <p>Wheel</p>
          <FaLongArrowAltRight className="text-otherTextColor"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
