import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    phone_number: '',
  });

  const [errors, setErrors] = useState({});
  const [backendResponse, setBackendResponse] = useState(null); // added to store backend response
  const [showModal, setShowModal] = useState(false); // added to control modal visibility

  const validateForm = () => {
    const newErrors = {};

    // First name should not contain special characters or numbers
    if (!/^[a-zA-Z]+$/.test(formData.first_name)) {
      newErrors.first_name = 'First name should only contain letters.';
    }

    // Last name should not contain special characters or numbers
    if (!/^[a-zA-Z]+$/.test(formData.last_name)) {
      newErrors.last_name = 'Last name should only contain letters.';
    }

    // Phone number should only contain digits
    if (!/^\d+$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Phone number should only contain numbers.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8000/signup/', formData);
        setBackendResponse(response.data);
        setShowModal(true); // show modal with backend response
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        setBackendResponse({ error: 'Something went wrong. Please try again.' });
        setShowModal(true); // show modal with error message
      }
    }
  };

  return (
    <div>
      <section>
        <div className="container mx-auto p-6">
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
               <form onSubmit={handleSubmit}> 
              <div> 
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> 
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required /> 
                </div> 
                <div> 
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                    First Name 
                  </label> 
                  <input 
                    type="text" 
                    name="first_name" 
                    id="first_name" 
                    value={formData.first_name} 
                    onChange={handleInputChange} 
                    placeholder="Enter First Name Here" 
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.first_name ? 'border-red-500' : ''}`} 
                    required 
                  /> 
                  {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>} 
                </div> 
                <div> 
                  <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> 
                    Last Name 
                  </label> 
                  <input 
                    type="text" 
                    name="last_name" 
                    id="last_name" 
                    value={formData.last_name} 
                    onChange={handleInputChange} 
                    placeholder="Enter Last Name Here" 
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.last_name ? 'border-red-500' : ''}`} 
                    required 
                  /> 
                  {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>} 
                </div> 
                <div> 
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label> 
                  <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} placeholder="Enter Username Here" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-fullp-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> 
                  {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>} 
                </div> 
                <div> 
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label> 
                  <input 
                    type="password" 
                    name="password" 
                    id="password"value={formData.password} 
                    onChange={handleInputChange} 
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required 
                  /> 
               {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} 
                </div> 
                <div> 
                  <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label> 
                  <input 
                    type="tel" 
                    name="phone_number" 
                    id="phone_number" 
                    value={formData.phone_number} 
                    onChange={handleInputChange} 
                    placeholder="Enter Phone Number Here" 
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.phone_number ? 'border-red-500' : ''}`} 
                    required 
                  /> 
                  {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number}</p>} 
                </div> 
                <button 
                  type="submit" 
                  className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" 
                > 
                  Create an Account 
                </button> 
                <p className="text-sm font-light text-gray-500 dark:text-gray-400"> 
                  Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link> 
                </p> 
              </form> 
            </div>
          </div>
        </div>
      </section>

      {/* Modal to display backend response */}
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
            <h2 className="text-lg font-medium">{backendResponse.success ? 'Success!' : 'Error'}</h2>
            <p className="text-sm">{backendResponse.message || backendResponse.error}</p>
            <Link to="/login"><button
              className="bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={() => setShowModal(false)}
            >
              Close
            </button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;