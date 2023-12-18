import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const boxDiv = {
  // hidden: { opacity: 0, x: "-1vw" },
  hidden: {
    width: 0,
    opacity: 0, // Start with zero width
  },
  // show: {
  //   opacity: 1,
  //   x: "0",
  //   transition: {
  //     type: "spring",
  //     delay: 0.2,
  //   },
  // },
  show: {
    opacity: 1,
    width: "100%", // Expand to full width
    transition: {
      duration: 0.5, // Set the duration of the animation
    },
  },
};
const barDiv = {
  hidden: {
    width: 0,
    opacity: 0, // Start with zero width
  },
  show: {
    opacity: 1,
    width: "100%", // Expand to full width
    transition: {
      duration: 0.5, // Set the duration of the animation
    },
  },
  // hidden: { opacity: 0, x: "-1vw" },
  // show: {
  //   opacity: 1,
  //   x: "0",
  //   transition: {
  //     type: "spring",
  //     delay: 0.2,
  //   },
  // },
};

const categoryData = [
  {
    name: "Browse all",
    items: 235,
    imgUrl: "/images/3rd-sec-category-1.png",
  },
  {
    name: "Vegetables",
    items: 78,
    imgUrl: "/images/3rdsec-category-2.png",
  },
  {
    name: "Fruits",
    items: 45,
    imgUrl: "/images/3rdsec-category-3.png",
  },
  {
    name: "Meat",
    items: 15,
    imgUrl: "/images/3rdsec-category-4.png",
  },
  {
    name: "Fish",
    items: 15,
    imgUrl: "/images/3rdsec-category-5.png",
  },
  {
    name: "Others",
    items: 85,
    imgUrl: "/images/3rdsec-category-3.png",
  },
];

const TopSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-landingSecBg h-[76vh]">
      <div
        className="bg-cover bg-center h-[50vh]"
        style={{ backgroundImage: "url('/images/thirdsection-img.jpg')" }}
      >
        {/* <div className="flex justify-center items-center relative top-[6rem]"> */}
        <p className="text-[white] text-center text-6xl font-bold pt-14">
          Top Categories
        </p>
        {/* </div> */}
        <div className="container mx-auto gap-9 mt-14">
          <Slider {...settings}>
            {categoryData.map((item, key) => (
              <motion.div
              key={key}
                variants={boxDiv}
                // initial="hidden"
                // whileHover="show"
                className="group h-[37vh] bg-[white] border border-y border-gray-1000 relative"
              >
                <div className="flex flex-col justify-center items-center gap-4 pt-12">
                  <img
                    src={item.imgUrl}
                    alt=""
                    className="w-[7vw] h-[13vh] cursor-pointer"
                  />
                  <p className="text-1xl font-bold group-hover:text-hoverTextColor cursor-pointer">
                    {item.name}
                  </p>
                  <p className="text-0.5xl font-semibold">[{item.items} item]</p>
                </div>
                <motion.div
                  variants={barDiv}
                  initial="hidden"
                  whileHover="show"
                  //  whileInView="show"
                  //  viewport={{once:false, amount:0.4}}

                  className="w-[18.2vw] border border-2 border-[#80B500] absolute bottom-0"
                ></motion.div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
