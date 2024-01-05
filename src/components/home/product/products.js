import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleProductCard from "./single-product-card";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const previousArrow = {
  hidden: { opacity: 0, x: "10vw" },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
};

const nextArrow = {
  hidden: { opacity: 0, x: "-10vw" },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
};

const data = {
  food_drinks: [
    {
      name: "Cake with Juice",
      items: 45,
      imgUrl: "/images/bocali pic/6.png",
      
    },
    {
      name: "Juice",
      items: 45,
      imgUrl: "/images/bocali pic/9.png",
    },
    {
      name: "Ice-Drinks",
      items: 15,
      imgUrl: "/images/bocali pic/12.png",
    },
    {
      name: "Cold-Juice",
      items: 15,
      imgUrl: "/images/bocali pic/14.png",
    },
    {
      name: "Beer-Ice",
      items: 85,
      imgUrl: "/images/bocali pic/7.png",
    },
    {
      name: "Ice-Drinks",
      items: 85,
      imgUrl: "/images/bocali pic/6.png",
    },

    {
      name: "Fruit-Juice",
      items: 45,
      imgUrl: "/images/bocali pic/9.png",
    },
    {
      name: "Beer-Ice",
      items: 15,
      imgUrl: "/images/bocali pic/8.png",
    },
    {
      name: "Cold-Juice",
      items: 15,
      imgUrl: "/images/bocali pic/tomato.png",
    },
    {
      name: "Cold-Juice",
      items: 85,
      imgUrl: "/images/bocali pic/15.png",
    },
    {
      name: "Beer-Ice",
      items: 85,
      imgUrl: "/images/bocali pic/12.png",
    },
    {
      name: "Fruit-Juice",
      items: 45,
      imgUrl: "/images/bocali pic/8.png",
    },
    {
      name: "Beer-Ice",
      items: 15,
      imgUrl: "/images/bocali pic/6.png",
    },
    {
      name: "Cold-Juice",
      items: 15,
      imgUrl: "/images/bocali pic/10.png",
    },
  ],
  vegetables: [
    {
      name: "Tomato",
      items: 78,
      imgUrl: "/images/home/product/vegitables/1.webp",
    },
    {
      name: "Chilli",
      items: 45,
      imgUrl: "/images/home/product/vegitables/2.webp",
    },
    {
      name: "Veg1",
      items: 15,
      imgUrl: "/images/home/product/vegitables/3.webp",
    },
    {
      name: "patacovi",
      items: 15,
      imgUrl: "/images/home/product/vegitables/4.webp",
    },
    {
      name: "LadiesFinger",
      items: 85,
      imgUrl: "/images/home/product/vegitables/5.jpg",
    },
    {
      name: "Green-Tomato",
      items: 85,
      imgUrl: "/images/home/product/vegitables/6.webp",
    },

    {
      name: "Veg2",
      items: 45,
      imgUrl: "/images/home/product/vegitables/7.webp",
    },
    {
      name: "Veg3",
      items: 15,
      imgUrl: "/images/home/product/vegitables/8.webp",
    },
    {
      name: "Cauliflower",
      items: 15,
      imgUrl: "/images/home/product/vegitables/9.webp",
    },
    {
      name: "Carrots",
      items: 85,
      imgUrl: "/images/home/product/vegitables/10.webp",
    },
    {
      name: "Veg4",
      items: 85,
      imgUrl: "/images/home/product/vegitables/11.webp",
    },
    {
      name: "Onion",
      items: 85,
      imgUrl: "/images/home/product/vegitables/12.webp",
    },
    {
      name: "Patato",
      items: 85,
      imgUrl: "/images/home/product/vegitables/13.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/vegitables/14.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/vegitables/15.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/vegitables/16.webp",
    },
  ],
  dried_food: [
    {
      name: "dried food",
      items: 78,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Fruits",
      items: 45,
      imgUrl: "/images/home/product/dried-food/2.jpg",
    },
    {
      name: "Meat",
      items: 15,
      imgUrl: "/images/home/product/dried-food/3.jpg",
    },
    {
      name: "Fish",
      items: 15,
      imgUrl: "/images/home/product/dried-food/4.jpg",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/dried-food/5.jpg",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/dried-food/6.jpg",
    },
    {
      name: "Meat",
      items: 15,
      imgUrl: "/images/home/product/dried-food/7.jpg",
    },
    {
      name: "Fish",
      items: 15,
      imgUrl: "/images/home/product/dried-food/8.jpg",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/dried-food/9.jpg",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/dried-food/10.jpg",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/dried-food/6.jpg",
    },
  ],
  bread_cake: [
    {
      name: "bread cake",
      items: 78,
      imgUrl: "/images/home/product/bread-cake/1.webp",
    },
    {
      name: "Fruits",
      items: 45,
      imgUrl: "/images/home/product/bread-cake/2.webp",
    },
    {
      name: "Meat",
      items: 15,
      imgUrl: "/images/home/product/bread-cake/3.jpg",
    },
    {
      name: "Fish",
      items: 15,
      imgUrl: "/images/home/product/bread-cake/4.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/bread-cake/5.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/bread-cake/6.webp",
    },
    {
      name: "Fruits",
      items: 45,
      imgUrl: "/images/home/product/bread-cake/7.webp",
    },
    {
      name: "Meat",
      items: 15,
      imgUrl: "/images/home/product/bread-cake/8.webp",
    },
    {
      name: "Fish",
      items: 15,
      imgUrl: "/images/home/product/bread-cake/9.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/bread-cake/10.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/bread-cake/11.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/bread-cake/12.jpg",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/bread-cake/13.jpg",
    },
  ],
  fish_meat: [
    {
      name: "fish meat",
      items: 78,
      imgUrl: "/images/home/product/fish-meat/1.webp",
    },
    {
      name: "Fruits",
      items: 45,
      imgUrl: "/images/home/product/fish-meat/2.webp",
    },
    {
      name: "Meat",
      items: 15,
      imgUrl: "/images/home/product/fish-meat/3.webp",
    },
    {
      name: "Fish",
      items: 15,
      imgUrl: "/images/home/product/fish-meat/4.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/fish-meat/5.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/fish-meat/6.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/fish-meat/7.webp",
    },
    {
      name: "Meat",
      items: 15,
      imgUrl: "/images/home/product/fish-meat/8.webp",
    },
    {
      name: "Fish",
      items: 15,
      imgUrl: "/images/home/product/fish-meat/9.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/fish-meat/10.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/fish-meat/11.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/fish-meat/12.webp",
    },
  ],
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      variants={nextArrow}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="md:block md:bg-[white] rounded-full absolute top-[350px] -right-[71px] 
      p-4 border-solid border-2 border-gray-300 hover:bg-headerCtaButtonBg hover:text-white"
      onClick={onClick}
    >
      <FaArrowRight className="text-lg" />
    </motion.div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      variants={previousArrow}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="md:block md:bg-[white] rounded rounded-full absolute top-[350px] -left-[71px] 
      p-4 border-solid border-2 border-gray-300 hover:bg-headerCtaButtonBg hover:text-white"
      onClick={onClick}
    >
      <FaArrowLeft className="text-lg" />
    </motion.div>
  );
}

const Products = ({ category }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container mx-auto px-[40px]">
      <div className="container h-[100vh] mx-auto">
        <Slider {...settings}>
          {data[category].length % 2 === 0
            ? data[category].map((item, key) => {
                if (key % 2 === 0) {
                  return (
                    <div key={key}>
                      <SingleProductCard
                        name={item.name}
                        discountedPrice={46.0}
                        originalPrice={50.9}
                        imageUrl={item.imgUrl}
                        discountPercent={19.23}
                      />
                      <SingleProductCard
                        name={data[category][key + 1]["name"]}
                        discountedPrice={46.0}
                        originalPrice={50.9}
                        imageUrl={data[category][key + 1]["imgUrl"]}
                        discountPercent={19.23}
                      />
                    </div>
                  );
                }
                return null;
              })
            : data[category].map((item, key) => {
                if (key % 2 === 0) {
                  return (
                    <div key={key}>
                      <SingleProductCard
                        name={item.name}
                        discountedPrice={46.0}
                        originalPrice={50.9}
                        imageUrl={item.imgUrl}
                        discountPercent={19.23}
                      />
                      {key + 1 !== data[category].length ? (
                        <SingleProductCard
                          name={data[category][key + 1]["name"]}
                          discountedPrice={46.0}
                          originalPrice={50.9}
                          imageUrl={data[category][key + 1]["imgUrl"]}
                          discountPercent={19.23}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
