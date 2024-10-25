import React, { useEffect, useState } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import axios from "axios";
import { closePaymentModal } from "flutterwave-react-v3";
import { useNavigate, useParams } from "react-router-dom";

const DonationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    donor_name: '',
    email: '',
    phone_number: '',
    donation_amount: '',
    currency: 'USD',
    payment_method: '',
    campaign_id: id,
  });
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaignDetails = async () => {
      try {
        const response = await axios.get(`https://backend.iraady.com:8000/campaigns/${id}`);
        setCampaign(response.data);
        setFormData((prevData) => ({ ...prevData, campaign_id: response.data.campaign_id }));
      } catch (error) {
        console.log('Error fetching campaign details:', error);
      }
    };

    fetchCampaignDetails();
  }, [id]);

  const validateEmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setIsValid(validateEmail(value));
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend.iraady.com:8000/donations/', formData);  // Updated endpoint
      if (response.status === 201) {
        setMessage('Donation created successfully!');
        handlePaymentSubmit();
      } else {
        setMessage('Error creating donation. Please try again.');
      }
    } catch (error) {
      setMessage('Error creating donation. Please try again.');
    }
  };

  const handlePaymentSubmit = () => {
    const amount = parseFloat(formData.donation_amount);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount");
      return;
    }

    const config = {
      public_key: process.env.REACT_APP_PUBLIC_KEY,
      tx_ref: Date.now().toString(),
      amount: amount,
      currency: formData.currency,
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email: formData.email,
        phone_number: formData.phone_number,
        name: formData.donor_name,
      },
      customizations: {
        title: 'Support Our Cause',
        description: 'Your generous donation helps us make a difference. Thank you for contributing to our mission.',
        logo: 'https://iraady.com/static/media/Logo.ec09dc37890405cd1801.png',
      },
      meta: {
        campaign_id: formData.campaign_id, // Sending campaign_id in metadata
      },
      callback: (response) => {
        if (response.status === "successful") {
          setMessage("Payment successful! Thank you for your donation.");
          closePaymentModal();
          const redirectUrl = `/payment-success?tx_ref=${response.tx_ref}&campaign_id=${formData.campaign_id}`;
          setTimeout(() => {
            navigate(redirectUrl); 
          }, 1000);
        } else {
          setMessage("Payment failed. Please try again.");
        }
      },
      onClose: () => {},
    };

    if (window.FlutterwaveCheckout) {
      window.FlutterwaveCheckout(config);
    } else {
      console.error('Flutterwave script is not loaded');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.flutterwave.com/v3.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className=' py-[30px] bg-[#F3FAFB]'>
        <div className='text-center space-y-4 mb-[20px]'>
          <h3 className='text-3xl font-semibold'>Donate to a cause</h3>
          <h4 className='text-lg font-medium'>Thank you for your support</h4>
        </div>
        <div className='flex flex-col justify-center items-center w-[95%] lg:w-[55%] mx-auto bg-white shadow-md p-2'>
          <h1 className='text-3xl font-semibold text-[#4FC0E8] my-[20px] text-center'>{campaign.campaign_name}</h1>
          <div className='w-[90%] h-[200px] md:h-[400px] relative mx-auto'>
            <img src={`https://backend.iraady.com${campaign.poster_image_url}`} alt={campaign.campaign_name} className='w-full h-full object-cover rounded-md' />
            <p className='my-auto absolute bottom-3 shadow-inner right-3 text-sm px-2 py-1 bg-[#4FC0E8] rounded-md text-white'>{campaign.fundraising_type}</p>
          </div>
          <form className='bg-white w-full p-3 space-y-3' onSubmit={handleFormSubmit}>
            <div className='md:flex justify-center space-y-3 md:space-y-0 gap-3'>
              <input type='text' name='donor_name' placeholder='First Name' className='w-full px-2 py-2 border border-gray-300' onChange={handleInputChange} required/>
              <input type='text' name='donor_name' placeholder='Last Name' className='w-full px-2 py-2 border border-gray-300' onChange={(e) => setFormData({ ...formData, donor_name: formData.donor_name.split(' ')[0] + ' ' + e.target.value })} required/>
            </div>
            <div>
              <input type='email' name='email' placeholder='Email' className='w-full px-2 py-2 border border-gray-300' onChange={handleInputChange} required/>
              {!isValid && <p className='text-red-500'>Please enter a valid Gmail address</p>}
            </div>
            <div>
              <input type='tel' name='phone_number' placeholder='Phone Number' className='w-full px-2 py-2 border border-gray-300' onChange={handleInputChange} required/>
            </div>
            <div>
              <input type='number' name='donation_amount' placeholder='Amount' className='w-full px-2 py-2 border border-gray-300' onChange={handleInputChange} required/>
            </div>
            <div>
              <select
                name="currency"
                onChange={handleInputChange}
                className='w-full px-2 py-2 border border-gray-300 bg-transparent'
                required
              >
                <option value="">Currency</option>
                <option value="USD">USD</option>
                <option value="KES">KES</option>
                <option value="NGN">NGN</option>
                <option value="RWF">RWF</option>
                <option value="UGX">UGX</option>
                <option value="TZS">TZS</option>
                <option value="XOF">XOF</option>
                <option value="XAF">XAF</option>
                <option value="GHS">GHS</option>
                <option value="ZAR">ZAR</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="MWK">MWK</option>
              </select>
            </div>
            <div>
              <select
                name="payment_method"
                onChange={handleInputChange}
                className='w-full px-2 py-2 border border-gray-300 bg-transparent'
                required
              >
                <option value="">Method of Payment</option>
                <option value="Cards">Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="mobile_money">Mobile Money</option>
                <option value="Bank">Bank</option>
                <option value="USSD">USSD</option>
              </select>
            </div>
            <div>
              <button type="submit" className='text-white text-lg font-semibold bg-[#4FC0E8] w-[full] px-4 py-2 rounded-md hover:bg-[#3FA0C8] transition'>Proceed to Payment</button>
            </div>
          </form>
          <p className="text-center mt-4 text-green-500">{message}</p>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

export default DonationForm;
