import React, { useState } from "react";
import { Input } from "antd";
import RightMenu from "./RightMenu";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ContactsFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";
import "./navbar.css";

const Navbar = () => {
  const [search, showSearch] = useState(false);
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="content-wrapper">
        <div className="left">
          <div className="logo">
            <h3 className="logo-text" onClick={() => navigate("/")}>
              Reminiscence
            </h3>
          </div>
          <div className={search ? "search-bar mobile" : "search-bar"}>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
            />
            <ArrowLeftOutlined
              className={search ? "search-back back-active" : "search-back"}
              onClick={() => showSearch(false)}
            />
          </div>
          <SearchOutlined
            className="search-icon"
            onClick={() => showSearch(!search)}
          />
        </div>
        <div className="right">
          <div className="icon-link">
            <QuestionCircleFilled
              className="header-icon"
              onClick={() => navigate("/help")}
            />
            <ContactsFilled
              className="header-icon"
              onClick={() => navigate("/contact")}
            />
          </div>
          <RightMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
