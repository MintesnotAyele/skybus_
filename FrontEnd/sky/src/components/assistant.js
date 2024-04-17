import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import RequireAuth from './RequireAuth';
 class Assistant extends Component {
  render() {
    return (
      <div><h1>asssissss</h1>
      <h1>asssissss</h1>
      <h1>asssissss</h1>
      view booked ticket

        <ul><li><Link to="/assis/viewschedule">viewschedule</Link></li>
          <li><Link to="/assis/availableseat">available seat</Link></li>
        </ul>
      </div>
    )
  }
}

export default RequireAuth(Assistant)