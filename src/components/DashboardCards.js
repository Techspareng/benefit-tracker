import React from "react";

const DashboardCards = () => {
  const stats = [
    { title: "Total Requests", value: "1,024", icon: "fas fa-file-alt", color: "bg-blue-100 text-blue-600" },
    { title: "Pending Approval", value: "56", icon: "fas fa-clock", color: "bg-yellow-100 text-yellow-600" },
    { title: "Completed", value: "832", icon: "fas fa-check-circle", color: "bg-green-100 text-green-600" },
    { title: "Rejected", value: "136", icon: "fas fa-times-circle", color: "bg-red-100 text-red-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
            <div className={`${stat.color} p-3 rounded-full`}>
              <i className={`${stat.icon} text-lg`}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;