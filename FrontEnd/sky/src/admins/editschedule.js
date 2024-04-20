import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Editschedule = () => {
  const [schedules, setSchedules] = useState({
    date: '',
    plate: '',
    seats: '',
    destination: '',
    time: '',
    state: '',
    price: ''
  });
  const { id } = useParams();

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = () => {
    axios.get(`http://localhost:8000/api/schedule/${id}`)
      .then(response => {
        const fetchedSchedule = response.data;
        setSchedules({
          date: fetchedSchedule.date,
          plate: fetchedSchedule.busPlateNumber.palte_number,
          seats: fetchedSchedule.available_seats,
          destination: fetchedSchedule.destination,
          time: fetchedSchedule.time,
          price: fetchedSchedule.price
        });
        console.log(fetchedSchedule.busPlateNumber.palte_number
        );
      })
      .catch(error => {
        console.error('Error fetching schedules:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedules(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      date: schedules.date,
      busPlateNumber: schedules.plate, // Assuming this is the foreign key field
      available_seats: schedules.seats,
      destination: schedules.destination,
      time: schedules.time,
      price: schedules.price
    };
    console.log(requestData)
    axios.put(`http://localhost:8000/api/search1/${id}/`, requestData )
      .then(response => {
        console.log('Schedule updated successfully:', response.data);
        // Optionally, you can update the UI or show a success message here
      })
      .catch(error => {
        console.error('Error updating schedule:', error);
        // Optionally, you can display an error message to the user
      });
  };

  return (
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">
      <div>
        <h2 class="font-semibold text-xl text-gray-600">edit Schedule</h2>
 
  
        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Schedule Details</p>
              <p>Please edit a fields you want.</p>
            </div>
  
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div class="md:col-span-5">
                  <label for="bus_id">Date</label>
                  <input type="text" name="date" id="date" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={schedules.date} onChange={handleChange} />
                </div>
  
                <div class="md:col-span-5">
                  <label for="plate">plate number</label>
                  <input type="text" name='plate' class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={schedules.plate} onChange={handleChange}/>
                </div>
  
                <div class="md:col-span-3">
                  <label for="address">Available seats</label>
                  <input type="text" name="seats" id="seats" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={schedules.seats} onChange={handleChange} />
                </div>
  
                <div class="md:col-span-2">
                  <label for="city">Destination</label>
                  <input type="text" name="destination" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={schedules.destination} onChange={handleChange} />
                </div>
  
                <div class="md:col-span-2">
                  <label for="country">Time</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input name="time" id="country" placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={schedules.time} onChange={handleChange}/>
                    <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                  </div>
                </div>
                
                <div class="md:col-span-1">
                  <label for="zipcode">Price</label>
                  <input type="text" name="price" id="price" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={schedules.price} onChange={handleChange}/>
                </div>
                
                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <a  class="md:absolute bottom-0 right-0 p-4 float-right">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58sP10nf1CD0Ct4UOoQv6uhNptrDJGCcrMA&s" alt="Buy Me A Coffee" class="transition-all rounded-full w-26  hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
      </a>
    </div>
  </div>
);
};

export default Editschedule;
