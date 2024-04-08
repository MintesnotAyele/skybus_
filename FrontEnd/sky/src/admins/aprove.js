import React, { Component } from 'react';
import axios from 'axios';

class Aprovecancle extends Component {
    state = {
        id: '' // State to store the ID entered by the user
    };

    handleChange = (event) => {
        this.setState({ id: event.target.value }); // Update state with the value entered in the text field
    };

    handleDelete = async () => {
        const { id } = this.state; // Get the ID from the state
        try {
            await axios.delete(`http://localhost:8000/cancel/${id}/`);
            // Optionally, perform any additional logic after deletion
            console.log('Deletion successful');
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };

    render() {
        const { id } = this.state;
        return (
            <div>
                <input 
                    type="text" 
                    value={id} 
                    onChange={this.handleChange} 
                    placeholder="Enter ID" 
                />
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default Aprovecancle;
