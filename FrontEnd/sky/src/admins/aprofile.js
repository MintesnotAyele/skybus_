import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/profile');
        setPayments(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/profile/${id}/`);
      console.log('Deletion successful');
      fetchSchedules(); // refetch users after deletion
    } catch (error) {
      console.error('Error deleting:', error);
    }
  }; 
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">Profile Information</h2>
          <span className="text-xs">All Profile item</span>
        </div>
        {/* Search and action buttons */}
      </div>
      {/* Table displaying booked tickets */}
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">USER_EMAIL</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">FName</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">LName</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Balance</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
    
              </tr>
            </thead>
            <tbody>
              {/* Render ticket data */}
              {payments.map(payment => (
                <tr key={payment.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">  
                        <p className="text-gray-900 whitespace-no-wrap">{payment.id}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{payment.user.email}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{payment.user.first_name}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{payment.user.last_name}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative">{payment.balance}</span>
                  </td>
                  <td className="border px-4 py-2">
                    <FaTrashAlt onClick={() => handleDelete(payment.id)} style={{ cursor: 'pointer' }} />

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

export default Profile;
