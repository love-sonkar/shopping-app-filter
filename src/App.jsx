import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={"cart"} />
      </Routes>
    </div>
  );
};

export default App;
