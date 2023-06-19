import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";
import axios from "axios";

const ReminiscenceFrom = () => {
  const onFinish = (data) => {
    const postData = new FormData();
    postData.set("title", data.title);
    postData.set("message", data.message);
    postData.set("tags", data.tags);
    postData.set("textarea", data.textArea);
    if (data.file) {
      for (let i = 0; i < data.file.fileList.length; i++) {
        postData.append("selectedFiles", data.file.fileList[i].thumbUrl);
      }
    }
    createPost(postData);
    console.log(data);
  };

  const createPost = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/posts", data);
      if (response) console.log(`response: ${response}`);
    } catch (error) {
      console.log(`eror : ${error}`);
    }
  };

  return (
    <>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="Message" name="message">
          <Input />
        </Form.Item>
        <Form.Item label="Tags" name="tags">
          <Input />
        </Form.Item>
        <Form.Item label="TextArea" name="textArea">
          <TextArea rows={7} />
        </Form.Item>
        <Form.Item label="Upload" name="file">
          <Upload beforeUpload={() => false} listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Button htmlType="submit">Button</Button>
      </Form>
    </>
  );
};

export default ReminiscenceFrom;
