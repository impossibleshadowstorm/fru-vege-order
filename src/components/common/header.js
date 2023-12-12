import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUserAlt, FaCartPlus } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="flex justify-around items-center w-[90vw]">
      <div>
        <img src="logo.png" alt="logo"/>
      </div>
      <div className="flex gap-9 items-center">
        <div className="flex gap-4 text-homeHeaderText">
          <NavLink to="/" className="font-medium">Home +</NavLink>
          <NavLink to="/about" className="font-medium">About +</NavLink>
          <NavLink to="/shop" className="font-medium">Shop +</NavLink>
          <NavLink to="/news" className="font-medium">News +</NavLink>
          <NavLink to="/pages" className="font-medium">Pages +</NavLink>
          <NavLink to="/contact" className="font-medium">Contact</NavLink>
        </div>
        <button
          type="button"
          className="bg-headerCtaButtonBg text-white h-[52px] w-[138px] font-medium text-sm">
          GET A QUOTE
        </button>
        <div className="flex gap-3">
          <div className="flex justify-center items-center bg-white text-black border-red-100 w-[50px] h-[52px]">
            <FaSearch size={19}></FaSearch>
          </div>
          <div className="flex justify-center items-center bg-white text-black border-red-100 w-[50px] h-[52px]">
            <FaUserAlt size={16} />
          </div>
          <div className="flex justify-center items-center bg-white text-black border-red-100 w-[50px] h-[52px]">
            <FaCartPlus size={16} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopHeader;
