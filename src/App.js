import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Requests from "./pages/Requests";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SubmitRequest from './pages/SubmitRequest';
import PendingRequest from './pages/PendingRequest';
import ApprovedRequest from './pages/ApprovedRequest';
// import RejectedRequest from './pages/RejectedRequest';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dashboard from './pages/Dashboard';
import BenefitManagerDashboard from './pages/dashboards/BenefitManager';
import ProcessManagerDashboard from './pages/dashboards/ProcessManager';
import AuditManagerDashboard from './pages/dashboards/AuditManager';
import AccountManagerDashboard from './pages/dashboards/AccountManager';
import HodDashboard from './pages/dashboards/HodDashboard';
import DepartmentHODDashboard from './pages/dashboards/DepartmentHOD';
import HODBenefitDepartment from './pages/dashboards/HODBenefitDepartment';
import ErrorPage from './pages/ErrorPage';
import HODProcessDepartment from './pages/dashboards/HODProcessDepartment';
import HODAuditDepartment from './pages/dashboards/HODAuditDepartment';
import HODAccountDepartment from './pages/dashboards/HODAccountDepartment';
import PerformanceMetrics from './pages/department/benefit/staff/PerformanceMetrics';
import BenefitDepartmentReport from './pages/department/benefit/reports/BenefitDepartmentReport';
import StaffPerformance from './pages/department/benefit/staff/StaffPerformance';
import GenerateReport from './pages/department/benefit/reports/GenerateReport';
import Settings from './pages/department/benefit/settings/Settings';
import RequestOverview from './pages/department/benefit/requests/RequestOverview';
import PendingRequests from './pages/department/benefit/requests/PendingRequests';
import ApprovedRequests from './pages/department/benefit/requests/ApprovedRequests';
import AllRequests from './pages/department/benefit/requests/AllRequests';
import StaffOverview from './pages/department/benefit/staff/StaffOverview';
import PendingReviews from './pages/process/requests/PendingReviews';
import InProgressReviews from './pages/process/requests/InProgressReviews';
import CompletedReviews from './pages/process/requests/CompletedReviews';
import ProcessPerformanceMetrics from './pages/process/performance/PerformanceMetrics';
import ProcessReports from './pages/process/reports/Reports';
import DepartmentAnalytics from './pages/department/process/analytics/DepartmentAnalytics';
import ProcessPendingReviews from './pages/department/process/requests/PendingReviews';
import ProcessStaffOverview from './pages/department/process/staff/StaffOverview';
import ProcessInProgressReviews from './pages/department/process/requests/ProcessInProgressReviews';
import ProcessCompletedReviews from './pages/department/process/requests/ProcessCompletedReviews';
import ProcessStaffPerformance from './pages/department/process/staff/ProcessStaffPerformance';
import ProcessGenerateReport from './pages/department/process/reports/GenerateReport';
import AuditPendingReviews from './pages/audit/requests/AuditPendingReviews';
import CompletedAudits from './pages/audit/requests/CompletedAudits';
import AuditReports from './pages/audit/reports/AuditReports';
import AuditCompletedReviews from './pages/audit/requests/AuditCompletedReviews';
import ActiveAudits from "./pages/audit/requests/ActiveAudits";
import ComplianceMetrics from './pages/audit/compliance/ComplianceMetrics';
import RiskAssessment from './pages/audit/compliance/RiskAssessment';
import AuditPolicies from './pages/audit/compliance/AuditPolicies';

import AuditPerformanceAnalytics from './pages/audit/analytics/PerformanceAnalytics';
import AuditComplianceReports from './pages/audit/reports/ComplianceReports';
import AuditTrends from './pages/audit/reports/AuditTrends';
import AuditorProfile from './pages/audit/profile/AuditorProfile';
import AuditDepartmentAnalytics from "./pages/audit/department/DepartmentAnalytics";
import AuditHODPerformanceOverview from "./pages/audit/department/PerformanceOverview";
import AuditHODPendingReviews from './pages/audit/department/reviews/AuditHODPendingReviews';
import AuditHODCompletedReviews from './pages/audit/department/reviews/AuditHODCompletedReviews';
import AuditHODInProgressReviews from "./pages/audit/department/reviews/AuditHODInProgressReviews";
import TeamOverview from "./pages/audit/staff/TeamOverview";

import AccountTransactions from './pages/account/transactions/AccountTransactions';
import PendingTransactions from './pages/account/transactions/PendingTransactions';
import ApprovedTransactions from './pages/account/transactions/ApprovedTransactions';
import TransactionHistory from './pages/account/transactions/TransactionHistory';
import DailyReports from './pages/account/reports/DailyReports';
import MonthlyReports from './pages/account/reports/MonthlyReports';
import CustomReports from './pages/account/reports/CustomReports';
import Reconciliation from './pages/account/management/Reconciliation';
import Budgeting from './pages/account/management/Budgeting';
import PaymentSchedule from './pages/account/management/PaymentSchedule';
import AuditTrail from './pages/account/management/AuditTrail';

import AccountOverview from './pages/department/account/analytics/AccountOverview';
import AccountPerformance from './pages/department/account/analytics/AccountPerformance';
import AccountPendingTransactions from './pages/department/account/transactions/PendingTransactions';
// import AccountApprovedTransactions from './pages/department/account/transactions/ApprovedTransactions';
import AccountTransactionHistory from './pages/department/account/transactions/TransactionHistory';
// import AccountDailyReports from './pages/department/account/reports/DailyReports';
// import AccountMonthlyReports from './pages/department/account/reports/MonthlyReports';
// import AccountCustomReports from './pages/department/account/reports/CustomReports';
// import AccountReconciliation from './pages/department/account/management/Reconciliation';
// import AccountBudgeting from './pages/department/account/management/Budgeting';
// import AccountPaymentSchedule from './pages/department/account/management/PaymentSchedule';
// import AccountAuditTrail from './pages/department/account/management/AuditTrail';
// import AccountFinancialReports from './pages/department/account/reports/FinancialReports';
// import AccountAuditReports from './pages/department/account/reports/AuditReports';
// import AccountSettings from './pages/department/account/settings/Settings';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = localStorage.getItem("role");
  
  if (!role) {
    return <Navigate to="/" />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    // Redirect to appropriate dashboard based on role
    const dashboardPath = getDashboardPathForRole(role);
    return <Navigate to={dashboardPath} />;
  }

  return children;
};

const getDashboardPathForRole = (role) => {
  switch(role) {
    case "super_admin":
      return "/dashboard";
    case "benefit_manager":
      return "/dashboard/benefit-manager";
    case "process_manager":
      return "/dashboard/process-manager";
    case "audit_manager":
      return "/dashboard/audit-manager";
    case "account_manager":
      return "/dashboard/account-manager";
    case "hod_benefit":
      return "/dashboard/hod-benefit";  // This is correct
    case "hod_process":
      return "/dashboard/hod-process";
    case "hod_audit":
      return "/dashboard/hod-audit";
    case "hod_account":
      return "/dashboard/hod-account";
    default:
      return "/error";
  }
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex min-h-screen">
                  <Sidebar />
                  <div className="flex-1 flex flex-col">
                    <Navbar />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                      <Routes>
                        {/* Role-specific Dashboard Routes */}
                        <Route 
                          path="/dashboard" 
                          element={
                            <ProtectedRoute allowedRoles={["super_admin"]}>
                              <Dashboard />
                            </ProtectedRoute>
                          } 
                        />
                        <Route path="/dashboard/benefit-manager" element={<BenefitManagerDashboard />} />
                        <Route path="/dashboard/process-manager" element={<ProcessManagerDashboard />} />
                        <Route 
                          path="/dashboard/hod-benefit" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_benefit"]}>
                              <HODBenefitDepartment />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/dashboard/hod-process" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_process"]}>
                              <HODProcessDepartment />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/dashboard/hod-audit" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_audit"]}>
                              <HODAuditDepartment />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/dashboard/hod-account" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_account"]}>
                              <HODAccountDepartment />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/dashboard/audit-manager" 
                          element={
                            <ProtectedRoute allowedRoles={["audit_manager"]}>
                              <AuditManagerDashboard />
                            </ProtectedRoute>
                          } 
                        />
                        
                        {/* Default Dashboard Route */}
                        <Route path="/dashboard" element={
                          <Navigate to={getDashboardPathForRole(localStorage.getItem("role"))} replace />
                        } />
                        
                        {/* Catch all route */}
                        <Route path="*" element={<ErrorPage />} />
                        
                        {/* Other Routes */}
                        <Route path="/requests" element={<Requests />} />
                        <Route path="/submit-request" element={<SubmitRequest />} />
                        <Route path="/pending-request" element={<PendingRequest />} />
                        <Route path="/approved-request" element={<ApprovedRequest />} />
                        {/* <Route path="/rejected-request" element={<RejectedRequest />} /> */}


                        <Route path="/generate-report" element={<GenerateReport />} />
                        <Route 
                          path="/department/benefit/staff/performance" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_benefit"]}>
                              <PerformanceMetrics />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/department/benefit/reports" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_benefit"]}>
                              <BenefitDepartmentReport />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/department/benefit/settings" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_benefit"]}>
                              <Settings />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/department/benefit/requests/overview" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_benefit"]}>
                              <RequestOverview />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/department/benefit/requests/pending" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_benefit"]}>
                              <PendingRequests />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/department/benefit/requests/approved" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_benefit"]}>
                              <ApprovedRequests />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/department/benefit/requests/all" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_benefit"]}>
                              <AllRequests />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/department/benefit/staff/overview" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_benefit"]}>
                              <StaffOverview />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/process/requests/pending" 
                          element={
                            <ProtectedRoute allowedRoles={["process_manager"]}>
                              <PendingReviews />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/process/requests/inprogress" 
                          element={
                            <ProtectedRoute allowedRoles={["process_manager"]}>
                              <InProgressReviews />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/process/requests/completed" 
                          element={
                            <ProtectedRoute allowedRoles={["process_manager"]}>
                              <CompletedReviews />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/process/performance" 
                          element={
                            <ProtectedRoute allowedRoles={["process_manager"]}>
                              <ProcessPerformanceMetrics />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/process/reports" 
                          element={
                            <ProtectedRoute allowedRoles={["process_manager"]}>
                              <ProcessReports />
                            </ProtectedRoute>
                          } 
                        />
                        <Route 
                          path="/department/process/analytics" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_process"]}>
                              <DepartmentAnalytics />
                            </ProtectedRoute>
                          }
                        />
                        <Route 
                          path="/department/process/requests/*" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_process"]}>
                              <Routes>
                                <Route path="pending" element={<ProcessPendingReviews />} />
                                <Route path="inprogress" element={<ProcessInProgressReviews />} />
                                <Route path="completed" element={<ProcessCompletedReviews />} />
                              </Routes>
                            </ProtectedRoute>
                          }
                        />
                        <Route 
                          path="/department/process/staff/*" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_process"]}>
                              <Routes>
                                <Route path="overview" element={<ProcessStaffOverview />} />
                                <Route path="performance" element={<ProcessStaffPerformance />} />
                              </Routes>
                            </ProtectedRoute>
                          }
                        />
                        <Route 
                          path="/department/process/reports" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_process"]}>
                              <ProcessGenerateReport />
                            </ProtectedRoute>
                          }
                        />
                        <Route 
                          path="/audit/*" 
                          element={
                            <ProtectedRoute allowedRoles={["audit_manager"]}>
                              <Routes>
                                <Route path="pending" element={<AuditPendingReviews />} />
                                <Route path="completed" element={<AuditCompletedReviews />} />
                                <Route path="reports" element={<AuditReports />} />
                                <Route path="compliance" element={<ComplianceMetrics />} />
                                <Route path="active" element={<ActiveAudits />} />
                                <Route path="completed-audits" element={<CompletedAudits />} />
                                <Route path="compliance/risks" element={<RiskAssessment />} />
                                <Route path="compliance/policies" element={<AuditPolicies />} />
                                <Route path="analytics" element={<AuditPerformanceAnalytics />} />
                                <Route path="reports/compliance" element={<AuditComplianceReports />} />
                                <Route path="reports/trends" element={<AuditTrends />} />
                                <Route path="profile" element={<AuditorProfile />} />
                              </Routes>
                            </ProtectedRoute>
                          }
                        />

                        {/* HOD Audit Routes */}
                        <Route 
                          path="/department/audit/*" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_audit"]}>
                              <Routes>
                                <Route path="analytics" element={<AuditDepartmentAnalytics />} />
                                <Route path="performance" element={<AuditHODPerformanceOverview />} />
                                <Route path="reviews/pending" element={<AuditHODPendingReviews />} />
                                <Route path="reviews/inprogress" element={<AuditHODInProgressReviews />} />
                                <Route path="reviews/completed" element={<AuditHODCompletedReviews />} />
                                <Route path="reports" element={<AuditReports />} />
                                <Route path="team-overview" element={<TeamOverview />} />
                              </Routes>
                            </ProtectedRoute>
                          }
                        />

                        {/* Account Manager Routes */}
                        <Route 
                          path="/account/*" 
                          element={
                            <ProtectedRoute allowedRoles={["account_manager"]}>
                              <Routes>
                                {/* Transaction Management */}
                                <Route path="transactions">
                                  <Route path="pending" element={<PendingTransactions />} />
                                  <Route path="approved" element={<ApprovedTransactions />} />
                                  <Route path="history" element={<TransactionHistory />} />
                                </Route>

                                {/* Financial Reports */}
                                <Route path="reports">
                                  <Route path="daily" element={<DailyReports />} />
                                  <Route path="monthly" element={<MonthlyReports />} />
                                  <Route path="custom" element={<CustomReports />} />
                                </Route>

                                {/* Account Management */}
                                <Route path="reconciliation" element={<Reconciliation />} />
                                <Route path="budgeting" element={<Budgeting />} />
                                <Route path="payment-schedule" element={<PaymentSchedule />} />
                                <Route path="audit-trail" element={<AuditTrail />} />


                              </Routes>
                            </ProtectedRoute>
                          }
                        />

                        {/* HOD Account Department Routes */}
                        <Route 
                          path="/department/account/*" 
                          element={
                            <ProtectedRoute allowedRoles={["hod_account"]}>
                              <Routes>
                                {/* Analytics */}
                                <Route path="analytics" element={<AccountOverview />} />
                                <Route path="performance" element={<AccountPerformance />} />

                                {/* Transaction Management */}
                                <Route path="transactions">
                                  <Route path="pending" element={<AccountPendingTransactions />} />
                                  {/* <Route path="approved" element={<AccountApprovedTransactions />} /> */}
                                  <Route path="history" element={<AccountTransactionHistory />} />
                                </Route>

                                {/* Reports */}
                                {/* <Route path="reports">
                                  <Route path="daily" element={<AccountDailyReports />} />
                                  <Route path="monthly" element={<AccountMonthlyReports />} />
                                  <Route path="custom" element={<AccountCustomReports />} />
                                  <Route path="financial" element={<AccountFinancialReports />} />
                                  <Route path="audit" element={<AccountAuditReports />} />
                                </Route> */}

                                {/* Account Management */}
                                {/* <Route path="management">
                                  <Route path="reconciliation" element={<AccountReconciliation />} />
                                  <Route path="budgeting" element={<AccountBudgeting />} />
                                  <Route path="payment-schedule" element={<AccountPaymentSchedule />} />
                                  <Route path="audit-trail" element={<AccountAuditTrail />} />
                                </Route> */}

                                {/* Settings */}
                                {/* <Route path="settings" element={<AccountSettings />} /> */}
                              </Routes>
                            </ProtectedRoute>
                          }
                        />
                        
                      </Routes>
                      

                    </main>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </Router>
  );
}

export default App;