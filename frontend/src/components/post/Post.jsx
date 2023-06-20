import { Button, Card, Carousel, Col, Divider, Form, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "./post.css";
import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
const { Meta } = Card;
const Post = () => {
  const [data, setData] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };
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
      <Card
        cover={<img alt="example" src={data[0]?.selectedFiles[0]} />}
        actions={[
          <div className="action-icon">
            <LikeOutlined />
            <span>Like</span>
          </div>,
          <div className="action-icon" onClick={handleCommentClick}>
            <CommentOutlined />
            <span>Comment</span>
          </div>,
        ]}
      >
        <Divider></Divider>
        <Meta title={data[0]?.title} description={data[0]?.message} />
      </Card>
      {showComments && (
        <Card>
          <Form layout="inline">
            <Form.Item>
              <Input />
            </Form.Item>
            <Button htmlType="submit">Comment</Button>
          </Form>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      )}
    </div>
  );
};
export default Post;
