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

const partnerCaraousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // adjust this number based on your layout
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <>
      <section className='w-[90%] mx-auto'>
        <Slider {...settings}>
  <div>
    <img src={Image1} alt="Microsoft" className='w-[200px] h-[100px]'/>
  </div>
  <div>
    <img src={Image2} alt="Nvidia" className='w-[200px] h-[100px]'/>
  </div>
  <div>
    <img src={Image3} alt="IBM" className='w-[200px] h-[100px]'/>
  </div>
  <div>
    <img src={Image4} alt="Tnoyelu Melu" className='w-[200px] h-[100px]'/>
  </div>
  <div>
    <img src={Image5} alt="UNDP" className='w-[200px] h-[100px]'/>
  </div>
  <div>
    <img src={Image6} alt="Hanga" className='w-[200px] h-[100px]'/>
  </div>
</Slider>

      </section>
    </>
  );
}

export default partnerCaraousel;