import React, { Component } from 'react';
import axios from 'axios';

class Availableseat extends Component {
  state = {
    schedules: [],
    destination: '',
    availableSeatsMap: {}
  };
 
      


  handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/search/?destination=${this.state.destination}`);
      console.log(response.data);
      const schedules = response.data;
      const availableSeatsMap = {};
      for (const schedule of schedules){
        const bookedSeatsResponse = await axios.get(`http://localhost:8000/api/bookedseats/?schedule=${schedule.id}`);
        console.log(bookedSeatsResponse.data);
        const bookedSeats = bookedSeatsResponse.data;
        const totalSeats = schedule.available_seats;
        const bookedSeatNumbers = bookedSeats.map(seat => seat.seat_number);
        const availableSeats = Array.from({ length: totalSeats }, (_, index) => index + 1).filter(seat => !bookedSeatNumbers.includes(seat));
        availableSeatsMap[schedule.id] = availableSeats;
        console.log(availableSeats)
        console.log(Object.values(bookedSeats))

      }
      this.setState({ schedules, availableSeatsMap });
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };

  handleChange = event => {
    this.setState({ destination: event.target.value });
  };

  render() {
    const { schedules, availableSeatsMap } = this.state;

    return (
      <div className="container mx-auto flex">
        <div className="w-3/4 p-4">
          <h1 className="text-2xl font-bold mb-4">Available Bus Schedule</h1>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Enter destination"
              value={this.state.destination}
              onChange={this.handleChange}
              className="border border-gray-300 px-4 py-2 mr-2"
            />
            <button
              onClick={this.handleSearch}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </div>
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Plate Number</th>
                <th>From</th>
                <th>To</th>
                <th>Departure Time</th>
                <th>price</th>
                <th>Number of Available Seats</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
              {schedules.map(schedule => (
                <tr key={schedule.id}>
                  <td>{schedule.busPlateNumber.palte_number}</td>
                  <td>{schedule.date}</td>
                  <td>{schedule.destination}</td>
                  <td>{schedule.time}</td>
                  <td>{schedule.price}</td>
                  <td>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                    {availableSeatsMap[schedule.id] && availableSeatsMap[schedule.id].map(seat => (
                        <option key={seat}>{seat}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Availableseat;
