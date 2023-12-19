import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";

const previousArrow = {
  hidden: { opacity: 0, x:'10vw' },
  show: {
    opacity: 1,
    x: '0',
    transition: {
      type: 'spring',
      delay: 0.2
    }
  }
}

const nextArrow = {
  hidden: { opacity: 0, x:'-10vw' },
  show: {
    opacity: 1,
    x: '0',
    transition: {
      type: 'spring',
      delay: 0.2
    }
  }
}


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
    imgUrl: "/images/home/category/3rd-sec-category-1.png",
  },
  {
    name: "Vegetables",
    items: 78,
    imgUrl: "/images/home/category/3rdsec-category-2.png",
  },
  {
    name: "Fruits",
    items: 45,
    imgUrl: "/images/home/category/3rdsec-category-3.png",
  },
  {
    name: "Meat",
    items: 15,
    imgUrl: "/images/home/category/3rdsec-category-4.png",
  },
  {
    name: "Fish",
    items: 15,
    imgUrl: "/images/home/category/3rdsec-category-5.png",
  },
  {
    name: "Others",
    items: 85,
    imgUrl: "/images/home/category/3rdsec-category-3.png",
  },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <motion.div 
    variants={nextArrow}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0}}

       className= "md:block md:bg-[white] rounded rounded-full absolute top-[110px] -right-[71px] p-4 hover:bg-headerCtaButtonBg hover:text-white"
      // style={{ ...style}}
      onClick={onClick}
    >
      <FaArrowRight className="text-lg hover:text-[white]"/>
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
    viewport={{once:false, amount:0}}

      className= "md:block md:bg-[white] rounded rounded-full absolute top-[110px] -left-[71px] p-4 hover:bg-headerCtaButtonBg hover:text-white"
      onClick={onClick}
    >
      <FaArrowLeft className="text-lg hover:text-[white]"/>
    </motion.div>
  );
}

const TopSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="bg-landingSecBg md:h-[76vh] h-[100vh] md:px-0 my-12">
      <div
        className="md:bg-cover md:bg-center h-[50vh]"
        style={{ backgroundImage: "url('/images/home/category/thirdsection-img.jpg')" }}
      >
        {/* <div className="flex justify-center items-center relative top-[6rem]"> */}
        <p className="text-[white] text-center text-6xl font-bold pt-14">
          Top Categories
        </p>
        {/* </div> */}
        <div className="container mx-auto gap-9 mt-14 relative">
          <Slider {...settings}>
            {categoryData.map((item, key) => (
              <motion.div
              key={key}
                variants={boxDiv}
                // initial="hidden"
                // whileHover="show"
                className="group lg:h-[37vh] h-[50vh] bg-[white] border border-y border-gray-1000 relative"
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
