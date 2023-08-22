import React, { useState } from "react";

const CheckboxQuestion = () => {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (option) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [option]: !prevCheckboxes[option],
    }));
  };


  return (
    <div className="max-w-2xl mb-4 p-6 border rounded-lg shadow-md bg-white">
      <p className="mb-4 font-semibold text-gray-800">Checkbox<span className="text-red-500 ml-1">*</span></p>
      <div className="space-y-4">
        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500 h-5 w-5"
            checked={checkboxes.option1}
            onChange={() => handleCheckboxChange("option1")}
            
          />
          <span>Option 1</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500 h-5 w-5"
            checked={checkboxes.option2}
            onChange={() => handleCheckboxChange("option2")}
            
          />
          <span>Option 2</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500 h-5 w-5"
            checked={checkboxes.option3}
            onChange={() => handleCheckboxChange("option3")}
            
          />
          <span>Option 3</span>
        </label>
      </div>
    </div>
  );
};

export default CheckboxQuestion;
