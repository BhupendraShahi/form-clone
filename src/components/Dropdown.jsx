import React from "react";

const Dropdown = () => {
  return (
    <div className="max-w-2xl mb-4 p-6 border rounded-lg shadow-md bg-white">
      <label
        className="block mb-4 font-semibold text-gray-800"
        htmlFor="dropdown"
      >
        Dropdown<span className="text-red-500 ml-1">*</span>
      </label>
      <select id="dropdown" className="w-1/3 border-[1px] p-4 rounded-md focus:outline-none max-sm:w-1/2" required>
        <option value="" hidden>
          Choose
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default Dropdown;
