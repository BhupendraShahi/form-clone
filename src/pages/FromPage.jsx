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

const FromPage = () => {
  const navigate  = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    navigate("/submit");
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto p-4 bg-blue-50">
      <div className="max-w-2xl mb-4 bg-white shadow-md rounded-lg border border-t-violet-800 border-t-[10px]">
        <h1 className="felx justify-start items-center text-3xl font-medium m-4">
          Assignment Task
        </h1>
        <hr />
        <p className="font-bold text-base text-gray-600 ml-4 mt-2 mb-4">
          email@gmail.com{" "}
          <a href="#" className="cursor-pointer text-blue-600 font-light">
            Switch Account
          </a>
        </p>
        <p className="text-gray-600 mb-4 ml-4">
          The name and photo associated with your Google account will be
          recorded when you upload files and submit this form. Your email is not
          part of your response.
        </p>
        <hr />
        <p className="m-4 text-red-500">* indicates required question</p>
      </div>

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
            className="bg-blue-800 text-white px-4 py-2 rounded mt-4"
          >
            Submit
          </button>
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center w-1/5 border-2 h-0 border-green-600 rounded-full"></div>
            <p className="pl-4">Page 1 out of 1</p>
          </div>
          <button className="w-1/5 flex items-center justify-center text-blue-900 hover:bg-blue-100">
            Clear Form
          </button>
        </div>
      </form>

      {formSubmitted && (
        <div className="p-4 bg-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">
            Form submitted successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default FromPage;
