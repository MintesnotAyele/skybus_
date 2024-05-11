import React, { useState } from 'react';
import axios from 'axios';

const Addbus = () => {
  const [owner_name, setBusOwner] = useState('');
  const [palte_number, setPlateNumber] = useState('');
  const [number_of_site, setNumberOfSeats] = useState('');
  const [city, setCity] = useState('');
  const [owner_ac, setOwner_ac]=useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // First name should not contain special characters or numbers
    // Last name should not contain special characters or numbers
    if (!/^[a-zA-Z]+$/.test(owner_name)) {
      newErrors.owner_name = 'Name should only contain letters.';
    }

    // Phone number should only contain digits
    if (!/^\d+$/.test(palte_number)) {
      newErrors.palte_number = 'bus plate numbers should only contain numbers.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  const handleSubmit = async () => {
    setLoading(true);
    if(validateForm()){
    try {
      const response = await axios.post('http://localhost:8000/api/bus/', {
        
        palte_number,
        number_of_site,
        owner_name,
        owner_ac,
        city
      });
      
      setModalMessage(response.data.message);
      setModalOpen(true);
    } catch (error) {
      console.error('Error adding bus:', error);
      setModalMessage('An error occurred while adding the bus.');
      setModalOpen(true);
    }}
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-6 bg-orange-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Register Bus</h2>

          <div className="bg-gray-200 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Bus Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="bus_owner">Bus Owner</label>
                    <input type="text" name="bus_owner" id="bus_owner" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={owner_name} onChange={(e) => setBusOwner(e.target.value)} />
                    {errors.owner_name && <p className="text-red-500 text-sm">{errors.owner_name}</p>} 
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="plate">Plate Number</label>
                    <input type="text" name="plate" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={palte_number} onChange={(e) => setPlateNumber(e.target.value)} />
                    {errors.palte_number && <p className="text-red-500 text-sm">{errors.palte_number}</p>} 
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="numberOfSeats">Number of Seats</label>
                    <input type="text" name="numberOfSeats" id="numberOfSeats" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={number_of_site} onChange={(e) => setNumberOfSeats(e.target.value)} />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={city} onChange={(e) => setCity(e.target.value)} />
                  </div>
                  <div class="md:col-span-1">
                      <label for="zipcode">Owner_ac</label>
                      <input type="text" name="owner_ac" id="owner_ac" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value={owner_ac} onChange={(e) => setOwner_ac(e.target.value)} />
                    </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
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

        <a className="md:absolute bottom-0 right-0 p-4 float-right">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58sP10nf1CD0Ct4UOoQv6uhNptrDJGCcrMA&s" alt="Buy Me A Coffee" className="transition-all rounded-full w-26  hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" />
        </a>
      </div>
    </div>
  );
};

export default Addbus;
