import React, { Component } from 'react'

class Addbusschedule extends Component {
  render() {
    return (
      <div class="bg-gray-100 dark:bg-gray-900">
      <div class="w-full max-w-3xl mx-auto p-8">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
              <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Busschedule</h1>
  
          
              <div class="mb-6">
                  <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">fill bus schedule</h2>
                  <div class="grid grid-cols-2 gap-4">
                      <div>
                          <label for="first_name" class="block text-gray-700 dark:text-white mb-1">from </label>
                          <input type="text" id="first_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                      </div>
                      <div>
                        <label   class="block text-gray-700 dark:text-white mb-1">to</label>
                        <input type="text" id="last_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                    </div>
                  </div>
  
                  <div class="mt-4">
                      <label for="address" class="block text-gray-700 dark:text-white mb-1">Address</label>
                      <input type="text" id="address" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                  </div>
  
                  <div class="mt-4">
                      <label for="city" class="block text-gray-700 dark:text-white mb-1">City</label>
                      <input type="text" id="city" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                  </div>
  
                  <div class="grid grid-cols-2 gap-4 mt-4">
                      <div>
                          <label for="state" class="block text-gray-700 dark:text-white mb-1">Time</label>
                          <input type="time" name="time" id="time"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />                      </div>
                      <div>
                          <label for="zip" class="block text-gray-700 dark:text-white mb-1">Date</label>
                          <input type="date" name="date" id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />                      </div>
                  </div>
              </div>
  
      
              <div>
                  <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">fill this</h2>
                  <div class="mt-4">
                      
                    
                  </div>
  
                  <div class="grid grid-cols-2 gap-4 mt-4">
                      <div>
                          <label for="exp_date" class="block text-gray-700 dark:text-white mb-1">Expiration Date</label>
                          <input type="text" id="exp_date" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                      </div>
                      <div>
                          <label for="cvv" class="block text-gray-700 dark:text-white mb-1">CVV</label>
                          <input type="text" id="cvv" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                      </div>
                  </div>
              </div>
  
              <div class="mt-8 flex justify-end">
                  <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Place Order</button>
              </div>
          </div>
      </div>
  </div>

    )
  }
}

export default Addbusschedule