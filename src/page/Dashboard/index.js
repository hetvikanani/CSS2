import React, { Component } from "react";
import { Breadcrumb, Input, Badge, Avatar, Space } from "antd";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import Header from "../../Layout/Header";

const { Search } = Input;

class index extends Component {
  render() {
    return (
      <div>
        <Header>
          <Breadcrumb>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">DashBoard</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        Dashboard
      </div>
    );
  }
}

export default index;

