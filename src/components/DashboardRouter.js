import React from 'react';
import BenefitManagerDashboard from '../dashboards/BenefitManager';
import ProcessManagerDashboard from '../dashboards/ProcessManager';
import AuditManagerDashboard from '../dashboards/AuditManager';
import AccountManagerDashboard from '../dashboards/AccountManager';
import HodDashboard from '../dashboards/HodDashboard';
import SuperAdminDashboard from '../dashboards/SuperAdmin';

const DashboardRouter = () => {
  const role = localStorage.getItem('role');

  switch(role) {
    case 'benefit_manager':
      return <BenefitManagerDashboard />;
    case 'process_manager':
      return <ProcessManagerDashboard />;
    case 'audit_manager':
      return <AuditManagerDashboard />;
    case 'account_manager':
      return <AccountManagerDashboard />;
    case 'hod_benefit':
    case 'hod_process': 
    case 'hod_audit':
    case 'hod_account':
      return <HodDashboard department={role.replace('hod_', '')} />;
    case 'super_admin':
      return <SuperAdminDashboard />;
    default:
      return <div>Invalid role</div>;
  }
};

export default DashboardRouter;