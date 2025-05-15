import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const roleOptions = [
  'super_admin',
  'benefit_manager',
  'process_manager',
  'audit_manager', 
  'account_manager',
  'hod_benefit',
  'hod_process',
  'hod_audit',
  'hod_account'
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('benefit_manager');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication - replace with API call
    if (email && password) {
      localStorage.setItem('role', role);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800">BenefitChain</h1>
          <p className="text-gray-600">Pension Benefit Portal</p>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="user@benefitchain.com"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="********"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role.replace(/_/g, ' ')}
                </option>
              ))}
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;