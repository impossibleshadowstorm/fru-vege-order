import React from "react";

const Home = () => {
  return (
    <div className="bg-landingSecBg md:h-[70vh] h-[100vh] flex justify-center">
      <div className="flex md:flex-row flex-col-reverse w-[100vw] container mx-auto md:pl-12">
        {/* Left Content Div */}
        <div className="h-screen md:h-[70vh] w-[100%] md:w-[50%] flex flex-col justify-center">
          <div className="flex flex-row gap-1 md:items-center mb-4 w-[100%] md:justify-start justify-center">
            <img src="/images/pic1.png" alt="pic1" />
            <p>100% Genuine Product</p>
          </div>
          <div className="flex md:w-[30vw] md:justify-left justify-center">
            <p className="md:text-5xl text-3xl font-bold">
              Tasty & Healthy Organic Food
            </p>
          </div>
          <div className="md:w-[30vw] mt-12 flex md:justify-start justify-center">
            <button
              type="button"
              className="bg-headerCtaButtonBg text-white h-[52px] w-[198px] font-medium"
            >
              Explore Products
            </button>
          </div>
        </div>
        {/* Right Image Div */}
        <div className="md:w-[50vw] w-[84vw] h-screen md:h-[70vh] flex justify-center items-center">
          <img src="/images/vegpic1.png" alt="veg1" className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
