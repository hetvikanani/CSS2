import React, { Component } from "react";
import Header from "../../../Layout/Header";
import { Breadcrumb, Button, Menu, Dropdown, Table, Row,Col} from "antd";
import { BranchStyle } from "./style";
import { Link, withRouter } from "react-router-dom";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
  EditOutlined,
  PrinterOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import AddBranch from "./AddBranch";


class Branch extends Component {
  constructor() {
    super();
    this.state = {
      tblDate: [],
    };
  }

  columns = [
    {
      title: "SR NO.",
      dataIndex: "key",
      key: "key",
      sorter: (a, b) => a.sr - b.sr,
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
    },
    {
      title: "Headquarter",
      dataIndex: "active_branch",
      key: "activebranch",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "No. of machine",
      dataIndex: "machinery",
      key: "no_machine",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];  

  render() {
    let path = window.location.pathname;
    console.log(path);
    const menu = (
      <Menu
        selectable={false}
        className="menu"
        style={{ color: "rgba(0,0,0,.85)" }}
      >
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

    return (
      <BranchStyle>
    
        <Header>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/css/branch">Master</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Branch</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <h1>Branch</h1>
        {path === "/css/branch" && (
          <>
            <Row gutter={6} className="btnRow">
              <Col span={3} className="btnCol">
              <Button
                className="btnAdd"
                onClick={() => {
                  this.props.history.push("/css/branch/add");
                }}
              >
                Add Branch
              </Button>
                </Col>
            <Col span={3} className='btnPlus'>
            <Dropdown overlay={menu} trigger={["click"]}>
                <span>
                  <Button className="btnPlus" onClick={() => {}}>
                    +
                  </Button>
                </span>
              </Dropdown>
            </Col>
              
            </Row>
            <Table
              bordered={true}
              pagination={false}
              columns={this.columns}
              //   dataSource={this.props.branch}
            />
          </>
        )}
        {path === "/css/branch/add" && (
          <div>
            <AddBranch />   
          </div>
        )}
    
        
      </BranchStyle>
    );
  }
}

export default withRouter(Branch);
