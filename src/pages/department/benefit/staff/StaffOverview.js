import React, { useState } from 'react';

const StaffOverview = () => {
  const [staffMembers] = useState([
    {
      id: 'EMP001',
      name: 'John Doe',
      role: 'Benefit Officer',
      requestsHandled: 45,
      avgProcessingTime: '1.8 days',
      status: 'Active',
      performance: 92
    },
    {
      id: 'EMP002',
      name: 'Jane Smith',
      role: 'Senior Benefit Officer',
      requestsHandled: 62,
      avgProcessingTime: '1.5 days',
      status: 'Active',
      performance: 95
    }
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Staff Overview</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <i className="fas fa-plus mr-2"></i>
          Add Staff Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Staff</h3>
          <p className="text-2xl font-bold">{staffMembers.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Avg Performance</h3>
          <p className="text-2xl font-bold text-green-600">93.5%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Active Now</h3>
          <p className="text-2xl font-bold text-blue-600">5</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Requests Handled</h3>
          <p className="text-2xl font-bold">107</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Staff Members</h2>
            <div className="flex space-x-2">
              <input
                type="search"
                placeholder="Search staff..."
                className="px-3 py-2 border rounded-lg"
              />
              <select className="px-3 py-2 border rounded-lg">
                <option value="">All Roles</option>
                <option value="officer">Benefit Officer</option>
                <option value="senior">Senior Benefit Officer</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Staff ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Requests Handled
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Avg Processing Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staffMembers.map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {staff.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.requestsHandled}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.avgProcessingTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${staff.performance >= 90 ? 'bg-green-100 text-green-800' : 
                          staff.performance >= 70 ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {staff.performance}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {staff.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-green-600 hover:text-green-900 mr-3">
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffOverview;