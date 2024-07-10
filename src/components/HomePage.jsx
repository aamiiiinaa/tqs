import React from "react";
import banner from "../../public/bg1.jpg";

function HomePage() {
  return (
    <>
      <div
        className="bg-cover bg-center mt-20 mb-10 min-w-screen h-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-20 md:mt-10 p-14 rounded">
          <div className="space-y-7">
            <h1 className="text-3xl md:text-4xl lg:text-4xl text-purple-500 font-bold italic" style={{ textShadow: '0 0 2px #808080, 0 0 2px #808080, 0 0 2px #808080' }}>
              Accessible to everyone{" "}
              <span className="text-3xl md:text-4xl lg:text-4xl text-gray-500">everywhere!</span>
            </h1>
    
            <p className="text-sm md:text-base text-gray-800">
            Welcome to TheQuranClass, a dedicated platform for Quranic education that serves both beginners and adults.
            Whether you are beginning your journey or seeking to enhance your knowledge, We are here to guide you every step of the way. Join us in exploring the divine guidance and timeless wisdom of the Quran. We look forward to welcoming you to our community.
            </p>
          </div>
          
          <div className="shadow-lg bg-white bg-opacity-75 p-5 rounded mt-6">
            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-center text-gray-900">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </h2>
            <p className="text-center text-gray-800">
              "The best among you are those who learn the Qur'an and teach it."
            </p>
          </div>
          <div className="flex justify-center mt-6">
              <a
                href="https://forms.gle/h7sEafJKkRaE946c9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Enroll Now !
              </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
