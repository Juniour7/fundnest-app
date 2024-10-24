import React, {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { Link } from 'react-router-dom';

import instance from '../../services/api';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await instance.post('/request-password-reset/', {email});
                
            if (response.status === 200) {
                // Assuming a successful status code of 200
                alert("Check your email for the password reset link.");
            } else {
                // Handle other success cases if needed
                alert("Something went wrong, please check your email and try again.");
            }
        } catch (error) {
             // Handle network errors or server errors
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert(`Error: ${error.response.data.message || "Please check your email and try again."}`);
        } else if (error.request) {
            // The request was made but no response was received
            alert("Network error: No response received. Please check your connection and try again.");
        } else {
            // Something happened in setting up the request that triggered an Error
            alert(`Error: ${error.message}`);
        }
        }
    };

  return (
    <>  
        <Helmet>
            <title>Forgot Password | Fund Nest</title>
        </Helmet>
        <section className='bg-[#F3FAFB] flex flex-col justify-center items-center h-screen w-full'>
            <div className='bg-white shadow-md w-[90%] md:w-[50%] p-3 rounded-md flex flex-col items-center justify-center '>
                <div className='w-[190px] h-[150px]'>
                    <Link to="/">
                        <img src={require('../../Assets/Logo/FUND NEST LOGO-02.png')} alt='logo' className='w-full h-full' />
                    </Link>
                </div>
                <div className='text-center w-full'>
                    <h1 className='text-xl font-semibold'>Forgot Password ?</h1>
                    <p className='text-base mt-[20px]'>Enter your email address</p>
                    {message && <p>{message}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='w-full my-[20px]'>
                        <form onSubmit={handleSubmit} className='w-full'>
                            <div>
                                <input 
                                    type='email' 
                                    value={email}
                                    placeholder='email@gmail.com' 
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-[80%] md:w-[60%] block outline-[#00AEEF] py-2 px-3 mx-auto border border-gray-500 rounded-md' 
                                    required 
                                />
                                <input type='submit' value='Submit' className='bg-[#00AEEF] text-white w-[30%] mt-[20px] py-2 text-xl rounded-md hover:bg-black transition-colors duration-300' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ForgotPassword;
