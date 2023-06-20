import { Card, Carousel, Col, Divider } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "./post.css";
const { Meta } = Card;
const Post = () => {
  const [data, setData] = useState([]);
  const fetchPost = async () => {
    try {
      const response = await axios.get("http://localhost:8080/posts");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="post-container">
      <Card cover={<img alt="example" src={data[0]?.selectedFiles[0]} />}>
        <Divider></Divider>
        <Meta title={data[0]?.title} description={data[0]?.message} />
      </Card>
    </div>
  );
};
export default Post;
