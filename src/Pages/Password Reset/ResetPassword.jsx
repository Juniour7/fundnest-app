import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const ResetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isTokenValid, setIsTokenValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Extract query parameters from URL
    const queryParams = new URLSearchParams(location.search);
    const uidb64 = queryParams.get('uidb64');
    const token = queryParams.get('token');

    useEffect(() => {
        if (!uidb64 || !token) {
            setError('Invalid reset link.');
            return;
        }

        // Verify the token
        axios.get(`/api/reset-password/${uidb64}/${token}/`)
            .then(response => {
                if (response.status === 200) {
                    setIsTokenValid(true);
                } else {
                    setError('Invalid or expired token.');
                }
            })
            .catch(err => {
                setError('Error verifying token.');
            });
    }, [uidb64, token]);

const handleSubmit = (e) => {
    e.preventDefault();

    if (!isTokenValid) {
        setError('Token is not valid.');
        return;
    }

    axios.post(`/api/reset-password/${uidb64}/${token}/`, { password })
        .then(response => {
            if (response.status === 200) {
                setMessage('Password has been reset successfully.');
                navigate('/sign-in');
            }
        })
        .catch(err => {
            console.error('Password reset failed:', err.response || err.message);
            setError(err.response?.data?.error || 'Failed to reset password.');
        });
};


    return (
        <>
            <Helmet>
                <title>Reset Password | Fund Nest</title>
            </Helmet>
            <section className='bg-[#F3FAFB] flex flex-col justify-center items-center h-screen w-full'>
                <div className='bg-white shadow-md w-[90%] md:w-[50%] p-3 rounded-md flex flex-col items-center justify-center'>
                    <div className='w-[190px] h-[150px]'>
                        <img src={require('../../Assets/Logo/FUND NEST LOGO-02.png')} alt='logo' className='w-full h-full' />
                    </div>
                    <div className='text-center w-full'>
                        <p className='text-base mt-[20px]'>Enter your new password</p>
                        <div className='w-full my-[20px]'>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-center'>
                                <div className='relative w-[80%] md:w-[60%]'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='New Password'
                                        value={password}
                                        pattern="(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
                                        title="Password must be at least 8 characters long and include at least one digit and one symbol."
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='w-full block outline-[#00AEEF] py-2 px-3 mx-auto border border-gray-500 rounded-md'
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.28.953-.682 1.846-1.18 2.645M15 12a3 3 0 00-6 0m12 0c-.192.601-.444 1.176-.754 1.707M15 12a3 3 0 00-3 3m0-6a3 3 0 013 3m-3 3c-1.38 0-2.628-.56-3.514-1.486m7.028-2.514A4.978 4.978 0 0012 7c-1.378 0-2.627.56-3.513 1.486m7.026 5.028c.804-.5 1.514-1.24 1.953-2.114M15 12a3 3 0 00-3 3m0-6a3 3 0 00-3 3m6 0a3 3 0 00-3 3m-6 0a4.978 4.978 0 01-1.953-2.114m0 0a4.978 4.978 0 011.953-2.114m0 0C7.627 9.56 8.877 9 10.257 9c1.38 0 2.627.56 3.513 1.486m0 5.028C12.628 15.44 11.38 16 10 16c-1.38 0-2.628-.56-3.514-1.486m7.028-2.514A4.978 4.978 0 0012 7c-1.378 0-2.627.56-3.513 1.486m7.026 5.028c.804-.5 1.514-1.24 1.953-2.114" />
                                            </svg>
                                        ) : (
                                            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18m-2.2-1.8A9.959 9.959 0 0012 21a9.959 9.959 0 01-6.8-2.8M3 3m18 0a9.959 9.959 0 01-1.8 6.8M9 9c.828-1.172 2.172-2 3.8-2 2.208 0 4 1.792 4 4 0 1.628-.828 3-2 3.8m-6.8 0c1.172-.828 2.172-2 2.8-3.8 0-2.208-1.792-4-4-4-1.628 0-3 .828-3.8 2" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <input
                                    type='submit'
                                    value='Reset Password'
                                    className='bg-[#00AEEF] text-white w-[30%] mt-[20px] py-2 text-xl rounded-md hover:bg-black transition-colors duration-300'
                                />
                            </form>
                            {error && <p className='text-red-500 mt-2'>{error}</p>}
                            {message && <p className='text-green-500 mt-2'>{message}</p>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResetPassword;
