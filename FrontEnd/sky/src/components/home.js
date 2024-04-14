import React, { Component } from 'react'
//import Footer from './footer'
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
<div>      

            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" class="flex items-center">
                <img src="https://cdn.pixabay.com/photo/2014/04/03/11/55/bus-312564_640.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SkyBus</span>
            </a>
            <div class="flex items-center lg:order-2">
                <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-gray-800"><Link to="/login">Log in</Link></a>
                <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page"> <Link to="/">Home</Link></a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><Link to="/assistant">Assistant</Link></a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><Link to="/adminpage">Adminpage</Link></a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><Link to="/contactform">Contact</Link></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div>


    <div className="content">
          <h1>
            WOLKITE BUS STATION <br />
            <span>WE MAKE IT EASY TO BUY </span> <br />
            A TICKET ONLINE
          </h1>
          <p className="par">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
            atque eveniet <br />
            delectus <br />a quae totam ipsa illum minus laudantium?
          </p>
          <button className="cn">
            <a href="#">JOIN US</a>
          </button>
        </div>





        <div class=" flex-col justify-center overflow-hidden py-6 sm:py-12">
  <div class="min-h-28 ">
    <div class="max-w-screen-lg mx-auto py-4">
      <h2 class="font-bold text-center text-6xl text-sky-200 font-display">
        Our servives 
      </h2>
      <p class="text-center mt-4 font-medium text-sky-300 md:text-3xl">here we go</p>
      <div class="flex gap-6 mt-20">
        
        
        <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymv13tkX3C8IKGmYKvikP3FA413pim7M-TzdzPrQKQuhJ4evREfPQUJVLu3cHQNs08B8&usqp=CAU" class="object-cover h-52 w-full max-w-xs transition duration-300 ease-in-out hover:scale-110" alt=""/>
          <div class="p-6">
            <span class="block text-slate-400 font-semibold text-sm">16 Juillet 2016</span>
            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
              <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
              Finding best places to visit in</a></h3>
            <div class="flex mt-4 gap-4 items-center">
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                35
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-sky-400 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

                20
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lime-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>


                15
              </span>
            </div>
          </div>
        </div>




        <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
          <img src="https://www.ezega.com/Classifieds/images/AdImages/FullSize/27222.Lg.jpg" class="object-cover h-52 w-full max-w-xs transition duration-300 ease-in-out hover:scale-110" alt=""/>
          <div class="p-6">
            <span class="block text-slate-400 font-semibold text-sm">16 Juillet 2016</span>
            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
              <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
              Finding best places to visit in California</a></h3>
            <div class="flex mt-4 gap-4 items-center">
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                35
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-sky-400 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

                20
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lime-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>


                15
              </span>
            </div>
          </div>
        </div>

        <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0ZPBj2NET5VO-cO816FRQe8owCvxCI5xIiBGcU0l80sP835AI_HRlh8LZ05QcDmL5Pg&usqp=CAU" class="object-cover h-52 w-full max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="image"/>
          <div class="p-6">
            <span class="block text-slate-400 font-semibold text-sm">16 Juillet 2016</span>
            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
              <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
              Finding best places to visit in wollkite</a></h3>
            <div class="flex mt-4 gap-4 items-center">
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                35
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-sky-400 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

                20
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lime-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>


                15
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






<div class=" flex-col justify-center overflow-hidden py-6 sm:py-12">
  <div class="min-h-20 ">
    <div class="max-w-screen-lg mx-auto py-4">
     
  
      <div class="flex gap-6 mt-10">
        
        
        <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
          
        <img src="https://buses.exposed/photos/busesexposed_5nat1cevaer_450.jpg" class="object-cover h-52 w-full max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="image"/>

          <div class="p-6">
            <span class="block text-slate-400 font-semibold text-sm">16 Juillet 2016</span>
            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
              <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
              Finding best places to visit in wolkite</a></h3>
            <div class="flex mt-4 gap-4 items-center">
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                535
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-sky-400 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

                520
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lime-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>


                515
              </span>
            </div>
          </div>
        </div>




        <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFqLsy-8cyI0c5WhcQlwTCL1pXQVhoqJF8g&usqp=CAU" class="object-cover h-52 w-full" alt=""/>
          <div class="p-6">
            <span class="block text-slate-400 font-semibold text-sm">16 Juillet 2016</span>
            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
              <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
              Finding best places wolkite</a></h3>
            <div class="flex mt-4 gap-4 items-center">
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                535
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-sky-400 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

                520
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lime-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>


                515
              </span>
            </div>
          </div>
        </div>

        <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
          <img src="data:image/jpeg;base64,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" class="object-cover h-52 w-full" alt="image"/>
          <div class="p-6">
            <span class="block text-slate-400 font-semibold text-sm">16 Juillet 2016</span>
            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
              <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
              Finding best places in wolkite</a></h3>
            <div class="flex mt-4 gap-4 items-center">
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                535
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-sky-400 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

                520
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lime-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>


                55
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>








<div className='aboutus'>
<div className=" px-2 py-12">
  <div id="features" className="mx-auto max-w-6xl ">
    <p className="text-center text-base font-semibold md:text-3xl italic text-white">Aboutus</p>
    <h2 className="text-center font-display text-4xl font-bold tracking-tight text-blue-300 md:text-4xl">
      Writing has never been so easy
    </h2>
    <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
      <li className="rounded-xl bg-sky-100 px-6 py-8 shadow-sm">
        <img src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png" alt="" className="mx-auto h-10 w-10" />
        <h3 className="my-3 font-display font-medium">Location</h3>
        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
          the cutting-edge language model that makes interactions a breeze. With its user-friendly interface,
          effortlessly tap into the world of AI-generated text.
        </p>
      </li>
      <li className="rounded-xl bg-sky-100 px-6 py-8 shadow-sm">
        <img src="https://www.svgrepo.com/show/530442/port-detection.svg" alt="" className="mx-auto h-10 w-10" />
        <h3 className="my-3 font-display font-medium">Easy to use</h3>
        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
          Simply input your subject, click the generate button, and the result will appear in seconds just like
          magick.
        </p>
      </li>
      <li className="rounded-xl bg-sky-100 px-6 py-8 shadow-sm">
        <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="" className="mx-auto h-10 w-10" />
        <h3 className="my-3 font-display font-medium">Custom settings</h3>
        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
          We offer advanced customization. You can freely combine options like roles, languages, publish, tones,
          lengths, and formats.
        </p>
      </li>
      <li className="rounded-xl bg-sky-100 px-6 py-8 shadow-sm">
        <a href="/pricing" className="group">
          <img src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" />
          <h3 className="my-3 font-display font-medium group-hover:text-primary-500">flexible</h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            We offer a free trial service without login. We provide many payment options including pay-as-you-go and subscription.
          </p>
        </a>
      </li>
      <li className="rounded-xl bg-sky-100 px-6 py-8 shadow-sm">
        <a href="/templates" className="group">
          <img src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" className="mx-auto h-10 w-10" />
          <h3 className="my-3 font-display font-medium group-hover:text-primary-500">servies</h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            We offer many templates covering areas such as writing, education, lifestyle, and creativity to inspire your potential.
          </p>
        </a>
      </li>


      <li className="rounded-xl bg-sky-100 px-6 py-8 shadow-sm">
        <a href="/download" className="group">
          <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-10 w-10" />
          <h3 className="my-3 font-display font-medium group-hover:text-primary-500">in wolkite</h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Our product is compatible with multiple platforms including Web, Chrome, Windows, and Mac, you can use MagickPen anywhere.
          </p>
        </a>
      </li>
    </ul>
  </div>
</div>



</div>





<section id="partner" class="py-12  text-gray-100 sm:py-12 lg:py-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">OUR TRUSTED PARTNERS ARE
                </h2>
            <p class="mb-4">We are creating a tool that helps you be more productive and efficient when booking
                websites and webapps</p>

        </div>
        <div
            class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-orange-100 shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Investor</h3>
                        <p class="mt-6 text-base text-gray-600">Collaborate in realtime with other editors in a
                            project. See what othe editors are doing and edit even a simple text together</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-orange-100 shadow-md rounded-xl">
                <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Gumuruk</h3>
                    <p class="mt-6 text-base text-black">Go back and forth your history of changes and
                        restore your designs to any point in time</p>
                </div>
            </div>
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-orange-100 shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Road transport</h3>
                        <p class="mt-6 text-base text-gray-600">Step up your designs and workflow with
                            integrations with your favourite tools such as mailchimp, slack, jira etc</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-orange-100 shadow-md rounded-xl">
                <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">wolkite city administration</h3>
                    <p class="mt-6 text-base text-gray-600">Effortlessly publish your webpages online and make
                        it available to the world with a click of a button</p>
                </div>
            </div>
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-orange-100 shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Abdl Weyalaw
                        </h3>
                        <p class="mt-6 text-base text-gray-600">Collect data and information from users with
                            forms built on windframe and sort through them in a nice interface</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-orange-100 shadow-md rounded-xl">
                <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">insurance plc</h3>
                    <p class="mt-6 text-base text-gray-600">Attach your own custom domain to your published
                        projects or website on windframe</p>
                </div>
            </div>
        </div>
    </div>
</section>

        
<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://cdn.pixabay.com/photo/2014/04/03/11/55/bus-312564_640.png" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">skybus</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">investors</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">WkSkybus™</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/samuelfikregithub" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Twitter</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">WkSkybus™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>
    </div>

    
           </div>
           
    )
  }
}

export default Home
