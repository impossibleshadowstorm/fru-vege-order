import React from "react";

const btnName = [
  { name: "POPULAR" },
  { name: "DESGIN" },
  { name: "UX" },
  { name: "USEBILITY" },
  { name: "DEVELOP" },
  { name: "ICON" },
  { name: "CAR" },
  { name: "SERVICE" },
  { name: "REPAIRS" },
  { name: "AUTO PARTS" },
  { name: "OIL" },
  { name: "DEALER" },
  { name: "OIL CHANGE" },
  { name: "BODY COLOR" },
];

const PopularTag = () => {
  return (
    <div className="p-3">
      <div className="border">
        <div className="flex justify-left items-center gap-5 px-[30px]">
          <div className="flex">
            <p className=" rounded-3xl text-[54px] text-otherTextColor">-</p>
            <p className="rounded-full text-[42px] text-otherTextColor">.</p>
          </div>
          <p className="text-[19px] font-semibold pt-2 text-textColorBlack">
            Popular Tags
          </p>
        </div>

        <div className="px-5 flex flex-wrap px-[30px] pb-[30px]">
          {btnName.map((item, index) => (
            <button type="button" className="py-2 px-3 font-semibold text-[12px] bg-homeHeaderBg border text-textColorBlack m-2 hover:bg-hoverHeaderCtaButtonBg hover:text-otherHoverTextColor" key={index}>{item.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTag;
