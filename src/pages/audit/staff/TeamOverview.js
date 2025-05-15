import React, { useState } from 'react';

const TeamOverview = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Wilson',
      role: 'Senior Auditor',
      status: 'active',
      currentAudits: 3,
      completedAudits: 45,
      performance: 95,
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      availability: 'Available'
    },
    // Add more team members as needed
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || member.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Audit Team Overview</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and monitor audit team performance
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <i className="fas fa-plus mr-2"></i>
            Add Team Member
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search team members..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
          <div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="on_leave">On Leave</option>
              <option value="training">Training</option>
            </select>
          </div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Members</p>
              <p className="text-2xl font-bold">{teamMembers.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-users text-blue-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Audits</p>
              <p className="text-2xl font-bold">
                {teamMembers.reduce((acc, member) => acc + member.currentAudits, 0)}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-clipboard-check text-green-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg Performance</p>
              <p className="text-2xl font-bold">
                {Math.round(
                  teamMembers.reduce((acc, member) => acc + member.performance, 0) / 
                  teamMembers.length
                )}%
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-chart-line text-purple-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Available Now</p>
              <p className="text-2xl font-bold">
                {teamMembers.filter(member => member.availability === 'Available').length}
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-clock text-yellow-600"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{member.role}</p>
                </div>
                <div className={`flex-shrink-0 ${
                  member.availability === 'Available' ? 'text-green-500' : 'text-gray-500'
                }`}>
                  <i className="fas fa-circle text-xs"></i>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 px-4 py-3">
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <p className="text-gray-500">Current</p>
                  <p className="font-semibold">{member.currentAudits}</p>
                </div>
                <div>
                  <p className="text-gray-500">Completed</p>
                  <p className="font-semibold">{member.completedAudits}</p>
                </div>
                <div>
                  <p className="text-gray-500">Performance</p>
                  <p className="font-semibold">{member.performance}%</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
              <div className="flex justify-between">
                <button className="text-blue-600 hover:text-blue-800">
                  <i className="fas fa-user-edit mr-1"></i>
                  Edit
                </button>
                <button className="text-blue-600 hover:text-blue-800">
                  <i className="fas fa-chart-bar mr-1"></i>
                  View Stats
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamOverview;