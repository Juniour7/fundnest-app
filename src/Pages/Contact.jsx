import React from 'react';
import { Helmet } from 'react-helmet-async';

//icons
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Fund Nest</title>
      </Helmet>
      <body className=" bg-[#F3FAFB]">
        <section
          className="bg-fixed relative bg-cover bg-center bg-no-repeat w-full h-[250px] md:h-[400px] z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1577563820627-bc12aa2139de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className=" py-2 md:py-5  border-t-[0.2px] border-b-[0.2px]  w-[50%] mx-auto">
              <h1 className="text-2xl md:text-5xl font-semibold text-white text-center">
                CONTACT US
              </h1>
            </div>
          </div>
        </section>

        {/* Main Section */}
        <section className="py-[50px] w-[85%] mx-auto md:flex justify-center gap-3">
          {/* Left Side */}
          <div className="basis-[50%]">
            <h1 className="text-2xl font-semibold">Get In Touch</h1>
            <p className="text-[#888888]">
              Stay connected with us and be a part of our journey! Follow us on
              social media for the latest updates, inspiring stories, and
              exclusive content. Don’t miss out join our community today and get
              in touch through our social media channels!
            </p>
            <div className="mt-[20px] space-y-3 border-b-2 pb-[30px]">
              <div className="flex items-center gap-3">
                <div className="bg-[#4FC0E8] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full text-white flex flex-col justify-center items-center">
                  <span className="text-xl md:text-3xl">
                    <IoLocationOutline />
                  </span>
                </div>
                <div>
                  <h1 className="font-semibold text-lg">Address</h1>
                  <p className="text-[#888888] text-sm md:w-[80%]">
                    85 Great Portland Street, London, W1W 7LT, United Kingdom.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#4FC0E8] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full text-white flex flex-col justify-center items-center">
                  <span className="text-xl md:text-3xl">
                    <IoCallOutline />
                  </span>
                </div>
                <div>
                  <h1 className="font-semibold text-lg">Phone Number</h1>
                  <a href="tel:+250787171273">
                    <p className="text-[#888888] text-sm w-[80%] hover:text-[#4FC0E8] transition-colors duration-300 ease-in-out">
                      +250787171273
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#4FC0E8]  w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full text-white flex flex-col justify-center items-center">
                  <span className="text-3xl">
                    <CiMail />
                  </span>
                </div>
                <div>
                  <h1 className="font-semibold text-lg">E-MAIL</h1>
                  <a href="mailto:contact@fundnest.org">
                    <p className="text-[#888888] text-sm w-[80%] hover:text-[#4FC0E8] transition-colors duration-300 ease-in-out">
                      contact@fundnest.org
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-[10px] p-2">
              <h1 className="text-xl font-semibold">Follow Us:</h1>
              <div className="flex  gap-2 mt-[20px]">
                <div className="text-white text-2xl w-[40px] h-[40px] bg-[#4FC0E8] flex flex-col justify-center items-center rounded-full hover:scale-110 transition-colors ease-in-out duration-500">
                  <a href="https://x.com/fundnest_off" target="_blank">
                    <FaXTwitter />
                  </a>
                </div>
                <div className="text-white text-2xl w-[40px] h-[40px] bg-[#4FC0E8] flex flex-col justify-center items-center rounded-full hover:scale-110 transition-colors ease-in-out duration-500">
                  <a
                    href="https://www.linkedin.com/showcase/fund-nest/?viewAsMember=true"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className="text-white text-2xl w-[40px] h-[40px] bg-[#4FC0E8] flex flex-col justify-center items-center rounded-full hover:scale-110 transition-colors ease-in-out duration-500">
                  <a
                    href="https://www.instagram.com/fundnestofficial/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </div>
                <div className="text-white text-2xl w-[40px] h-[40px] bg-[#4FC0E8] flex flex-col justify-center items-center rounded-full hover:scale-110 transition-colors ease-in-out duration-500">
                  <a
                    href="https://www.facebook.com/people/Fund-Nest/61564352366324/"
                    target="_blank"
                  >
                    <FaFacebookSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="basis-[35%] bg-white p-2 rounded-lg mt-[30px] md:mt-0 shadow-inner">
            <h1 className="text-center text-2xl font-semibold">
              Send a Message
            </h1>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col justify-center w-[90%] mx-auto text-[#888888] mt-[30px] space-y-5"
            >
              {/* Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="6862bfff-bd69-4866-b854-1f0dcee7429a"
              ></input>

              {/* Full Name */}
              <input
                type="text"
                name="Respondent's Name"
                placeholder="Name"
                required
                className="border-b-[1px] focus:outline-none p-2 text-black"
              />
              {/* Email Address */}
              <input
                type="email"
                name="Respondent's Email"
                placeholder="example@gmail.com"
                required
                className="border-b-[1px] focus:outline-none p-2 text-black"
              />
              {/* Text Area */}
              <textarea
                type="text"
                name="Respondent's Message"
                placeholder="Message"
                rows="4"
                required
                className="border-b-[1px] focus:outline-none p-2 text-black"
              />
              {/* Submit Button */}
              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Submit"
                  required
                  className="bg-[#4FC0E8] text-white text-xl font-semibold py-2 w-[40%] rounded-full"
                />
              </div>
            </form>
          </div>
        </section>
      </body>
    </>
  );
};

export default Contact;
