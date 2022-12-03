import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumb, Layout, Menu } from "antd";
import { VerifiedUserOutlined } from "@mui/icons-material";
import Dashboard from "../Dashboard";
import { borderRight } from "@mui/system";
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Home", 1, <HomeIcon className="text-3xl" />),
  getItem("User", "sub1", <VerifiedUserOutlined />, [
    getItem("Tom", 2),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [component, setComponent] = useState(1);
  return (
    <div className="flex max-h-screen min-h-[92.5vh]">
      <Sider
        style={{ backgroundColor: "white", borderRight: "1px solid black" }}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(event) => setComponent(event.key)}
        />
      </Sider>
      <Layout className="overflow-y-scroll scrollbar-hide">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {component == 1 && <Dashboard />}
            {component == 2 && <div>Working 2</div>}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Sidebar;
