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
import loginButton from "components/loginButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/loginButton" element={<loginButton />} />
        <Route path="/Sing-up" element={<Singup />} />
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
