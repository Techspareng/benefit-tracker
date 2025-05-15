export const getDashboardPathForRole = (role) => {
  switch (role) {
    case 'super_admin':
      return '/dashboard';
    case 'benefit_manager':
      return '/dashboard/benefit-manager';
    case 'process_manager':
      return '/dashboard/process-manager';
    case 'hod_benefit':
      return '/dashboard/hod-benefit';
    case 'hod_process':
      return '/dashboard/hod-process';
    case 'hod_audit':
      return '/dashboard/hod-audit';
    case 'hod_account':
      return '/dashboard/hod-account';
    case 'audit_manager':
      return '/dashboard/audit-manager';
    default:
      return '/error';
  }
};