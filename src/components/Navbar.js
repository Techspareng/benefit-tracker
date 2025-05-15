import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  // Get user info from localStorage or your auth context
  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("userName") || "User";
  
  const getRoleTitle = () => {
    switch(role) {
      case "super_admin":
        return "Super Admin Dashboard";
      case "benefit_manager":
        return "Benefit Manager Dashboard";
      case "process_manager":
        return "Process Manager Dashboard";
      case "audit_manager":
        return "Audit Manager Dashboard";
      case "account_manager":
        return "Account Manager Dashboard";
      default:
        return role?.startsWith("hod_") 
          ? "Department Head Dashboard" 
          : "Dashboard";
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="bg-white shadow-sm p-4 pl-10 flex justify-between items-center">
      <div className="flex items-center">
        <button 
          className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => document.documentElement.classList.toggle('sidebar-open')}
        >
          <i className="fas fa-bars"></i>
        </button>
        <h2 className="text-xl font-semibold ml-4">{getRoleTitle()}</h2>
      </div>

      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <div className="relative">
          <button className="text-gray-600 hover:text-gray-900">
            <i className="fas fa-bell"></i>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center space-x-3 focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img 
              src={`https://ui-avatars.com/api/?name=${userName.replace(/\s+/g, '+')}&background=random`}
              alt={userName}
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-700">{userName}</p>
              <p className="text-xs text-gray-500">
                {role?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </p>
            </div>
            <i className={`fas fa-chevron-down text-xs text-gray-500 transition-transform duration-200 ${
              isDropdownOpen ? 'transform rotate-180' : ''
            }`}></i>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <button 
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => navigate('/profile')}
              >
                <i className="fas fa-user mr-2"></i>
                Profile
              </button>
              <button 
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => navigate('/settings')}
              >
                <i className="fas fa-cog mr-2"></i>
                Settings
              </button>
              <hr className="my-1" />
              <button 
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;