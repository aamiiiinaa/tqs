import React from 'react';

function Testimonial() {
  const testimonials = [
    {
      image: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
      review: 'Jazakallah for the immense support. You are the only person so far who realised she had problems in letters with nuktha and without nuktha. I was really happy you addressed it.',
      rating: 5,
      name: 'Aara Aasif'
    },
    {
      image: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
      review: 'Alhamdulillah Ahyan was very happy. Your class is very interesting and explain method is very good. Keep it up.',
      rating: 4,
      name: 'Areeb Masdi'
    },
    {
      image: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
      review: 'We are so satisfied with your teaching alhamdulillah. She loves being taught by you. May Allah reward you',
      rating: 5,
      name: 'Ihsan Khan'
    },
    {
      image: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg',
      review: 'The classes are very well structured and the instructors are great.',
      rating: 4,
      name: 'Yusuf Rizwan '
    }
  ];

  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:mt-20 md:px-20 px-4 mb-20">
      <div className="text-center mb-10">
    <h1 className="text-2xl md:text-4xl font-bold text-yellow-500">Testimonials</h1>
    <h4 className=' font-bold'> See what our students are saying</h4>
    </div>

    <div className="carousel rounded-box mx-auto w-full overflow-x-scroll ">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="carousel-item w-1/3 p-4 border-2 border-yellow-600 rounded-lg flex flex-col items-center ">
          <img src={testimonial.image} className="rounded-full w-24 h-24 mb-4" alt={`${testimonial.name} photo`} />
          <p className=" text-lg mb-2">"{testimonial.review}"</p>
          <div className="flex justify-center mb-2">
            {Array(testimonial.rating).fill().map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.384 2.458a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.384-2.457a1 1 0 00-1.176 0l-3.384 2.457c-.784.57-1.84-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.243 9.397c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            ))}
          </div>
          <p className="text-center font-semibold">{testimonial.name}</p>
        </div>
      ))}
    </div>
    </div>
    
    </>
  );
}

export default Testimonial;
