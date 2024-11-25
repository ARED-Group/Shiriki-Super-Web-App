import React, { useRef } from "react";
import Slider from "react-slick";

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Array of image paths from the public/images directory

  const images = [
    "http://localhost:8080/images/promotion.png",
    "http://localhost:8080/images/the-games.jpg",
    "http://localhost:8080/images/pizza.png",
    "http://localhost:8080/images/the-games.jpg",
    "http://localhost:8080/images/promotion.png",
    "http://localhost:8080/images/pizza.png",
  ];

  return (
    <div className="slider-container h-full">
      <Slider ref={sliderRef} {...settings} style={{ height: "100%" }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
          >
            <div className="w-full h-full font-bold flex items-center justify-center">
              <img
                src={image}
                alt=""
                className="h-32 lg:h-96 w-full lg:w-9/12"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
