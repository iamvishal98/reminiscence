import React from "react";
import Navbar from "./components/navbar";
import Post from "./components/post/Post";
import { Row } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReminiscenceFrom from "./pages/reminiscenceForm/ReminiscenceFrom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Row gutter={[16, 16]}>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </Row>
          }
        />
        <Route path="/create" element={<ReminiscenceFrom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
