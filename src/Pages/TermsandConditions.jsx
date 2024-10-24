import React from 'react';
import { Helmet } from 'react-helmet-async';

//components
import Navbar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const TermsData = [
    {
        title: "Services Provided",
        content: "Fundnest Ltd. provides a platform for non-profits and social enterprises to raise funds through crowdfunding. We charge a 4% fee on the total funds raised and a $0.30 transaction fee for operations and marketing to attract more donors."
    },
    {
        title: "Account Registration",
        content: "To use certain features of the Platform, you may be required to register an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. We reserve the right to suspend or terminate your account if any information provided during the registration process or thereafter proves to be inaccurate, not current, or incomplete."
    },
    {
        title: "Fraudulent Activities",
        content: "We monitor and review activities on our Platform to detect and prevent fraud. If we detect any fraudulent activity, we will refund the donors and notify them of the issue. We are committed to transparency and will take necessary actions to ensure the integrity of our Platform."
    },
    {
        title: "Donor Tipping",
        content: "Donors have the option to tip us in addition to their donations. Tips help ensure our sustainability and ability to provide the best services possible."
    },
    {
        title: "Content and Campaigns",
        content: "You are responsible for the content you post and the campaigns you create on the Platform. By posting content, you grant us a non-exclusive, royalty-free, worldwide, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the content in connection with the Platform."
    },
    {
        title: "Withdrawal Processing",
        content: "Withdrawals may take between 3 days and 2 weeks to process, depending on payment choices, the country, and other issues that might arise, such as verification."
    },
    {
        title: "Limitation of Liability",
        content: "To the fullest extent permitted by law, in no event will Fundnest Ltd. be liable to you or any third party for any indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit damages arising from your use of the Platform, even if we have been advised of the possibility of such damages."
    },
    {
        title: "Governing Law",
        content: "These Terms shall be governed by and defined following the laws of the United Kingdom and Rwanda. Fundnest Ltd. and yourself irrevocably consent that the courts of the United Kingdom and Rwanda shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Terms."
    },
]

const TermsandConditions = () => {
  return (
    <>
        <Helmet>
            <title>Terms and Conditions | Fund Nest</title>
            <meta name="description" content="Our Terms and Conditions" />
        </Helmet>
        <Navbar />
        <section className='mt-[60px] md:mt-[100px] font-[Poppins]'>
            <div className='w-[90%] md:w-[85%] mx-auto text-sm'>
                <h1 className='text-center text-3xl font-semibold py-[20px]'>Terms and Conditions</h1>
                <div className='space-y-3 mb-[20px] text-sm font-light'>
                    <div className='font-light space-y-1 text-md '>
                        <h2 className='text-lg font-semibold'>Introduction</h2>
                        <p className='w-[90%] text-[#595959]'>These Terms and Conditions ("Terms") govern your use of the crowdfunding platform operated by Fundnest Ltd. ("we," "us," or "our") located at <a href='https://www.fundnest.org' className='text-[#4FC0E8]'>www.fundnest.org</a> (the "Platform"). By accessing or using the Platform, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the Platform.</p>
                    </div>
                    {TermsData.map((terms, index ) => (
                        <div key={index}>
                            <h2 className='text-lg font-semibold'>{terms.title}</h2>
                            <p className='w-[90%] text-[#595959]'>{terms.content}</p>
                        </div>
                    ))}
                    <div className='font-light space-y-1 text-md '>
                        <h2 className='text-lg font-semibold'>Contact Us</h2>
                        <p className='w-[90%] text-[#595959]'>If you have any questions about these Terms, please contact us at: <a href='mailto:contact@fundnest.org' className='text-[#4FC0E8]'>contact@fundnest.com</a></p>
                    </div>
                </div>
            </div>
        </section>
        <ScrollToTop />
        <Footer />
    </>
  )
}

export default TermsandConditions;