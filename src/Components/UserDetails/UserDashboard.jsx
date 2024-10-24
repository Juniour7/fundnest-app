import Logo from "../Assets/Logo.png";
import React from "react";
import Summary from "./Summary";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserDashboard() {
  const [userName, setuserName] = useState("Username");

  return (
    <div className="App">
      <header>
        <div className="header">
          <img src={Logo} alt="" height="100px" width="100px" />
          <h3 className="text-color">User Dashboard</h3>
          {userName}
        </div>
      </header>

      <div className="flex-container">
        <ul>
          <li>
            <a className="text-color" href="#summaryroute">MY ACCOUNT</a>
            <ul className="nestedList">
            <li><Link to="/summary">Summary</Link></li>
            <li><Link to="/my-statement">My Statement</Link></li>
            <li><Link to="/my-statement">My Statement</Link></li>
            </ul>
          </li>
          <li>
            <a className="text-color" href="#verificationroute">VERIFICATION</a>
            <ul className="nestedList">
              <li><a href="#verificationroute">Documents</a></li>
            </ul>
          </li>
          <li>
            <a className="text-color" href="#campaignDetails">PERSONALIZATION</a>
            <ul className="nestedList">
              <li><a href="#campaignDetails">Fundraiser Details</a></li>
              <li><a href="#campaignDetails">Story</a></li>
              <li><a href="#campaignDetails">Images</a></li>
            </ul>
          </li>
        </ul>

        <main>
          <section id="summaryroute">
            <Summary />
          </section>

          <section id="verificationroute">
            <h2>Verification</h2>
            {/* Add content here */}
          </section>

          <section id="campaignDetails">
            <h2>Personalization</h2>
            {/* Add content here */}
          </section>
        </main>
      </div>

      <footer>
        <p><i>For Help, write to us at info@iraady.com</i></p>
      </footer>
    </div>
  );
}

export default UserDashboard;
