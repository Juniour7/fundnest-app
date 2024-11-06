import React from 'react';
import { CountryDropdown } from "react-country-region-selector";
import { FaArrowRight } from 'react-icons/fa';

const ApplicationForm = () => {
  return (
    <>
        <div className='bg-white rounded-md shadow-md p-3 font-sen mt-3 md:mt-0'>
            <h1 className='text-center my-3 font-bold text-[#00AEEF] text-3xl'>Application Form</h1>
            <form action="" className='space-y-4'>
                <div>
                    <select name="Position" id="" className='w-full px-3 py-2 rounded-md border bg-transparent text-[#5F5F75]' required>
                        <option value="Marketing Intern">Marketing Intern</option>
                        <option value="Graphic Design Intern">Graphic Design Intern</option>
                        <option value="Social Media Management Intern">Social Media Management Intern</option>
                        <option value="Sales Development Volunteer">Sales Development Volunteer</option>
                    </select>
                </div>

                <div className='flex justify-center gap-2'>
                    <input type="text" name='Fisrt Name' placeholder='First Name*' className=' px-3 py-2 rounded-md border bg-transparent text-[#5F5F75] w-full outline-none' required/>
                    <input type="text" name='Last Name' placeholder='Last Name*' className=' px-3 py-2 rounded-md border bg-transparent text-[#5F5F75] w-full outline-none' required/>
                </div>

                <div className='flex justify-center gap-2'>
                    <input type="email" name='email' placeholder='Your Email*' className=' px-3 py-2 rounded-md border bg-transparent text-[#5F5F75] w-full outline-none' required />
                    <input type="text" name='Phone Number' placeholder='Phone Number' className=' px-3 py-2 rounded-md border bg-transparent text-[#5F5F75] w-full outline-none' />
                </div>

                <div>
                    <CountryDropdown
                        name="country"
                        className=' px-3 py-2 rounded-md border bg-transparent text-[#5F5F75] w-full outline-none'
                        required
                    />
                </div>

                <div>
                    <input type="text" name='LinkedIn Profile' placeholder='LinkedIn Profile' className=' px-3 py-2 rounded-md border bg-transparent text-[#5F5F75] w-full outline-none'/>
                </div>

                <div className='flex justify-center gap-2 w-full'>
                    <div className='basis-[50%]'>
                        <label htmlFor="" className='text-sm pl-1'>Available Start Date*</label>
                        <input type="date" name='Start-Date' placeholder='Available Start Date'  className=' px-3 py-2 rounded-md border bg-transparent text-[#5F5F75] w-full outline-none' required/>
                    </div>
                    <div className='basis-[50%]'>
                        <label htmlFor="" className='text-sm pl-1'>Weekly Availabilty(Days)*</label>
                        <input type="number" name='Weekly-Availability' className='px-3 py-2 rounded-md border bg-transparent text-[#5F5F75] w-full outline-none' required/>
                    </div>
                </div>

                <div>
                    <label htmlFor="" className='text-sm pl-1'>Why do you want to join Fund Nest?*</label>
                    <textarea name="why-fundnest" id="" rows='4' className='px-3 py-2 rounded-md border bg-transparent text-[#5F5F75] w-full outline-none' required></textarea>
                </div>

                <div>
                    <label htmlFor="" className='text-sm pl-1'>How did you hear about us?</label>
                    <textarea name="how-I-heard-about" id="" rows='4' className='px-3 py-2 rounded-md border bg-transparent text-[#5F5F75] w-full outline-none' ></textarea>
                </div>

                <div>
                    <label htmlFor="" className='text-sm pl-1'>Resume/CV upload*</label>
                    <input type="file" name='CV' className='block' required/>
                </div>

                <div>
                    <button type='submit' className='text-white bg-[#00AEEF] px-4 py-2 flex gap-2 justify-center items-center rounded-md hover:bg-black transition-colors duration-500 ease-in-out'>
                        Submit
                        <span>
                            <FaArrowRight />
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default ApplicationForm;