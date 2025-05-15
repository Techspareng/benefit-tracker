import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "benefit@example.com", role: "benefit_manager" },
    { id: 2, name: "Jane Smith", email: "audit@example.com", role: "audit_manager" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "benefit_manager",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const roles = [
    "benefit_manager",
    "process_manager",
    "audit_manager",
    "account_manager",
    "hod_benefit",
    "hod_process",
    "hod_audit",
    "hod_account",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode && selectedUser) {
      setUsers(users.map(user => 
        user.id === selectedUser.id ? { ...formData, id: user.id } : user
      ));
      setIsEditMode(false);
      setSelectedUser(null);
    } else {
      const newUser = { ...formData, id: users.length + 1 };
      setUsers([...users, newUser]);
    }
    setFormData({ name: "", email: "", role: "benefit_manager" });
  };

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, role: user.role });
    setSelectedUser(user);
    setIsEditMode(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  return (
    <div className="max-w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Form Card */}
      <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 lg:mb-8 overflow-hidden">
        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">
          {isEditMode ? 'Edit User' : 'Create New User'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-2 sm:space-x-3">
            {isEditMode && (
              <button
                type="button"
                onClick={() => {
                  setIsEditMode(false);
                  setSelectedUser(null);
                  setFormData({ name: "", email: "", role: "benefit_manager" });
                }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md shadow-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isEditMode ? 'Update User' : 'Create User'}
            </button>
          </div>
        </form>
      </div>

      {/* Users List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-3 sm:p-4 md:p-6">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-base sm:text-lg md:text-xl font-bold">User List</h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-700">
                A list of all users in the system including their name, email and role.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block sm:hidden">
          {users.map((user) => (
            <div key={user.id} className="border-t border-gray-200 p-3">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-gray-900">{user.name}</h3>
                    <p className="text-xs text-gray-500 break-all">{user.email}</p>
                  </div>
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 whitespace-nowrap">
                    {user.role.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => handleEdit(user)}
                    className="p-2 text-blue-600 hover:text-blue-800"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="p-2 text-red-600 hover:text-red-800"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                        {user.role.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-600 hover:text-blue-800 mr-3"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;