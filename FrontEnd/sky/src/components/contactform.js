import React from 'react';

<<<<<<< HEAD
class ContactForm extends Component {
  render() {
    return (
        <div className="bg-orange-100">
        <div className=" max-w-screen-lg mx-auto p-5 ">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
=======
const ContactForm = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 border">
>>>>>>> d68833c8613ef01f857a81bedb698444eb2fe71b
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
        <form className="md:col-span-8 p-10">
        <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            First Name
                        </label>
                        <input
                            id="grid-first-name"
                            type="text"
                            placeholder="Samuel"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Last Name
                        </label>
                        <input
                            id="grid-last-name"
                            type="text"
                            placeholder="FIkre"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
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
                            placeholder="********@*****.**"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
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
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        ></textarea>
                    </div>
                    <div className="flex justify-between w-full px-3">
                        <div className="md:flex md:items-center">
                            <label className="block text-gray-500 font-bold">
                                <input
                                    type="checkbox"
                                    className="mr-2 leading-tight"
                                    onChange={() => {}} // Add your onChange logic here
                                />
                                <span className="text-sm">
                                    Send me your newsletter!
                                </span>
                            </label>
                        </div>

  
                        <button
                            type="submit"
                            className="shadow bg-blue-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
        </form>
      </div>
    </div>
<<<<<<< HEAD
    
    </div>
    );
  }
=======
  );
>>>>>>> d68833c8613ef01f857a81bedb698444eb2fe71b
}

export default ContactForm;
