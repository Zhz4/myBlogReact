import React, { useState, useEffect } from "react";
import { Menu } from "antd";

import { LaptopOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
const keys = ["/home", "/option"];
const items2 = [UserOutlined, LaptopOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: keys[index % 2],
    icon: React.createElement(icon),
    label: `subnav ${key}`,
  };
});

function asider() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // 当路由改变时，更新选中的菜单项
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleSelect = ({ keyPath }) => {
    navigate(keyPath[0]);
  };
  return (
    <Menu
      mode="inline"
      style={{
        height: "100%",
        borderRight: 0,
      }}
      selectedKeys={selectedKeys}
      items={items2}
      onClick={handleSelect}
    />
  );
}

export default asider;
