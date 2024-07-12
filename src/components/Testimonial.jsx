import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import av1 from "../../public/av3.jpg";
import av2 from "../../public/av7.png";
import av3 from "../../public/av2.jpg";
import av4 from "../../public/av5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    
    useEffect(() => {
      const element = document.documentElement;
      if (theme === "dark") {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [theme]);

  const testimonials = [
    {
      image: av1,
      review: 'Jazakallah for the immense support. You are the only person so far who realised she had problems in letters with nuktha and without nuktha. I was really happy you addressed it.',
      rating: 5,
      name: 'Aafiya'
    },
    {
      image: av2,
      review: 'Alhamdulillah Ahyan was very happy. Your class is very interesting and explain method is very good. Keep it up.',
      rating: 4,
      name: 'Ahyan Jazeel'
    },
    {
      image:  av3,
      review: 'We are so satisfied with your teaching alhamdulillah. She loves being taught by you. May Allah reward you',
      rating: 5,
      name: 'Azka Abu'
    },
    {
      image: av4,
      review: 'The classes are very well structured and the instructors are great.',
      rating: 4,
      name: 'Yusuf Rizwan '
    }
  ];

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: theme === "dark" ? "white" : "black", right: '5px', zIndex: 1 }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: theme === "dark" ? "white" : "black", left: '5px', zIndex: 1 }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:mt-20 md:px-20 px-4 mb-20">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-yellow-500">Testimonials</h1>
        <h4 className="font-bold">See what our students are saying</h4>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="border-2 border-yellow-600 rounded-lg flex flex-col items-center p-4">
              <img src={testimonial.image} className="rounded-full w-24 h-24 mb-4" alt={`${testimonial.name} photo`} />
              <p className="text-lg mb-2">"{testimonial.review}"</p>
              <div className="flex justify-center mb-2">
                {Array(testimonial.rating).fill().map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.384 2.458a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.384-2.457a1 1 0 00-1.176 0l-3.384 2.457c-.784.57-1.84-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.243 9.397c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
              </div>
              <p className="text-center font-semibold">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
