import React, { useState } from "react";

const LinearScale = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="max-w-2xl mb-4 p-6 border rounded-lg shadow-md bg-white">
      <p className="mb-4 font-semibold text-gray-800">
        Linear Scale<span className="text-red-500 ml-1">*</span>
      </p>
      <div className="flex justify-evenly space-x-4 items-center">
        <span className="text-gray-700 pt-10">Worst</span>
        {[1, 2, 3, 4, 5].map((value) => (
          <label
            key={value}
            className="flex flex-col-reverse items-center space-x-2 text-gray-700"
          >
            <input
              type="radio"
              className="mt-4 h-5 w-5"
              name="linearScale"
              value={value}
              checked={selectedOption === value}
              onChange={() => handleRadioChange(value)}
            />
            <span>{value}</span>
          </label>
        ))}
        <span className="text-gray-700 pt-10">Best</span>
      </div>
    </div>
  );
};

export default LinearScale;
