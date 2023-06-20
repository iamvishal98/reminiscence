import React from "react";
import Navbar from "./components/navbar";
import Post from "./components/post/Post";
import { Row } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReminiscenceFrom from "./pages/reminiscenceForm/ReminiscenceFrom";
import Help from "./pages/help/Help";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ReminiscenceFrom />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
