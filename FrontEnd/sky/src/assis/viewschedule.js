import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Viewschedule = () => {
  const [schedules, setSchedules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/schedule/');
      setSchedules(response.data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };
  const handleLogout = () => {
    localStorage.clear(); // clear all local storage
    navigate('/'); // navigate to homepage
  };

  return (
    <div>
      <div className="flex h-screen bg-gray-200">
        <div className="flex flex-col w-64">
          <div className="bg-slate-900 text-white p-4">assistant Panel</div>
          <nav className="bg-gray-700 text-white flex-1">
            <ul className="p-2">
              <li className="py-2 px-4 hover:bg-gray-600"><Link to="/assistant">Dashboard</Link></li>
              <li className="py-2 px-4 hover:bg-gray-600"><Link to="/assis/viewschedule">Bus Schedule</Link></li>
              <li className="py-2 px-4 hover:bg-gray-600"><Link to="/admins/bookedticket1">Bus Bookings</Link></li>
              <li className="py-2 px-4 hover:bg-gray-600" onClick={handleLogout}>Logout</li>
            </ul>
          </nav>
        </div>

        <div className="flex-1 p-6 bg-orange-100">
          <h1 className="text-2xl font-bold mb-4">Sky Bus Schedule </h1>
          <img className="w-18 h-14 mr-6" src="https://cdn.pixabay.com/photo/2014/04/03/11/55/bus-312564_640.png" alt="Flowbite Logo" />

          <table className="w-full bg-blue-100 shadow-md rounded">
            <thead>
              <tr >
                <th className="border px-4 py-2 bg-teal-900 text-white">busPlateNumber</th>
                <th className="border px-4 py-2 bg-teal-900 text-white">Destination</th>
                <th className="border px-4 py-2 bg-teal-900  text-white">Date</th>
                <th className="border px-4 py-2 bg-teal-900  text-white">time</th>
                <th className="border px-4 py-2 bg-teal-900  text-white">Available_seats</th>
                <th className="border px-4 py-2 bg-teal-900  text-white">price</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule) => (
                <tr key={schedule.id}>
                  <td className="border px-4 py-2">{schedule.busPlateNumber.palte_number}</td>
                  <td className="border px-4 py-2">{schedule.destination}</td>
                  <td className="border px-4 py-2">{schedule.date}</td>
                  <td className="border px-4 py-2">{schedule.time}</td>
                  <td className="border px-4 py-2">{schedule. available_seats}</td>
                  <td className="border px-4 py-2">{schedule.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Viewschedule;