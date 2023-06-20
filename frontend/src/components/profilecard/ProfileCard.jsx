import React from "react";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

import "./profilecard.css";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const ProfileCard = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-card-container">
      <Card
        className="profile-card"
        title={
          <Meta
            avatar={
              <Avatar
                src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                size="large"
              />
            }
            title="John Doe"
            description="Hustler"
          />
        }
        actions={[
          <div className="profile-card-icon">
            <SettingOutlined
              key="setting"
              onClick={() => navigate("/profile")}
            />
          </div>,
          <div className="profile-card-icon">
            <EditOutlined
              key="edit"
              onClick={() => navigate("/create")}
              className="profile-card-icon"
            />
          </div>,
        ]}
      >
        <p>
          Total Posts : <span> 0 </span>
        </p>
        <p>
          Total Likes : <span> 0 </span>
        </p>
      </Card>
    </div>
  );
};

export default ProfileCard;
