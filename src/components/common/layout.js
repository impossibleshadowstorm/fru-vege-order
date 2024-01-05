import React from "react";
import TopHeader from "./top-header";
import Header from "./header";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumb from "./breadcrumb";
import { useSelector } from "react-redux";

const Layout = () => {
  const theme = useSelector((state) => state.websiteTheme.theme);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isProductDetails = location.pathname === "/product/:id/";
  const isShop = location.pathname === "/shop";
  const isCartPage = location.pathname === "/cart";
  const isLoginPage = location.pathname === "/auth";
  const isRegisterPage = location.pathname === "/auth/register";

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

        {isShop ? <Breadcrumb title={"Shop"} pageName={"Shop"} /> : null}
        {isProductDetails ? (
          <Breadcrumb title={"Product Details"} pageName={"ProductDetail"} />
        ) : null}
        {isAboutPage ? (
          <Breadcrumb title={"About Us"} pageName={"About"} />
        ) : null}
        {isCartPage ? (
          <Breadcrumb title={"Shopping Bag"} pageName={"Cart"} />
        ) : null}
        {isLoginPage ? (
          <Breadcrumb title={"Account"} pageName={"Login"} />
        ) : null}
        {isRegisterPage ? (
          <Breadcrumb title={"Account"} pageName={"Register"} />
        ) : null}

        <div
          className={`${
            isHomePage ? "w-[100vw] h-[30px]" : "w-[100vw] h-[400px]"
          }`}
        ></div>
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Layout;
