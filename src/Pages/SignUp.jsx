import "react-international-phone/style.css";
import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { MdChevronRight } from "react-icons/md";
import { PhoneInput } from "react-international-phone";
import { Link, useNavigate } from "react-router-dom";

// Images
import Logo from '../assets/Logo/FUND NEST LOGO-01.png';


//components
import Modal from "../Components/NewAcciuntComponent/Modal";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    organization_name: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    organization_type: '',
    organization_description: '',
    organization_website: '',
    email: '',
    password: '',
    agreeterms: false,
    mailing_list: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control the modal
  const [password, setPassword] = useState('');
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name === 'password') {
      const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
      if (value.length < 8 || !passwordPattern.test(value)) {
        setErrorMessage('Password must be at least 8 characters long and include at least one digit and one symbol.');
      } else {
        setErrorMessage('');
      }
    }
  };

  const handlePhoneChange = (phone) => {
    setFormData((prevData) => ({
      ...prevData,
      phone_number: phone,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errorMessage) {
      alert('Please fix the errors in the form.');
      return;
    }
    try {
      const response = await axios.post('https://backend.iraady.com:8000/users/', formData);
      // setSuccessMessage('User created successfully! Check your email for verification.');
      // setShowModal(false); // Show the modal upon successful sign-up
      localStorage.setItem('userEmail', formData.email);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('There was an error creating the user!');
      setSuccessMessage('');
      setShowModal(true); // Show the modal even if there's an error
      console.error('There was an error creating the user!', error);
    }
  };
  

  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate('/sign-in');
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
    navigate('/sign-in'); // Redirect to sign-in page
  };

  return (
    <>
      <Helmet>
        <title>Account Sign Up | Fund Nest</title>
        <meta name="description" content="Account Sign Up" />
      </Helmet>
      <div className='bg-[#F3FAFB] min-h-screen flex items-center justify-center py-[50px]'>
        <section className='lg:flex h-auto w-[95%] md:w-[75%] rounded-md shadow-md m-auto'>
          <div className='md:basis-[50%] bg-white rounded-tl-md rounded-bl-md flex flex-col justify-center items-center p-2 pb-4'>
            <div className='w-[150px] h-[120px]'>
              <Link to="/">
                <img src={Logo} alt='logo' className='w-full h-full' />
              </Link>
            </div>
            <form onSubmit={handleSubmit} className='w-[98%] md:w-[95%] mx-auto'>
              <div className="">
                <div className="">
                  <input
                    type="text"
                    id="organization_name"
                    name="organization_name"
                    placeholder='Organization Name *'
                    value={formData.organization_name}
                    onChange={handleInputChange}
                    required
                    autoComplete="organization"
                    className='p-2 w-full text-black border border-gray-200'
                  />

                  <div className='md:flex mt-[10px] gap-3'>
                    {/* First Name */}
                    <div className="basis-[50%] mb-3 md:mb-0">
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder='First Name *'
                        value={formData.first_name}
                        onChange={handleInputChange}
                        required
                        autoComplete="given-name"
                        className='p-2 w-full text-black border border-gray-200'
                      />
                    </div>

                    {/* Last Name */}
                    <div className="basis-[50%]">
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder='Last Name *'
                        value={formData.last_name}
                        onChange={handleInputChange}
                        required
                        autoComplete="family-name"
                        className='p-2 w-full text-black border border-gray-200'
                      />
                    </div>
                  </div>

                  <div className='md:flex mt-[5px] gap-3'>
                    {/* Phone Number */}
                    <div className="basis-[50%] mb-3 md:mb-0">
                      <PhoneInput
                        id="phone_number"
                        name="phone_number"
                        defaultCountry="rw"
                        value={formData.phone_number}
                        onChange={handlePhoneChange}
                        autoComplete="tel"
                        required
                        inputClassName='p-2 w-full text-black border border-gray-200'
                      />
                    </div>

                    {/* Email */}
                    <div className="basis-[50%]">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email Address *'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        autoComplete="email"
                        className='p-2 w-full text-black border border-gray-200'
                      />
                    </div>
                  </div>

                  {/* Organization Type */}
                  <div className="form-group">
                    <label htmlFor="organization_type">
                      Organization Type *
                    </label>
                    <select
                      id="organization_type"
                      name="organization_type"
                      className='block bg-white border border-[#D9D9D9] text-[#A09988] outline-[#4FC0E8] w-[100%] px-1 py-2 my-[10px]'
                      value={formData.organization_type}
                      onChange={handleInputChange}
                      required
                      autoComplete="organization-title"
                    >
                      <option value="">Select</option>
                      <option value="Nonprofit">Nonprofit</option>
                      <option value="CBO">CBO</option>
                      <option value="NGO">NGO</option>
                      <option value="individual">Individual</option>
                      {/* more organization types as needed */}
                    </select>
                  </div>

                  <div className=' mt-[5px] gap-3'>
                    {/* Organization Website */}
                    <div className="basis-[50%] mb-3 md:mb-0">
                      <input
                        type="text"
                        id="organization_website"
                        name="organization_website"
                        placeholder='Organization Website (Optional)'
                        value={formData.organization_website}
                        onChange={handleInputChange}
                        autoComplete="url"
                        className='p-2 w-full text-black border border-gray-200'
                      />
                    </div>

                    {/* Password */}
                    <div className="basis-[50%] relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder='Password *'
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        pattern="(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
                        title="Password must be at least 8 characters long and include at least one digit and one symbol."
                        autoComplete="new-password"
                        className='p-2 w-full text-black border border-gray-200'
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
                      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                  </div>

                  {/* Organization Description */}
                  <div className="mt-[5px]">
                    <textarea
                      id="organization_description"
                      name="organization_description"
                      placeholder='Organization Description *'
                      value={formData.organization_description}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      autoComplete="organization-description"
                      className='p-2 w-full text-black border border-gray-200'
                    />
                  </div>

                  {/* Agree to Terms and Conditions */}
                  <div className="flex gap-2  mt-[10px]">
                    <input
                      type="checkbox"
                      id="agreeterms"
                      name="agreeterms"
                      checked={formData.agreeterms}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="agreeterms">
                      I agree to the <Link to="/terms-conditions" className=" text-[rgb(79,192,232)] cursor-pointer">Terms and Conditions</Link>
                    </label>
                  </div>

                  <div className="flex gap-2  ">
                    <input
                      type="checkbox"
                      id="mailing_list"
                      name="mailing_list"
                      checked={formData.mailing_list}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="mailing_list">
                      Sign me up for the mailing list
                    </label>
                  </div>
                  
                  <div className='my-[10px] flex justify-center items-center gap-2'>
                    <h4 className='text-center text-sm'>Already have an account?</h4>
                    <button onClick={handleSignInClick} className='text-sm text-[rgb(79,192,232)]'>Sign In</button>
                  </div>

                  <div className='flex flex-col justify-center items-center mt-[20px]'>
                    <button type="submit" className="bg-[#4FC0E8] py-2 w-[60%] mx-auto rounded-xl text-lg text-white hover:bg-black hover:text-white hover:border-0">
                      Sign Up
                    </button>
                  </div>
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                  {successMessage && <p className="success-message">{successMessage}</p>}
                </div>
              </div>
            </form>
          </div>
          <div className='basis-[50%] hidden lg:flex p-4 rounded-tr-md rounded-br-md bg-[#4FC0E8] text-white flex-col items-center justify-center space-y-[30px]'>
            <div>
              <h1 className='text-white text-4xl font-semibold text-center'>WELCOME BACK</h1>
              <p className='text-center text-[#EBE4FF] mt-[10px]'>Join us in transforming dreams into reality. Your donation today can spark innovation, drive progress, and create lasting change in communities worldwide.</p>
            </div>
            <div className='mt-[50px]'>
              <button onClick={handleSignInClick} className='bg-[#4FC0E8] mt-[30px] border border-[#DAA520] px-6 py-1 rounded-md text-xl font-medium hover:bg-black hover:text-white hover:border-0 transition-all duration-300 ease-linear'>Sign In</button>
              <Link to="/">
                <div className='flex justify-center items-center mt-[20px] hover:text-black transition-colors duration-300 ease-linear'>
                  <p className=' underline underline-offset-4'>Back To Home</p>
                  <span className='text-white hover:text-black'>
                    <MdChevronRight />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <ScrollToTop />
      {/* Modal for email verification */}
      <Modal
        show={showModal}
        onClose={closeModal}
        title="Welcome To Fundnest"
        message="Your account has been successfully created. You can now log in to your account"
      />
    </>
  );
};

export default SignUpForm;
