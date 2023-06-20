import { Col, Row } from "antd";
import React from "react";
import Post from "../../components/post/Post";
import ProfileCard from "../../components/profilecard/ProfileCard";
import "./home.css";

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="homepage">
        <Row gutter={16}>
          <Col flex={1}>
            <ProfileCard />
          </Col>
          <Col flex={4} className="posts-container">
            <Post />
            <Post />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
