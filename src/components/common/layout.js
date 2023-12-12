import React from "react";
import { useThemeContext } from "../context/theme-context";
import TopHeader from "./top-header";
import Header from "./header";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { theme } = useThemeContext();
  const location = useLocation();

  // Check if the current pathname is the home page ("/")
  const isHomePage = location.pathname === '/';

  return (
    <div className={`${theme}`}>
      <div className="bg-homeHeaderBg">
        {isHomePage ?? <TopHeader />}
        <hr></hr>
        <div className="w-[100vw] h-[30px]"></div>
        <Header />
        <div className="w-[100vw] h-[30px]"></div>
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Layout;
