import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { MdChevronRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

//Images
import Logo from '../Assets/Logo/FUND NEST LOGO-01.png';


function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleSignInClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend.iraady.com:8000/auth/login/', { email, password });
    
      if (response.data.success) {
      
        localStorage.setItem('userEmail', email);
    localStorage.setItem('userId',response.data.user_id)
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('token', response.data.token);
        const emailDomain = email.split('@')[1];
      
         if(response.data.role==='admin'&& emailDomain === "iraady.com")
       {
        localStorage.setItem('userEmail', email);
          localStorage.setItem('adminEmail', email);
          navigate('/admin-dashboard');
        

        }
          else if(response.data.role==="user"){

            localStorage.setItem('userEmail', email);
        navigate('/user-dashboard');
           
          }

        }else { 
        navigate('/');
       
      }
    } catch (error) {
      setErrorMessage('Invalid email or password!');
      console.error('Sign-in error:', error);
    }
  };
  const handleSignUpClick = () => {
    navigate('/sign-up');
  };


  return (
    <>
      <Helmet>
        <title>Account Sign In | Fund Nest</title>
        <meta name="description" content="Sign In Form" />
      </Helmet>
      <div className='bg-[#F3FAFB] h-dvh py-[50px] flex items-center justify-center'>
        <section className="lg:flex w-[90%] md:w-[80%] m-auto rounded-md shadow-md">
          <div className='basis-[50%] hidden lg:flex rounded-tl-md rounded-bl-md bg-[#4FC0E8] text-white flex-col justify-center items-center p-4 text-center'>
            <h1 className='font-semibold text-4xl text-white'>HELLO FRIEND!</h1>
            <p className='text-[#EBE4FF] mt-[10px] w-[80%] mx-auto'>Join us in transforming dreams into reality your donation today can spark innovation, drive progress, and create lasting change in communities worldwide.</p>
            <button onClick={handleSignUpClick} className='bg-[#4FC0E8] mt-[30px] border border-[#DAA520] px-6 py-1 rounded-xl text-xl font-medium hover:bg-black hover:text-white hover:border-0 transition-all duration-300 ease-linear'>Sign Up</button>
            <Link to="/">
              <div className='flex justidy-center items-center mt-[20px] hover:text-black transition-colors duration-300 ease-linear'>
                <p className=' underline underline-offset-4'>Back To Home</p>
                <span className='text-white hover:text-black'>
                  <MdChevronRight />
                </span>
              </div>
            </Link>
          </div>

          {/* Form Container */}
          <div className='md:basis-[50%] pb-5 rounded-tr-md rounded-br-md bg-white flex flex-col justify-center items-center p-3 space-y-[30px]'>
            <div className='w-[150px] h-[120px]'>
              <Link to="/">
                <img src={Logo} alt='logo' className='w-full h-full' />
              </Link>
            </div>
            <form onSubmit={handleSignInClick} className='w-[90%] md:w-[60%] space-y-[20px]'>
              <div className="">
                <label>Email Address</label>
                <input
                  type="text"
                  placeholder="yourname@gmail.com"
                  name="email"
                  value={email}
                  className='p-2 w-full text-black rounded-md border border-gray-200'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <label>Password</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="•••••••••••"
                  name="password"
                  value={password}
                  className='p-2 w-full text-black rounded-md border border-gray-200'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex justify-center items-center text-sm leading-5"
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

              <Link to="/request-password-reset/">
                <h4 className='text-center mt-[20px] hover:text-[rgb(79,192,232)]'>Forgot Password?</h4>
              </Link>

              <div className='my-[10px] flex justify-center items-center gap-2'>
                <h4 className='text-center text-sm'>Don't have an account ?</h4>
                <button onClick={handleSignUpClick} className='text-sm text-[rgb(79,192,232)]'>Sign Up</button>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <button type="submit" className="bg-[#4FC0E8]  py-2 w-[60%] mx-auto rounded-xl text-xl text-white hover:bg-black hover:text-white">Sign in</button>
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignIn;