import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Bookedticket1 = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/api/book1?plate_number=${searchQuery}`);
      setTickets(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['ID', 'USER_EMAIL', 'Created at', 'BUS_PLATE_NUMBER', 'Seat_number', 'Schedule']],
      body: tickets.map(ticket => [
        ticket.booking_id,
        ticket.customer_id.email,
        ticket.booking_date,
        ticket.schedule.busPlateNumber.palte_number,
        ticket.seat_number,
        ticket.schedule.id
      ])
    });
    doc.save('booked_tickets.pdf');
  };

  const handleSearch = () => {
    fetchTickets();
  };

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div className="flex mb-4">
          <input
            type="number" // Change input type to "number"
            placeholder="Enter destination"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 px-4 py-2 mr-2"
            pattern="[0-9]*" // Add pattern attribute to allow only integer values
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>
        <div>
          <h2 className="text-gray-600 font-semibold">TICKET Order</h2>
          <span className="text-xs">All ticket item</span>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">USER_EMAIL</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created at</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">BUS_PLATE_NUMBER</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Seat_number</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Schedule</th>
              </tr>
            </thead>
            <tbody>
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
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative">{ticket.schedule.id}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={downloadPDF} className="mb-4">Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default Bookedticket1;
