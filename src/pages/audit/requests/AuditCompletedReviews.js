import React, { useState, useEffect } from 'react';

const AuditCompletedReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });

  // Add your completed reviews state here
  const [completedReviews] = useState([
    {
      id: "AUD-2023-001",
      type: "Medical Claim",
      submitter: "John Smith",
      department: "Benefits",
      amount: "$2,500",
      completedDate: "2023-05-15",
      status: "Approved",
      findings: "No issues found",
      auditor: "Jane Doe"
    },
    // Add more mock data
  ]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Completed Audits</h1>
          <p className="text-sm text-gray-500 mt-1">View and manage completed audit reviews</p>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <input
            type="search"
            placeholder="Search audits..."
            className="w-full sm:w-64 px-3 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="date"
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Add your statistics cards here */}
      </div>

      {/* Completed Reviews Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Add your table content here */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditCompletedReviews;