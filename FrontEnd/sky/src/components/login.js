import React, { Component } from 'react'


 class Login extends Component {

  render() {
    return (
      <div className="form">
        <h2>Login Here</h2>
        <input type="email" name="email" placeholder="Enter Email Here" />
        <input type="password" name="password" placeholder="Enter Password Here" />
        <button className="btnn">Login</button>

        <p className="link">Don't have an account? <a href="#">Sign up</a> here</p>
        <p className="liw">follow us with</p>

        <div className="icons">
          <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
          <a href="#"><ion-icon name="logo-google"></ion-icon></a>
          <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
        </div>
      </div>
    )
  }
}

export default Login
