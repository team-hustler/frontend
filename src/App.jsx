import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Donate from "./assets/Components/Donate";
import Footer from "./assets/Components/Footer";
import Form from "./assets/Components/Form";
import { Navbar } from "./assets/Components/Navbar";
import Redeem from "./assets/Components/Redeem";
import Sponser from "./assets/Components/Sponser";
import Students from "./assets/Components/Students";
import Accounts from "./assets/Screens/Accounts";
import Donation from "./assets/Screens/Donation";
import Home from "./assets/Screens/Home";
import Map from "./assets/Screens/Map";
import Profile from "./assets/Screens/Profile";
function App() {
  return (
    <div className=" bg-gray-200 flex flex-col justify-center items-center">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<Form />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<Map />} />
          <Route
            path="/account/*"
            element={
              <Accounts>
                <Routes>
                  <Route path="/students" element={<Students />} />
                  <Route path="/sponser" element={<Sponser />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/redeem" element={<Redeem />} />
                </Routes>
              </Accounts>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
