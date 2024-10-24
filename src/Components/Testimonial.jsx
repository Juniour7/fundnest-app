import React, {useState} from "react";
import { useLocation } from "react-router-dom";

const Testimonial = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    if(selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  }

  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const faqs = [
    {
      question: 'What is Fundnest?',
      answer: 'Fundnest is a cutting-edge platform designed to revolutionize fundraising for NGOs by leveraging innovative technology solutions. Our platform empowers NGOs to streamline their fundraising processes, engage with donors effectively, and maximize their impact.',
    },
    {
      question: 'Who can use Fundnest?',
      answer: 'Fundnest is designed for NGOs, non-profits, and charitable organizations looking to enhance their fundraising efforts through technology. Donors and supporters can also use the platform to contribute to causes they care about.',
    },
    {
      question: 'How does Fundnest benefit NGOs?',
      answer: 'Fundnest provides NGOs with a comprehensive suite of tools, including an online donation portal, customizable campaign features, data analytics, and donor engagement tools. These features help NGOs raise funds more efficiently, reach a wider audience, and build lasting relationships with donors.'
    },
    {
      question: 'How do I sign up for Fundnest?',
      answer: "To sign up, visit our website and click on the 'Sign Up' button. You will be guided through a registration process where you need to provide your organization's details and contact information."
    },
    {
      question: 'How do I create a fundraising campaign?',
      answer: 'Once you have signed up and logged in, you can create a fundraising campaign by navigating to the "Campaigns" section and clicking on "Create New Campaign." Follow the prompts to set up your campaign details, goals, and promotional materials.'
    }
  ];


  return (
    <div id="faq" className=" relative w-full h-[110vh] md:h-[80vh] lg:h-[600px] bg-[#4FC0E8] ">
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="py-[35px]">
        <h1 className="text-center text-2xl md:text-4xl font-semibold my-[10px] text-white">Frequently Asked Questions</h1>
      </div>
      <div className="absolute lg:flex justify-center gap-2">
        <div className="lg:basis-[50%] h-[200px] md:h-[350px] lg:h-[400px] w-[90%] md:w-[80%] lg:w-full mx-auto lg:mx-0">
          <img src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg" alt="" className="w-full h-full rounded-md shadow-md object-cover" />
        </div>
        <div className="space-y-2 md:space-y-4 lg:basis-[40%] w-[90%] md:w-[80%] lg:w-full mx-auto lg:mx-0 mt-[20px] lg:mt-0">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center p-2 md:p-4 bg-white rounded-lg cursor-pointer shadow-md"
               onClick={() => toggle(index)}
              >
                <h3 className="text-lg font-semibold text-[#4FC0E8]">{faq.question}</h3>
                <span>{selected === index ? '-' : '+'}</span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${selected === index ? 'max-h-screen' : 'max-h-0'}`}
              >
                <p className="p-3 md:p-4 bg-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Testimonial;