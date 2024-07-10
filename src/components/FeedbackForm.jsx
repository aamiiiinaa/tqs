import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('message', message);

    try {
      await axios.post('https://getform.io/f/bnleemvb', formData);
      setSubmitted(true);
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 mb-20 bg-cover bg-center md:w-[1300px] md:h-[600px] order-2 md:order-1`}
      style={{
        backgroundImage: `url('/ff.png')`, // Adjust the path as needed
      }}
    >
    <div className={`feedback-form max-w-md mx-auto md:ml-20 md:mr-auto mt-20 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} style={{ height: 'auto', maxHeight: '350px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>


        <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>
        {submitted ? (
          <p className="text-green-500">Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'}`}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={`w-full px-3 py-2 border rounded-md ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'}`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-3 py-2 bg-orange-500 text-white rounded-md transition-colors duration-300 ease-in-out hover:bg-red-500"
              style={{
                backgroundColor: '#eb7f58',
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;


