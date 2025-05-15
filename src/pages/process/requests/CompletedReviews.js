import React, { useState } from 'react';

const CompletedReviews = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRequests = requests.filter(request => 
    request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.contributor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold">Completed Reviews</h1>
        <div className="w-full sm:w-auto flex space-x-2">
          <input
            type="search"
            placeholder="Search by ID or contributor..."
            className="w-full sm:w-64 px-3 py-1 sm:px-4 sm:py-2 border rounded-lg text-sm sm:text-base"
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
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contributor</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Completed Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Decision</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{request.id}</td>
                  <td className="px-4 py-3 text-sm">{request.contributor}</td>
                  <td className="px-4 py-3 text-sm hidden sm:table-cell">{request.type}</td>
                  <td className="px-4 py-3 text-sm hidden sm:table-cell">{request.completedDate}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      request.decision === 'approved' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {request.decision}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      View Details
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

export default CompletedReviews;