import { Row } from "antd";
import React from "react";
import Post from "../../components/post/Post";

const Home = () => {
  return (
    <Row gutter={[16, 16]}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Row>
  );
};

export default Home;
