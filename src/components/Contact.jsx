import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok,faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l7br3be', 'template_tfgem1w', form.current, {
        publicKey: 'qhhp9uKe6BeU96lpD',
      })
      .then(
        () => {
          setNotification('Message Sent Successfully!!');
          setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
        },
        (error) => {
          setNotification('Message Failed: ' + error.text);
          setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
        }
      );
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 mb-20">
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-20 md:mt-30 md:ml-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Get in{" "}
          <span className="text-teal-500 md:text-4xl">Touch!</span>
        </h1>
        <div className="py-6">
          <p className="block"><strong>Phone Number:</strong> (+94) 72-510-6723</p>
          <p className="block"><strong>Address:</strong> 5th Lane, Dehiwala, Sri Lanka</p>
          <p className="block"><strong>Email:</strong> thequranclasss@gmail.com</p>
          <p className="block mt-4"><strong>Connect with us:</strong></p>
          <div className="flex mt-2">
            <a href="https://www.instagram.com/the.quran.class_?igsh=MTkwdXQ2eXI4MjEycQ==" className="mr-4">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com/thequranclass" className="mr-4">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://x.com/TheQuranClass?t=HD3tdGbWRxka7dA-OhQgmg&s=08" className="mr-4">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.tiktok.com/@thequranclass?_t=8ngIpkEWHC5&_r=1" className="mr-4">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
          </div>
          <div className="mt-4">
            <a href="https://wa.me/94725106723" className="flex items-center text-green-500">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-1/2 md:mt-5 card bg-base-100 w-full max-w-sm shrink-0 shadow-xl relative">
        {notification && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg mt-4 z-10">
            {notification}
          </div>
        )}
        <form ref={form} onSubmit={sendEmail} className="card-body bg-gray-300 ">
          <div className="form-control">
            <h1 className="text-3xl font-bold mb-2 text-center text-teal-500">Contact Us</h1>

            <label className="input input-bordered flex items-center gap-2 mb-4" htmlFor="user_name">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 text-gray-600 dark:text-gray-500"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                />
              </svg>
              <input
                type="text"
                className="grow placeholder-gray-600 dark:placeholder-gray-500 text-gray-900 dark:text-gray-500"
                placeholder="Name"
                name="user_name"
                id="user_name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-4" htmlFor="user_email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 text-gray-600 dark:text-gray-500"
              >
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                />
              </svg>
              <input
                type="email"
                className="grow placeholder-gray-600 dark:placeholder-gray-500 text-gray-900 dark:text-gray-500"
                placeholder="Email"
                name="user_email"
                id="user_email"
              />
            </label>

            <textarea
              className="textarea textarea-bordered w-full mb-4 placeholder-gray-600 dark:placeholder-gray-500 text-gray-900 dark:text-gray-500"
              placeholder="Message"
              name="message"
              id="message"
            ></textarea>
            <div className="text-center">
              <input type="submit" value="Send" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
