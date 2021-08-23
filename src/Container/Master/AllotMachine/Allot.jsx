import React, { Component } from 'react'
import Header from "../../../Layout/Header";
import { Breadcrumb,Button,Menu,Dropdown,Table } from "antd";
import { AllotStyle } from "./Style";
import { Link,withRouter} from "react-router-dom";
import {
    CloseCircleOutlined,
    DeleteOutlined,
    EyeOutlined,
    EditOutlined,
    PrinterOutlined,
    FileTextOutlined,
  } from "@ant-design/icons";
import AddAllot from './AddAllot';



class AllotMachine extends Component {
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
            <AllotStyle>
              <Header>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link to="/css/allot">Master</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a href="">Allot</a>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Header>
              <h1>Allot Machine</h1>
              {path === "/css/allot" && (
                <>
                  <div>
                    <Button
                    className="btnAdd"
                     
                      onClick={() => {
                        this.props.history.push("/css/allot/add");
                       
                      }}
                    >
                      Add Allot
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
                  
                  />
                </>
              )}
               {path === "/css/allot/add" && (
                <div>
                  <AddAllot/>
                </div>
              )}
            </AllotStyle>
          );
        }
      }
            
export default AllotMachine;



