import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

// import motion from 'framer-motion';

const counterUpData = [
  {
    name: "Active Client",
    numbers: 733,
    imgUrl: "/images/home/category/5thsection/active-client.png",
  },
  {
    name: "Cup Of Coffee",
    numbers: 900,
    imgUrl: "/images/home/category/5thsection/cup-of-coffee.png",
  },
  {
    name: "Get Rewords",
    numbers: 100,
    imgUrl: "/images/home/category/5thsection/get-rewords.png",
  },
  {
    name: "Country Cover",
    numbers: 21,
    imgUrl: "/images/home/category/5thsection/country-cover.png",
  },
];

const CounterUpArea = () => {

  const [counterOn , setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    <div className="md:h-[76vh] h-[100vh] md:px-0 mt-44 relative">
      <div
        className="md:bg-cover md:bg-center h-[60vh]"
        style={{
          backgroundImage: "url('/images/home/category/thirdsection-img.jpg')",
        }}
      >
        <div className="h-[60vh] bg-black w-[100vw] opacity-50 absolute top-0"></div>

        <div className="h-[60vh] w-[100vw] absolute top-0 flex justify-center items-center">
          {counterUpData.map((item, key) => (
            <div
              key={key}
              className="flex flex-row justify-around w-[20vw] items-center"
            >
              <div className="flex flex-col itmes-center justify-center gap-3">
                <div className="flex justify-center">
                  <img src={item.imgUrl} alt="active-client" />
                </div>
                <div
                  className="text-white text-[50px] font-bold text-center"
                > 
                  {counterOn && <CountUp start={0} end={item.numbers} duration={3} delay={0}/>}
                  
                  <span className="text-[30px] pl-[-20px]">+</span>
                </div>
                <div className="text-white text-[17px] text-center font-semibold">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </ScrollTrigger>
  );
};

export default CounterUpArea;
