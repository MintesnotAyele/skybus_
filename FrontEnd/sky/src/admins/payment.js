import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/payment');
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
      await axios.delete(`http://localhost:8000/api/book/${id}/`);
      console.log('Deletion successful');
      fetchSchedules(); // refetch users after deletion
    } catch (error) {
      console.error('Error deleting:', error);
    }
  }; 

  return (
    <div className="bg-orange-100 p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-slate-950 font-bold text-3xl">Payment Information</h2>
          <span className="text-slate-950 text-2xl font-semibold">All Payment item</span>
        </div>
        {/* Search and action buttons */}
      </div>
      {/* Table displaying booked tickets */}
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal bg-slate-400">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-800 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-white">ID</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-800 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-white">USER_EMAIL</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-800 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-white">Booking ID</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-800 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-white">Amount_paid</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-800 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-white">Transaction_id</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-800 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-white">Payment_status</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-500 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-white">Actions</th>
    
              </tr>
            </thead>
            <tbody>
              {/* Render ticket data */}
              {payments.map(payment => (
                <tr key={payment.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">  
                        <p className="text-gray-900 whitespace-no-wrap">{payment.payment_id}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{payment.user.email}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{payment.booking.booking_id}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{payment.amount_paid}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative">{payment.transaction_id}</span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative">{payment.payment_status}</span>
                  </td>
                  <td className="border px-4 py-2">
                    <FaTrashAlt onClick={() => handleDelete(payment.booking.booking_id)} style={{ cursor: 'pointer' }} />

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

export default Payment;
