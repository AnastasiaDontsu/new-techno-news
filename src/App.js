import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
import Singup from "components/Singup";
import Singin from "components/Singin";
import Footer from "components/Footer";
import User from "components/User";
import Statistics from "components/Statistics";
import BitcoinNews from "components/BitcoinNews";
import AppleNews from "components/AppleNews";
import { ToastContainer } from "react-toastify";
import About from "components/About";

const App = () => {
  return (
    <div>
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <Navbar />
      <Routes>
        <Route path="/Sing-up" element={<Singup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sing-in" element={<Singin />} />
        <Route path="/user" element={<User />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/Bitcoin News" element={<BitcoinNews />} />
        <Route path="/Apple news" element={<AppleNews />} />
      </Routes>
      <Footer
        title="Your Website Title"
        description="A short description of your website."
      />
    </div>
  );
};

export default App;
