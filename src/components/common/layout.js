import React from "react";
import { useThemeContext } from "../context/theme-context";
import TopHeader from "./top-header";
import Header from "./header";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumb from "./breadcrumb";

const Layout = () => {
  const { theme } = useThemeContext();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isShopPage = location.pathname === "/shop";
  const isCartPage = location.pathname === "/cart";

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

        {isShopPage ? <Breadcrumb title={"Product Details"} pageName={"Shop"} /> : null}
        {isAboutPage ? <Breadcrumb title={"About Us"} pageName={"About"}/> : null}
        {isCartPage ? <Breadcrumb title={"Shopping Bag"} pageName={"Cart"}/> : null}
        
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
