import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    feedback: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

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
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) {
      newErrors.email = 'Last name should only contain letters.';
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: checked }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(validateForm()){
    setSubmitting(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/Feedback/', formData);
      console.log(response);
      setSubmitting(false);
    } catch (error) {
      setErrors(error.response.data);
      setSubmitting(false);
    }}
  };
  

 

  return (
    <div className="max-w-screen-lg mx-auto p-5">
       <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase text-sm 0.875rem;">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">Get In <span className="text-indigo-600">Touch</span></h3>
          <p className="mt-4 leading-7 text-gray-200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div className="flex items-center mt-5">
            <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.536 489.536" xmlnsXlink="http://www.w3.org/1999/xlink"></svg>
            <span className="text-sm">Address #14, Street #12, Gurage, central Ethiopia, Ethiopia.</span>
          </div>
          <div className="flex items-center mt-5">
            <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.002 60.002" xmlnsXlink="http://www.w3.org/1999/xlink"></svg>
            <span className="text-sm">+251 9 99 65 50 50</span>
          </div>
          <div className="flex items-center mt-5">
            <svg className="h-8 mr-4 text-white-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <circle cx="12" cy="12" r="5"/>
            </svg>
            <span className="text-sm">24/7</span>
          </div>
          <div class="flex items-center">
            {/* Add SVG icons here */}
            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
          </div>
        </div>
        <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                id="grid-first-name"
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.first_name && <p className="text-red-500 text-xs italic">{errors.first_name}</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                id="grid-last-name"
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {errors.last_name && <p className="text-red-500 text-xs italic">{errors.last_name}</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label htmlFor="grid-email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Email Address
                        </label>
                        <input
                            id="grid-email"
                            type="email"
                            name='email'
                            placeholder="********@*****.**"
                            value={formData.email}
                            onChange={handleChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                    </div>
                </div>
    
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label htmlFor="grid-message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="grid-message"
                            rows="10"
                            type="text"
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        ></textarea>
                    </div></div>
          <div className="flex justify-between w-full px-3">
            <div className="md:flex md:items-center">
              <label className="block text-gray-500 font-bold">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleCheckboxChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">
                  Send me your newsletter!
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="shadow bg-blue-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Send Message'}
           </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;