import React from 'react';
import './Dashboard.css';
import Logo from "../Assets/Logo.png";
import Campaigns from './Learning';
import {useState} from 'react';

function AdminDashboard() {
  const [userName, setuserName] = useState("Username");
  return (
    <div className="App">
      <header>
        <div className="header">
          <img src={Logo} alt="" height="100px" width="100px" />
          <h3 className="text-color">Admin Dashboard</h3>
          {userName}
        </div>
      </header>

      <div className="flex-container">
        <ul>
          <li>
            <a className="text-color" href="#campaignsroute">CAMPAIGNS</a>
            <ul className="nestedList">
              <li><a href="#fundraiserroute">Current Campaigns</a></li>
              <li><a href="#fundraiserroute">Past Campaigns</a></li>
            </ul>
          </li>
          <li>
            <a className="text-color" href="#verificationroute">REGISTERED USERS</a>
            <ul className="nestedList">
              <li><a href="#verificationroute">Users</a></li>
              <li><a href="#verificationroute">Organizations</a></li>
            </ul>
          </li>
          <li>
            <a className="text-color" href="#campaignDetails">ACCOUNTS DETAILS</a>
            <ul className="nestedList">
              <li><a href="#campaignDetails">Total Amount Raised</a></li>
              <li><a href="#campaignDetails">Countries Represented</a></li>
            </ul>
          </li>
        </ul>

        <main>
          <section id="campaignsroute">
            <h2>Campaigns</h2>
            <p>Running campaigns will go here</p>
          </section>

          <section id="verificationroute">
            <h2>Registered Users</h2>
            <p>Registered Users will be seen here</p>
          </section>

          <section id="campaignDetails">
            <h2>Accounts Details</h2>
            <p>Countries of origin and total amountraised on the platform will be seen here</p>
          </section>
        </main>
      </div>

      <footer>
        <p>Footer Section</p>
      </footer>
    </div>
  );
}
export default AdminDashboard;
