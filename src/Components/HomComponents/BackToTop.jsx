import React, { useState, useEffect } from 'react';


import { FaArrowUp } from 'react-icons/fa'; 
import { GoChevronUp } from "react-icons/go";

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Show button after scrolling down 300px
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-7 right-4 bg-[#666666] text-white p-1 rounded-md shadow-lg hover:bg-[#00AEEF] transition-all duration-300"
                >
                    <GoChevronUp size={30} />
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
