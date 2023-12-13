import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUserAlt, FaCartPlus } from "react-icons/fa";

const Header = ({ isHomePage }) => {
  return (
    <div className="flex items-center md:container mx-auto">
      <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between md:pl-9 md:pr-14 md:mr-6 items-center md:w-[90vw] w-[95vw] md:p-0 p-6">
        <div className="">
          <img
            src="/images/logo.png"
            alt="logo"
            className="filter contrast-75"
          />
        </div>
        {/* <div className="w-20px"></div> */}
        <div className="flex md:gap-12 gap-9 w-max m-auto items-center">
          <div
            className={`flex gap-4 ${
              isHomePage ? "text-homeHeaderText" : "text-otherHeaderText"
            }`}
          >
            <NavLink to="/" className="font-medium hover:text-textColor md:pr-3 pr-0">
              Home
            </NavLink>
            <NavLink to="/about" className="font-medium hover:text-textColor md:pr-3 pr-0">
              About
            </NavLink>
            <NavLink to="/shop" className="font-medium hover:text-textColor md:pr-3 pr-0">
              Shop
            </NavLink>
            <NavLink to="/pages" className="font-medium hover:text-textColor md:pr-3 pr-0">
              Pages
            </NavLink>
            <NavLink to="/contact" className="font-medium hover:text-textColor md:pr-3 pr-0">
              Contact
            </NavLink>
          </div>
          <button
            type="button"
            className="bg-headerCtaButtonBg text-white h-[52px] w-[138px] font-medium text-sm"
          >
            GET A QUOTE
          </button>
          <div className="flex gap-3">
            <div className="flex justify-center items-center bg-white text-black border-red-100 w-[50px] h-[52px] hover:text-otherTextColor">
              <FaSearch size={19}></FaSearch>
            </div>
            <div className="flex justify-center items-center bg-white text-black border-red-100 w-[50px] h-[52px] hover:text-otherTextColor">
              <FaUserAlt size={16} />
            </div>
            <div className="flex justify-center items-center bg-white text-black border-red-100 w-[50px] h-[52px] hover:text-otherTextColor">
              <FaCartPlus size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
