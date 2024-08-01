import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
const { Content, Sider } = Layout;
import Asider from "@/layout/sider/index.jsx";
import Main from "@/layout/main/index.jsx";
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Asider />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Main />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
