import React from 'react';
import { Link } from 'react-router-dom'; 

const SubmitPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-50">
      <div className="max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Form Submitted</h1>
        <p className="text-gray-600 mb-8">Your response has been submitted.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Submit another response
        </Link>
      </div>
    </div>
  );
};

export default SubmitPage;