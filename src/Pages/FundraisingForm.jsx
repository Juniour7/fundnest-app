import React, { useState } from "react";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import { CountryDropdown } from "react-country-region-selector";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

//Components
import Footers from "../Components/Footer/Footers";
import NavMenu from "../Components/NavBar/NavMenu/NavMenu";

const FundraisingForm = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    fundraising_type: '',
    target_amount: '',
    current_amount: '',
    duration: '',
    country: '',
    campaign_name: '',
    description: '',
    poster_image_url: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const authenticatedEmail = localStorage.getItem('userEmail');

  let isAuthenticated = false;

  // Check if email exists in localStorage
  if (formData.email === authenticatedEmail) {
    isAuthenticated = true;
  } else {
    try {
      // If email is not found in localStorage, check against the backend
      const response = await fetch('https://backend.iraady.com:8000/users/');
      
      if (response.ok) {
        const users = await response.json();
        const user = users.find(u => u.email === formData.email);

        if (user) {
          if (user.is_verified) {
            isAuthenticated = true;
          } else {
            setErrorMessage('Your email exists but is not verified. Please verify your email.');
            return;
          }
        } else {
          setErrorMessage('Email not found. Kindly sign up before creating a campaign.');
          return;
        }
      } else {
        setErrorMessage('Failed to check the user list. Please try again later.');
        return;
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setErrorMessage('An error occurred while checking the email. Please try again.');
      return;
    }
  }

  // Proceed with campaign creation if authenticated
  if (isAuthenticated) {
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (imageFile) {
      data.append('poster_image_url', imageFile);
    }

    try {
      const response = await fetch('https://backend.iraady.com:8000/campaigns/', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Your campaign has been successfully created. Please log in to your account to track progress.');
        navigate('/sign-in');
      } else {
        const errorData = await response.json();
        console.error('Server Error:', errorData); 
        setErrorMessage(errorData.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Network Error:', error); 
      setErrorMessage('An error occurred. Please try again.');
    }
  }
};



  const handleCountryChange = (val) => {
    setCountry(val);
    handleChange({ target: { name: 'country', value: val } });
  };

  return (
    <>
      <Helmet>
        <title>Fundraising Form | Fund Nest</title>
        <meta name="description" content="Fundraising Form" />
      </Helmet>
    <NavMenu />
    <div className='bg-[#F3FAFB] flex flex-col justify-center items-center'>
      <div className=" bg-white w-[90%] md:w-[75%] lg:w-[40%] mx-auto  rounded-md shadow-xl p-2 md:p-4 my-[20px]">
        <h1 className='text-center text-2xl my-[30px]'>START A FUNDRAISER</h1>
        <form onSubmit={handleSubmit} className='md:px-3 space-y-[10px] flex flex-col justify-center'>
          <div className='space-y-[7px]'>
            <label className='text-[#4FC0E8] text-lg font-semibold'>Campaign Name <span className="">*</span></label>
            <input
              type="text"
              name="campaign_name"
              value={formData.campaign_name}
              onChange={handleChange}
              className='block bg-transparent border border-[#D9D9D9] focus:outline-none focus:ring-1 focus:ring-[#4FC0E8] text-[#A09988] w-[95%] px-3 py-1 md:py-2 rounded-md'
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className='text-[#4FC0E8] text-lg font-semibold'>Email Address <span className="">*</span></label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='block bg-transparent border border-[#D9D9D9] focus:outline-none focus:ring-1 focus:ring-[#4FC0E8] text-[#A09988] w-[95%] px-3 py-1 md:py-2 rounded-md'
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label className='text-[#4FC0E8] text-lg font-semibold'>Country <span className="">*</span></label>
            <CountryDropdown
              name="country"
              value={formData.country}
              onChange={handleCountryChange}
              className='block bg-transparent border border-[#D9D9D9] focus:outline-none focus:ring-1 focus:ring-[#4FC0E8] text-[#A09988] w-[95%] px-3 py-1 md:py-2 rounded-md'
              required
            />
          </div>

          <div>
            <label className='text-[#4FC0E8] text-lg font-semibold'>Category <span className="">*</span></label>
            <select
              name="fundraising_type"
              value={formData.fundraising_type}
              onChange={handleChange}
              className='block bg-transparent border border-[#D9D9D9] focus:outline-none focus:ring-1 focus:ring-[#4FC0E8] text-[#A09988] w-[95%] px-3 py-1 md:py-2 rounded-md'
              required
            >
              <option value="">Select a category</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Religious">Religious</option>
              <option value="Wedding">Wedding</option>
              <option value="Funeral">Funeral</option>
              <option value="Civil Society">Civil Society</option>
              <option value="Business">Business</option>
              <option value="Floods">Floods</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className='md:flex gap-4 w-[95%]'>
            <div className='basis-[50%]'>
              <label className='text-[#4FC0E8] text-lg font-semibold'>Target Amount <span className="">*</span></label>
              <input
                type="text"
                name="target_amount"
                value={formData.target_amount}
                onChange={handleChange}
                placeholder="Fundraising target amount"
                className='block bg-[#F9F9F9] bg-transparent border border-[#D9D9D9] focus:outline-none focus:ring-1 focus:ring-[#4FC0E8] text-[#A09988] outline-[#4FC0E8] w-full px-3 py-1 rounded-md'
                required
              />
            </div>

            <div className='basis-[50%]'>
              <label className='text-[#4FC0E8] text-lg font-semibold'>Current Amount <span className="">*</span></label>
              <input
                type="text"
                name="current_amount"
                value={formData.current_amount === 0 ? "" : formData.current_amount}
                readOnly
                onChange={handleChange}
                placeholder="Campaigns start at 0 dollars"
                className='block bg-[#F9F9F9] placeholder:text-[#A09988] placeholder:italic placeholder:opacity-100 border border-[#D9D9D9] focus:outline-none  text-[#A09988] outline-[#4FC0E8] w-full px-1 py-1 rounded-md'
              />
            </div>
          </div>

          <div>
            <label className='text-[#4FC0E8] text-lg font-semibold'>Duration <span className="">*</span></label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Duration of fundraiser in days"
              className='block bg-transparent border border-[#D9D9D9] focus:outline-none focus:ring-1 focus:ring-[#4FC0E8] text-[#A09988] w-[95%] px-3 py-1 md:py-2 rounded-md'
              required
            />
          </div>
          
          <div>
            <label className='text-[#4FC0E8] text-lg font-semibold'>Description <span className="">*</span></label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows="6"
              className='block bg-transparent border border-[#D9D9D9] focus:outline-none focus:ring-1 focus:ring-[#4FC0E8] text-[#A09988] w-[95%] px-3 py-1 md:py-2 rounded-md'
              required
            />
          </div>

          <div>
            <label className="image-upload-label block">Image (to be used as poster)</label>
            <input
              type="file"
              accept="image/*"
              name="poster_image_url"
              onChange={handleImageChange}
              required
            />
          </div>

         <div className='flex flex-col items-center justify-center'>
          <button type="submit" className='w-[50%] bg-[#4FC0E8] text-white text-xl py-2 rounded-md hover:bg-black transition-colors duration-300 ease-in-out'>Submit</button>
         </div>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
    <Footers />
    <ScrollToTop />
    </>
  );
};

export default FundraisingForm;
