import React from 'react';

//images
import Rectangle1 from '../../assets/Blog/Rectangle1.jpg';
import Rectangle2 from '../../assets/Blog/Rectangle2.jpg';
import Rectangle3 from '../../assets/Blog/Rectangle3.jpg';
import Rectangle4 from '../../assets/Blog/Rectangle4.png';
import Rectangle5 from '../../assets/Blog/Rectangle5.jpg';

const FeaturedPost = () => {
    const FeaturedPost = [
        {
          Photo: Rectangle1,
          Title: "Want your governor to take action on climate? This toolkit is for you.",
          Date: "December 8, 2017"
        },
        {
          Photo: Rectangle2,
          Title: "Meet Crystal, an Indigenous Pipeline Fighter in Texas",
          Date: "March 26, 2016"
        },
        {
          Photo: Rectangle3,
          Title: "A Victory for Women’s Pay Equity in New York",
          Date: "April 23, 2017"
        },
        {
          Photo: Rectangle4,
          Title: "Vancouver Ulara Nakagawa inspires petition to save elephant in Japan",
          Date: "June 25, 2017"
        },
        {
          Photo: Rectangle5,
          Title: "NDP statement following the Brussels attacks",
          Date: "May 25, 2017"
        }
      ];
  return (
    <>
        <div className='basis-[30%] pl-2 mt-4 md:mt-0'>
            <h1 className='text-2xl font-extrabold mb-3'>Featured Posts</h1>
            <div className='grid grid-cols-1 gap-4'>
            {FeaturedPost.map((Data, index) => (
                <div key={index} className='flex gap-  items-center'>
                <div className='basis-[30%]'>
                    <img src={Data.Photo} alt="" />
                </div>
                <div className='basis-[70%]'>
                    <h1 className='text-md font-bold'>{Data.Title}</h1>
                    <p className='text-sm text-[#5F5F75] mt-2'>{Data.Date}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </>
  )
}

export default FeaturedPost;