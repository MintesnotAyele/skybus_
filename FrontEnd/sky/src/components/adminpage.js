// Adminpage.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Adminpage extends Component {
  render() {
    return (
      <div>
      <div class="min-h-screen bg-gray-50/50">
  <aside class="bg-gradient-to-br from-gray-600 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
    <div class="relative border-b border-white/20">
      <a class="flex items-center gap-4 py-6 px-8" href="#/">
        <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Material Tailwind Dashboard</h6>
      </a>


      <button class="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button">
        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </span>
      </button>

    </div>
    <div class="m-4">
      <ul class="mb-4 flex flex-col gap-1">
        <li>
          <a aria-current="page" class="active" href="#">
            <button class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">dashboard</p>
            </button>
          </a>
        </li>


        <li>
          <a >
          <li><Link to="/admins/cancelticket">

            <button class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">cancelticket</p>
            </button>

            </Link></li>
          </a>

          <a> <li><Link to="/admins/report">
            <button class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">report</p>
            </button>
            </Link></li>
          </a>
          
        </li>


        <li>
          <a class="" href="#">
            <button class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                <path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clip-rule="evenodd"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">tables</p>
            </button>
          </a>
        </li>
      

        <li>
          <a >  <li><Link to="/admins/feedback">
            <button class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">notifactions</p>
            </button>
            </Link></li>
          </a>
        </li>


      </ul>
      <ul class="mb-4 flex flex-col gap-1">
        <li class="mx-3.5 mt-4 mb-2">
          <p class="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">admin tasks</p>
        </li>

        <li>
          <a >  <li><Link to="/admins/busmanage">

            <button class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">busmanage</p>
            </button>
            </Link></li>
          </a>
        </li>


        <li>
          <a>
          <li><Link to="/admins/bookedticket">
            <button class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Bookedticket</p>
            </button>
          </Link></li>
          </a>
        </li>

        <li>
          <a>
          <li><Link to="/admins/addbus">
            <button class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">addbus</p>
            </button>
          </Link></li>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  <div class="p-4 xl:ml-80">
    <nav class="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
      <div class="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div class="capitalize">
          <nav aria-label="breadcrumb" class="w-max">
            <ol class="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
              <li class="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                <a href="#">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">dashboard</p>
                </a>
                <span class="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
              </li>
              <li class="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">home</p>
              </li>
            </ol>
          </nav>
          <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">home</h6>
        </div>
        <div class="flex items-center">
          <div class="mr-auto md:mr-4 md:w-56">
            <div class="relative w-full min-w-[200px] h-10">
              <input class="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500" placeholder=" "/>
              <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">Type here</label>
            </div>
          </div>
          <button class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden" type="button">
            <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" stroke-width="3" class="h-6 w-6 text-blue-gray-500">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </button>
         

            <button class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 hidden items-center gap-1 px-4 xl:flex" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-blue-gray-500">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
              </svg>Sign In </button>
            <button class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden" type="button">
              <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-blue-gray-500">
                  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                </svg>
              </span>
            </button>


        
          <button class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-blue-gray-500">
                <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </button>
          <button aria-expanded="false" aria-haspopup="menu" id=":r2:" class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-blue-gray-500">
                <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
    <div class="mt-12">
      <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
              <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clip-rule="evenodd"></path>
              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's Money</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$53k</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+55%</strong>&nbsp;than last week
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's Users</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">2,300</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+3%</strong>&nbsp;than last month
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">New Clients</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">3,462</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-red-500">-2%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Sales</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$103,430</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+5%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>
      </div>
      <div class='flex min-h-screen items-center justify-center min-h-screen px-24'>
    <div>
        <div class="group relative -ml-4 flex scroll-mt-40 items-center pl-4">
        <a href="#" class="absolute z-50 -ml-10 mb-2.5 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 opacity-0 hover:opacity-100 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true" class="pointer-events-none h-3.5 w-3.5 rounded-lg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path>
            </svg>
        </a>
        <h2 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug !mb-2 text-primary">Frameworks Integration</h2>
        </div>
        <p class="block antialiased font-sans text-base font-light leading-relaxed text-inherit !mb-4 !font-normal !text-gray-600">Framework-specific guides that cover our recommended approach to installing @material-tailwind/react in a number of popular environments. Select your preferred framework from the list below and follow the instructions.</p>
        <div class="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4" id="frameworks-integration">
        <a class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" href="#">
            <span class="my-6 grid h-24 w-24 place-items-center">
            <svg class="mx-auto" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.788 14.842h6.865v.557h-6.235v4.189h5.864v.557h-5.864v4.599h6.307v.557h-6.937V14.842zm7.48 0h.73l3.232 4.6 3.304-4.6L30.028 9l-7.383 10.925L26.45 25.3h-.758l-3.462-4.893-3.475 4.893h-.744l3.833-5.376-3.575-5.083zm8.454.557v-.557h7.823v.557h-3.604V25.3h-.63v-9.902h-3.59zm-24.523-.557h.787L13.833 31.4l-4.482-6.1-6.494-9.667-.029 9.668H2.2V14.842zm32.283 9.734a.225.225 0 01-.225-.233.225.225 0 11.45 0 .224.224 0 01-.225.233zm.618-.613h.337c.005.186.138.311.334.311.219 0 .343-.134.343-.386v-1.594h.342v1.596c0 .453-.257.714-.682.714-.4 0-.674-.253-.674-.64zm1.805-.02h.34c.029.214.234.35.53.35.275 0 .477-.145.477-.345 0-.172-.129-.276-.421-.346l-.285-.07c-.4-.096-.582-.293-.582-.624 0-.402.322-.67.804-.67.448 0 .776.268.796.648h-.334c-.032-.208-.21-.338-.467-.338-.27 0-.451.133-.451.336 0 .161.116.254.404.322l.243.061c.453.108.64.296.64.635 0 .432-.328.702-.85.702-.49 0-.82-.258-.844-.661z" fill="#000"></path>
            </svg>
            </span>
        </a>
        <a class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" href="#">
            <span class="my-6 grid h-24 w-24 place-items-center">
            <svg class="mx-auto" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.58 18.828c0-1.206-1.42-2.276-3.603-2.93.525-2.217.296-3.983-.75-4.58a1.673 1.673 0 00-.838-.21c-.975 0-2.208.681-3.453 1.86-1.244-1.17-2.473-1.847-3.447-1.847a1.657 1.657 0 00-.85.213c-1.04.599-1.256 2.354-.738 4.56-2.173.65-3.586 1.712-3.59 2.912-.003 1.202 1.423 2.276 3.606 2.928-.525 2.22-.298 3.983.75 4.58.254.143.544.215.836.21.977 0 2.21-.681 3.454-1.86 1.243 1.17 2.473 1.848 3.448 1.848.297.005.59-.069.85-.214 1.04-.598 1.255-2.353.738-4.552 2.172-.658 3.585-1.72 3.587-2.918zm-7.84-5.465c1.433-1.284 2.329-1.422 2.647-1.422a.826.826 0 01.424.101c.501.286.7 1.293.541 2.627-.04.34-.099.679-.175 1.013a17.111 17.111 0 00-2.202-.362 17.227 17.227 0 00-1.443-1.764c.067-.067.136-.13.207-.193zM17.4 19.82c.135.262.28.525.43.79.152.264.31.531.484.796a16.43 16.43 0 01-1.372-.256c.122-.444.278-.882.456-1.33h.001zm-.486-3.334c.443-.103.907-.189 1.388-.255-.175.259-.325.525-.483.803-.157.278-.296.525-.431.792a20.58 20.58 0 01-.474-1.34zm.912 2.335c.222-.467.46-.926.716-1.375.261-.455.54-.9.835-1.333a20.329 20.329 0 013.133.003c.29.425.568.876.83 1.323.263.446.505.913.722 1.37a19.746 19.746 0 01-1.55 2.708c-1.042.081-2.09.08-3.132-.003-.295-.43-.573-.87-.833-1.321a20.542 20.542 0 01-.714-1.371h-.007zm5.753-2.585c.476.066.937.152 1.372.254-.134.447-.288.888-.462 1.322a25.529 25.529 0 00-.903-1.576h-.007zm.483 4.363c.15-.265.294-.53.431-.794.175.456.35.904.473 1.342-.459.106-.921.19-1.387.253.17-.259.332-.526.49-.801h-.007zM20.94 14.15c.315.336.625.7.927 1.091-.305-.013-.61-.02-.915-.021-.31 0-.626 0-.933.021.29-.378.597-.742.92-1.09zm-3.883-2.101a.852.852 0 01.432-.098 2.3 2.3 0 01.909.23 6.838 6.838 0 011.75 1.186l.206.188a17.189 17.189 0 00-1.43 1.75c-.745.073-1.484.194-2.214.362a8.895 8.895 0 01-.175-.993c-.182-1.322.028-2.33.52-2.618l.002-.007zm-.927 8.877c-.328-.1-.652-.218-.97-.35-1.242-.525-2.013-1.2-2.013-1.776 0-.576.774-1.246 2.016-1.763.311-.129.629-.242.952-.34.218.726.486 1.436.798 2.126a17.302 17.302 0 00-.783 2.103zm4.027 3.344c-1.434 1.283-2.33 1.42-2.65 1.42a.822.822 0 01-.424-.102c-.5-.286-.7-1.292-.54-2.626.04-.34.098-.678.174-1.012.726.167 1.461.287 2.202.36.441.62.923 1.21 1.443 1.765l-.204.195zm.8-.79a15.73 15.73 0 01-.93-1.09c.306.013.612.02.918.02.31 0 .627 0 .933-.019-.303.389-.61.753-.922 1.089h.001zm3.884 2.101a.845.845 0 01-.434.104c-.32 0-1.226-.14-2.654-1.419l-.206-.188c.514-.55.99-1.136 1.427-1.75a16.97 16.97 0 002.217-.361c.077.34.138.672.175.993.173 1.32-.028 2.328-.527 2.614l.002.007zm1.89-4.98a10.8 10.8 0 01-.952.34 17.233 17.233 0 00-.8-2.127c.308-.682.57-1.384.786-2.1.33.1.652.216.97.35 1.241.524 2.013 1.199 2.012 1.775-.002.576-.774 1.239-2.017 1.756l.001.007zm-5.791-.178a1.607 1.607 0 10.003-3.214 1.607 1.607 0 00-.003 3.214zM10.26 9.13v19.372h21.372V9.13H10.26zm20.537 18.539h-19.7V9.965h19.7v17.704zm-14.881-5.935c-.526 2.22-.298 3.983.749 4.58.255.143.544.215.836.21.977 0 2.21-.681 3.455-1.86 1.242 1.17 2.472 1.848 3.447 1.848.298.005.591-.069.85-.214 1.04-.598 1.255-2.353.738-4.552 2.172-.651 3.585-1.712 3.587-2.911.002-1.2-1.42-2.276-3.603-2.93.525-2.217.296-3.983-.75-4.58a1.673 1.673 0 00-.838-.21c-.975 0-2.207.681-3.452 1.86-1.245-1.17-2.474-1.847-3.448-1.847a1.656 1.656 0 00-.85.213c-1.04.599-1.256 2.354-.738 4.56-2.173.65-3.585 1.712-3.589 2.912-.003 1.202 1.423 2.266 3.607 2.921h-.002zm4.238 2.537c-1.434 1.283-2.33 1.42-2.651 1.42a.822.822 0 01-.424-.102c-.5-.286-.7-1.292-.54-2.626.04-.34.099-.678.175-1.012.725.167 1.46.287 2.202.36.44.62.923 1.21 1.442 1.765l-.204.195zm4.34-6.459a24.446 24.446 0 00-.434-.79c-.152-.264-.315-.525-.476-.785.476.066.936.151 1.372.253-.128.433-.282.875-.46 1.322h-.002zm.476 3.326c-.458.106-.92.191-1.386.254.328-.517.633-1.05.914-1.595.178.442.335.893.469 1.35l.003-.009zm-.912-2.337a19.746 19.746 0 01-1.55 2.708c-1.042.081-2.09.08-3.132-.003a19.614 19.614 0 01-1.554-2.692c.222-.468.46-.927.716-1.377.26-.455.54-.899.835-1.332a20.326 20.326 0 013.133.003c.29.424.568.876.83 1.323.263.446.507.922.724 1.379l-.002-.008zm-5.744 2.605c-.461-.066-.92-.15-1.373-.255.13-.43.286-.875.464-1.322.136.262.282.525.433.79.15.264.3.523.476.787zm-.488-4.377c-.153.263-.297.525-.432.792a17.626 17.626 0 01-.48-1.334c.442-.103.906-.19 1.387-.256-.163.26-.318.527-.475.798zm3.13 6.452c-.315-.336-.626-.7-.93-1.09.305.013.611.02.917.02.31 0 .627 0 .934-.019-.291.376-.599.74-.922 1.089zm3.883 2.101a.845.845 0 01-.434.104c-.32 0-1.226-.14-2.654-1.419l-.206-.188c.514-.55.99-1.136 1.427-1.75a16.988 16.988 0 002.217-.361c.077.34.138.672.175.993.175 1.32-.026 2.328-.525 2.614v.007zm.925-8.87c.329.101.652.218.969.35 1.241.526 2.014 1.2 2.012 1.776-.002.576-.772 1.254-2.015 1.77-.3.123-.617.236-.953.338a17.24 17.24 0 00-.8-2.126c.308-.687.571-1.393.787-2.114v.007zm-4.027-3.342c1.434-1.283 2.33-1.421 2.648-1.421a.828.828 0 01.424.101c.5.286.7 1.292.54 2.626-.04.341-.098.68-.174 1.014a17.09 17.09 0 00-2.203-.362 17.227 17.227 0 00-1.442-1.765c.066-.072.137-.137.208-.2l-.001.007zm-.797.781c.315.336.625.7.927 1.091-.305-.013-.61-.02-.915-.021-.31 0-.626 0-.933.021.29-.378.597-.742.92-1.09zm-3.883-2.101a.852.852 0 01.432-.098 2.3 2.3 0 01.909.23 6.838 6.838 0 011.75 1.186l.206.188a17.189 17.189 0 00-1.43 1.75c-.745.073-1.484.194-2.214.362a8.895 8.895 0 01-.175-.993c-.182-1.322.028-2.33.52-2.618l.002-.007zm-1.894 4.988c.311-.129.629-.242.952-.34.218.726.486 1.436.798 2.126-.307.682-.57 1.384-.786 2.1-.329-.1-.652-.216-.97-.35-1.243-.524-2.013-1.199-2.013-1.774 0-.576.777-1.245 2.018-1.762zm5.777.175a1.608 1.608 0 101.605 1.609 1.605 1.605 0 00-1.605-1.618v.01zm0 0a1.608 1.608 0 101.605 1.609 1.605 1.605 0 00-1.605-1.618v.01zm0 0a1.608 1.608 0 101.605 1.609 1.605 1.605 0 00-1.605-1.618v.01zm8.64 1.618c0-1.206-1.42-2.276-3.603-2.929.525-2.218.296-3.983-.75-4.58a1.673 1.673 0 00-.838-.21c-.975 0-2.208.68-3.453 1.86-1.244-1.17-2.473-1.848-3.447-1.848a1.657 1.657 0 00-.85.214c-1.04.598-1.256 2.353-.738 4.56-2.173.65-3.586 1.711-3.59 2.912-.003 1.201 1.423 2.276 3.606 2.928-.525 2.219-.298 3.983.75 4.58.254.142.544.215.836.21.977 0 2.21-.681 3.454-1.86 1.243 1.17 2.473 1.847 3.448 1.847.297.006.59-.068.85-.213 1.04-.599 1.255-2.354.738-4.552 2.172-.662 3.585-1.724 3.587-2.923v.004zm-7.84-5.467c1.433-1.284 2.329-1.422 2.647-1.422a.828.828 0 01.424.102c.501.285.7 1.292.541 2.626-.04.34-.099.679-.175 1.014a17.111 17.111 0 00-2.202-.363 17.227 17.227 0 00-1.443-1.764c.067-.067.136-.13.207-.193zM17.4 19.82c.135.263.28.525.43.79.152.264.31.531.484.796a16.43 16.43 0 01-1.372-.256c.122-.444.278-.882.456-1.33h.001zm-.486-3.334c.443-.103.907-.188 1.388-.255-.175.259-.325.525-.483.803-.157.279-.296.525-.431.792-.173-.441-.332-.888-.474-1.34zm.912 2.336c.222-.468.46-.927.716-1.376.261-.455.54-.9.835-1.333a20.33 20.33 0 013.133.003c.29.425.568.876.83 1.323.263.446.505.913.722 1.37a19.744 19.744 0 01-1.55 2.709c-1.042.08-2.09.08-3.132-.004-.295-.429-.573-.87-.833-1.321a20.544 20.544 0 01-.714-1.37h-.007v-.002zm5.753-2.586c.476.067.937.152 1.372.254-.134.447-.288.888-.462 1.322a25.5 25.5 0 00-.903-1.576h-.007zm.483 4.363c.15-.265.294-.53.431-.793.175.455.35.903.473 1.341-.459.106-.921.19-1.387.253.17-.259.332-.526.49-.801h-.007zm-3.122-6.449c.315.336.625.7.927 1.091-.305-.013-.61-.02-.915-.021-.31 0-.626 0-.933.021.29-.378.597-.742.92-1.09zm-3.883-2.101a.852.852 0 01.432-.098 2.3 2.3 0 01.909.23 6.838 6.838 0 011.75 1.186l.206.188a17.189 17.189 0 00-1.43 1.75c-.745.073-1.484.194-2.214.362a8.895 8.895 0 01-.175-.993c-.182-1.322.028-2.33.52-2.618l.002-.007zm-.927 8.877c-.328-.1-.652-.218-.97-.35-1.242-.525-2.013-1.2-2.013-1.776 0-.576.774-1.246 2.016-1.763.311-.129.629-.242.952-.34.218.726.486 1.436.798 2.126a17.302 17.302 0 00-.783 2.103zm4.027 3.344c-1.434 1.283-2.33 1.42-2.65 1.42a.822.822 0 01-.424-.102c-.5-.286-.7-1.292-.54-2.626.04-.34.098-.678.174-1.012.726.167 1.461.287 2.202.36.441.62.923 1.21 1.443 1.765l-.204.195zm.8-.79a15.73 15.73 0 01-.93-1.09c.306.013.612.02.918.02.31 0 .627 0 .933-.019-.303.389-.61.753-.922 1.089h.001zm3.884 2.101a.845.845 0 01-.434.104c-.32 0-1.226-.14-2.654-1.419l-.206-.188c.514-.55.99-1.136 1.427-1.75a16.97 16.97 0 002.217-.361c.077.34.138.672.175.993.173 1.32-.028 2.328-.527 2.614l.002.007zm1.89-4.98a10.8 10.8 0 01-.952.34 17.233 17.233 0 00-.8-2.127c.308-.682.57-1.384.786-2.1.33.1.652.216.97.35 1.241.524 2.013 1.199 2.012 1.775-.002.576-.774 1.239-2.017 1.756l.001.007zm-5.791-.178a1.607 1.607 0 10.003-3.214 1.607 1.607 0 00-.003 3.214zM8.804 29.966v-19.38l-.84.841v19.374h21.369l.837-.835H8.804z" fill="#09D3AC"></path>
            </svg>
            </span>
        </a>
        <a class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" href="#">
            <span class="my-6 grid h-24 w-24 place-items-center">
            <svg class="mx-auto" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.397 26.388c.213 2.733.213 4.014.213 5.412h-6.322c0-.305.005-.583.01-.866.018-.878.036-1.794-.107-3.643-.188-2.708-1.354-3.31-3.497-3.31H9.75v-4.926h10.244c2.708 0 4.063-.823 4.063-3.005 0-1.917-1.355-3.08-4.063-3.08H9.75V8.15h11.373c6.13 0 9.177 2.896 9.177 7.521 0 3.46-2.144 5.716-5.04 6.092 2.445.489 3.874 1.88 4.137 4.625z" fill="#121212"></path>
                <path d="M9.75 31.8v-3.672h6.685c1.116 0 1.359.828 1.359 1.322v2.35H9.75z" fill="#121212"></path>
            </svg>
            </span>
        </a>
        <a class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" href="#">
            <span class="my-6 grid h-24 w-24 place-items-center">
            <svg class="mx-auto" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.881 11.61L20.886 31.563a.593.593 0 01-1.04.004L8.633 11.611c-.251-.446.125-.987.624-.897l11.007 1.997a.59.59 0 00.212 0l10.777-1.994c.497-.092.875.445.628.893z" fill="url(#vite_svg__paint0_linear_41_6732)"></path>
                <path d="M25.506 8.096l-8.137 1.618a.302.302 0 00-.241.28l-.5 8.578a.3.3 0 00.365.314l2.265-.531c.212-.05.404.14.36.356l-.673 3.345a.3.3 0 00.38.35l1.399-.43a.3.3 0 01.38.35l-1.07 5.255c-.067.328.364.507.543.226l.12-.189 6.63-13.428c.111-.225-.08-.481-.323-.433l-2.332.456a.301.301 0 01-.344-.381l1.522-5.355a.301.301 0 00-.345-.381z" fill="url(#vite_svg__paint1_linear_41_6732)"></path>
                <defs>
                <linearGradient id="vite_svg__paint0_linear_41_6732" x1="8.359" y1="10.001" x2="22.306" y2="28.665" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#41D1FF"></stop>
                    <stop offset="1" stop-color="#BD34FE"></stop>
                </linearGradient>
                <linearGradient id="vite_svg__paint1_linear_41_6732" x1="19.631" y1="8.535" x2="22.178" y2="25.757" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFEA83"></stop>
                    <stop offset="0.083" stop-color="#FFDD35"></stop>
                    <stop offset="1" stop-color="#FFA800"></stop>
                </linearGradient>
                </defs>
            </svg>
            </span>
        </a>
        <a class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" href="#">
            <span class="my-6 grid h-24 w-24 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 1280 1280" fill="none" class="mx-auto">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M815.039 94.6439C824.758 106.709 829.714 122.99 839.626 155.553L1056.17 866.901C976.107 825.368 889.072 795.413 797.281 779.252L656.29 302.798C653.983 295.002 646.822 289.654 638.693 289.654C630.542 289.654 623.368 295.03 621.08 302.853L481.795 779.011C389.579 795.1 302.146 825.109 221.741 866.793L439.347 155.388L439.348 155.388C449.291 122.882 454.262 106.629 463.982 94.5853C472.562 83.9531 483.723 75.6958 496.4 70.6002C510.76 64.8284 527.756 64.8284 561.749 64.8284H717.174C751.212 64.8284 768.23 64.8284 782.603 70.6123C795.292 75.7184 806.459 83.9923 815.039 94.6439Z" fill="url(#paint0_linear_709_110)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z" fill="#FF5D01"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z" fill="url(#paint1_linear_709_110)"></path>
                <defs>
                <linearGradient id="paint0_linear_709_110" x1="882.997" y1="27.1132" x2="638.955" y2="866.902" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#000014"></stop>
                    <stop offset="1" stop-color="#150426"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear_709_110" x1="1001.68" y1="652.45" x2="790.326" y2="1094.91" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF1639"></stop>
                    <stop offset="1" stop-color="#FF1639" stop-opacity="0"></stop>
                </linearGradient>
                </defs>
            </svg>
            </span>
        </a>
        <a class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" href="#">
            <span class="my-6 grid h-24 w-24 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 28 28" focusable="false">
                <title>Gatsby</title>
                <circle cx="14" cy="14" r="14" fill="#639"></circle>
                <path fill="#fff" d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"></path>
            </svg>
            </span>
        </a>
        </div>

        <div class="w-full pt-5 px-4 mb-8 mx-auto text-center">
            <div class="text-sm text-gray-700 py-1">
                Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/react/sidebar?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
            </div>
        </div>
    </div>
</div>
      <div class="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
          <div class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
            <div>
              <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Projects</h6>
              <p class="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
                <strong>30 done</strong> this month
              </p>
            </div>
            <button aria-expanded="false" aria-haspopup="menu" id=":r5:" class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
              <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currenColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div class="p-6 overflow-x-scroll px-0 pt-0 pb-2">
            <table class="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">companies</p>
                  </th>
                  <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">budget</p>
                  </th>
                  <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">completion</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Material XD Version</p>
                    </div>
                  </td>
                  
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$14,000</p>
                  </td>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <div class="w-10/12">
                      <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                      <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-3/5"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add Progress Track</p>
                    </div>
                  </td>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$3,000</p>
                  </td>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <div class="w-10/12">
                      <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">10%</p>
                      <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-10/100"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Fix Platform Errors</p>
                    </div>
                  </td>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">Not set</p>
                  </td>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <div class="w-10/12">
                      <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                      <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div class="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white w-full"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Launch our Mobile App</p>
                    </div>
                  </td>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$20,500</p>
                  </td>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <div class="w-10/12">
                      <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                      <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div class="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white w-full"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add the New Pricing Page</p>
                    </div>
                  </td>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$500</p>
                  </td>
                  <td class="py-3 px-5 border-b border-blue-gray-50">
                    <div class="w-10/12">
                      <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">25%</p>
                      <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-3/12"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="text-blue-gray-600">
      <footer class="py-2">
        <div class="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
          <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">© 2023, made with <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="-mt-0.5 inline-block h-3.5 w-3.5">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg> by <a href="https://www.creative-tim.com" target="_blank" class="transition-colors hover:text-blue-500">Creative Tim</a> for a better web. </p>
          <ul class="flex items-center gap-4">
            <li>
              <a href="https://www.creative-tim.com" target="_blank" class="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500">Creative Tim</a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/presentation" target="_blank" class="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500">About Us</a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/blog" target="_blank" class="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500">Blog</a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/license" target="_blank" class="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500">License</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</div>


      

</div>
    );
  }
}

export default Adminpage;
