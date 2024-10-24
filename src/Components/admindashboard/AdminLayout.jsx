import React, { useState } from "react";
import { FaBullhorn, FaChartBar, FaClipboardList, FaDonate, FaMoneyCheckAlt, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { MdClose, MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false); // State for small screen nav visibility
    const navigate = useNavigate();

    const navItems = [
        { label: "Dashboard", icon:FaChartBar, path: "/" },
        { label: "Users", icon: FaUsers, path: "/ListOfUsers" },
        { label: "Campaigns", icon: FaBullhorn, path: "/AdminCampaigns" },
        { label: "Transactions", icon: FaMoneyCheckAlt, path: "/TransactionDetailsTable" },
        // { label: "Donations", icon: FaDonate, path: "/DonationsDetailTable" },
    ];    const NavItem = ({ icon: Icon, label, isCollapsed, path }) => (
        <li className="p-2 flex items-center text-gray-700 rounded-md gap-3 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600 hover:text-white">
            <Link to={`/admin-dashboard${path}`} className="flex items-center w-full">
                {!isCollapsed && (
                    <div className="bg-gray-300 rounded-md p-4">
                        <Icon className="text-lg" />
                    </div>
                )}
                {!isCollapsed && <span className="text-md ml-2">{label}</span>}
            </Link>
        </li>
    );

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("adminEmail");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        navigate("/");
    };

    let email = localStorage.getItem("userEmail");

    return (
        <div className="flex flex-col h-screen justify-between">
            {/* Top Navigation */}
            <div className="bg-gray-800 text-white flex justify-between items-center p-4 w-full z-20 h-20 shadow-lg">
                <div className="flex items-center gap-4 justify-between w-64">
                    <span className="text-xl font-bold">Admin Panel</span>
                    {/* This button is hidden on small screens */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="focus:outline-none bg-gray-600 rounded-md p-3 mr-3 hover:bg-gray-500 transition duration-300 ease-in-out hidden md:block"
                    >
                        {isCollapsed ? <MdOutlineMenu /> : <MdClose />}
                    </button>
                </div>
                <div className="relative flex items-center gap-4">
                    <span>profile</span>
                    <div
                        className="w-10 h-10 bg-gray-600 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-500 transition duration-300 ease-in-out"
                        onClick={handleDropdownToggle}
                    >
                        <MdKeyboardArrowDown className="text-white" />
                    </div>
                    {isDropdownOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                            <ul>
                                <li
                                    onClick={handleLogout}
                                    className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {/* Small screen toggle button - visible only on small screens */}
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className="focus:outline-none bg-gray-600 p-3 rounded-md hover:bg-gray-500 transition duration-300 ease-in-out md:hidden"
                >
                    {isNavOpen ? <MdClose /> : <MdOutlineMenu />}
                </button>
            </div>

            <div className="flex flex-1">
                {/* Left Navigation */}
                <div
                    className={`bg-gray-200 transition-all duration-300 shadow-md
                        ${isNavOpen ? "block" : "hidden"}
                        md:block ${isCollapsed ? "w-20" : "w-64"} relative h-auto`}
                >
                    <nav className="p-4">
                        <ul>
                            {navItems.map((item, index) => (
                                <NavItem
                                    key={index}
                                    icon={item.icon}
                                    label={item.label}
                                    isCollapsed={isCollapsed}
                                    path={item.path}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1  bg-gray-100 p-2 overflow-auto h-screen">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
