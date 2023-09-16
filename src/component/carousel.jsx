import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  const slides = [
    {
      image: "carousel1.jpg",
      title: "Discover A Brand MyHotel",
      buttonLabel1: "Our Room",
      buttonLabel2: "Book Room",
    },
    {
      image: "carousel2.jpg",
      title: "Discover A Brand MyHotel",
      buttonLabel1: "Our Room",
      buttonLabel2: "Book Room",
    },
  ];

  return (
    <Carousel autoPlay>
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide p-4">
          <div className="image-container pt-6 rounded-2xl">
            <img src={slide.image} alt={`Gambar ${index + 1}`} />
            <div className="overlay">
              <h1 className="legend">{slide.title}</h1>
              <button className="button bg-blue-700 p-2 m-2 rounded-lg">
                {slide.buttonLabel1}
              </button>
              <button className="button">{slide.buttonLabel2}</button>
            </div>{" "}
            {/* Overlay gelap */}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
