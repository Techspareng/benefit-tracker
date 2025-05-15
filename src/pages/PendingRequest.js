import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PendingRequest = () => {
  const [requests] = useState([
    {
      id: 'REQ001',
      beneficiary: 'John Doe',
      type: 'Retirement',
      submittedDate: '2025-05-10',
      status: 'Under Review',
      rsaPin: 'PEN123456',
      email: 'john.doe@example.com',
      phoneNumber: '+234 800 123 4567',
      amount: '₦2,500,000',
      reason: 'Retirement due to age limit',
      documents: [
        { 
          name: 'ID Card.pdf',
          url: '/path/to/id-card.pdf',
          type: 'application/pdf'
        },
        { 
          name: 'Bank Statement.pdf',
          url: '/path/to/bank-statement.pdf',
          type: 'application/pdf'
        },
        { 
          name: 'Profile Picture.jpg',
          url: '/path/to/profile.jpg',
          type: 'image/jpeg'
        }
      ]
    }
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [selectedProgress, setSelectedProgress] = useState(null);

  const progressStages = [
    { stage: 'Submission', status: 'completed', date: '2025-05-10', note: 'Request submitted successfully' },
    { stage: 'Initial Review', status: 'completed', date: '2025-05-11', note: 'Documents verified' },
    { stage: 'HOD Approval', status: 'current', date: '2025-05-12', note: 'Awaiting department head review' },
    { stage: 'Finance Review', status: 'pending', date: null, note: null },
    { stage: 'Final Approval', status: 'pending', date: null, note: null },
    { stage: 'Disbursement', status: 'pending', date: null, note: null }
  ];

  const filteredRequests = requests.filter(request =>
    request.beneficiary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDocumentView = (doc) => {
    setSelectedDocument(doc);
    setIsDocumentModalOpen(true);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleTrackProgress = (request) => {
    setSelectedProgress({ ...request, stages: progressStages });
    setIsProgressModalOpen(true);
  };

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold">Pending Requests</h1>
        <div className="w-full sm:w-auto">
          <input
            type="search"
            placeholder="Search by ID or beneficiary..."
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
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Request ID
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Beneficiary
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase hidden sm:table-cell">
                  Type
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase hidden sm:table-cell">
                  Date
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                    {request.id}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm">
                    {request.beneficiary}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm hidden sm:table-cell">
                    {request.type}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm hidden sm:table-cell">
                    {request.submittedDate}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {request.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                      <button 
                        className="text-blue-600 hover:text-blue-900 whitespace-nowrap"
                        onClick={() => {
                          setSelectedRequest(request);
                          setIsModalOpen(true);
                        }}
                      >
                        <span className="hidden sm:inline">View</span>
                        <i className="fas fa-eye sm:ml-1"></i>
                      </button>
                      <button 
                        className="text-green-600 hover:text-green-900 whitespace-nowrap"
                        onClick={() => handleTrackProgress(request)}
                      >
                        <span className="hidden sm:inline">Track</span>
                        <i className="fas fa-chart-line sm:ml-1"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg sm:text-xl font-bold">Request Details</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {selectedRequest && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-500">Request ID</label>
                      <p className="mt-1 text-sm sm:text-base">{selectedRequest.id}</p>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-500">Status</label>
                      <span className="mt-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {selectedRequest.status}
                      </span>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-500">Beneficiary</label>
                      <p className="mt-1 text-sm sm:text-base">{selectedRequest.beneficiary}</p>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-500">RSA PIN</label>
                      <p className="mt-1 text-sm sm:text-base">{selectedRequest.rsaPin}</p>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-500">Email</label>
                      <p className="mt-1 text-sm sm:text-base">{selectedRequest.email}</p>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-500">Phone</label>
                      <p className="mt-1 text-sm sm:text-base">{selectedRequest.phoneNumber}</p>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-500">Amount</label>
                      <p className="mt-1 text-sm sm:text-base">{selectedRequest.amount}</p>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-500">Type</label>
                      <p className="mt-1 text-sm sm:text-base">{selectedRequest.type}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-500">Reason</label>
                    <p className="mt-1 text-sm sm:text-base">{selectedRequest.reason}</p>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-2">Documents</label>
                    <div className="space-y-2">
                      {selectedRequest.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                          <span className="flex items-center text-xs sm:text-sm">
                            <i className={`fas ${doc.name.endsWith('.pdf') ? 'fa-file-pdf' : 'fa-file-image'} text-red-500 mr-2`}></i>
                            <span className="truncate max-w-[120px] sm:max-w-none">{doc.name}</span>
                          </span>
                          <div className="flex space-x-2 sm:space-x-3">
                            <button 
                              className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm"
                              onClick={() => handleDocumentView(doc)}
                            >
                              <i className="fas fa-eye mr-1"></i>
                              <span className="hidden sm:inline">View</span>
                            </button>
                            <button 
                              className="text-green-600 hover:text-green-800 text-xs sm:text-sm"
                              onClick={() => window.open(doc.url, '_blank')}
                            >
                              <i className="fas fa-download"></i>
                              <span className="hidden sm:inline ml-1">Download</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Document Preview Modal */}
      {isDocumentModalOpen && selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-3 sm:p-4 border-b">
              <h3 className="text-sm sm:text-lg font-semibold truncate">{selectedDocument.name}</h3>
              <button 
                onClick={() => setIsDocumentModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex-1 overflow-auto p-2 sm:p-4">
              {selectedDocument.name.endsWith('.pdf') ? (
                <Document
                  file={selectedDocument.url}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="flex justify-center"
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page 
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      className="mb-2 sm:mb-4"
                      width={Math.min(window.innerWidth - 40, 800)}
                    />
                  ))}
                </Document>
              ) : (
                <img 
                  src={selectedDocument.url} 
                  alt={selectedDocument.name}
                  className="max-w-full h-auto mx-auto"
                />
              )}
            </div>
            
            <div className="border-t p-3 sm:p-4 flex justify-end">
              <button
                onClick={() => window.open(selectedDocument.url, '_blank')}
                className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base hover:bg-blue-700"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Tracking Modal */}
      {isProgressModalOpen && selectedProgress && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">Request Progress</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Request ID: {selectedProgress.id}</p>
                </div>
                <button 
                  onClick={() => setIsProgressModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {selectedProgress.stages.map((stage, index) => (
                  <div 
                    key={stage.stage}
                    className={`relative flex items-start ${
                      index !== selectedProgress.stages.length - 1 ? 'pb-6 sm:pb-8' : ''
                    }`}
                  >
                    {/* Progress Line */}
                    {index !== selectedProgress.stages.length - 1 && (
                      <div className="absolute top-6 sm:top-8 left-3 sm:left-4 -ml-px h-full w-0.5 bg-gray-200"></div>
                    )}

                    {/* Stage Icon */}
                    <div className={`
                      relative flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full
                      ${stage.status === 'completed' ? 'bg-green-500' : 
                        stage.status === 'current' ? 'bg-blue-500' : 'bg-gray-200'
                      }
                    `}>
                      <i className={`fas fa-${
                        stage.status === 'completed' ? 'check' : 
                        stage.status === 'current' ? 'clock' : 'circle'
                      } text-white text-xs sm:text-sm`}></i>
                    </div>

                    {/* Stage Details */}
                    <div className="ml-3 sm:ml-4 min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-medium text-gray-900">
                        {stage.stage}
                      </div>
                      {stage.date && (
                        <div className="mt-1 text-xs sm:text-sm text-gray-500">
                          {new Date(stage.date).toLocaleDateString()}
                        </div>
                      )}
                      {stage.note && (
                        <div className="mt-1 text-xs sm:text-sm text-gray-600">
                          {stage.note}
                        </div>
                      )}
                    </div>

                    {/* Stage Status */}
                    <div className="ml-3 sm:ml-4">
                      <span className={`
                        px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${stage.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          stage.status === 'current' ? 'bg-blue-100 text-blue-800' : 
                          'bg-gray-100 text-gray-800'
                        }
                      `}>
                        {stage.status.charAt(0).toUpperCase() + stage.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 flex justify-end">
                <button
                  onClick={() => setIsProgressModalOpen(false)}
                  className="bg-gray-100 text-gray-700 px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingRequest;