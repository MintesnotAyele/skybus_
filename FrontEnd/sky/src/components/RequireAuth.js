import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = (WrappedComponent) => {
  return (props) => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');

    // If token exists, render the wrapped component
    // Otherwise, display an alert and redirect to the login page
    if (token) {
      return <WrappedComponent {...props} />;
    } else {
      alert('Please login first.');
      return <Navigate to="/login" />;
    }
  };
};

export default RequireAuth;
