import React from "react";
import SideNav from "../SideNav/SideNav";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-bg">
      <SideNav />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
