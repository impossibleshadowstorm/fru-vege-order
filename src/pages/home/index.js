import React from "react";
import LandingSection from "../../components/home/landing/landing-section";
import AboutSection from "../../components/home/about-section";
import TopSection from "../../components/home/top-category-section";
import OurProducts from "../../components/home/product/ourProducts";
import CounterUpArea from "../../components/home/counterup-area/counterup";

const Home = () => {
  return (
    <>
      <LandingSection />
      <AboutSection />
      <TopSection />
      <OurProducts />
      <CounterUpArea />
    </>
  );
};

export default Home;
