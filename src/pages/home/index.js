import React from "react";
import LandingSection from "../../components/home/landing/landing-section";
import AboutSection from "../../components/home/about-section";
import TopSection from "../../components/home/top-category-section";
import OurProducts from "../../components/home/product/ourProducts";
import CounterUpArea from "../../components/home/counterup-area/counterup";
import FeatureProduct from "../../components/home/feature-product/feature-product";
import ContactUs from "../../components/home/contactus/contactus";
import BlogSection from "../../components/home/blogsection/blogsection";
import DeliveryMode from "../../components/home/deliverymode/deliverymode";

const Home = () => {
  return (
    <>
      <LandingSection />
      <AboutSection />
      <TopSection />
      <OurProducts />
      <CounterUpArea />
      <FeatureProduct />
      <ContactUs />
      <BlogSection />
      <DeliveryMode />
    </>
  );
};

export default Home;
