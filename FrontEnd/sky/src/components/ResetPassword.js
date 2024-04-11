import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: '',
      message: '',
      error: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { newPassword, confirmPassword } = this.state;
    if (newPassword !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }
    try {
      console.log(this.props);
      const { uid, token } = this.props.match.params;
      console.log('minte'); // Get the token from the URL params
      const response = await axios.post(`http://localhost:8000/reset-password/${token}/`, {
        newPassword
      });
      console.log(response);
      this.setState({ message: response.data.message, error: '' });
    } catch (error) {
      this.setState({ message: '', error: 'Error resetting password' });
    }
  };

  render() {
    return (
      <div>
        <h2>Reset Password</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={this.state.newPassword}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
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

export default ResetPassword;
