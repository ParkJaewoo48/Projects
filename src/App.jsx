import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Header />} />
        <Route path="/this_week_perform" element={<Header />} />
        <Route path="/info_perform" element={<Header />} />
        <Route path="/find_perform" element={<Header />} />
        <Route path="/review_perform" element={<Header />} />
        <Route path="/promotion_perform" element={<Header />} />
        <Route path="/together" element={<Header />} />
        <Route path="/talk" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
