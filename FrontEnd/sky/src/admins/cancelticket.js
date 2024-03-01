import React, { Component } from 'react'

class Cancelticket extends Component {
  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-200 white:bg-gray-900">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Do you want to Cancel Booking?</h2>
        <img className="w-12 h-10 mr-4" src="https://cdn.pixabay.com/photo/2014/04/03/11/55/bus-312564_640.png" alt="Flowbite Logo" /> skybus
        <form>
          <div className="mb-4">
            <label htmlFor="bookingId" className="block text-sm font-medium text-gray-700">Booking ID</label>
            <input type="text" id="bookingId" name="bookingId" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for cancellation</label>
            <textarea id="reason" name="reason" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></textarea>
          </div>
        </form>
        <button type="button" className="mt-4 w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">Cancel</button>
      </div>
    </div>
    )
  }
}

export default Cancelticket