import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Userman = () => {
  const [schedules, setSchedules] = useState([]);
  const navigate = useNavigate();

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
  const handleLogout = () => {
    localStorage.clear(); // clear all local storage
    navigate('/'); // navigate to homepage
  };
  return (
    <div>
      <div className="flex h-screen bg-orange-200">
        {/* Sidebar */}
        <div className="flex flex-col w-64">
          {/* Sidebar content */}
          {/* Replace this with your sidebar content */}
          <div className="bg-slate-950 text-white p-4">Admin Panel</div>
          <nav className="bg-gray-700 text-white flex-1">
            <ul className="p-2">
              <li className="py-2 px-4 hover:bg-gray-600"><Link to="/adminpage">Dashboard</Link></li>
              <li className="py-2 px-4 hover:bg-gray-600"><Link to="/assis/viewschedule">Bus Schedule</Link></li>
              <li className="py-2 px-4 hover:bg-gray-600"><Link to="/admins/bookedticket">Bus Bookings</Link></li>
              
              <li className="py-2 px-4 flex items-center hover:bg-gray-600">
  <Link to="/admins/bookedticket" className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
    Bus Bookings
  </Link>
</li>



              <li className="py-2 px-4 flex items-center hover:bg-gray-600" onClick={handleLogout}>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2"> 
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
  </svg>Logout
</li>
              <li className="py-2 px-4 hover:bg-gray-600" onClick={handleLogout}>Logout</li>
            </ul>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Sky Bus Schedule</h1>
          <table className="w-full bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="border px-4 py-2 bg-cyan-900  text-white">Bus Plate Number</th>
                <th className="border px-4 py-2 bg-cyan-900  text-white">Destination</th>
                <th className="border px-4 py-2 bg-cyan-900  text-white">Date</th>
                <th className="border px-4 py-2 bg-cyan-900  text-white">Time</th>
                <th className="border px-4 py-2 bg-cyan-900  text-white">Price</th>
                <th className="border px-4 py-2 bg-slate-400 ">Actions</th>
                <th className="border px-4 py-2 text-white bg-rose-700">Send Reminder</th> {/* New column for reminder button */}
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
