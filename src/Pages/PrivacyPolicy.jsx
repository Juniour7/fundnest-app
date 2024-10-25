import React from 'react';
import { Helmet } from 'react-helmet-async';


//components
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const PrivacyPolicy = () => {
  return (
    <>
        <Helmet>
            <title>Privacy Policy | Fund Nest</title>
            <meta name="description" content="Our Privacy Policy" />
        </Helmet>
        <section className='mt-[60px] md:mt-[100px] font-[Poppins]'>
            <div className='w-[90%] mx-auto text-sm'>
                <h1 className='text-center text-3xl font-semibold py-[20px]'>Privacy Policy</h1>
                <div className='font-light space-y-3 text-md '>
                    <h2 className='text-xl font-semibold'>Introduction</h2>
                    <p className='w-[90%] text-[#595959]'>Fundnest ("we," "us," or "our") operates the crowdfunding platform located at Fundnest . This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Platform. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Platform.</p>
                </div>
                <div className='font-light space-y-3 text-md mt-[25px]'>
                    <h2 className='text-xl font-semibold'>Information We Collect</h2>
                    <p className='w-[90%] text-[#595959]'>We may collect information about you in a variety of ways. The information we may collect on the Platform includes:</p>
                    <ol className='list-disc ml-[20px] md:ml-[30px] text-[#595959]'>
                        <li className='w-[95%] md:w-[88%]'>
                            <p>
                            <span className='font-bold text-black'>Personal Data:</span> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Platform or when you choose to participate in various activities related to the Platform, such as online chat and message boards.
                            </p>
                        </li>
                        <li className='w-[95%] md:w-[88%]'>
                            <p>
                            <span className='font-bold text-black'>Derivative Data:</span> Information our servers automatically collect when you access the Platform, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Platform.
                            </p>
                        </li>
                    </ol>
                </div>
                <div className='font-light space-y-2 text-md mt-[25px]'>
                    <h2 className='text-xl font-semibold'>Use of Information</h2>
                    <p className='w-[90%] text-[#595959]'>We may use the information we collect about you in the following ways:</p>
                    <ol className='list-disc ml-[20px] md:ml-[30px] text-[#595959]'>
                        <li className='w-[95%] md:w-[88%]'>
                            <p>
                            To facilitate account creation and logon processes.
                            </p>
                        </li>
                        <li className='w-[95%] md:w-[88%]'>
                            <p>
                                To send administrative information to you.
                            </p>
                        </li>
                        <li className='w-[95%] md:w-[88%]'>
                            <p>
                                To fulfill and manage donations, transactions, and other activities related to the Platform.
                            </p>
                        </li>
                        <li className='w-[95%] md:w-[88%]'>
                            <p>
                                To manage and verify your account and provide you with a verified badge.
                            </p>
                        </li>
                        <li className='w-[95%] md:w-[88%]'>
                            <p>
                                To post and promote your public campaigns on different social media platforms to ensure a successful campaign.
                            </p>
                        </li>
                        <li className='w-[95%] md:w-[88%]'>
                            <p>
                                To respond to your inquiries and offer customer support.
                            </p>
                        </li>
                        <li className='w-[95%] md:w-[88%]'>
                            <p>
                                To protect against fraudulent, unauthorized, or illegal activity.
                            </p>
                        </li>
                    </ol>
                </div>
                <div className='font-light space-y-2 text-md mt-[20px]'>
                    <h2 className='text-xl font-semibold'>Disclosure of Your Information</h2>
                    <p className='w-[99%] md:w-[90%] text-[#595959]'>We do not share, sell, rent, or trade your information with third parties without your consent. However, we may share your information with our service providers to perform functions on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.</p>
                </div>
                <div className='font-light space-y-2 text-md mt-[20px]'>
                    <h2 className='text-xl font-semibold'>Data Security</h2>
                    <p className='w-[90%] text-[#595959]'>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                </div>
                <div className='font-light space-y-1 text-md my-[20px]'>
                    <h2 className='text-xl font-semibold'>Contact Us</h2>
                    <p className='w-[90%] text-[#595959]'>If you have questions or comments about this Privacy Policy, please contact us at: <a href='mailto:contact@fundnest.org' className='text-[#4FC0E8]'>contact@fundnest.org</a></p>
                </div>
            </div>
        </section>
        <ScrollToTop />
    </>
  )
}

export default PrivacyPolicy;