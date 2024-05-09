import React, { useState } from 'react';  
import axios from 'axios'; // Import Axios library  
import { Link, Navigate } from 'react-router-dom';  
  
const Login = () => {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [redirectUrl, setRedirectUrl] = useState('');  
  const [error, setError] = useState(null);  
  const [showModal, setShowModal] = useState(false); // State for modal visibility 
 
  const handleInputChange = (event) => {  
    const { name, value } = event.target;  
    if (name === 'email') {  
      setEmail(value);  
    } else if (name === 'password') {  
      setPassword(value);  
    }  
  };  
 
  const handleSubmit = async (event) => {  
    event.preventDefault();  
    try {  
      const response = await axios.post('http://localhost:8000/login/', {  
        email: email,  
        password: password  
      });  
       
      const rsp = response.data.user;  
      const rsp1=response.data.token;  
      console.log(rsp1)  
      console.log(rsp.id,"djjhd");  
        
      console.log(rsp.is_superuser);  
      sessionStorage.setItem('token', rsp1.token);  
      localStorage.setItem("useId",rsp.id);  
      localStorage.setItem("first_name",rsp.first_nmae);  
      localStorage.setItem("last_name",rsp.last_nmae);  
      localStorage.setItem('token',rsp1.token);  
      localStorage.setItem("email",rsp.email);  
  
      // Ensure response and response.data exist before accessing data  
      if(rsp.is_superuser){  
        console.log('noo');  
        setRedirectUrl('/adminpage');  
        console.log('yess');  
  
      }  
       else if(rsp.is_staff) {  
        // Handle unexpected response structure  
          
        setRedirectUrl('/assistant/');  
      }else{  
        setRedirectUrl('/Fpassenger/pass');  
      }  
    } catch (error) {  
      // Handle error here, e.g., show error message to user  
      setError(error.response ? error.response.data : error.message);  
      setShowModal(true); // Show modal on error 
    }  
  };  
  
  return (  
    <>  
      <section className="bg-gray-20">  
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">  
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-blue-300 ">  
            <img className="w-18 h-12 mr-4" src="https://cdn.pixabay.com/photo/2014/04/03/11/55/bus-312564_640.png" alt="logo" />  
            skybus  
          </a>  
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">  
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">  
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">  
                Sign in to your account  
              </h1>  
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>  
                <div>  
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>  
                  <input type="email" name="email" id="email" value={email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />  
                </div>  
                <div>  
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>  
                  <input type="password" name="password" id="password" value={password} onChange={handleInputChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />  
                </div><div className="flex items-center justify-between">  
                  <div className="flex items-start">  
                    <div className="flex items-centerh-5">  
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />  
                    </div>  
                    <div className="ml-3 text-sm">  
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>  
                    </div>  
                  </div>  
                  <a className="text-sm font-medium text-primary-600 hover:underline white:text-primary-500"><Link to= "/forgot">Forgot password?</Link></a>  
                </div>  
                <button type="submit" className="w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><Link to="">sign in</Link></button>  
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">  
                  Don’t have an account yet? <a className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/components/signup">Signup</Link></a>  
                </p>  
                {redirectUrl && <Navigate to={redirectUrl} />}  
              </form>  
            </div>  
          </div>  
        </div>  
      </section>  
      {/* Modal */} 
      {showModal && ( 
        <div className="fixed z-10 inset-0 overflow-y-auto"> 
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"> 
            <div className="fixed inset-0 transition-opacity" aria-hidden="true"> 
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div> 
            </div> 
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span> 
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"> 
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"> 
                <div className="sm:flex sm:items-start"> 
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"> 
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Error</h3> 
                    <div className="mt-2"> 
                      <p className="text-sm text-gray-500">{error.detail}</p> 
                    </div> 
                  </div> 
                </div> 
              </div> 
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"> 
                <button onClick={() => setShowModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> 
                  Close 
                </button> 
              </div> 
            </div> 
          </div> 
        </div> 
      )} 
    </> 
  );  
};  
  
export default Login;