import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Singup from "./components/Singup";
import Singin from "./components/Singin";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import BitcoinNews from "./components/BitcoinNews";
import AppleNews from "./components/AppleNews";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Sing-up" element={<Singup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Sing-in" element={<Singin />} />

        <Route path="/statistics" element={<Statistics />} />
        <Route path="/Bitcoin News" element={<BitcoinNews />} />
        <Route path="/Apple news" element={<AppleNews />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
      />{" "}
    </div>
  );
};

export default App;
