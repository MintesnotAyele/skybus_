
import React, { useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Verify = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const [redirectUrl, setRedirectUrl] = useState('');  
  const navigate = useNavigate();

  const handleVerify = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:8000/verify-email/${token}/`, {});
      setMessage(response.data.message);
      setError('');
      setLoading(false);
      setRedirectUrl('/login');  
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
        navigate('/login');
      } else {
        navigate('/login');
        setError('An unknown error occurred');
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80)' }} id="modal-id">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
            <h2 className="text-xl font-bold py-4">Are Going to Verify your email!!</h2>
            <p className="text-sm text-gray-500 px-8">Please verify your account.</p>
            {error && <p className="text-red-500">{error}</p>}
            {message && <p className="text-green-500">{message}</p>}
            {loading && <p className="text-gray-500">Loading...</p>}
          </div>
          <div className="p-6 pb-0">
            <button className="w-full px-4 py-2 mt-4 text-base font-semibold text-center text-white transition duration-200 bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={handleVerify}>
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;