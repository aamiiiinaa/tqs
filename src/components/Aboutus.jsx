import React from 'react';
import pic1 from "../../public/pic4.png";

export default function Aboutus() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 mb-20">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src={pic1}
            className="md:w-[550px] md:h-[550px] md:ml-1"
            alt=""
          />
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 mt-20 md:mt-35">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              About{" "}
              <span className="text-orange-500 md:text-4xl">Us!</span>
            </h1>
            <p className="text-sm md:text-base">
              In 2020, we started our Quran class with a vision to create a nurturing and inclusive environment 
              for learning the Holy Quran. What began as a small gathering of passionate individuals has grown 
              into a vibrant community dedicated to imparting the timeless wisdom and teachings of the Quran to
              students of all ages across the world.At TheQuranClass, we understand that every student has a unique learning pace and style.
               That's why we offer personalized one-on-one sessions, ensuring that each learner receives the attention
                and guidance they need to excel.
              Our online classes make it convenient for students from all over the world to access top-notch Quranic
               education from the comfort of their homes.
              We are committed to nurturing a love for the Quran and its teachings in all our students,
               helping them to not only recite but also understand and live by its principles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
