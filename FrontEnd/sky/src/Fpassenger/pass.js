import React, { Component } from 'react';

class Pass extends Component {
  componentDidMount() {
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar');

    openSidebarButton.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('-translate-x-full');
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
        sidebar.classList.add('-translate-x-full');
      }
    });
  }

  componentWillUnmount() {
    const openSidebarButton = document.getElementById('open-sidebar');

    openSidebarButton.removeEventListener('click', this.handleSidebarToggle);
    document.removeEventListener('click', this.handleOutsideClick);
  }

  render() {
    return (
      <div>
        {/* Your JSX code here */}
        <div class="bg-gray-100">

<div class="h-screen flex overflow-hidden bg-gray-200">
  
    <div class="absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300"
        id="sidebar">
      
        <div class="p-4">
            <h1 class="text-2xl font-semibold">Sidebar</h1>
            <ul class="mt-4">
                <li class="mb-2"><a href="#" class="block hover:text-indigo-400">Home</a></li>
                <li class="mb-2"><a href="#" class="block hover:text-indigo-400">About</a></li>
                <li class="mb-2"><a href="#" class="block hover:text-indigo-400">Services</a></li>
                <li class="mb-2"><a href="#" class="block hover:text-indigo-400">Contact</a></li>
            </ul>
        </div>
    </div>


    <div class="flex-1 flex flex-col overflow-hidden">
      
        <div class="bg-white shadow">
            <div class="container mx-auto">
                <div class="flex justify-between items-center py-4 px-2">
                    <h1 class="text-xl font-semibold">Animated Drawer</h1>

                    <button class="text-gray-500 hover:text-gray-600" id="open-sidebar">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                </div>
            </div>
        </div>
        
        <div class="flex-1 overflow-auto p-4">
            <h1 class="text-2xl font-semibold">Welcome to our website</h1>
            <p>... Content goes here ...</p>
        </div>
    </div>
</div>  </div>
      </div>
    );
  }
}

export default Pass;