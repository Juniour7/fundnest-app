import React from "react";
import { useNavigate, useLocation  } from 'react-router-dom';
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import { Helmet } from "react-helmet-async";


//images
import Hero from '../assets/hero.jpg';

const Home = () => {
  const navigate = useNavigate();
  
  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  const handleStartCampaignClick = () => {
    navigate('/fundraising-form');
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
    <>
      <Helmet>
        <title>Home | Fund Nest</title>
        <meta name="description" content="Fund Nest Homepage" />
      </Helmet>
      {/* Hero Section */}
      <section className="h-[250px] md:h-[40vh] lg:h-screen w-full relative mt-[60px] md:mt-[90px]">
        <img src={Hero} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute bg-black w-full h-full top-0 bg-opacity-50">
          <div className="absolute inset-0 flex justify-center text-white items-center">
            <div className="text-center md:space-y-4">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold drop-shadow-xl">Empower Your Impact with Fundnest Today!</h1>
              <p className="text-sm md:text-md mb-[10px] font-Home md:mb-[25px] w-[90%] md:w-[75%] lg:w-[60%] mx-auto text-[#EBE4FF]">Join Fundnest, the game-changing tech startup, empowering non-profits and social enterprises. Sign up now to access cutting-edge technologies and make a positive impact in your community today</p>             
              <button onClick={handleSignUpClick} className="bg-[#4FC0E8] text-white text-xl md:text-2xl px-3 md:px-5 py-2 rounded-lg hover:bg-black transition-colors duration-300">Get Started</button>             
            </div>
          </div>
        </div>
      </section>

      {/* Start a Fundraiser */}
      <section id='about' className="w-[95%] lg:w-[90%] mx-auto md:flex justify-center items-center my-[30px] ">
        <div className="basis-[35%] lg:basis-[50%] h-[250px] md:h-[270px] lg:h-[450px]">
          <img src="https://contactspace.com/wp-content/uploads/fundraising-graphic-min.png" alt="about" className="w-full h-full object-cover" />
        </div>
        <div className="basis-[50%] py-3">
          <h4 className="text-md text-[#DAA520] font-semibold">HOW TO GET STARTED</h4>
          <h1 className="text-2xl md:text-3xl">Become a Fundraiser</h1>
          <div className="mt-3 flex gap-4 mb-[15px]">
            <div className=" text-3xl border border-[#4FC0E8] w-[50px] h-[50px] flex flex-col justify-center items-center rounded-full">
              <h1>1</h1>
            </div>
            <div className="basis-[70%]">
              <h2 className="text-xl md:text-2xl">Sign Up/ Login</h2>
              <p className="text-[#5A5252] text-sm lg:text-lg">Users sign up or log in to the platform to create a fundraising campaign.</p>
            </div>
          </div>
          <div className="mt-3 flex gap-4 mb-[15px]">
            <div className=" text-3xl border border-[#4FC0E8] w-[50px] h-[50px] flex flex-col justify-center items-center rounded-full">
              <h1>2</h1>
            </div>
            <div className="basis-[90%]">
              <h2 className="text-xl md:text-2xl">Create Campaign</h2>
              <p className="text-[#5A5252] text-sm lg:text-lg">Users fill out a form with campaign details such as title, description (at least 30 words), fundraising goal, end date, and optional images or videos.</p>
            </div>
          </div>
          <div className="mt-3 flex gap-4">
            <div className=" text-3xl border border-[#4FC0E8] w-[50px] h-[50px] flex flex-col justify-center items-center rounded-full">
              <h1>3</h1>
            </div>
            <div className="basis-[90%]">
              <h2 className="text-xl md:text-2xl">Submit Campaign</h2>
              <p className="text-[#5A5252] text-sm lg:text-lg">After filling out the campaign details, users click the "Submit" button to send their campaign for review.</p>
            </div>
          </div>
          <div className="mt-[35px]">
            <button onClick={handleStartCampaignClick} className="bg-[#43B0E4] font-semibold text-xl text-white px-4 py-3 md:px-5 md:py-[4rem] rounded-lg hover:bg-black transition-colors duration-300">Start a Campaign</button>
          </div>
        </div>
        
      </section>
      <ScrollToTop />
    </>
  );
};

export default Home;