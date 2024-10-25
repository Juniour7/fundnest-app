import React from 'react'

const MailingList = () => {
  return (
    <>
        <section className='bg-[#00AEEF] font-sen text-white py-11'>
            <div className='w-[90%] mx-auto md:flex justify-between items-center gap-3'>
                <div className='basis-[40%] mb-3 md:mb-0'>
                    <h1 className='text-xl md:text-3xl font-bold w-[80%]'>Join Our Mailing List for Updates & Tips!</h1>
                </div>
                <div className='basis-[50%]'>
                    <form action="" className='space-x-4'>
                        <input type="text" name='' placeholder='Your email' className='bg-white px-3 py-2 rounded-md font-sen w-[50%] md:w-[40%] outline-none text-black' />
                        <button type='submit' className='bg-black text-white px-4 py-2 rounded-md text-lg font-light'>Subscribe</button>
                    </form>
                    <p className='text-sm mt-3 text-[#FFFCF7]'>Get latest update from us. You can cancel any time.</p>
                </div>
            </div>
        </section>
    </>
  );
}

export default MailingList;