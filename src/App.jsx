import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./assets/Components/Footer";
import Form from "./assets/Components/Form";
import { Navbar } from "./assets/Components/Navbar";
import Donation from "./assets/Screens/Donation";
import Home from "./assets/Screens/Home";
function App() {
  return (
    <div className=" bg-gray-200 flex flex-col justify-center items-center">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<Form />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
