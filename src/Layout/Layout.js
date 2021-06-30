import React, { Component } from "react";
import  logo  from "../../src/images/Logo-a.png";
import {
  Layout,
  Menu,
  Breadcrumb,
  Input,
  Space,
  Badge,
  Avatar,
  Divider,
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  BellOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/NewLofo.svg";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
class MyLayout extends Component {
  render() {
    return (
      <div>
        <Layout
          style={{
            minHeight: "100vh",
            padding: "1.25rem 2rem",
            background: "rgb(28, 63, 170)"
          }}
        >
          <Sider  className="site-layout-background" width={200}>
            <div className="myCustomLogo">
              <Link to="/css/dashboard">
                <img
                  className="ant-image-img w-16"
                  src={logo}
                  style={{ width: "56px", height: "56px" }}
                ></img>
              </Link>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ fontWeight: "bold", color: "#FFFFFF" }}
            >
              <Menu.Item key="sub1" icon={<HomeOutlined />}>
                <Link to="/css/dashboard">Dashboard</Link>
              </Menu.Item>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Master">
                <Menu.Item key="5">
                  <Link to="/css/machine-group">Machine Group</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/css/machine">Machine</Link>
                </Menu.Item>
                <Menu.Item key="7">
                  {" "}
                  <Link to="/css/headquater">Headquater</Link>
                </Menu.Item>
                <Menu.Item key="8">Branch</Menu.Item>
                <Menu.Item key="9">Allot Machine</Menu.Item>
                <Menu.Item key="10">Employee</Menu.Item>
                <Menu.Item key="11">Technician</Menu.Item>
                <Menu.Item key="12">Complaint Master</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="Complaints"
              >
               
                <Menu.Item key="10">Assigned</Menu.Item>
                <Menu.Item key="11">UnAssigned</Menu.Item>
                <Menu.Item key="12">Raise Complaint</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout
            className="site-layout"
            style={{
              // margin: "1rem",
              // marginLeft: "0",
              borderRadius: "5%",
              background: "white",
            }}
          >
            <Content style={{ padding: "0 24px" }}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default MyLayout;
