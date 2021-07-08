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
import AddMachine from './AddMachine'
import {getMachine} from '../../../Redux/Machine/action'

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
  constructor(){
    super()
      this.state={
        tblDate:[],
      }
    
  }


  async componentDidMount(){
    try {
      // debugger
      await this.props.getMachine();
      console.log(this.props.machines)
    } catch (error) {
      console.log(error);
    }
  }
  async componentDidUpdate(PrevProps){

    try {
      if(this.props.machines !== PrevProps.machines){
        // debugger;
        this.setState({tblDate:this.props.machines})
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
      title: "Name",
      dataIndex: "machine_code",
      key: "machine_code",
    },
    {
      title: "Machine Group",
      dataIndex: "machine_group",
      key: "machine_group",
    },
    {
      title: "Manufacturing Date",
      dataIndex: "manufacturing_date",
      key: "manufacturing_date",
    },
    {
      title: "Rental Price",
      dataIndex: "rental_price",
      key: "rental_price",
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
    // console.log("machine",this.props.Machine)
    const {machines} =this.props;
    const {tblDate} =this.state;
    tblDate.forEach((e,i )=> {
      e.key=i+1
    });
    let path=window.location.pathname;
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

    return (<>
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
    {path ==="/css/machine" &&
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
                
                this.props.history.push("/css/machine/add");
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
          dataSource={tblDate}
        />
        
        </>
      
          
        }
        {path=== "/css/machine/add"&&
        <div> 
          <AddMachine/>
        </div>
         } 
   </>);
  }
}


const mapStateToProps = (state) => ({
  // loading: state.login.loading,
  // error: state.login.error,
  // message: state.login.message,
  machines:state.machine.machines,
});

const mapDispatchToProps = (dispatch) => ({
 getMachine: (payload) => dispatch(getMachine(payload)),
});

// export default connect((state) => ({}))(Machine);
export default withRouter(connect( mapStateToProps, mapDispatchToProps)(Machine));

// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
