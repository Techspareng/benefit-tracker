import React from "react";
import DashboardCards from "../components/DashboardCards";
import UserManagement from "../components/UserManagement";

const Dashboard = () => {
  const role = localStorage.getItem("role");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome, {role.replace("_", " ")}</h1>
      <DashboardCards />
      {role === "super_admin" && <UserManagement />}
    </div>
  );
};

export default Dashboard;