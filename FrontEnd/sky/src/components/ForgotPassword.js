import React, { Component } from 'react';
import axios from 'axios';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      error: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/forgot-password/', {
        email: this.state.email
      });
      this.setState({ message: response.data.message, error: '' });
    } catch (error) {
      this.setState({ message: '', error: 'User not found' });
    }
  };

  render() {
    return (
      <div>
        <h2>Forgot Password</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
        {this.state.message && <p>{this.state.message}</p>}
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

export default ForgotPassword;
