import React from "react";

const Breadcrumb = ({ title, pageName }) => {
  return (
    <div className="visible absolute bottom-[100px] left-[100px] container mx-auto h-[30px] text-white px-[80px] flex justify-between items-center">
      <div className="">
        <p className="text-otherTextColor font-semibold">
          {"//"} WELCOME TO OUR COMPANY
        </p>
        <p className="text-[55px] font-bold">{title}</p>
      </div>
      <div className="">
        <p>
          <a href="/" className="font-bold">
            Home
          </a>{" "}
          |{" "}
          <span className="text-otherTextColor font-bold">
            {pageName}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
