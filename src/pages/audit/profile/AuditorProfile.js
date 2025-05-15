import React, { useState } from 'react';

const AuditorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    employeeId: 'AUD-2023-001',
    department: 'Audit',
    role: 'Senior Auditor',
    email: 'john.doe@company.com',
    phone: '+1 234-567-8900',
    certification: 'Certified Internal Auditor (CIA)',
    specialization: 'Financial Auditing',
    yearsOfExperience: 8
  });

  const [performance] = useState({
    completedAudits: 145,
    averageRating: 4.8,
    complianceScore: 98,
    activeProjects: 3
  });

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Auditor Profile</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your profile and view performance metrics</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
        >
          <i className={`fas fa-${isEditing ? 'save' : 'edit'} mr-2`}></i>
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{profileData.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                <p className="mt-1 text-gray-900">{profileData.employeeId}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{profileData.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{profileData.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Professional Information Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Professional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.role}
                    onChange={(e) => setProfileData({...profileData, role: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{profileData.role}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <p className="mt-1 text-gray-900">{profileData.department}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Certification</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.certification}
                    onChange={(e) => setProfileData({...profileData, certification: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{profileData.certification}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                {isEditing ? (
                  <input
                    type="number"
                    value={profileData.yearsOfExperience}
                    onChange={(e) => setProfileData({...profileData, yearsOfExperience: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{profileData.yearsOfExperience} years</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-6">
          {/* Performance Summary Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Completed Audits</label>
                <p className="mt-1 text-2xl font-bold text-blue-600">{performance.completedAudits}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Average Rating</label>
                <div className="flex items-center mt-1">
                  <p className="text-2xl font-bold text-green-600">{performance.averageRating}</p>
                  <div className="ml-2 text-yellow-400">
                    {'★'.repeat(Math.floor(performance.averageRating))}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Compliance Score</label>
                <p className="mt-1 text-2xl font-bold text-purple-600">{performance.complianceScore}%</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Active Projects</label>
                <p className="mt-1 text-2xl font-bold text-orange-600">{performance.activeProjects}</p>
              </div>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: 'Completed Audit', project: 'Financial Review Q2', date: '2 days ago' },
                { action: 'Updated Report', project: 'Compliance Check', date: '4 days ago' },
                { action: 'Started Audit', project: 'Process Validation', date: '1 week ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <i className="fas fa-circle-check text-green-500"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.project}</p>
                    <p className="text-xs text-gray-400">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditorProfile;