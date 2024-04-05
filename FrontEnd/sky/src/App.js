import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
//import Footer from './components/footer';
import Adminpage from './components/adminpage';
import Assistant from './components/assistant';
import ContactForm from './components/contactform';
import Passanger from './Fpassenger/passanger';
import Pass from './Fpassenger/pass'
import Header from './components/header';
import Busmanage from './admins/busmanage';
import Updateprice from './admins/updateprice';
import Cancelticket from './admins/cancelticket';
import Addbus from './admins/addbus';
import Style from './components/style';
import Feedback from './admins/feedback';
import Report from './admins/report';
import Availableseat from './assis/availableseat';
import Viewschedule from './assis/viewschedule';
import Bookedticket from './admins/bookedticket';


import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/login" element={<Login />} />
            <Route path="/components/signup" element={<Signup />} />
            <Route path="/passenger" element={<Passanger />} />
            <Route path="/adminpage" element={<Adminpage />} />
            <Route path="/admins/busmanage" element={<Busmanage/>}/>
            <Route path="/admins/updateprice" element={<Updateprice/>}/>
            <Route path="/admins/cancelticket" element={<Cancelticket/>}/>
            <Route path="/admins/report" element={<Report/>}/>
            <Route path="/assis/viewschedule" element={<Viewschedule/>}/>
            <Route path="/assis/availableseat" element={<Availableseat/>}/>
            <Route path="/Fpassenger/passanger" element={<Passanger/>}/>
            <Route path="/Fpassenger/pass" element={<Pass/>}/>
            <Route path="/contactform" element={<ContactForm />} />
           <Route path="/admins/bookedticket" element={<Bookedticket/>} />
          <Route path="admins/addbus" element={<Addbus/>}/>
          <Route path="admins/feedback" element={<Feedback/>}/>
            <Route path="/mystyle/style" element={<Style />} />

            
          </Routes>
          
        </div>
        <Header/>
      </Router>
    );
  }
}

export default App;