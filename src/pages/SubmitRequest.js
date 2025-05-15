import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const SubmitRequest = () => {
  const [formData, setFormData] = useState({
    beneficiaryName: '',
    rsaPin: '',
    requestType: '',
    amount: '',
    reason: '',
    employerName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: ''
  });
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      
      // Append form fields
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      // Append documents
      documents.forEach(doc => {
        formDataToSend.append('documents', doc);
      });

      // Send to backend
      await axios.post('/api/requests', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('Request submitted successfully!');
      setFormData({
        beneficiaryName: '',
        rsaPin: '',
        requestType: '',
        amount: '',
        reason: '',
        employerName: '',
        dateOfBirth: '',
        phoneNumber: '',
        email: ''
      });
      setDocuments([]);
    } catch (error) {
      toast.error('Failed to submit request. Please try again.');
      console.error('Submit error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Submit Benefit Request</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Beneficiary Name*
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              value={formData.beneficiaryName}
              onChange={(e) => setFormData({...formData, beneficiaryName: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              RSA PIN*
            </label>
            <input
              type="text"
              pattern="^PEN\d{12}$"
              title="Please enter a valid RSA PIN (Format: PENxxxxxx)"
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              value={formData.rsaPin}
              onChange={(e) => setFormData({...formData, rsaPin: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address*
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number*
            </label>
            <input
              type="tel"
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Request Type*
          </label>
          <select
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
            value={formData.requestType}
            onChange={(e) => setFormData({...formData, requestType: e.target.value})}
            required
          >
            <option value="">Select Request Type</option>
            <option value="retirement">Retirement</option>
            <option value="death">Death Benefit</option>
            <option value="disability">Disability</option>
            <option value="withdrawal">Early Withdrawal</option>
          </select>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount Requested (₦)*
          </label>
          <input
            type="string"
            min="0"
            step="0.01"
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            required
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reason for Request*
          </label>
          <textarea
            rows="4"
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
            value={formData.reason}
            onChange={(e) => setFormData({...formData, reason: e.target.value})}
            required
          ></textarea>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Supporting Documents*
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setDocuments(Array.from(e.target.files))}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              required
            />
            <p className="mt-2 text-sm text-gray-500">
              Upload PENCOM-required documents (PDF, JPG, PNG)
            </p>
            {documents.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium">Selected files:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {documents.map((doc, i) => (
                    <li key={i}>{doc.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } text-white px-6 py-2 rounded-lg flex items-center`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitRequest;