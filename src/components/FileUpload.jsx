import React from "react";
import uploadImg from "../assets/upload.png"

const FileUpload = () => {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
  };

  return (
    <div className="max-w-2xl mb-4 p-6 border rounded-lg shadow-md bg-white">
      <label
        className="block mb-4 font-semibold text-gray-800"
        htmlFor="fileUpload"
      >
        File Upload<span className="text-red-500 ml-1">*</span>
      </label>
      <div className="relative">
        <input
          type="file"
          id="fileUpload"
          className="hidden"
          accept="image/*"
          required
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileUpload"
          className=" w-1/5 cursor-pointer bg-white border-[1px] text-blue-500 text-sm py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white flex items-center"
        >
          <img src={uploadImg} alt="upload" width={15} height={15} className="mr-2"></img> Add file
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
