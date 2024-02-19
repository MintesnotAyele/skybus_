import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
//import Footer from './components/footer';
import Adminpage from './components/adminpage';
import Assistant from './components/assistant';
import ContactForm from './components/contactform';
import Passanger from './Fpassenger/passanger';
import Header from './components/header';
import Busmanage from './admins/busmanage';
import Updateprice from './admins/updateprice';
import Cancelticket from './admins/cancelticket';
import './App.css';
import Style from './components/style';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passenger" element={<Passanger />} />
            <Route path="/adminpage" element={<Adminpage />} />
            <Route path="/admins/busmanage" element={<Busmanage/>}/>
            <Route path="/admins/updateprice" element={<Updateprice/>}/>
            <Route path="/admins/cancelticket" element={<Cancelticket/>}/>
            <Route path="/contactform" element={<ContactForm />} />
          
            
            <Route path="/style" element={<Style />} />

            
          </Routes>
          
        </div>
        <Header/>
      </Router>
    );
  }
}

export default App;