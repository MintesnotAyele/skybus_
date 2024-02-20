import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import Style from './components/style';
//import Footer from './components/footer';
import Adminpage from './components/adminpage'; 
import Assistant from './components/assistant';
import Passanger from './Fpassenger/passanger';
import ContactForm from './components/contactform';
import Header from './components/header';
import Busmanage from './admins/busmanage';
import Cancelticket from './admins/cancelticket';
import Viewschedule from './assis/viewschedule';
import Availableseat from './assis/availableseat';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<App />
  
  </React.StrictMode>
);

reportWebVitals();
