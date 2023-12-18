import React from "react";
import LandingSection from "../../components/home/landing/landing-section";
import AboutSection from "../../components/home/about-section";
import TopSection from "../../components/home/top-category-section";
import OurProducts from "../../components/home/product/ourProducts";

const Home = () => {
  return (
    <>
      <LandingSection />
      <AboutSection />
      <TopSection />
      <OurProducts />
    </>
  );
};

export default Home;
