import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import RequireAuth from './RequireAuth';
const Assistant = () => {
 
  
    const email=localStorage.getItem("email");
  const first_name=localStorage.getItem("first_name");
  const last_name=localStorage.getItem("last_name");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); // clear all local storage
    localStorage.removeItem("email"); // clear all local storage
    localStorage.removeItem("first_name"); // clear all local storage
    localStorage.removeItem("last_name"); // clear all local storage
    localStorage.removeItem("useId"); // clear all local storage
    navigate('/'); // navigate to homepage
  };
    return (
      <div>
       
<div class="flex flex-col h-screen bg-gray-700">

  
    <div class="bg-blue-100 text-white shadow w-full p-2 flex items-center justify-between">
        <div class="flex items-center">
            <div class="flex items-center"> 
                <img src="https://cdn.pixabay.com/photo/2014/04/03/11/55/bus-312564_640.png" alt="Logo" class="w-28 h-18 mr-2"/>
                <h2 class="font-bold text-xl text-blue-500 ">wolkite bus station Assistant page </h2>
            </div>
            <div class="md:hidden flex items-center">
                <button id="menuBtn">
                    <i class="fas fa-bars text-gray-500 text-lg"></i> 
                </button>
            </div>
        </div>

        <div class="space-x-5">
            <button>
                <i class="fas fa-bell text-gray-500 text-lg"></i>
            </button>
          
            <button>
                <i class="fas fa-user text-gray-500 text-lg"></i>
            </button>
        </div>
    </div>

    <div class="flex-1 flex flex-wrap bg-orange-100">
      
     
        <div class="p-2 bg-slate-800 w-full h-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
            <nav>

            <div class="flex flex-col items-center mt-6 -mx-2">
        <img class="object-cover w-24 h-24 mx-2 rounded-full" 
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLWljb240LWppcjIwNjItcG9yLWwtam9iNzg4LnBuZw.png" alt="avatar"/>
        <h4 class="mx-2 mt-2 font-medium text-blue-200 dark:text-gray-200">{first_name} {last_name}</h4>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{email}</p>
    </div>

              
                

               
                <a class=" text-white block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                
                <Link to="/assis/viewschedule"><i class="fas fa-file-alt mr-2 text-white"></i>View achedule</Link>
                </a>

                <a class=" text-white block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <Link to="/admins/report"> <i class="fas fa-users mr-2 text-white"></i>view report</Link>
                </a>
                
                <a class=" text-white block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                
                <Link to="/admins/bookedticket1">  <i class="fas fa-exchange-alt mr-2 text-white"></i>booked</Link>
                
                </a>
                <a class="flex items-center px-2 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href="#">
            <svg class="w-[41px] h-[41px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
</svg>


                <span class="mx-4 font-medium" onClick={handleLogout}>sign out</span>
            </a>
            </nav>

        
            <a class="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" href="#">
                <i class="fas fa-sign-out-alt mr-2"></i>search
            </a>

            <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

           
            <p class="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright WCSLAT@2023</p>

        </div>

    
        <div class="flex-1 p-4 w-full md:w-1/2">
        
            <div class="relative max-w-md w-full">
                <div class="absolute top-1 left-2 inline-flex items-center p-2">
                    <i class="fas fa-search text-gray-400"></i>
                </div>
                <input class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Search..."/>
            </div>

            <div class="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
              <Link to="/assis/viewschedule">
                <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 class="text-gray-500 text-lg font-semibold pb-1">view schedule</h2>
                    <div class="my-1"></div> 
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                    <div class="chart-container relative h-150 w-full">
                
                        <canvas id="usersChart"></canvas>
                    </div>
                </div>
                </Link>

                <Link to="/admins/report">
                <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 class="text-gray-500 text-lg font-semibold pb-1 ">view report</h2>
                    <div class="my-1"></div> 
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                    <div class="chart-container relative h-150 w-full">
                    
                        <canvas id="commercesChart"></canvas>
                    </div>
                </div>
                </Link>
                <Link to="/admins/bookedticket1">
                <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 class="text-gray-500 text-lg font-semibold pb-1 ">view boked ticket</h2>
                    <div class="my-1"></div> 
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                    <div class="chart-container relative h-150 w-full">
                    
                        <canvas id="commercesChart"></canvas>
                    </div>
                </div>
                </Link>
            </div>

            
            <div class="mt-8 bg-white p-4 shadow rounded-lg">
                <h2 class="text-gray-500 text-lg font-semibold pb-4">All user</h2>
                <div class="my-1"></div> 
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                <table class="w-full table-auto text-sm">
                    <thead>
                        <tr class="text-sm leading-normal">
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">
                              <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10"/></td>
                            <td class="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                            <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                        </tr>
                  
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">
                              <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10"/></td>
                            <td class="py-2 px-4 border-b border-grey-light">María Gómez</td>
                            <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                        </tr>
                        
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">
                              <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10"/></td>
                            <td class="py-2 px-4 border-b border-grey-light">Carlos López</td>
                            <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">
                              <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10"/></td>
                            <td class="py-2 px-4 border-b border-grey-light">Laura Torres</td>
                            <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">
                              <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10"/></td>
                            <td class="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                            <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                        </tr>
                    </tbody>
                </table>
               
                <div class="text-right mt-4">
                    <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                        Ver más
                    </button>
                </div>
            </div>

           
            <div class="mt-8 bg-white p-4 shadow rounded-lg">
                <div class="bg-white p-4 rounded-md mt-4">
                    <h2 class="text-gray-500 text-lg font-semibold pb-4">Transacciones</h2>
                    <div class="my-1"></div> 
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                    <table class="w-full table-auto text-sm">
                        <thead>
                            <tr class="text-sm leading-normal">
                                <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                                <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                                <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                                <td class="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                                <td class="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                            </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">Pedro Hernández</td>
                            <td class="py-2 px-4 border-b border-grey-light">02/08/2023</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">$1950</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">Sara Ramírez</td>
                            <td class="py-2 px-4 border-b border-grey-light">03/08/2023</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">$1850</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">Daniel Torres</td>
                            <td class="py-2 px-4 border-b border-grey-light">04/08/2023</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">$2300</td>
                        </tr>
                        </tbody>
                    </table>
              
                    <div class="text-right mt-4">
  <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
    Ver más
  </button>
</div>
                </div>
            </div>
        </div>
    </div>
</div>


   


      </div>
    );
  };


export default RequireAuth(Assistant)