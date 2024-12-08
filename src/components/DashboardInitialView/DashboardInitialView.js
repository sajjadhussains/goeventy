import React from "react";
import welcomeImg from "../../assets/images/welcome.png";
import Image from "next/image";
import Link from "next/link";

const DashboardInitialView = () => {
  return (
    <div className="dashboard-default-view-container">
      <div className="user-info-container">
        <div className="info-content">
          <span className="lbl">Complete your profile</span>
          <span className="lbl">7/10</span>
        </div>
        <div className="info-content">
          <span className="lbl">Fill up your bank info</span>
          <span className="lbl">7/10</span>
        </div>
      </div>
      <div className="dashboard-default-view">
        <div className="img-container">
          <Image src={welcomeImg} alt="welcome" placeholder="blur" />
        </div>
        <div className="default-text-container">
          <h4 className="title">Welcome to Goeventy</h4>
          <div className="subtitle">
            Live your event and start selling in a 5 mins
          </div>
          <div className="btn-container">
            <Link className="btn" href="/createEvent">
              Create Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInitialView;
