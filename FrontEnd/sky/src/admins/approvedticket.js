import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Approvedticket = () => {
  const [ticketDetails, setTicketDetails] = useState(null);
  const [error, setError] = useState(null);
  const user = localStorage.getItem('useId');
  const fetchTicket = async () => {
    try {
      
      const response = await axios.get(`http://localhost:8000/api/bookedseats1/?customer_id=${user}`);
      // Assuming the response.data is a single Booking object
      setTicketDetails(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDownload = () => {
    // Implement PDF download logic here
    // For example, you can use a library like react-pdf to generate and download the PDF
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchTicket}
      >
        Display Ticket
      </button>
      {ticketDetails && (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="text-2xl py-4 px-6 bg-blue-400 text-white text-center font-bold uppercase">
            Book an Approval
          </div>

          <form className="py-4 px-6">
            <div className="col-sm-6 mb-5">
              <h6 className="proclinic-text-color">TICKET DETAILS:</h6>
              <span><strong>USER_EMAIL:</strong> {ticketDetails.name}</span>
              <br />
              <span><strong>TICKETID:</strong> {ticketDetails.booking_id}</span>
              <br />
              <span><strong>BUSPLATENUMBER: </strong> {ticketDetails.schedule}</span>
              <br />
              <span><strong>Seat_number: </strong> {ticketDetails.seat_number}</span>
              <br />
              <span><strong>Phone:</strong> 0974789926</span>
            </div>
            <div className="flex items-center justify-center mb-4">
              <button className="bg-sky-800 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleDownload}>
                Download
              </button>
            </div>
            <div className="flex items-center justify-center mb-4">
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit">
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Approvedticket;
