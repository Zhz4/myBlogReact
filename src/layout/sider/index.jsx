import React from "react";
import { Menu } from "antd";

import { LaptopOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const keys = ["/home", "/option"];
const items2 = [UserOutlined, LaptopOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: keys[index % 2],
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    // children: new Array(4).fill(null).map((_, j) => {
    //   const subKey = index * 4 + j + 1;
    //   return {
    //     key: subKey,
    //     label: `option${subKey}`,
    //   };
    // }),
  };
});
function asider() {
  const navigate = useNavigate();
  const handleSelect = (e) => {
    navigate(e.key);
  };
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["2"]}
      defaultOpenKeys={["sub1"]}
      style={{
        height: "100%",
        borderRight: 0,
      }}
      items={items2}
      onSelect={handleSelect}
    />
  );
}

export default asider;
