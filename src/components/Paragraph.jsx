import React from "react";

const Paragraph = () => {
  return (
    <div className="max-w-2xl mb-4 p-6 border rounded-lg shadow-md bg-white">
      <label
        className="block mb-4 font-semibold text-gray-800"
        htmlFor="paragraph"
      >
        Paragraph<span className="text-red-500 ml-1">*</span>
      </label>
      <textarea
        id="paragraph"
        className="w-full border-b pb-1 focus:outline-none"
        placeholder="Your answer"
        rows="1"
        required
      />
    </div>
  );
};

export default Paragraph;
