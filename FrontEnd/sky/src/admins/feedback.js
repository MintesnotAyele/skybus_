// Feedback.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FeedbackItem from './FeedbackItem';

const Feedback = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [feedbackCount, setFeedbackCount] = useState(0);
  useEffect(() => {
    axios.get('http://localhost:8000/api/Feedback') // assuming Django backend API endpoint
     .then(response => {
        setFeedbackItems(response.data);
        setFeedbackCount(response.data.length);
        console.log(response.data.length);
        localStorage.removeItem('feed')
        localStorage.setItem('feed',response.data.length);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="w-full h-full py-10 flex flex-col gap-4 items-center justify-center bg-gray-900 dark:bg-white">
        
      <h1 className="md:text-4xl sm:text-3xl xs:text-2xl text-center font-serif font-extrabold border-b-2 dark:border-blue-500 rounded-b-md mb-6 border-yellow-500 text-white dark:text-black">
        Feedbacks
      </h1>
      {feedbackItems.map(item => (
        <FeedbackItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Feedback;