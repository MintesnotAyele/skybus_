import React, { useState } from 'react';
import axios from 'axios';

const Addbusschedule = () => {
  const [busPlateNumber, setBusPlateNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [available_seats, setAvailableSeats] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/addschedule/', {
        busPlateNumber,
        destination,
        price,
        available_seats,
        time,
        date
      });
      
      setModalMessage(response.data.message);
      setModalOpen(true);
    } catch (error) {
      console.error('Error adding bus schedule:', error);
      setModalMessage(error.response.data.error);
      setModalOpen(true);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Bus Schedule</h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Fill Bus Schedule</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="bus_plate_number" className="block text-gray-700 dark:text-white mb-1">Bus Plate Number</label>
                <input type="text" id="bus_plate_number" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" value={busPlateNumber} onChange={(e) => setBusPlateNumber(e.target.value)} />
              </div>
              <div>
                <label htmlFor="destination" className="block text-gray-700 dark:text-white mb-1">Destination</label>
                <input type="text" id="destination" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="price" className="block text-gray-700 dark:text-white mb-1">Price</label>
              <input type="text" id="price" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className="mt-4">
              <label htmlFor="available_seats" className="block text-gray-700 dark:text-white mb-1">Available Seats</label>
              <input type="text" id="available_seats" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" value={available_seats} onChange={(e) => setAvailableSeats(e.target.value)} />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="time" className="block text-gray-700 dark:text-white mb-1">Time</label>
                <input type="time" id="time" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-700 dark:text-white mb-1">Date</label>
                <input type="date" id="date" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button onClick={handleSubmit} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Place Order</button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      {modalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l-4-4-1.41 1.41L12 16.83l7.41-7.42L16 10l-4 4z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a6 6 0 100 12 6 6 0 000-12z" fill="currentColor" /></svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Success</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{modalMessage}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={() => setModalOpen(false)} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Addbusschedule;
