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
import AddheadQuater from "./AddHeadquater";
import { getHeadquater} from "../../../Redux/HeadQuater/action";

import {
  CloseCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
  EditOutlined,
  PrinterOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
const { Search } = Input;

class Headquater extends Component {
  constructor() {
    super();
    this.state = {
      tblDate: [],
    };
  }

  async componentDidMount() {
    console.log(this.props,'xxx');

    try {
      await this.props.getHeadquater();
      // debugger;
      console.log(this.props.headquater);
    } catch (error) { 
      console.log(error);
    }
  }
  async componentDidUpdate(PrevProps) {
    try {
      if (this.props.headquater !== PrevProps.headquater) {
        // debugger;

        // this.setState({ tblDate: this.props.headquaters});
      }
    } catch (error) {
      console.log(error);
    }
  }
  columns = [
    {
      title: "SR NO.",
      dataIndex: "key",
      key: "key",
      sorter: (a, b) => a.sr - b.sr,
    },
    {
      title: "Headquarter",
      dataIndex: "headquarter",
      key: "headquater",
    },
    {
      title: "No. of Active Branch",
      dataIndex: "active_branch",
      key: "activebranch",
    },
    {
      title: "No. of machine",
      dataIndex: "machinery",
      key: "no_machine",
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
    
    const { headquater } = this.props;
    const { tblDate } = this.state;
    tblDate.forEach((e, i) => {
      e.key = i + 1;
    });
    let path = window.location.pathname;
    console.log(path);
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

    return (
      <>
        <Header>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/css/headquater">Master</Link>

            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Headquater</a>
              
            </Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <h1>Headquater</h1>
        {path === "/css/headquater" && (
          <>
            <div>
              <Button
                style={{
                  background: "rgb(28, 63, 170)",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "7px",
                }}
                onClick={() => {
                  this.props.history.push("/css/headquater/add");
                  console.log("add headquater executed")
                }}
              >
                Add Headquater
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
              dataSource={this.props.headquaters}
            />
          </>
        )}
        {path === "/css/headquater/add" && (
          <div>
            <AddheadQuater
            
            />
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
 
  headquaters: state.headquater.headquaters,
});

const mapDispatchToProps = (dispatch) => ({
  getHeadquater: (payload) => dispatch(getHeadquater(payload)),
});


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Headquater)
);

