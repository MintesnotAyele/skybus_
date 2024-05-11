import React, { Component } from 'react';
import axios from 'axios';

class ApproveCancel extends Component {
    state = {
        cancelRequests: [],
        idToDelete: ''
    };

    componentDidMount() {
        this.fetchCancelRequests();
    }

    fetchCancelRequests = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/canclation/');
            response.data.bookingid // Replace with your API endpoint
            this.setState({ cancelRequests: response.data });
            console.log(response.data.length);
            localStorage.removeItem('cancle');
            localStorage.setItem('cancle',response.data.length);

        } catch (error) {
            console.error('Error fetching cancel requests:', error);
        }
    };
    handlDicline=async(id,email)=> {
        try {
            await axios.delete(`http://localhost:8000/cancel/${id}/`);
            await axios.post('http://localhost:8000/sendEmail/', { email: email });
            this.setState(prevState =>({
              cancelRequests :prevState.cancelRequests.filter(request => request.id !== id ),
              idToDelete:'' 
            }));
            console.log('Deletion successful without aproval');
        } catch (error) {
            
        }
    }
    handleDelete = async (id,bokingid,scheduleId,price,useId,email) => {
        try {
            const requestData = {
                balance: price-50
              };
            axios.put(`http://localhost:8000/api/profile/${useId}/`,requestData )
            .then(response => {
              console.log('profile updated successfully:',response.data);
              // Optionally, you can update the UI or show a success message here
            })
            await axios.delete(`http://localhost:8000/cancel/${id}/`);
            await axios.post('http://localhost:8000/sendEmailA/', { email: email });
            this.setState(prevState => ({
                cancelRequests: prevState.cancelRequests.filter(request => request.id !== id),
                idToDelete: ''
            }));
            console.log('Deletion successful');
        } catch (error) {
            console.error('Error deleting:', error);
        }
        try {
            await axios.delete(`http://localhost:8000/cancelbook/${bokingid}/`);
            await axios.post('http://localhost:8000/increment-seats/', { schedule_id: scheduleId });
            this.setState(prevState => ({
                cancelRequests: prevState.cancelRequests.filter(request => request.id !== id),
                idToDelete: ''
            }));
            console.log('Deletion successful');
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };

    render() {
        const { cancelRequests, idToDelete } = this.state;
        return (
            <div>
                <h2 className="text-2xl font-bold mb-4">Cancel Requests</h2>
                <table className="w-full bg-white shadow-md rounded">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">Bookingid</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Time</th>
                            <th className="border px-4 py-2">Action</th>
                            <th className="border px-4 py-2">Action2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cancelRequests.map(request => (
                            <tr key={request.id}>
                                <td className="border px-4 py-2">{request.id}</td>
                                <td className="border px-4 py-2">{request.bookingid.booking_id}</td>
                                <td className="border px-4 py-2">{request.bookingid.customer_id.email}</td>
                                <td className="border px-4 py-2">{request.Requested_time}</td>
                                <td>
                                    <button onClick={() => this.handleDelete(request.id, request.bookingid.booking_id,request.bookingid.schedule.id,request.bookingid.schedule.price,request.bookingid.customer_id.id,request.bookingid.customer_id.email)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Approve</button>
                                </td>
                                <td>
                                    <button onClick={() => this.handlDicline(request.id,request.bookingid.customer_id.email)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Declien</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ApproveCancel;

