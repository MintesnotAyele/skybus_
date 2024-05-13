import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bookedticket = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/book');
        setTickets(response.data);
        console.log(response.data.length);
        localStorage.removeItem('book');
        localStorage.setItem('book',response.data.length);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-orange-100 p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-slate-950 font-bold text-2xl">Booked Ticket Order</h2>
          <span className="font-semibold text-xl ">All ticket item</span>
        </div>
        {/* Search and action buttons */}
      </div>
      {/* Table displaying booked tickets */}
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr >
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-900 text-left text-xs font-semibold  uppercase tracking-wider text-white  ">ID</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-900 text-left text-xs font-semibold  uppercase tracking-wider text-white ">USER_EMAIL</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-900 text-left text-xs font-semibold  uppercase tracking-wider text-white">Created at</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-900 text-left text-xs font-semibold  uppercase tracking-wider text-white">BUS_PLATE_NUMBER</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-cyan-900 text-left text-xs font-semibold  uppercase tracking-wider text-white">Seat_number</th>
                
              </tr>
            </thead>
            <tbody>
              {/* Render ticket data */}
              {tickets.map(ticket => (
                <tr key={ticket.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">  
                        <p className="text-gray-900 whitespace-no-wrap">{ticket.booking_id}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{ticket.customer_id.email}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{ticket.booking_date}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{ticket.schedule.busPlateNumber.palte_number}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative">{ticket.seat_number}</span>
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

export default Bookedticket;
