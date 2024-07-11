import React from 'react';

// Import images from the assets folder
import student1 from '../assets/student1.jpg';
import student2 from '../assets/student2.jpg';
import student3 from '../assets/student3.jpg';
import student4 from '../assets/student4.jpg';
import student5 from '../assets/student5.jpg';
import student6 from '../assets/student6.jpg';
import student7 from '../assets/student7.jpg';
import student8 from '../assets/q1.jpg';
import student9 from '../assets/q2.jpg';
import student10 from '../assets/q3.jpg';
import student11 from '../assets/q4.jpg';
import student12 from '../assets/q5.jpg';
import student13 from '../assets/q6.jpg';
import student14 from '../assets/q7.jpg';

function Gallery() {
  return (
    <div className="p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        TQC <span className="text-red-500">Gallery</span>
      </h1>
     
      <h4 className="text-lg md:text-xl bg-red-500 text-white text-center mb-6 p-2">Our Students' Achievements</h4>
      
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Horizontal Carousel */}
        <div className="carousel carousel-center bg-neutral rounded-box h-60 w-full md:w-3/4 overflow-x-scroll p-4">
          <div className="flex space-x-4">
            {[student1, student2, student3, student4, student5, student6, student7].map((img, index) => (
              <div key={index} className="carousel-item">
                <img src={img} alt={`Image ${index + 1}`} className="rounded-box" />
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Carousel */}
        <div className="carousel carousel-vertical bg-neutral rounded-box w-full md:w-60 h-80 p-4">
          <div className="flex flex-col space-y-4">
            {[student8, student9, student10, student11, student12, student13, student14].map((img, index) => (
              <div key={index} className="carousel-item">
                <img src={img} alt={`Image ${index + 8}`} className="rounded-box" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
