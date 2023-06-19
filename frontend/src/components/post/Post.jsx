import { Card, Col } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
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
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
      <Card
        hoverable
        cover={<img alt="example" src={data[0]?.selectedFiles[0]} />}
      >
        <Meta title={data[0]?.title} description={data[0]?.message} />
      </Card>
    </Col>
  );
};
export default Post;
