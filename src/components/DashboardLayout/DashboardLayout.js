import React from "react";
import SideNav from "../SideNav/SideNav";
import DashboardTopNav from "../DashboardTopNav/DashboardTopNav";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-bg">
      <SideNav />
      <DashboardTopNav />
      <div className="dashboard-content">{children}</div>
    </div>
  );
};

export default DashboardLayout;
