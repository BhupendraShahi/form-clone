import React from "react";

const TickBoxGrid = () => {
  const rows = [{ label: "Row 1" }, { label: "Row 2" }, { label: "Row 3" }];

  const columns = ["Column 1", "Column 2", "Column 3"];

  return (
    <div className="max-w-2xl mb-4 p-6 border rounded-lg shadow-md bg-white">
      <p className="mb-2 font-semibold text-gray-800">
        Tick Box Grid<span className="text-red-500 ml-1">*</span>
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
            className="flex items-center m-1 space-x-4 p-2 bg-gray-50"
          >
            <div className="w-1/3 text-gray-700">{row.label}</div>
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="w-1/3 flex justify-center">
                <input type="checkbox" className="h-5 w-5 border-x-gray-600" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickBoxGrid;
