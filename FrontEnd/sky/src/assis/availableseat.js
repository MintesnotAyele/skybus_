import React, { Component } from 'react'

 class Availableseat extends Component {
  render() {
    return (
      <div className="container mx-auto flex">
      {/* Side Navigation */}
      <div className="w-1/4 bg-gray-200 dark:bg-gray-800 p-4">
        {/* Add your side navigation content here */}
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <ul>
          <li>Filter 1</li>
          <li>Filter 2</li>
          <li>Filter 3</li>
        </ul>
      </div>
      {/* Bus Schedule Table */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">Available Bus Schedule</h1>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Bus ID</th>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Plate Number</th>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">City</th>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Departure Time</th>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Number of Seats</th>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Number of Available Seats</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap">1</td>
              <td className="px-6 py-4 whitespace-no-wrap">ABC123</td>
              <td className="px-6 py-4 whitespace-no-wrap">City Name</td>
              <td className="px-6 py-4 whitespace-no-wrap">12:00 PM</td>
              <td className="px-6 py-4 whitespace-no-wrap">30</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </td>
            </tr>
            {/* Add more rows for additional bus schedules */}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

export default Availableseat