import React, {useState} from "react";
import { useLocation } from "react-router-dom";

//icons
import { GoChevronDown, GoChevronUp  } from "react-icons/go";


//images
import Shape from '../../assets/slideshow/Shape.png'

const AskedQuery = () => {
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
      question: ' How does Fundnest ensure the security of my donations?',
      answer: "We utilize Stripe's latest technology to prevent fraud and ensure all transactions are secure. Additionally, we partner with trusted payment providers like Wise and Flutterwave."
    },
    {
      question: 'What measures are in place to prevent fraud?',
      answer: "All campaigns undergo a rigorous verification process. Our partnerships with industry leaders enhance our security measures, and we comply with strict AML and KYC policies."
    },
    {
      question: 'Can I get a refund if needed?',
      answer: 'Yes, please refer to our Refund Policy for detailed information.'
    },
    {
        question: 'How do I contact support?',
        answer: 'Our support team is available 24/7. Contact us at support@fundnest.org or call +250787171273.'
    }
  ];


  return (
    <div id="faq" className="py-11  font-rubik">
      <div className=" lg:flex justify-center gap-2 w-[90%] mx-auto">
        <div className="basis-[45%] relative">
            <h1 className="text-2xl md:text-4xl font-semibold">Find Answers to Your Donation Questions</h1>
            <p className="mt-4 text-sm">Et felis vitae ac venenatis lacus cras etiam risus scelerisque auctor adipiscing in a porta</p>
            <div className="absolute left-10 hidden md:block">
                <img src={Shape} alt="" className=""/>
            </div>
        </div>
        <div className="space-y-2 md:space-y-4 lg:basis-[40%] w-[90%] md:w-[80%] lg:w-full mx-auto lg:mx-0 mt-[20px] lg:mt-0 basis-[50%]">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-black rounded-lg">
              <div
                className="flex justify-between items-center p-2 md:p-5 bg-transparent rounded-lg cursor-pointer "
               onClick={() => toggle(index)}
              >
                <h3 className="text-lg font-rubik">{faq.question}</h3>
                <span>{selected === index ? <GoChevronUp /> : <GoChevronDown />}</span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${selected === index ? 'max-h-screen' : 'max-h-0'}`}
              >
                <p className="p-3 md:p-4 bg-white rounded-lg test-sm text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default AskedQuery;