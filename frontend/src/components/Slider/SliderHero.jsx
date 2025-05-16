import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const SliderHero = () => {
  const settings = {
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      content: "This is the first slide content",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Slide 2",
      content: "This is the second slide content",
      bgColor: "bg-green-500",
    },
    {
      id: 3,
      title: "Slide 3",
      content: "This is the third slide content",
      bgColor: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Slide 4",
      content: "This is the fourth slide content",
      bgColor: "bg-red-500",
    },
    {
      id: 5,
      title: "Slide 5",
      content: "This is the fifth slide content",
      bgColor: "bg-purple-500",
    },
  ];
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className=" flex justify-center  mt-0">
            <div
              className={`${slide.bgColor}  shadow-lg overflow-hidden h-90 flex flex-col items-center justify-center p-6 text-white`}
            >
              <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
              <p className="text-center">{slide.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-none`}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <div className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-none`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <div className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>
  );
};
