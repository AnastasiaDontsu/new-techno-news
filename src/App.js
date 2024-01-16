import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "components/Home";
import Singup from "components/Singup";
import Singin from "components/Singin";
import Footer from "components/Footer";
import User from "components/User";
import Post from "components/Post";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Sing-up" element={<Singup />} />
        <Route path="/Sign-in" element={<Singin />} />
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
