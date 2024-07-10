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
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-20">
        TQC{' '}
        <span className="text-red-500">Gallery</span>
      </h1>
     
      <h4 className="text-xl bg-red-500 text-center mb-4 mr-20">Our Students' Achievements</h4>
      <div className="flex justify-center">
        {/* Horizontal Carousel */}
        <div className="carousel carousel-center bg-neutral rounded-box h-60 w-3/4 overflow-x-scroll p-4 mr-5 ml-5">
         
          <div className="flex space-x-4">
            <div className="carousel-item">
              <img src={student1} alt="Image 1" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student2} alt="Image 2" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student7} alt="Image 3" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student6} alt="Image 4" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student5} alt="Image 5" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student3} alt="Image 6" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student4} alt="Image 7" className="rounded-box" />
            </div>
          </div>
        </div>

        {/* Vertical Carousel */}
       
        <div className="carousel carousel-vertical bg-neutral rounded-box w-60 h-80 p-4 mr-5 -mt-20">
      
          <div className="flex flex-col space-y-4">
            <div className="carousel-item">
              <img src={student8} alt="Image 8" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student9} alt="Image 9" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student10} alt="Image 10" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student11} alt="Image 11" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student12} alt="Image 12" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student13} alt="Image 13" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={student14} alt="Image 14" className="rounded-box" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
