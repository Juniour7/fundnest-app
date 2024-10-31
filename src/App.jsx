import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


// External Library Imports
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Layout and Common Components
import AdminLayout from "./Components/admindashboard/AdminLayout";
import UserDashBoardLayout from "./Components/UserDashBoardcomponents.js/UserDashBoardLayout";
import Layout from "./Pages/Layout/Layout";

// Pages
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import HowItWorks from "./Pages/HowItWorks";
import Career from "./Pages/Career";
import Blog from "./Pages/Blog";

import ForgotPassword from "./Pages/Password Reset/ForgotPassword";
import ResetPassword from "./Pages/Password Reset/ResetPassword";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsandConditions from "./Pages/TermsandConditions";
import SignIn from "./Pages/SignIn";
import SignUpForm from "./Pages/SignUp";
import FundraisingForm from "./Pages/FundraisingForm";
import AntiMoneyLaundering from "./Pages/Company Policies/AntiMoneyLaundering";
import RefundPolicy from "./Pages/Company Policies/RefundPolicy";
import KnowYourCustomer from "./Pages/Company Policies/KnowYourCustomer";
import Contact from "./Pages/Contact";

// Admin Dashboard Components
import AdminCampaigns from "./Components/admindashboard/AdminCampaigns";
import AdminSummary from "./Components/admindashboard/AdminSummary";
import ListOfUsers from "./Components/admindashboard/ListOfUsers";

// Campaign Components
import CampaignDetail from "./Components/Campaigns/CampaignDetail";
import CampaignList from "./Components/Campaigns/CampaignList";
import CampaignSlider from "./Components/Campaigns/CampaignSlider";
import CreateCampaign from "./Components/Campaigns/CreateCampaign";

// Donation Components
import DonationCreate from "./Components/Donations/DonationCreate";
import DonationDesc from "./Components/Donations/DonationDesc";
import DonationDetail from "./Components/Donations/DonationDetail";
import DonationForm from "./Components/Donations/DonationForm";
import DonationList from "./Components/Donations/DonationList";
import PaymentSuccess from "./Components/Donations/PaymentSuccess";
import PaymentSuccessPage from "./Components/PaymentSuccessPage";

// Transaction Components
import TransactionCreate from "./Components/Transaction/TransactionCreate";
import TransactionDetail from "./Components/Transaction/TransactionDetail";
import TransactionList from "./Components/Transaction/TransactionList";

// User Management Components
import UpdateUser from "./Components/UserDetails/UpdateUser";
import UserCreate from "./Components/UserDetails/UserCreate";
import UserDetail from "./Components/UserDetails/UserDetail";
import UserList from "./Components/UserDetails/UserList";

// Withdrawal Components
import WithdrawalCreate from "./Components/Withdrawal/WithdrawalCreate";
import WithdrawalDetail from "./Components/Withdrawal/WithdrawalDetail";
import WithdrawalList from "./Components/Withdrawal/WithdrawalList";

// Other Components
import CategoryFilter from "./Components/CategoryFilter/CategoryFilter";
import Learning from "./Components/Learning";
import Testimonial from "./Components/Testimonial";

// User Dashboard Components
import CampaignTable from "./Components/UserDashBoardcomponents.js/UserDashboardPages/Campaign/CampaignsTable";
import RecentDonorsTable from "./Components/UserDashBoardcomponents.js/UserDashboardPages/RecentDonorsTable";
import { CampaignProvider } from "./Components/UserDashBoardcomponents.js/UserDashboardPages/Campaign/CampaignContext";
import { Summary } from "./Components/UserDashBoardcomponents.js/Summary";

// Tables and Progress Components
import DonationsDetailTable from "./DonationsDetailTable";
import MonthlyProgress from "./MonthlyProgressForDonations";
import TransactionDetailsTable from "./TransactionDetailsTable";

// Service Imports
import { PrivateAdminRoutes, PrivateRoute } from "./userService";


import {
  
  UserTransactions,

  UserDocuments,
  
} from "./Components/UserDashBoardcomponents.js/UserDashboardPages";

function App() {
  return (
    <HelmetProvider>
    
      <div className="App">
        <CampaignProvider>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />}  />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/career" element={<Career />} />
                <Route path="/blog" element={<Blog />} />

                <Route path="/know-your-customer" element={<KnowYourCustomer />} />
                <Route path="/anti-money-laundering" element={<AntiMoneyLaundering />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsandConditions />} />
                <Route path="/donation-create" element={<DonationCreate />} />
                <Route path="/donation-desc/:campaignId" element={<DonationDesc />} />
                <Route path="/donation-form/:id" element={<DonationForm />} />
                <Route path="/campaign" element={<CategoryFilter />} />

              </Route>
              


              <Route path="/MonthlyProgress" element={<MonthlyProgress/>} />
              
              <Route path="/request-password-reset/" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/fundraising-form" element={<FundraisingForm />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUpForm />} />
              <Route path="/summary" element={<Summary />} />
              
              <Route path="/user-list" element={<UserList />} />
              <Route path="/user-detail/:id" element={<UserDetail />} />
              <Route path="/update-user/:id" element={<UpdateUser />} />
              <Route path="/campaign-list" element={<CampaignList />} />
              <Route path="/campaign-detail/:id" element={<CampaignDetail />} />
              <Route path="/donation-list" element={<DonationList />} />
              <Route path="/donation-detail/:id" element={<DonationDetail />} />
              <Route path="/withdrawal-list" element={<WithdrawalList />} />
              <Route path="/payment-success" element={<PaymentSuccessPage />} />
              <Route
                path="/user-dashboard/*"
                element={
                  <PrivateRoute>
                    <Routes>
                      <Route path="/" element={<UserDashBoardLayout />}>
                        <Route index element={<Summary />} />
                        <Route path="summary" element={<Summary />} />
                       
               
                        <Route path="statement" element={<UserTransactions />} />
                        <Route path="donations" element={<RecentDonorsTable />} />
                
                  
                        <Route path="/campaign-detail/:id" element={<CampaignDetail />} />
                        <Route path="FundraiserDetails" element={<CampaignTable />} />
                        <Route path="documents" element={<UserDocuments />} />
                      </Route>
                    </Routes>
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin-dashboard/*"
                element={
                  <PrivateAdminRoutes>
                    <Routes>
                      <Route path="/" element={<AdminLayout />}>
                        <Route index element={<AdminSummary />} />
                        <Route path="/AdminSummary" element={<AdminSummary />} />
                        <Route path="/AdminCampaigns" element={<AdminCampaigns />} />
                        <Route path="/ListOfUsers" element={<ListOfUsers />} />
                        <Route path="/campaign-detail/:id" element={<CampaignDetail />} />
                        <Route path="/TransactionDetailsTable" element={<TransactionDetailsTable />} />
                        <Route path="/DonationsDetailTable" element={<DonationsDetailTable />} />
                      </Route>
                    </Routes>
                  </PrivateAdminRoutes>
                }
              />
              <Route path="/withdrawal-detail/:id" element={<WithdrawalDetail />} />
              <Route path="/transaction-list" element={<TransactionList />} />
              <Route path="/transaction-detail/:id" element={<TransactionDetail />} />
              <Route path="/user-create" element={<UserCreate />} />
              <Route path="/campaign-create" element={<CreateCampaign />} />
              <Route path="/withdrawal-create" element={<WithdrawalCreate />} />
              <Route path="/transaction-create" element={<TransactionCreate />} />
              <Route path="/campaign-slider" element={<CampaignSlider />} />
              
              
            </Routes>
          </Router>
        </CampaignProvider>
        <ToastContainer />
      </div>
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
