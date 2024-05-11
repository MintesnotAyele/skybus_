import React from 'react';
import { FaUserCircle } from 'react-icons/fa';


const FeedbackItem = ({ first_name, last_name, email, feedback }) => {
  return (
    <div className="sm:w-[70%] xs:w-[94%] mx-auto dark:bg-gray-300 bg-gray-700 p-4 rounded-md flex sm:gap-4 xs:gap-2 items-center justify-center">
      <FaUserCircle className="text-blue-500 dark:text-teal-400/20 mr-4" size={40} />
      <div className="w-[80%] flex flex-col gap-1">
        <div className="text-lg font-semibold font-serif text-white dark:text-black">{first_name} {last_name}</div>
        <p className="text-sm dark:text-gray-600 text-gray-300">{email}</p>
        <p className="text-sm dark:text-gray-600 text-gray-300">{feedback}</p>
      </div>
    </div>
  );
};

export default FeedbackItem;