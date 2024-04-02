import React, { Component } from 'react';
import axios from 'axios'; // Import Axios library
import {Link, Navigate } from 'react-router-dom';

class Login extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      redirectUrl: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login/', {
        email: this.state.email,
        password: this.state.password
      });
     
     const  rsp = response.data.user;
      console.log(rsp);
      console.log(rsp.is_superuser);
      // Ensure response and response.data exist before accessing data
      if(rsp.is_superuser){
        console.log('noo');
        this.setState({ redirectUrl: '/adminpage' });
        console.log('yess');
      }
       else if(rsp.is_staff) {
        // Handle unexpected response structure
        this.setState({  redirectUrl: '/assistant'});
      }else{
        this.setState({ redirectUrl:'/passenger'});
      }
    } catch (error) {
      // Handle error here, e.g., show error message to user
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };
  

  render() {
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
                <form className="space-y-4 md:space-y-6" onSubmit={this.handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                      </div>
                    </div>
                    <a className="text-sm font-medium text-primary-600 hover:underline white:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><Link to="/Fpassenger/passanger">sign in</Link></button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <a className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/components/signup">Signup</Link></a>
                  </p>
                  {this.state.redirectUrl && <Navigate to={this.state.redirectUrl} />}
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
