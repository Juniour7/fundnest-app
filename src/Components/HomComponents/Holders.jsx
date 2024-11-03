import React from 'react';

//Logos
import logo1 from '../../assets/Logo/hanga.png';
import logo2 from '../../assets/Logo/image 17.png';
import logo3 from '../../assets/Logo/Nvidia.jpeg';
import logo4 from '../../assets/Logo/microsoft.png';
import logo5 from '../../assets/Logo/stripe.png';
import logo6 from '../../assets/Logo/wise.png';
import logo7 from '../../assets/Logo/image 11.png';
import logo8 from '../../assets/Logo/image 10.png';

import image1 from '../../assets/Logo/image 19.png';
import image2 from '../../assets/Logo/image 20.png';
import image3 from '../../assets/Logo/tnoyelumelu.png';
import image4 from '../../assets/Logo/image 22.png';
import image5 from '../../assets/Logo/image 23.png';
import image6 from '../../assets/Logo/ibm.png';
import image7 from '../../assets/Logo/image 25.png';
import image8 from '../../assets/Logo/image 26.png';
import image9 from '../../assets/Logo/image 27.png';

import log1 from '../../assets/Logo/image 28.png';
import log2 from '../../assets/Logo/undp.png';
import log3 from '../../assets/Logo/image 30.png';
import log9 from '../../assets/Logo/image 31.png';
import log4 from '../../assets/Logo/image 32.png';
import log5 from '../../assets/Logo/image 33.png';
import log6 from '../../assets/Logo/image 34.png';
import log7 from '../../assets/Logo/image 14.png';
import log8 from '../../assets/Logo/image 35.png';



const Holders = () => {
    const Holders1 = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
    const Holders2 = [image1, image2, image3, image4, image5, image6, image7,image8, image9];
    const Holders3 = [log1, log2, log3, log9, log4, log5, log6, log7, log8];

  return (
    <>
        <section className='py-3 px-2 '>
            <div className='grid grid-cols-8 gap-2 justify-center items-center'>
                {Holders1.map((logo, index) => (
                    <div className='lg:w-[100px] lg:h-[50px]'>
                        <img key={index} src={logo} alt="" loading="lazy" className='w-full h-full object-contain'/>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-9 gap-2 justify-center items-center'>
                {Holders2.map((logo, index) => (
                    <div className='lg:w-[100px] lg:h-[50px] '>
                        <img key={index} src={logo} alt="" loading="lazy" className='w-full h-full object-contain'/>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-9 gap-2 justify-center items-center'>
                {Holders3.map((logo, index) => (
                    <div className=' lg:w-[100px] lg:h-[50px]'>
                        <img key={index} src={logo} alt="" loading="lazy" className='w-full h-full object-contain'/>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Holders;