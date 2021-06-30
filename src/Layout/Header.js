import React, { Component } from "react";
import {
  Breadcrumb,
  Input,
  Space,
  Button,
  Table,
  Tag,
  Badge,
  Avatar,
  Divider,
  Dropdown,
  Menu,
} from "antd";
import { AudioOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Search } = Input;

class Header extends Component {
  render() {
    const menu = (
      <Menu selectable={false} theme="dark" style={{ color: "white" }}>
        <Menu.Item>
          <strong>
            superAdmin
            <br /> Software Engineer
          </strong>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <strong>Reset Password</strong>
        </Menu.Item>{" "}
        <Menu.Item>
          <strong>Help</strong>
        </Menu.Item>{" "}
        <Menu.Divider />
        <Menu.Item>
          <a href="#" onClick={this.logOut}>
            <i className={` fe fe-log-out`} />
            Logout
          </a>
        </Menu.Item>
      </Menu>
    );
    const menus = (
      <Menu selectable={false}>
        <Menu.Item>Notifications</Menu.Item>
        <Menu.Divider />
        <Menu.Item>No Notifications</Menu.Item>{" "}
      </Menu>
    );
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <div>{this.props.children}</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <Space direction="horizontal">
              <Search placeholder="Search" style={{ width: 200 }} />
            </Space> */}
            <Dropdown overlay={menus} trigger={["click"]}>
              <span style={{ marginRight: "1rem" }}>
                <Badge>
                  <BellOutlined />
                </Badge>
              </span>
            </Dropdown>

            <Dropdown overlay={menu} trigger={["click"]}>
              <div>
                <Badge>
                  <Avatar size="default" icon={<UserOutlined />} />
                </Badge>
              </div>
            </Dropdown>
          </div>
        </div>
        <Divider />
      </>
    );
  }
}

export default Header;
