import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { uid, token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post(`http://localhost:8000/reset-password/${uid}/${token}/`, {
                new_password: newPassword
            });
            setMessage(response.data.message);
            setError('');
        } catch (error) {
            setMessage('');
            setError('Error resetting password');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default ResetPassword;
