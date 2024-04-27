import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Userman = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = () => {
    axios.get('http://localhost:8000/api/schedule/')
      .then(response => {
        setSchedules(response.data);
      })
      .catch(error => {
        console.error('Error fetching schedules:', error);
      });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/schedule/${id}/`);
      console.log('Deletion successful');
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const handleUpdate = (id) => {
    console.log('Updating schedule with id:', id);
    // Navigate to edit page
  };

  const handleSendReminder = async (id) => {
    try {
      await axios.post('http://localhost:8000/sendReminder/', { id: id });
      console.log('Reminder sent successfully');
    } catch (error) {
      console.error('Error sending reminder:', error);
    }
  };

  return (
    <div>
      <div className="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <div className="flex flex-col w-64">
          {/* Sidebar content */}
          {/* Replace this with your sidebar content */}
          <div className="bg-gray-800 text-white p-4">Admin Panel</div>
          <nav className="bg-gray-700 text-white flex-1">
            <ul className="p-2">
              <li className="py-2 px-4 hover:bg-gray-600">Dashboard</li>
              <li className="py-2 px-4 hover:bg-gray-600">Bus Schedule</li>
              <li className="py-2 px-4 hover:bg-gray-600">Bookings</li>
              <li className="py-2 px-4 hover:bg-gray-600">Settings</li>
            </ul>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Sky Bus Schedule</h1>
          <table className="w-full bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="border px-4 py-2">Bus Plate Number</th>
                <th className="border px-4 py-2">Destination</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Time</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Actions</th>
                <th className="border px-4 py-2">Send Reminder</th> {/* New column for reminder button */}
              </tr>
            </thead>
            <tbody>
              {schedules.map(schedule => (
                <tr key={schedule.id}>
                  <td className="border px-4 py-2">{schedule.busPlateNumber.palte_number}</td>
                  <td className="border px-4 py-2">{schedule.destination}</td>
                  <td className="border px-4 py-2">{schedule.date}</td>
                  <td className="border px-4 py-2">{schedule.time}</td>
                  <td className="border px-4 py-2">{schedule.price}</td>
                  <td className="border px-4 py-2">
                    <FaTrashAlt onClick={() => handleDelete(schedule.id)} style={{ cursor: 'pointer' }} />
                    <Link to={`/edit/${schedule.id}`}><FaEdit onClick={() => handleUpdate(schedule.id)} style={{ cursor: 'pointer', marginLeft: '10px' }} /></Link>
                  </td>
                  <td className="border px-4 py-2">
                    <button onClick={() => handleSendReminder(schedule.id)}>Send Reminder</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userman;
