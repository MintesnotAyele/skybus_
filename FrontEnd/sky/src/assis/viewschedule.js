import React, { Component } from 'react'

 class Viewschedule extends Component {
  render() {
    return (
      
        <div>
         <div className="flex h-screen bg-gray-200">
          <div className="flex flex-col w-64">
          <div className="bg-gray-800 text-white p-4">Admin Panel</div>
          <nav className="bg-gray-700 text-white flex-1">
          <ul className="p-2">
            <li className="py-2 px-4 hover:bg-gray-600">Dashboard</li>
            <li className="py-2 px-4 hover:bg-gray-600">Bus Schedule</li>
            <li className="py-2 px-4 hover:bg-gray-600">Bookings</li>
            <li className="py-2 px-4 hover:bg-gray-600">Settings</li>
          </ul>
        </nav>
      </div>



      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Sky Bus Schedule </h1>
        <img className="w-18 h-14 mr-6" src="https://cdn.pixabay.com/photo/2014/04/03/11/55/bus-312564_640.png" alt="Flowbite Logo" />
        
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="border px-4 py-2">Bid</th>
              <th className="border px-4 py-2">From</th>
              <th className="border px-4 py-2">Destination</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">City A</td>
              <td className="border px-4 py-2">City B</td>
              <td className="border px-4 py-2">2024-02-22</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">City A</td>
              <td className="border px-4 py-2">City B</td>
              <td className="border px-4 py-2">2024-02-22</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">City A</td>
              <td className="border px-4 py-2">City B</td>
              <td className="border px-4 py-2">2024-02-22</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">City A</td>
              <td className="border px-4 py-2">City B</td>
              <td className="border px-4 py-2">2024-02-22</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">City A</td>
              <td className="border px-4 py-2">City B</td>
              <td className="border px-4 py-2">2024-02-22</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">City B</td>
              <td className="border px-4 py-2">City C</td>
              <td className="border px-4 py-2">2024-02-23</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div></div>
    )
  }
}

export default Viewschedule