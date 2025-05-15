import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const role = localStorage.getItem("role");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-6 z-50 p-2 rounded bg-blue-600 text-white"
      >
        <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-blue-800 text-white transform transition-transform duration-300 ease-in-out
        lg:transform-none
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center space-x-2 p-4 mb-8">
            <i className="fas fa-link text-2xl"></i>
            <h1 className="text-xl font-bold">BenefitChain</h1>
        </div>
        <nav>
            {/* Role-Specific Dashboard Links */}
            {role === "super_admin" && (
                <>
                    {/* Dashboard Link */}
                    <Link to="/dashboard/super-admin" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Dashboard
                    </Link>

                    {/* User Management Section */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            User Management
                        </p>
                        <Link to="/users" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-users-cog mr-3"></i>
                            Manage Users
                        </Link>
                        <Link to="/roles" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-user-shield mr-3"></i>
                            Roles & Permissions
                        </Link>
                        <Link to="/departments" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-building mr-3"></i>
                            Departments
                        </Link>
                    </div>

                    {/* System Configuration */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            System Settings
                        </p>
                        <Link to="/system/configuration" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-cogs mr-3"></i>
                            System Configuration
                        </Link>
                        <Link to="/system/workflow" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-project-diagram mr-3"></i>
                            Workflow Settings
                        </Link>
                        <Link to="/system/audit-logs" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-history mr-3"></i>
                            Audit Logs
                        </Link>
                    </div>

                    {/* Reports & Analytics */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Reports & Analytics
                        </p>
                        <Link to="/analytics/system" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-line mr-3"></i>
                            System Analytics
                        </Link>
                        <Link to="/analytics/department" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-bar mr-3"></i>
                            Department Analytics
                        </Link>
                        <Link to="/reports/system" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-file-alt mr-3"></i>
                            System Reports
                        </Link>
                    </div>

                    {/* Security */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Security
                        </p>
                        <Link to="/security/access-control" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-shield-alt mr-3"></i>
                            Access Control
                        </Link>
                        <Link to="/security/activity-logs" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-list-alt mr-3"></i>
                            Activity Logs
                        </Link>
                    </div>

                    {/* Settings & Profile */}
                    <div className="mt-auto pt-4 border-t border-blue-700">
                        <Link to="/settings" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-cog mr-3"></i>
                            Settings
                        </Link>
                        <button 
                            onClick={() => {
                                localStorage.clear();
                                window.location.href = '/login';
                            }}
                            className="w-full flex items-center p-3 hover:bg-blue-700 rounded text-red-300 hover:text-red-100"
                        >
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Logout
                        </button>
                    </div>
                </>
            )}
            {role === "benefit_manager" && (
                <Link to="/dashboard/benefit-manager" className="flex items-center p-3 hover:bg-blue-700 rounded">
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </Link>
            )}
            {role === "process_manager" && (
                <>
                    {/* Dashboard Link */}
                    <Link to="/dashboard/process-manager" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Dashboard
                    </Link>

                    {/* Request Management Section */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Request Management
                        </p>
                        <Link to="/process/requests/pending" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-clock mr-3"></i>
                            Pending Reviews
                        </Link>
                        <Link to="/process/requests/inprogress" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-spinner mr-3"></i>
                            In Progress
                        </Link>
                        <Link to="/process/requests/completed" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-check-circle mr-3"></i>
                            Completed Reviews
                        </Link>
                    </div>

                    {/* Analytics Section */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Analytics
                        </p>
                        <Link to="/process/performance" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-line mr-3"></i>
                            Performance Metrics
                        </Link>
                        <Link to="/process/reports" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-file-alt mr-3"></i>
                            Reports
                        </Link>
                    </div>

                    {/* Settings & Profile */}
                    <div className="mt-auto pt-4 border-t border-blue-700">
                        <Link to="/process/settings" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-cog mr-3"></i>
                            Settings
                        </Link>
                        <button 
                            onClick={() => {
                                localStorage.clear();
                                window.location.href = '/login';
                            }}
                            className="w-full flex items-center p-3 hover:bg-blue-700 rounded text-red-300 hover:text-red-100"
                        >
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Logout
                        </button>
                    </div>
                </>
            )}
            {(role === "hod_benefit") && (
                <Link to="/dashboard/hod-benefit" className="flex items-center p-3 hover:bg-blue-700 rounded">
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Benefit Department
                </Link>
            )}
            {role === "hod_process" && (
                <>
                    {/* Dashboard Link */}
                    <Link to="/dashboard/hod-process" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Process Department
                    </Link>

                    {/* Analytics Link */}
                    <Link to="/department/process/analytics" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-chart-line mr-3"></i>
                        Department Analytics
                    </Link>

                    {/* Request Management */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Request Management
                        </p>
                        <Link to="/department/process/requests/pending" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-clock mr-3"></i>
                            Pending Reviews
                        </Link>
                        <Link to="/department/process/requests/inprogress" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-spinner mr-3"></i>
                            In Progress
                        </Link>
                        <Link to="/department/process/requests/completed" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-check-circle mr-3"></i>
                            Completed Reviews
                        </Link>
                    </div>

                    {/* Staff Management */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Staff Management
                        </p>
                        <Link to="/department/process/staff/overview" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-users mr-3"></i>
                            Staff Overview
                        </Link>
                        <Link to="/department/process/staff/performance" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-line mr-3"></i>
                            Performance Metrics
                        </Link>
                    </div>

                    {/* Reports Section */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Reports
                        </p>
                        <Link to="/department/process/reports" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-file-alt mr-3"></i>
                            Generate Reports
                        </Link>
                    </div>

                    {/* Settings & Logout */}
                    <div className="mt-auto pt-4 border-t border-blue-700">
                        <Link to="/setting" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-cog mr-3"></i>
                            Settings
                        </Link>
                        <button 
                            onClick={() => {
                                localStorage.clear();
                                window.location.href = '/login';
                            }}
                            className="w-full flex items-center p-3 hover:bg-blue-700 rounded text-red-300 hover:text-red-100"
                        >
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Logout
                        </button>
                    </div>
                </>
            )}
            {role === "hod_audit" && (
                <>
                    {/* Dashboard Link */}
                    <Link to="/dashboard/hod-audit" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Audit Department
                    </Link>

                    

                    {/* Analytics Links */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Analytics Dashboard
                        </p>
                        <Link to="/department/audit/analytics" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-line mr-3"></i>
                            Department Analytics
                        </Link>
                        <Link to="/department/audit/performance" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-pie mr-3"></i>
                            Performance Overview
                        </Link>
                    </div>

                    {/* Request Management - Enhanced */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Request Management
                        </p>
                        <Link to="/department/audit/reviews/pending" className="flex items-center justify-between p-3 hover:bg-blue-700 rounded">
                            <div className="flex items-center">
                                <i className="fas fa-clock mr-3"></i>
                                Pending Reviews
                            </div>
                        </Link>
                        <Link to="/department/audit/reviews/inprogress" className="flex items-center justify-between p-3 hover:bg-blue-700 rounded">
                            <div className="flex items-center">
                                <i className="fas fa-spinner mr-3"></i>
                                In Progress
                            </div>
                        </Link>
                        <Link to="/department/audit/reviews/completed" className="flex items-center justify-between p-3 hover:bg-blue-700 rounded">
                            <div className="flex items-center">
                                <i className="fas fa-check-circle mr-3"></i>
                                Completed Reviews
                            </div>
                        </Link>
                    </div>

          

                    {/* Reports Section - Enhanced */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Reports & Documentation
                        </p>
                        <Link to="/department/audit/reports" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-file-alt mr-3"></i>
                            Audit Reports
                        </Link>
                       
                    </div>

                    {/* Staff Management - New Section */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Staff Management
                        </p>
                        <Link to="/department/audit/team-overview" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-users mr-3"></i>
                            Team Overview
                        </Link>
                        
                    </div>

                    {/* Settings & Profile - Enhanced */}
                    <div className="mt-auto pt-4 border-t border-blue-700">
                        <Link to="/settings" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-cog mr-3"></i>
                            Settings
                        </Link>
                       
                        <button 
                            onClick={() => {
                                localStorage.clear();
                                window.location.href = '/login';
                            }}
                            className="w-full flex items-center p-3 hover:bg-blue-700 rounded text-red-300 hover:text-red-100"
                        >
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Logout
                        </button>
                    </div>
                </>
            )}
            {role === "hod_account" && (
                <>
                    {/* Dashboard Link */}
                    <Link to="/dashboard/hod-account" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Account Department
                    </Link>

                    {/* Department Analytics */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Department Analytics
                        </p>
                        <Link to="/department/account/analytics" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-line mr-3"></i>
                            Department Overview
                        </Link>
                        <Link to="/department/account/performance" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-pie mr-3"></i>
                            Performance Metrics
                        </Link>
                    </div>

                   
                    {/* Transaction Management */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Transaction Management
                        </p>
                        <Link to="/account/transactions/pending" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-clock mr-3"></i>
                            Pending Transactions
                        </Link>
                        <Link to="/account/transactions/approved" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-check-circle mr-3"></i>
                            Approved Transactions
                        </Link>
                        <Link to="/account/transactions/history" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-history mr-3"></i>
                            Transaction History
                        </Link>
                    </div>

                    {/* Financial Reports */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Financial Reports
                        </p>
                        <Link to="/account/reports/daily" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-calendar-day mr-3"></i>
                            Daily Reports
                        </Link>
                        <Link to="/account/reports/monthly" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-calendar-alt mr-3"></i>
                            Monthly Reports
                        </Link>
                        <Link to="/account/reports/custom" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-file-invoice-dollar mr-3"></i>
                            Custom Reports
                        </Link>
                    </div>

                  

                    {/* Account Management */}
                   {/* Account Management */}
<div className="mt-4">
    <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
        Account Management
    </p>
    <Link to="/account/reconciliation" className="flex items-center p-3 hover:bg-blue-700 rounded">
        <i className="fas fa-balance-scale mr-3"></i>
        Reconciliation
    </Link>
    <Link to="/account/budgeting" className="flex items-center p-3 hover:bg-blue-700 rounded">
        <i className="fas fa-piggy-bank mr-3"></i>
        Budgeting
    </Link>
    <Link to="/account/payment-schedule" className="flex items-center p-3 hover:bg-blue-700 rounded">
        <i className="fas fa-calendar-check mr-3"></i>
        Payment Schedule
    </Link>
    <Link to="/account/audit-trail" className="flex items-center p-3 hover:bg-blue-700 rounded">
        <i className="fas fa-receipt mr-3"></i>
        Audit Trail
    </Link>
</div>

                    {/* Reports & Documentation */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Reports
                        </p>
                        <Link to="/department/account/reports/financial" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-file-invoice-dollar mr-3"></i>
                            Financial Reports
                        </Link>
                        <Link to="/department/account/reports/audit" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-file-alt mr-3"></i>
                            Audit Reports
                        </Link>
                    </div>

                    {/* Settings & Logout */}
                    <div className="mt-auto pt-4 border-t border-blue-700">
                        <Link to="/department/account/settings" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-cog mr-3"></i>
                            Department Settings
                        </Link>
                        <button 
                            onClick={() => {
                                localStorage.clear();
                                window.location.href = '/login';
                            }}
                            className="w-full flex items-center p-3 hover:bg-blue-700 rounded text-red-300 hover:text-red-100"
                        >
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Logout
                        </button>
                    </div>
                </>
            )}

            {/* Super Admin Links */}
            {role === "super_admin" && (
                <Link to="/users" className="flex items-center p-3 hover:bg-blue-700 rounded">
                    <i className="fas fa-users-cog mr-3"></i>
                    User Management
                </Link>
            )}

            {/* Benefit Manager Links */}
            {role === "benefit_manager" && (
                <>
                    <Link to="/submit-request" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-file-upload mr-3"></i>
                        Submit Request
                    </Link>
                    <Link to="/pending-request" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-clock mr-3"></i>
                        Pending Requests
                    </Link>
                    <Link to="/approved-request" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-check-circle mr-3"></i>
                        Approved Requests
                    </Link>
                    <Link to="/generate-report" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-file-alt mr-3"></i>
                        Generate Reports
                    </Link>
                </>
            )}

           

          

            {/* HOD Benefit Department Links */}
            {role === "hod_benefit" && (
                <>
                    {/* Analytics Link - Update to match route */}
                    <Link to="/department/benefit/staff/performance" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-chart-line mr-3"></i>
                        Department Analytics
                    </Link>

                    {/* Requests Management */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Request Management
                        </p>
                        <Link to="/department/benefit/requests/pending" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-clock mr-3"></i>
                            Pending Requests
                        </Link>
                        <Link to="/department/benefit/requests/approved" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-check-circle mr-3"></i>
                            Approved Requests
                        </Link>
                        <Link to="/department/benefit/requests/all" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-times-circle mr-3"></i>
                            All Requests
                        </Link>
                    </div>

                    {/* Staff Management */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Staff Management
                        </p>
                        <Link to="/department/benefit/staff/overview" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-users mr-3"></i>
                            Staff Overview
                        </Link>
                        <Link to="/department/benefit/staff/performance" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-line mr-3"></i>
                            Performance Metrics
                        </Link>
                    </div>

                    {/* Reports Section */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Reports
                        </p>
                        <Link to="/department/benefit/reports" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-file-alt mr-3"></i>
                            Generate Reports
                        </Link>
                    </div>

                    {/* Settings & Logout */}
                    <div className="mt-auto pt-4 border-t border-blue-700">
                        <Link to="/settings" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-cog mr-3"></i>
                            Settings
                        </Link>
                        <button 
                            onClick={() => {
                                localStorage.clear();
                                window.location.href = '/login';
                            }}
                            className="w-full flex items-center p-3 hover:bg-blue-700 rounded text-red-300 hover:text-red-100"
                        >
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Logout
                        </button>
                    </div>
                </>
            )}
            {role === "audit_manager" && (
                <>
                    {/* Dashboard Link */}
                    <Link to="/dashboard/audit-manager" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Audit Dashboard
                    </Link>

                    {/* Request Management Section */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Audit Reviews
                        </p>
                        <Link to="/audit/pending" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-clock mr-3"></i>
                            Pending Audits
                        </Link>
                        <Link to="/audit/active" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-search mr-3"></i>
                            Active Audits
                        </Link>
                        <Link to="/audit/completed-audits" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-check-circle mr-3"></i>
                            Completed Audits
                        </Link>
                    </div>

                    {/* Compliance Section */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Compliance
                        </p>
                        <Link to="/audit/compliance" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-shield-alt mr-3"></i>
                            Compliance Metrics
                        </Link>
                        <Link to="/audit/compliance/risks" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-exclamation-triangle mr-3"></i>
                            Risk Assessment
                        </Link>
                        <Link to="/audit/compliance/policies" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-book mr-3"></i>
                            Audit Policies
                        </Link>
                    </div>

                    {/* Analytics Section */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Analytics & Reports
                        </p>
                        <Link to="/audit/analytics" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-line mr-3"></i>
                            Performance Analytics
                        </Link>
                        <Link to="/audit/reports/compliance" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-file-alt mr-3"></i>
                            Compliance Reports
                        </Link>
                        <Link to="/audit/reports/trends" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-chart-bar mr-3"></i>
                            Audit Trends
                        </Link>
                    </div>

                    {/* Settings & Profile */}
                    <div className="mt-auto pt-4 border-t border-blue-700">
                        <Link to="/settings" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-cog mr-3"></i>
                            Settings
                        </Link>
                        <Link to="/audit/profile" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-user-shield mr-3"></i>
                            Auditor Profile
                        </Link>
                        <button 
                            onClick={() => {
                                localStorage.clear();
                                window.location.href = '/login';
                            }}
                            className="w-full flex items-center p-3 hover:bg-blue-700 rounded text-red-300 hover:text-red-100"
                        >
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Logout
                        </button>
                    </div>
                </>
            )}
            {role === "account_manager" && (
                <>
                    {/* Dashboard Link */}
                    <Link to="/dashboard/account-manager" className="flex items-center p-3 hover:bg-blue-700 rounded">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Account Dashboard
                    </Link>

                    {/* Transaction Management */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Transaction Management
                        </p>
                        <Link to="/account/transactions/pending" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-clock mr-3"></i>
                            Pending Transactions
                        </Link>
                        <Link to="/account/transactions/approved" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-check-circle mr-3"></i>
                            Approved Transactions
                        </Link>
                        <Link to="/account/transactions/history" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-history mr-3"></i>
                            Transaction History
                        </Link>
                    </div>

                    {/* Financial Reports */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            Financial Reports
                        </p>
                        <Link to="/account/reports/daily" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-calendar-day mr-3"></i>
                            Daily Reports
                        </Link>
                        <Link to="/account/reports/monthly" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-calendar-alt mr-3"></i>
                            Monthly Reports
                        </Link>
                        <Link to="/account/reports/custom" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-file-invoice-dollar mr-3"></i>
                            Custom Reports
                        </Link>
                    </div>

                  

                    {/* Account Management */}
                   {/* Account Management */}
<div className="mt-4">
    <p className="px-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
        Account Management
    </p>
    <Link to="/account/reconciliation" className="flex items-center p-3 hover:bg-blue-700 rounded">
        <i className="fas fa-balance-scale mr-3"></i>
        Reconciliation
    </Link>
    <Link to="/account/budgeting" className="flex items-center p-3 hover:bg-blue-700 rounded">
        <i className="fas fa-piggy-bank mr-3"></i>
        Budgeting
    </Link>
    <Link to="/account/payment-schedule" className="flex items-center p-3 hover:bg-blue-700 rounded">
        <i className="fas fa-calendar-check mr-3"></i>
        Payment Schedule
    </Link>
    <Link to="/account/audit-trail" className="flex items-center p-3 hover:bg-blue-700 rounded">
        <i className="fas fa-receipt mr-3"></i>
        Audit Trail
    </Link>
</div>

                    {/* Settings & Profile */}
                    <div className="mt-auto pt-4 border-t border-blue-700">
                        <Link to="/account/settings" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-cog mr-3"></i>
                            Settings
                        </Link>
                        <Link to="/account/profile" className="flex items-center p-3 hover:bg-blue-700 rounded">
                            <i className="fas fa-user-circle mr-3"></i>
                            Profile
                        </Link>
                        <button 
                            onClick={() => {
                                localStorage.clear();
                                window.location.href = '/login';
                            }}
                            className="w-full flex items-center p-3 hover:bg-blue-700 rounded text-red-300 hover:text-red-100"
                        >
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Logout
                        </button>
                    </div>
                </>
            )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;