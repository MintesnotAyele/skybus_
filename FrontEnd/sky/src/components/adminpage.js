// Adminpage.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Adminpage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/admins/busmanage">Bus Manage</Link></li>
          <li><Link to="/admins/updateprice">Update Price</Link></li>
          <li><Link to="/admins/cancelticket">cancelticket</Link></li>
          
        </ul>
      </div>
    );
  }
}

export default Adminpage;
