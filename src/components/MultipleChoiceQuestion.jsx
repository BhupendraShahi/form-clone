import React from "react";

const MultipleChoiceQuestion = () => {
  return (
    <div className="max-w-2xl mb-4 p-6 border rounded-lg shadow-md bg-white">
      <p className="mb-4 font-semibold text-gray-800">
        MCQ<span className="text-red-500 ml-1">*</span>
      </p>
      <div className="space-y-4">
        <label className="flex items-center space-x-2 text-gray-700 mt-2 mr-2 mb-2">
          <input
            type="radio"
            name="mcqOption"
            className="text-blue-900 h-5 w-5"
            required
          />
          <span>Option 1</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700 mt-2 mr-2 mb-2">
          <input
            type="radio"
            name="mcqOption"
            className="text-blue-900 h-5 w-5"
            required
          />
          <span>Option 2</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700 mt-2 mr-2 mb-2">
          <input
            type="radio"
            name="mcqOption"
            className="text-blue-900 h-5 w-5"
            required
          />
          <span>Option 3</span>
        </label>
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
