import React from "react";
import { useThemeContext } from "../context/theme-context";
import TopHeader from "./top-header";
import Header from "./header";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { theme } = useThemeContext();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isShopPage = location.pathname === "/shop";

  return (
    <div className={`${theme}`}>
      {/* <div className={`${isHomePage ? "bg-homeHeaderBg" : "bg-otherHeaderBg"}`}> */}
      <div
        className={`${isHomePage ? "bg-homeHeaderBg" : "bg-otherHeaderBg"}`}
        style={{
          backgroundImage: isHomePage
            ? "none"
            : 'url("/images/home/category/thirdsection-img.jpg")',

            position: "relative",
        }}
      >
        {isHomePage ? <TopHeader /> : null}
        <hr className={`${isHomePage ? "homeBorder" : "border-otherBorder"}`} />
        <div className="w-[100vw] h-[30px]"></div>
        <Header isHomePage={isHomePage} />

        {/* AboutPage */}
        <div className={`${isAboutPage ? "visible absolute bottom-[100px] left-[100px] container mx-auto h-[30px] text-white px-[80px] flex justify-between items-center" : "invisible h-[0px]"}`}>
          <div className="">
            <p className="text-textColor font-semibold">// WELCOME TO OUR COMPANY</p>
            <p className="text-[55px] font-bold">About Us</p>
          </div>
          <div className="">
            <p><a href="/" className="font-bold">Home</a> | <a href="/about" className="text-textColor font-bold">About Us</a></p>
          </div>
        </div>

        {/* ShopPage */}
        <div className={`${isShopPage ? "visible absolute bottom-[100px] left-[100px] container mx-auto h-[30px] text-white px-[80px] flex justify-between items-center" : "invisible h-[0px]"}`}>
          <div className="">
            <p className="text-textColor font-semibold">// WELCOME TO OUR COMPANY</p>
            <p className="text-[55px] font-bold">Product Details</p>
          </div>
          <div className="">
            <p><a href="/" className="font-bold">Home</a> | <a href="/about" className="text-textColor font-bold">Product Details</a></p>
          </div>
        </div>

        
        <div
          className={`${
            isHomePage ? "w-[100vw] h-[30px]" : "w-[100vw] h-[400px]"
          }`}
        ></div>
        {/* {isAboutPage ? } */}
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Layout;
