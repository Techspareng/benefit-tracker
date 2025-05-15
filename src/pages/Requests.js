import React from "react";

const Requests = () => {
  const requests = [
    { id: "#BC001", type: "Retirement", status: "Pending", date: "2023-10-15", assigned: "Benefit Dept" },
    { id: "#BC002", type: "Death Claim", status: "Approved", date: "2023-10-14", assigned: "Audit Dept" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Benefit Requests</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <i className="fas fa-plus mr-2"></i> New Request
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {requests.map((request, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    request.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                    request.status === "Approved" ? "bg-green-100 text-green-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.assigned}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    <i className="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requests;