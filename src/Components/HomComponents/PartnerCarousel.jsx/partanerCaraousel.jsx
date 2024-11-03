import React from 'react';
import Slider from "react-slick";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images
import Image1 from '../../../assets/Logo/microsoft.png';
import Image2 from '../../../assets/Logo/Nvidia.jpeg';
import Image3 from '../../../assets/Logo/ibm.png';
import Image4 from '../../../assets/Logo/tnoyelumelu.png';
import Image5 from '../../../assets/Logo/undp.png';
import Image6 from '../../../assets/Logo/hanga.png';

const PartnerCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // adjust this number based on your layout
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <>
      <section className='w-[95%] lg:w-[90%] mx-auto mt-3'>
        <Slider {...settings} className='overflow-hidden'>
          <div className='w-[7.375rem] h-[2.125rem] md:w-[12.5rem] md:h-[3.125rem]'>
            <img src={Image1} alt="Microsoft" className='w-[7.375rem] h-[2.125rem] md:w-[12.5rem] md:h-[3.125rem]'/>
          </div>
          <div>
            <img src={Image2} alt="Nvidia" className='w-[7.375rem] h-[2.125rem] md:w-[12.5rem] md:h-[3.125rem]'/>
          </div>
          <div>
            <img src={Image3} alt="IBM" className='w-[7.375rem] h-[2.125rem] md:w-[12.5rem] md:h-[3.125rem]'/>
          </div>
          <div>
            <img src={Image4} alt="Tnoyelu Melu" className='w-[7.375rem] h-[2.125rem] md:w-[12.5rem] md:h-[3.125rem]'/>
          </div>
          <div>
            <img src={Image5} alt="UNDP" className='w-[7.375rem] h-[2.125rem] md:w-[12.5rem] md:h-[3.125rem]'/>
          </div>
          <div className='w-[7.375rem] h-[2.125rem] md:w-[12.5rem] md:h-[3.125rem] flex  justify-center items-center'>
            <img src={Image6} alt="Hanga" className='w-[7.375rem] h-[2.125rem] md:w-[50%] md:h-[3.75rem] mx-auto '/>
          </div>
        </Slider>    
      </section>
    </>
  );
}

export default PartnerCarousel;