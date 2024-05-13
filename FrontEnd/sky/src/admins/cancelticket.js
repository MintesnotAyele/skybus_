import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cancelticket = () => {
  const [bookingId, setBookingId] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'bookingId') setBookingId(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'reason') setReason(value);
  };

  const cancel = async () => {
    try {
      if (!bookingId || !email) {
        setErrorMessage('Booking ID and Email are required');
        setModalOpen(true);
        return;
      }

      const response = await axios.post('http://localhost:8000/cancle', {
        bookingId,
        email,
       
      });

      console.log(response.data);
      setModalOpen(true);
      setErrorMessage(response.data.message);
    } catch (error) {
      setErrorMessage('Error cancelling booking: ' + error.message);
      setModalOpen(true);
      console.error('Error cancelling booking:', error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setErrorMessage('');
    navigate('/Fpassenger/pass/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-200 white:bg-gray-900">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Do you want to Cancel Booking?</h2>
        <img className="w-12 h-10 mr-4" src="https://cdn.pixabay.com/photo/2014/04/03/11/55/bus-312564_640.png" alt="Flowbite Logo" /> skybus
        <form>
          <div className="mb-4">
            <label htmlFor="bookingId" className="block text-sm font-medium text-gray-700">Booking ID</label>
            <input type="text" id="bookingId" value={bookingId} name="bookingId" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" value={email} name="email" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for cancellation</label>
            <textarea id="reason" name="reason" value={reason} onChange={handleChange} rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></textarea>
          </div>
        </form>
        <button type="button" onClick={cancel} className="mt-4 w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">Cancel request</button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">{errorMessage}</h2>
            <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cancelticket;
