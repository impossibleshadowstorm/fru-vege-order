import React from "react";

const CtaBtn = ({ name, customClass }) => {
  return (
    <button
      type="button"
      className={`${customClass} bg-headerCtaButtonBg text-white h-[52px] w-[138px] font-medium text-sm hover:bg-hoverHeaderCtaButtonBg  bg-black ${customClass}`}
    >
      {name}
    </button>
  );
};

export default CtaBtn;
