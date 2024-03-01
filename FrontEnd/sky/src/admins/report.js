import React, { Component } from 'react'


 class Report extends Component {

  render() {
    return (
      <div>
         <div className="flex justify-center bg-gray-100 py-10 p-14">
  {/* First Stats Container */}
  <div className="container mx-auto pr-4">
    <div className="w-72 bg-blue-100 max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-200 cursor-pointer">
      <div className="h-20 bg-red-400 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">to day ticket</p>
      </div>
      <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">20,456</p>
    </div>
  </div>
  {/* Second Stats Container */}
  <div className="container mx-auto pr-4">
    <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className="h-20 bg-blue-500 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">number of feedback</p>
      </div>
      <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">19,694</p>
    </div>
  </div>
  {/* Third Stats Container */}
  <div className="container mx-auto pr-4">
    <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className="h-20 bg-orange-400 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">available ticket</p>
      </div>
      <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">711</p>
    </div>
  </div>
  {/* Fourth Stats Container */}
  <div className="container mx-auto">
    <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className="h-20 bg-amber-900 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">number of canceled ticket</p>
      </div>
      <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">0</p>
    </div>
  </div>
</div>
{/* Table Stats */}
<div className="flex justify-center bg-gray-100 py-10 p-5">
  {/* First Table */}
  <div className="container mr-5 ml-2 mx-auto bg-white shadow-xl">
    <div className="w-11/12 mx-auto">
      <div className="bg-white my-6">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-red-400 font-bold uppercase text-sm text-white border-b border-grey-light">username</th>
              <th className="py-4 px-6 text-center bg-purple-300 font-bold uppercase text-sm text-white border-b border-grey-light">TOTAL ENTRIES</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">Bible</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">11,980</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">Blah</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">340</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">Blah</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">901</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">Blah</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">11,950</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">Blah</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">459</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="container mr-5 mx-auto bg-white shadow-xl">
    <div className="w-11/12 mx-auto">
      <div className="bg-white my-6">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-sky-500 font-bold uppercase text-sm text-white border-b border-grey-light">username</th>
              <th className="py-4 px-6 text-center bg-purple-300 font-bold uppercase text-sm text-white border-b border-grey-light">ENTRIES</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">495,455</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">495,455</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">495,455</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">32,333</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">31,199</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  {/* Second Table */}
  <div className="container mr-5 mx-auto bg-white shadow-xl">
    <div className="w-11/12 mx-auto">
      <div className="bg-white my-6">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-orange-400 font-bold uppercase text-sm text-white border-b border-grey-light">username</th>
              <th className="py-4 px-6 text-center bg-purple-300 font-bold uppercase text-sm text-white border-b border-grey-light">ENTRIES</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">495,455</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">495,455</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">495,455</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">32,333</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">26809304030</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">31,199</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  {/* Third Table */}
  <div className="container mx-auto bg-white shadow-xl">
    <div className="w-11/12 mx-auto">
      <div className="bg-white my-6">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-amber-900 font-bold uppercase text-sm text-white border-b border-grey-light">username</th>
              <th className="py-4 px-6 text-center bg-purple-300 font-bold uppercase text-sm text-white border-b border-grey-light">POINTS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">28679609009</td>
              <td className="py-4 text-center px-6 border-b border-grey-light">11,290</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">28679609009</td>
              <td className="py-4 text-center px-6 border-b border-grey-light">9,230</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">28679609009</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">234</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">28679609009</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">56,230</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">28679609009</td>
              <td className="py-4 px-6 text-center border-b border-grey-light">323</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


      </div>
    )
  }
}

export default Report
