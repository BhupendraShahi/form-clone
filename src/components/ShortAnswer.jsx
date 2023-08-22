import React from "react";

const ShortAnswer = () => {
  return (
    <div className="max-w-2xl w-full mb-4 p-6 border rounded-lg shadow-md bg-white">
      <label
        className="block mb-4 font-semibold text-gray-800"
        htmlFor="shortAnswer"
      >
        Short Answer<span className="text-red-500 ml-1">*</span>
      </label>
      <input
        type="text"
        id="shortAnswer"
        className="w-1/2 border-b pb-1 mt-4 focus:outline-none"
        placeholder="Your answer"
        required
      />
    </div>
  );
};

export default ShortAnswer;
