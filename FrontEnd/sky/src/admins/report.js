
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Report = () =>{
 
    const feed=localStorage.getItem('feed');
    const book=localStorage.getItem('book');
    const cancle=localStorage.getItem('cancle');

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
    return (
      <div>
         <div className="flex justify-center bg-gray-100 py-10 p-14">
  {/* First Stats Container */}
  <Link to="/admins/bookedticket"><div className="container mx-auto pr-4">
    <div className="w-72 bg-blue-100 max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-200 cursor-pointer">
      <div className="h-20 bg-red-400 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">to day ticket</p>
      </div>
      <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">{book}</p>
    </div>
  </div></Link>
  {/* Second Stats Container */}
  <Link to='/admins/feedback'><div className="container mx-auto pr-4">
    <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className="h-20 bg-blue-500 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">number of feedback</p>
      </div>
      <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">{feed}</p>
    </div>
  </div></Link>
  {/* Third Stats Container */}
  <div className="container mx-auto pr-4">
    <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className="h-20 bg-orange-400 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">available ticket</p>
      </div>
      <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">711</p>
    </div>
  </div>
  {/* Fourth Stats Container */}
  <Link to="/admins/aprove"><div className="container mx-auto">
    <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className="h-20 bg-amber-900 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">number of canceled ticket</p>
      </div>
      <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">{cancle}</p>
    </div>
    
  </div>
  </Link>
</div>
{/* Table Stats */}
<div className="flex justify-center bg-gray-100 py-10 p-5">
  {/* First Table */}
  <div className="container mr-5 ml-2 mx-auto bg-white shadow-xl">
    <div className="w-11/12 mx-auto">
      <div className="bg-white my-6 mx-2">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-red-400 font-bold uppercase text-sm text-white border-b border-grey-light">username</th>
              <th className="py-4 px-6 text-center bg-purple-300 font-bold uppercase text-sm text-white border-b border-grey-light">TOTAL Amount</th>
              <th className="py-4 px-6 text-center bg-blue-300 font-bold uppercase text-sm text-white border-b border-grey-light">BOOKINGID</th>
            </tr>
          </thead>
          <tbody>
          {payments.map(payment => (
                <tr key={payment.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{payment.user.username}</p>
                  </td>
                  
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{payment.amount_paid}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{payment.booking.booking_id}</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  </div>
</div>
      );
  };


export default Report
