import React from "react";

const Header = () => {
  return (
    <div className="max-w-2xl mb-4 bg-white shadow-md rounded-lg border border-t-violet-800 border-t-[10px]">
      <h1 className="felx justify-start items-center text-3xl font-medium m-4 pl-2">
        Assignment Task
      </h1>
      <hr />
      <p className="font-bold text-base text-gray-600 pl-2 ml-4 mt-2 mb-4">
        email@gmail.com{" "}
        <a href="#" className="cursor-pointer text-blue-600 font-light">
          Switch Account
        </a>
      </p>
      <p className="text-gray-600 pl-2 mb-4 ml-4">
        The name and photo associated with your Google account will be recorded
        when you upload files and submit this form. Your email is not part of
        your response.
      </p>
      <hr />
      <p className="m-4 pl-2 text-red-500">* indicates required question</p>
    </div>
  );
};

export default Header;
