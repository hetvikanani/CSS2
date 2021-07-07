import React, { Component } from "react";
import {
  Breadcrumb,
  Input,
  Button,
  Table,
  Dropdown,
  Menu, 
  Modal,
  Divider,
} from "antd";
import { Link, withRouter } from "react-router-dom";
import Header from "../../../Layout/Header";
import { connect } from "react-redux";

import {
  CloseCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
  EditOutlined,
  PrinterOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
const { Search } = Input;


class Machine extends Component {
  columns = [
    {
      title: "SR NO.",
      dataIndex: "sr",
      key: 1,
      sorter: (a, b) => a.sr - b.sr,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Machine Group",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Manufacturing Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Rental Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Allotted",
      dataIndex: "allotted",
      key: "allotted",
    },
    // {
    //   title: "",
    //   dataIndex: "id",
    //   key: "action",
    //   render: (data, b) => {
    //     console.log(data, b, "render table");
    //     return (
    //       <Dropdown.Button overlay={() => this.menu(data)}></Dropdown.Button>
    //     );
    //   },
    // },
  ];
  render() {
    console.log("machine",this.props.Machine)
    const menu = (
      <Menu selectable={false} style={{ color: "rgba(0,0,0,.85)" }}>
        <Menu.Item>
          <PrinterOutlined />
          Print
        </Menu.Item>
        <Menu.Item>
          <FileTextOutlined />
          Export to Excel
        </Menu.Item>{" "}
        <Menu.Item>
          <FileTextOutlined />
          Export to PDF
        </Menu.Item>{" "}
      </Menu>
    );

    return <>
    <Header>
      <Breadcrumb>
     
    <Breadcrumb.Item>
      <a href="">Master</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Machine</a>
    </Breadcrumb.Item>
 </Breadcrumb>
    </Header>
    <h1>Machine</h1>
    <div>
    <Button
              style={{
                background: "rgb(28, 63, 170)",
                color: "white",
                fontWeight: "600", 
                borderRadius: "7px",
              }}
              onClick={() => {
                
                this.props.history.push("/css/machineup/add");
              }}
            >
              Add Machine
            </Button>
            <Dropdown overlay={menu} trigger={["click"]}>
            <span>
              <Button style={{ borderRadius: "10px" }} onClick={() => {}}>
                +
              </Button>
            </span>
          </Dropdown>
    </div>
    <Table
          bordered={true}
          pagination={false}
          columns={this.columns}
          dataSource={this.props.machineData}
        />
    </>;
  }
}

// export default connect((state) => ({}))(Machine);
export default withRouter(
  connect((state) => ({  machine: state.machine}))(Machine)
);