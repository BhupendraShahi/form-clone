import React, { useState } from "react";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";
import CheckBox from "../components/CheckBox";
import Paragraph from "../components/Paragraph";
import ShortAnswer from "../components/ShortAnswer";
import FileUpload from "../components/FileUpload";
import MultiChoiceGrid from "../components/MultiChoiceGrid";
import TickBoxGrid from "../components/TickBoxGrid";
import LinearScale from "../components/LinearScale";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const FromPage = () => {
  const navigate  = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/submit");
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto p-4 bg-blue-50">
      <Header />
      <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
        <MultipleChoiceQuestion />
        <CheckBox />
        <ShortAnswer />
        <Paragraph />
        <Dropdown />
        <FileUpload />
        <LinearScale />
        <MultiChoiceGrid />
        <TickBoxGrid />
        <div className="flex justify-between w-full">
          <button
            type="submit"
            className="bg-blue-800 text-white text-sm px-4 py-2 w-1/5 rounded hover:bg-blue-700"
          >
            Submit
          </button>
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center w-1/5 border-4 h-2 border-green-600 rounded-full"></div>
            <p className="pl-4 text-sm">Page 1 of 1</p>
          </div>
          <button className="w-1/5 flex items-center justify-center text-blue-900 hover:bg-blue-100 rounded-md">
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default FromPage;
