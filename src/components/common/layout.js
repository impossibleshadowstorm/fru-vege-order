import React from "react";
import { useThemeContext } from "../context/theme-context";
import TopHeader from "./top-header";
import Header from "./header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`${theme}`}>
      <div className="bg-homeHeaderBg">
        <TopHeader />
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
