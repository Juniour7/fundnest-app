import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate, useLocation  } from 'react-router-dom';
import { getCampaigns } from '../../services/CampaignService';
import api from '../../services/api';

//Slick Styling
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CampaignSlider = () => {
    const [campaigns, setCampaigns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCampaigns() {
            try {
                const token = api.getToken(); 
                const data = await getCampaigns(token);
                setCampaigns(data);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            }
        }
        fetchCampaigns();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const handleDonateClick = () => {
        navigate('/donation-form'); 
    };

    const { hash } = useLocation();

    React.useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

    return (
        <div id="learning" className='w-full'>
            <h1 className="primary-heading">Available Campaigns</h1>
            <p className="primary-text">
                Explore our available campaigns and join hands in bringing smiles to the faces of those in need. 
                Your support can make a world of difference, helping us make a positive impact in the lives of individuals and communities. 
                Together, we can spread hope, kindness, and joy to those who need it most.
            </p>
            <h2>Campaigns</h2>
            <div className='w-[90%] mx-auto'>
                <Slider {...settings}>
                    {campaigns.map(campaign => (
                        <div key={campaign.campaign_id} className="">
                            <div className='w-full h-[300px]'>
                                <img src={campaign.poster_image_url} alt={campaign.campaign_name} className='w-full h-full object-cover'/>
                            </div>
                            <h3>{campaign.campaign_name}</h3>
                            <p>Targe Amount: {campaign.target_amount}</p>
                            <p>Current Amount: {campaign.current_amount}</p>
                            <button onClick={handleDonateClick} className="text-[#4FC0E8] px-5 py-2 border border-[#4FC0E8]">Donate</button>
                        </div>
                ))}
                </Slider>
            </div>
           
        </div>
    );
}

export default CampaignSlider;