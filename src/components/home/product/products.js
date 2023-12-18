import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleProductCard from "./single-product-card";

const data = {
  food_drinks: [
    {
      name: "Fruits2",
      items: 45,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Fruits2",
      items: 45,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Meat3",
      items: 15,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Fish4",
      items: 15,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Others5",
      items: 85,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Others6",
      items: 85,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Vegetables7",
      items: 78,
      imgUrl: "/images/3rdsec-category-2.png",
    },
    {
      name: "Fruits8",
      items: 45,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Meat9",
      items: 15,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Fish10",
      items: 15,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Others11",
      items: 85,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Others12",
      items: 85,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Vegetables13",
      items: 78,
      imgUrl: "/images/3rdsec-category-2.png",
    },
    {
      name: "Fruits14",
      items: 45,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Meat15",
      items: 15,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Fish16",
      items: 15,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Others17",
      items: 85,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Others18",
      items: 85,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Others19",
      items: 85,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
  ],
  vegetables: [
    {
      name: "Vegetables",
      items: 78,
      imgUrl: "/images/3rdsec-category-2.png",
    },
    {
      name: "Fruits",
      items: 45,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Meat",
      items: 15,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Fish",
      items: 15,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/dried-food/1.jpg",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/dried-food/1.jpg",
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
      imgUrl: "/images/home/product/fish-meat/5.webp",
    },
    {
      name: "Fish",
      items: 15,
      imgUrl: "/images/home/product/fish-meat/6.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/fish-meat/7.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/fish-meat/8.webp",
    },
    {
      name: "Others",
      items: 85,
      imgUrl: "/images/home/product/fish-meat/9.webp",
    },
  ],
};

const Products = ({category}) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col container mx-auto justify-center items-center gap-2 ">
      <div className="container h-[100vh] mx-auto justify-center items-center gap-1">
        <Slider {...settings}>
          {data[category].length % 2 === 0
            ? data[category].map((item, key) => {
                if (key % 2 === 0) {
                  console.log(key);
                  return (
                    <div>
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
                  console.log(key);
                  return (
                    <div>
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
