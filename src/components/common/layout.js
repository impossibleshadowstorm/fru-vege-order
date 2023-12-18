import React from "react";
import { useThemeContext } from "../context/theme-context";
import TopHeader from "./top-header";
import Header from "./header";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { theme } = useThemeContext();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className={`${theme}`}>
      <div className={`${isHomePage ? "bg-homeHeaderBg" : "bg-otherHeaderBg"}`}>
        {isHomePage ? <TopHeader /> : null}
        <hr className={`${isHomePage ? "homeBorder" : "border-otherBorder"}`} />
        <div className="w-[100vw] h-[30px]"></div>
        <Header isHomePage={isHomePage} />
        <div className="w-[100vw] h-[30px]"></div>
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Layout;
