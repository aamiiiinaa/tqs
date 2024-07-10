import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Course = () => {
  const book = [
    {
      id: 1,
      name: "Quran Nazra",
      title: "For Adults - age 18 & above",
      image: "https://img.freepik.com/free-psd/quran-book-isolated_23-2151371150.jpg?t=st=1719919868~exp=1719923468~hmac=98e8ed4fe36f04093abcfd0b6bf23b64fd5c56e6b85852115c745c218e6ba410&w=900"
    },
    {
      id: 2,
      name: "Hifzul Quran",
      title: "Age 8 and above",
      image: "https://img.freepik.com/free-psd/quran-book-isolated_23-2151371122.jpg?t=st=1719924051~exp=1719927651~hmac=a1d988e5718d8557f65a13495ea35ec014a4ce3ed228bc9c908a1d5d09b130f4&w=740"
    },
    {
      id: 3,
      name: "Salah Course",
      title: "Age 7 and above",
      image: "https://img.freepik.com/premium-vector/vector-muslim-guy-praying_995281-4908.jpg?w=740"
    },
    {
      id: 4,
      name: "Thajweedh",
      title: "Age 5 and above",
      image: "https://img.freepik.com/free-psd/quran-book-isolated_23-2151371126.jpg?t=st=1719924119~exp=1719927719~hmac=c9b3742182bb1e764fe29a7c3df0013bd6e614137d4d401a8c94d3a5ba70aaec&w=740"
    },
    {
      id: 5,
      name: "Dua",
      title: "Age 5 and above",
      image: "https://img.freepik.com/free-vector/hand-drawn-tasbih-illustration_23-2149265392.jpg?t=st=1719924156~exp=1719927756~hmac=0a505f5369ce645c8e05b06fd9fbcc44581e6ce3539591b28662fb939a9e0108&w=900"
    },
    {
      id: 6,
      name: "Qalimah",
      title: "Age 5 and above",
      image: "https://img.freepik.com/premium-vector/muslim-praying-silhouette-praying-symbol-vector-illustration_1147484-1120.jpg?w=900"
    }
  ];

  const handleEnrollClick = () => {
    window.location.href = 'https://forms.gle/h7sEafJKkRaE946c9';
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
          initialSlide: 2,
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
    <div className="max-w-screen-2xl container mx-auto md:mt-20 md:px-20 px-4">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold">Our{" "}
          <span className="text-green-500 md:text-4xl" style={{ color: '#92B804' }}>Programs</span>
        </h1>
      </div>
      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <div className="mt-4 my-3 p-3" key={item.id}>
              <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.name}
                  </h2>
                  <p>{item.title}</p>
                  <div className="card-actions justify-between">
                    <div
                      className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:text-white duration-200"
                      style={{ borderColor: 'white', backgroundColor: '#92B804' }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#516602')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#92B804')}
                      onClick={handleEnrollClick} 
                    >
                      Enroll Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Course;
