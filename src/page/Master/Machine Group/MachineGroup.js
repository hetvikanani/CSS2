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
import actions from "../../../Redux/MachineGroup/action";
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
const { Column } = Table;

class MachineGroup extends Component {
  constructor() {
    super();
    this.state = {
      deleteId: "",
      deleteModal: false,
      viewModal: false,
      viewId: "",
    };
  }

  handleChange = (e, id) => {
    if (e.key === "delete") {
      this.setState({ deleteModal: true, deleteId: id });
    }
    if (e.key === "view") {
      this.setState({ viewModal: true, viewId: id });
    }
    if (e.key === "update") {
      this.props.history.push(`/css/machine-group/edit/${id}`);
    }
  };
  //
  menu = (id) => (
    <Menu onClick={(e) => this.handleChange(e, id)}>
      <Menu.Item key="update" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="view" icon={<EyeOutlined />}>
        View
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );

  columns = [
    {
      title: "SR NO.",
      dataIndex: "sr",
      key: 1,
      sorter: (a, b) => a.sr - b.sr,
    },
    {
      title: "Machinery Group",
      dataIndex: "machineGroup",
      key: "group",
    },
    {
      title: "Short Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "LPH",
      dataIndex: "lph",
      key: "lph",
    },
    {
      title: "No. of machinery",
      dataIndex: "lph",
      key: "description",
    },
    {
      title: "",
      dataIndex: "id",
      key: "action",
      render: (data, b) => {
        console.log(data, b, "render table");
        return (
          <Dropdown.Button overlay={() => this.menu(data)}></Dropdown.Button>
        );
      },
    },
  ];

  deleteOriginal = () => {
    console.log("delete call", this.props);
    let obj = actions.deleteData({ id: this.state.deleteId });

    this.props.dispatch(obj);
    this.setState({ deleteModal: false });
  };

  render() {
    let data = this.props.machineData.machineData;
    data.forEach((a, i) => {
      a.key = i + 1;
    });
    console.log("xxxxxx", this.props.machineData, data);
    // const viewDataOnly = this.props.machineData.filter(
    //   (data) => data.id === this.state.viewId)[0];
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
      <div>
        <Header>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/css/dashboard">Application</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/css/machine-group">Master</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Machine Group</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <h1>Machine Group</h1>
        <div style={{ padding: "10px" }}>
          <span>
            {" "}
            <Button
              style={{
                background: "rgb(28, 63, 170)",
                color: "white",
                fontWeight: "600",
                borderRadius: "7px",
              }}
              on  Click={() => {
                this.props.history.push("/css/machine-group/add");
              }}
            >
              Add Machine Group
            </Button>
          </span>{" "}
          <Dropdown overlay={menu} trigger={["click"]}>
            <span>
              <Button style={{ borderRadius: "10px" }} onClick={() => {}}>
                +
              </Button>
            </span>
          </Dropdown>
        </div>
        <Table
          // bordered={true}
          // pagination={true}
          // columns={this.columns}
          dataSource={data}
        >
          <Column
            title={"Sr. no"}
            dataIndex="key"
            // sorter={(a, b) => a.af.localeCompare(b.af)}
          />
          <Column
            title={"Machine Group"}
            dataIndex="machineGroup"
            // sorter={(a, b) => a.af.localeCompare(b.af)}
          />
          <Column
            title={"Short Name"}
            dataIndex="name"
            // sorter={(a, b) => a.af.localeCompare(b.af)}
          />
          <Column
            title={"LPH"}
            dataIndex="lph"
            // sorter={(a, b) => a.af.localeCompare(b.af)}
          />
          <Column
            title={"No. of machine"}
            dataIndex="lph"
            // sorter={(a, b) => a.af.localeCompare(b.af)}
          />
        </Table>
        <Modal
          onCancel={() => {
            this.setState({ deleteModal: false });
          }}
          footer={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                style={{ borderRadius: ".375rem" }}
                onClick={() => {
                  this.setState({ deleteModal: false });
                }}
              >
                Cancel
              </Button>
              <Button
                style={{
                  background: "rgba(211,41,41)",
                  color: "white",
                  borderRadius: ".375rem",
                }}
                onClick={this.deleteOriginal}
              >
                Delete
              </Button>
            </div>
          }
          visible={this.state.deleteModal}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CloseCircleOutlined
              style={{
                color: "rgba(211,41,41)",
                fontSize: "50px",
                alignItems: "center",
              }}
            />
          </div>

          <div
            style={{
              fontSize: "1.775rem",
              lineHeight: "2.25rem",
              marginTop: "1.25rem",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Are you sure?{" "}
          </div>
          <div
            style={{
              marginTop: "0.5rem",
              textAlign: "center",
              color: "gray",
              fontWeight: "500",
            }}
          >
            Do you really want to delete these records?
            <br />
            This process cannot be undone.
          </div>
        </Modal>
        <Modal
          onCancel={() => {
            this.setState({ viewModal: false });
          }}
          visible={this.state.viewModal}
          okText="Edit"
          onOk={() => {
            this.props.history.push(
              `/css/machine-group/edit/${this.state.viewId}`
            );
          }}
        >
          {/* {viewDataOnly ? (
            <>
              <div style={{ fontWeight: "600" }}>
                <h4 style={{ fontWeight: "765", marginBottom: "1rem" }}>
                  Machine Group
                </h4>
                <Divider />
                <p>Machine Group : {viewDataOnly.machineGroup}</p>
                <p>Short name : {viewDataOnly.name}</p>
                <p> Description : {viewDataOnly.description}</p>

                <p>LPH : {viewDataOnly.lph}</p>
                {/* <p>No. of Machinery : 0</p> */}
          {/* </div>
            </>
          ) : null} */}
        </Modal>
      </div>
    );
  }
}

export default withRouter(
  connect((state) => ({ machineData: state.machineGroup.machineData }))(
    MachineGroup
  )
);
