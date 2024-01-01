import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUserAlt, FaCartPlus } from "react-icons/fa";
import CtaBtn from "./btnComponent/cta-btn";
import { Dropdown } from "flowbite-react";

const Header = ({ isHomePage }) => {
  return (
    <div className="flex items-center mx-4 md:container md:mx-auto">
      <div className="flex md:flex-row flex-col md:gap-5 gap-3 justify-between md:pl-9 md:pr-14 md:mr-6 mr-3 items-center md:w-[90vw] w-[95vw] md:p-0 p-3">
        <div className="">
          <img
            src={`${isHomePage ? "/images/logo.png" : "/images/logo-2.png"}`}
            alt="logo"
            className="filter contrast-75"
          />
        </div>
        {/* <div className="w-20px"></div> */}
        <div className="flex md:gap-12 gap-9 items-center">
          <div
            className={`flex gap-4 ${
              isHomePage ? "text-homeHeaderText" : "text-otherHeaderText"
            }`}
          >
            <NavLink
              to="/"
              className="font-medium hover:text-textColor md:pr-3 pr-0"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="font-medium hover:text-textColor md:pr-3 pr-0"
            >
              About
            </NavLink>

            <NavLink
              to="#"
              className="font-medium hover:text-textColor"
            >
              <div className={`hover:text-textColor ${isHomePage ? "text-black" : "text-white"}`}>
                <Dropdown label="Shop" inline>
                  <Dropdown.Item className="text-md w-[190px] h-[30px] flex justify-left px-[27px] hover:bg-[#f1f5f9] hover:text-textColor">
                    <NavLink to="/shop" className="font-medium hover:text-textColor">
                    Shop
                   </NavLink> 
                  </Dropdown.Item>
                  <Dropdown.Item className="text-md w-[190px] h-[30px] flex justify-left px-[27px] hover:bg-[#f1f5f9] hover:text-textColor">
                  <NavLink to="/product/:id/" className="font-medium hover:text-textColor">
                    Product details
                   </NavLink> 
                  </Dropdown.Item>
                  <Dropdown.Item className="text-md w-[190px] h-[30px] flex justify-left px-[27px] hover:bg-[#f1f5f9] hover:text-textColor">
                    Other pages
                  </Dropdown.Item>
                 
                </Dropdown>
              </div>
            </NavLink>

            <NavLink
              to="/cart"
              className="font-medium hover:text-textColor md:pr-3 pr-0"
            >
              Cart
            </NavLink>
            <NavLink
              to="/pages"
              className="font-medium hover:text-textColor md:pr-3 pr-0"
            >
              Pages
            </NavLink>
            <NavLink
              to="/contact"
              className="font-medium hover:text-textColor md:pr-3 pr-0"
            >
              Contact
            </NavLink>
          </div>
          <CtaBtn name={"GET A QUOTE"} />
          <div className="flex gap-3">
            <div className="flex justify-center items-center bg-white text-black border-red-100 w-[50px] h-[52px] hover:text-white hover:bg-headerCtaButtonBg">
              <FaSearch size={19}></FaSearch>
            </div>
            <div className="flex justify-center items-center bg-white text-black border-red-100 w-[50px] h-[52px] hover:text-white hover:bg-headerCtaButtonBg">
              <FaUserAlt size={16} />
            </div>
            <div className="flex justify-center items-center bg-white text-black border-red-100 w-[50px] h-[52px] hover:text-white hover:bg-headerCtaButtonBg">
              <FaCartPlus size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
