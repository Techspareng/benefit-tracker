import React, { useState } from 'react';

const PendingReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [requests] = useState([
    // Add mock data here
  ]);

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Pending Reviews</h1>
        <div className="w-full sm:w-auto flex space-x-2">
          <input
            type="search"
            placeholder="Search requests..."
            className="w-full sm:w-64 px-3 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Add table rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingReviews;