import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const Editu = () => {
  const [users, setUsers] = useState({
    email: '',
    phone: '',
    username: '',
    is_superuser: false, // Initialize to false
    is_staff: false, // Initialize to false
  });
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(`http://localhost:8000/api/Users/${id}`)
      .then(response => {
        const fetchUsers = response.data;
        setUsers({
          email: fetchUsers.email,
          phone: fetchUsers.phone_number,
          username: fetchUsers.username,
          is_superuser: fetchUsers.is_superuser, // Update is_superuser value
          is_staff: fetchUsers.is_staff, // Update is_staff value
        });
        console.log(fetchUsers.phone_number);
      })
      .catch(error => {
        console.error('Error fetching schedules:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setUsers(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value // Update value based on type
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/Users/${id}/`, users )
      .then(response => {
        console.log('User updated successfully:', response.data);
        setModalMessage('User updated successfully.');
        setModalType('success');
        setShowModal(true);
      })
      .catch(error => {
        console.error('Error updating user:', error);
        setModalMessage('Error updating user.');
        setModalType('error');
        setShowModal(true);
      });
  };

  const handleModalClose = () => {
    setShowModal(false);
    
    navigate('/userup');
  };

  return (
    <div class="min-h-screen p-6 bg-stone-400 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <h2 class="font-bold text-4xl text-slate-950">Edit User</h2>
  
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-semibold text-3xl text-slate-950 ">User Details</p>
                <p  class="font-semibold text-xl text-slate-950 ">Please edit the fields you want.</p>
              </div>
  
              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={users.email} onChange={handleChange} />
                  </div>
  
                  <div class="md:col-span-5">
                    <label for="phone">Phone</label>
                    <input type="text" name='phone' class="h-10 border mt-1 rounded px-4w-full bg-gray-50" value={users.phone} onChange={handleChange}/>
                  </div>
  
                  <div class="md:col-span-3">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={users.username} onChange={handleChange} />
                  </div>
  
                  <div class="md:col-span-2">
                    <label for="is_superuser">Is Superuser</label>
                    <input type="checkbox" name="is_superuser" id="is_superuser" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" checked={users.is_superuser} onChange={handleChange} />
                  </div>
  
                  <div class="md:col-span-2">
                    <label for="is_staff">Is Staff</label>
                    <input type="checkbox" name="is_staff" id="is_staff" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" checked={users.is_staff} onChange={handleChange} />
                  </div>
  
                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <a  class="md:absolute bottom-0 right-0 p-4 float-right">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58sP10nf1CD0Ct4UOoQv6uhNptrDJGCcrMA&s" alt="Buy Me A Coffee" class="transition-all rounded-full w-26  hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
        </a>
      </div>

      {showModal && (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${modalType === 'error' ? 'bg-red-500' : 'bg-green-500'} flex items-center justify-center`}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="text-center">
              <h2 className={`text-xl font-bold mb-2 ${modalType === 'error' ? 'text-red-800' : 'text-green-800'}`}>{modalType === 'error' ? 'Error' : 'Success'}</h2>
              <p className="text-gray-700">{modalMessage}</p>
            </div>
            <div className="mt-5 text-right"><button
                className="bg-gray-500 text-white py-2 px-4 rounded"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editu;