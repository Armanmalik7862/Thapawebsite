"use client";
import { useState } from "react";
import Slider from "react-slick";
import Slide from "./Slide";

export default function HeroSection() {
  const [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 100,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          width: "10%",
          height: "10%",
          position: "absolute",
          top: "80%",
          left: "40%",
          transform: "translate(-50%, 0)",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {dots}
        </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "6px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "around",
                background: "#FF5733",
                cursor: "pointer",
              }
            : {
                width: "30px",
                height: "6px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "around",
                background: "#FBCEB1",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];
  return (
    <div className="container  overflow-hidden mx-auto pt-6 mt-5 lg:pt-0">
      <Slider {...settings} >
        {slideData.map((item) => (
          
          
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
          // this slide is render on slide.js
        ))}
      </Slider>
    </div>
  );
}
