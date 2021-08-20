import React, { Component } from "react";
import Header from "../../../Layout/Header";
import { Breadcrumb,Button,Menu,Dropdown,Table } from "antd";
import { BranchStyle } from "./style";
import { Link,withRouter} from "react-router-dom";
import {
    CloseCircleOutlined,
    DeleteOutlined,
    EyeOutlined,
    EditOutlined,
    PrinterOutlined,
    FileTextOutlined,
  } from "@ant-design/icons";
import AddBranch from "./AddBranch";
import Label from "../../../Components/Label"




 class Branch extends Component {
  render() {

   
   
    let path = window.location.pathname;
    console.log(path);
    const menu = (
      <Menu selectable={false} className="menu" style={{ color: "rgba(0,0,0,.85)"}}>
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
            <div>
              <Button
              className="btnAdd"
               
                onClick={() => {
                  this.props.history.push("/css/branch/add");
                 
                }}
              >
                Add Branch
              </Button>
              <Dropdown overlay={menu} trigger={["click"]}>
                <span>
                  <Button className="btnPlus"  onClick={() => {}}>
                    +
                  </Button>
                </span>
              </Dropdown>
            </div>
            <Table
              bordered={true}
              pagination={false}
              columns={this.columns}
            //   dataSource={this.props.headquaters}
            />
          </>
        )}
         {path === "/css/branch/add" && (
          <div>
            <AddBranch/>
          </div>
        )}
      </BranchStyle>
    );
  }
}

export default withRouter(Branch);