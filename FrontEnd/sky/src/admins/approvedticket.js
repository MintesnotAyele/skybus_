import React, { Component } from 'react'


 class Approvedticket extends Component {
  
  render() {
    return (
      <div>
        <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl py-4 px-6 bg-blue-400 text-white text-center font-bold uppercase">
        Book an Approvememt
    </div>
    <form class="py-4 px-6">
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
           custumor Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" placeholder="name of customer"/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
             Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" placeholder="customer email"/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="phone">
           bus Number
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone" type="tel" placeholder="bus number"/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="date">
            Date
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone" type="tel" placeholder="date"/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="time">
            Time
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone" type="tel" placeholder="travel time"/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="service">
            plate number
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone" type="tel" placeholder="plate number"/>
    </div>
    <div class="mb-4">
      
        
    </div>
    <div class="flex items-center justify-center mb-4">
        <button class="bg-sky-800 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit">
            download
        </button>
    </div>
    <div class="flex items-center justify-center mb-4">
        <button class="bg-red-600 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit">
            delete
        </button>
    </div>
</form>
</div>
      </div>
    )
  }
}

export default Approvedticket
