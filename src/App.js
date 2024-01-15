import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
import Login from "components/Login";
import Home from "components/Home";
import Singup from "components/Singup";
import Footer from "components/Footer";
import User from "components/User";
import Post from "components/Post";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Sign-Up" element={<Singup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Footer
        title="Your Website Title"
        description="A short description of your website."
      />
    </div>
  );
};

export default App;
