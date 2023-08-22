import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FromPage from "./pages/FromPage";
import SubmitPage from "./pages/SubmitPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FromPage />} />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </Router>
  );
};

export default App;
