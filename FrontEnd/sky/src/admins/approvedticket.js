import React, { useState, useEffect } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';

const Approvedticket = () => {
  const [ticketDetails, setTicketDetails] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const user = localStorage.getItem('useId');

  const fetchTicket = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/bookedseats1/?customer_id=${user}`);
      setTicketDetails(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  const handleDownload = () => {
    const input = document.getElementById('formToDownload');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('form.pdf');
      setShowModal(true); // Show success modal after successful download
    });
  };

  const closeModalAndRedirect = () => {
    setShowModal(false); // Close modal
    //history.push('/'); // Redirect to home page
  };

  return (
    <div>
      {ticketDetails.map((ticket, index) => (
        <div key={index} className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="text-2xl py-4 px-6 bg-blue-400 text-white text-center font-bold uppercase">
            Book an Approval
          </div>
          <form className="py-4 px-6" id="formToDownload" key={index}>
            <div className="col-sm-6 mb-5">
              <h6 className="proclinic-text-color">TICKET DETAILS:</h6>
              <span><strong>USER_EMAIL:</strong> {ticket.customer_id.email}</span>
              <br />
              <span><strong>TICKETID:</strong> {ticket.booking_id}</span>
              <br />
              <span><strong>BUSPLATENUMBER: </strong> {ticket.schedule.busPlateNumber.plate_number}</span>
              <br />
              <span><strong>Seat_number: </strong> {ticket.seat_number}</span>
              <br />
              <span><strong>Phone:</strong> {ticket.customer_id.phone_number}</span>
            </div>
          </form>
          <div className="flex items-center justify-center mb-4">
            <button className="bg-sky-800 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleDownload}>
              Download
            </button>
          </div>
          <div className="flex items-center justify-center mb-4">
            <Link to= "/"><button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit">
              Cancle
            </button></Link>
          </div>
        </div>
      ))}
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Heroicon name: check */}
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Success!
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your ticket has been successfully downloaded.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={closeModalAndRedirect} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Approvedticket;
