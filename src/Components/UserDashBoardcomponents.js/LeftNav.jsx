import "./Dashboard.css";
import React, { useEffect } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaDonate, FaFileAlt, FaHome, FaMoneyCheckAlt, FaSignOutAlt, FaUserShield } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const adminEmail = localStorage.getItem('adminEmail');
const userEmail = localStorage.getItem('userEmail');
const role = localStorage.getItem('role');
const navItems = [
    {
        tabTitle: 'My Account',
        tabElements: [
            { name: 'Summary', icon: <FaHome />, link: '/user-dashboard/summary' },  // Updated icon
            { name: 'My transactions', icon: <FaMoneyCheckAlt />, link: '/user-dashboard/statement' },  // Updated icon
            // { name: 'My donations', icon: <FaDonate />, link: '/user-dashboard/donations' },  
        ],
    },
    {
        tabTitle: 'Verifications',
        tabElements: [
            { name: 'Documents', icon: <FaFileAlt />, link: '/user-dashboard/documents' },  // Updated icon
        ],
    },
    {
        tabTitle: 'Personalization',
        tabElements: [
            { name: 'Fundraiser Details', icon: <BiSolidUserDetail />, link: '/user-dashboard/FundraiserDetails' },
        ],
    },
    {
        tabTitle: 'Account',
        tabElements: [
            { name: 'Logout', icon: <FaSignOutAlt />, link: '/' },  // Updated icon
        ],
    },
];

const LeftNav = ({ isLeftNavOpen, onTabClick }) => {

    const navigate = useNavigate();

    const handleAdminClick = () => {
        // Remove items from localStorage
        localStorage.removeItem('tempuserId');
        localStorage.removeItem('tempuserEmail');
        
        // Navigate to the admin dashboard
        navigate('/admin-dashboard');
    };

    const handleLogout = () => {
        localStorage.clear();
        
        // Navigate to the home page
        navigate('/');
    };

    useEffect(() => {
        if (adminEmail && userEmail && role === 'admin' && !navItems.some(item => item.tabTitle === 'Admin')) {
            navItems.push({
                tabTitle: 'Admin',
                tabElements: [
                    { name: 'Admin Dashboard', icon: <FaUserShield />, link: '/admin-dashboard', onClick: handleAdminClick },  // Updated icon
                ],
            });
        }
    }, [adminEmail, userEmail, role]);

    return (
        <nav className={`fixed top-20 mt-2 left-0 p-4 w-64 h-screen rounded-sm overflow-y-auto bg-gray-100 transition-transform duration-300 ease-in-out ${isLeftNavOpen ? "transform translate-x-0 " : "transform -translate-x-full "}`}>
            <ul className="space-y-4">
                {navItems.map((tab, tabIndex) => (
                    <li key={tabIndex}>
                        <h2 className="mb-2 text-lg font-bold text-[#4FC0E8]">{tab.tabTitle}</h2>
                        <ul className="space-y-1">
                            {tab.tabElements.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center px-2 rounded hover:bg-gray-400">
                                    {item.name === 'Logout' ? (
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                if (onTabClick) onTabClick();
                                            }}
                                            className="flex items-center gap-2 text-[#4FC0E8]"
                                        >
                                            {item.icon}
                                            <span className="ml-2 text-[#4FC0E8] ">{item.name}</span>
                                        </button>
                                    ) : (
                                        <Link to={item.link} className="flex items-center gap-2 text-[#4FC0E8]" onClick={item.onClick || onTabClick}>
                                            {item.icon}
                                            <span className="ml-2 text-[#4FC0E0]">{item.name}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default LeftNav;
