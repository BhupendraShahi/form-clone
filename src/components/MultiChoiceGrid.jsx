import React, { useState } from "react";

const MultiChoiceGrid = () => {
  const rows = [{ label: "Row 1" }, { label: "Row 2" }, { label: "Row 3" }];

  const columns = ["Column 1", "Column 2", "Column 3"];

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleRadioChange = (rowIndex, column) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [rowIndex]: column,
    }));
  };

  return (
    <div className="max-w-2xl mb-4 p-6 border rounded-lg shadow-md bg-white">
      <p className="mb-4 font-semibold text-gray-800">
        Multi-choice Grid<span className="text-red-500 ml-1">*</span>
      </p>
      <div className="flex flex-col">
        <div className="flex items-center space-x-4 p-2">
          <div className="w-1/3"></div>
          {columns.map((column, index) => (
            <div key={index} className="w-1/3 text-center">
              {column}
            </div>
          ))}
        </div>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-evenly m-1 items-center space-x-4 p-2 bg-gray-50"
          >
            <div className="w-1/3 text-gray-700">{row.label}</div>
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="w-1/3 flex justify-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5"
                  name={`row-${rowIndex}`}
                  checked={selectedOptions[rowIndex] === column}
                  onChange={() => handleRadioChange(rowIndex, column)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiChoiceGrid;
