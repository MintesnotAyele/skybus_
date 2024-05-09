import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Userup = () => {
  const [users, setUsers] = useState([]);
  const [redirectUrl, setRedirectUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/Users/');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/Users/${id}/`);
      console.log('Deletion successful');
      fetchSchedules(); // refetch users after deletion
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const handleUpdate = (id) => {
    setRedirectUrl(`/editu/${id}`);
  };

  const handleLogout = () => {
    localStorage.clear(); // clear all local storage
    navigate('/'); // navigate to homepage
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
              <li className="py-2 px-4 hover:bg-gray-600"><Link to="/adminpage">Dashboard</Link></li>
              <li className="py-2 px-4 hover:bg-gray-600"><Link to="/assis/viewschedule">Bus Schedule</Link></li>
              <li className="py-2 px-4 hover:bg-gray-600"><Link to="/admins/bookedticket">Bus Bookings</Link></li>
              <li className="py-2 px-4 hover:bg-gray-600" onClick={handleLogout}><Link>Logout</Link></li>
            </ul>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Sky Bus Users</h1>
          <table className="w-full bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">PhoneNumber</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">{user.phone_number}</td>
                  <td className="border px-4 py-2">
                    <FaTrashAlt onClick={() => handleDelete(user.id)} style={{ cursor: 'pointer' }} />
                    <Link to={`/editu/${user.id}`}><FaEdit onClick={() => handleUpdate(user.id)} style={{ cursor: 'pointer', marginLeft: '10px' }} /></Link>
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

export default Userup;