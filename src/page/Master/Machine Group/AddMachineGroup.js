import React, { Component } from "react";
import Header from "../../../Layout/Header";
import {
  Breadcrumb,
  Form,
  Input,
  Button,
  Radio,
  Divider,
  Row,
  Col,
  Menu,
  Dropdown,
  Select,
  Switch,
  Tag,
  Table,
} from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextArea from "antd/lib/input/TextArea";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import actions from "../../../Redux/MachineGroup/action";
const { Option } = Select;

class AddMachineGroup extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      configurationValue: false,
      tags: [],
      tagValue: "",
      tableData: [],
    };
  }

  changeFiled = (name, value) => {
    let newField = this.state.fields;
    newField[name] = value;
    this.setState({ fields: newField });
  };

  submitData = () => {
    console.log("add submit");
    this.props.dispatch(
      actions.addData({ ...this.state.fields, id: Math.random() * 1000 })
    );
    this.props.history.push("/css/machine-group");
  };

  render() {
    const { fields } = this.state;
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
        <h1 style={{ fontWeight: "bold", fontSize: "21px" }}>
          Add Machine Group
        </h1>

        <div className="box">
          <h1
            style={{
              fontSize: "17.5px",
              textAlign: "center",
            }}
          >
            Basic Machine Group Details
          </h1>
          <Divider />
          <Form layout="vertical">
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Machinery group*"
                  name="machineGroup"
                  rules={[
                    {
                      required: true,
                      message: "Please input machinary group!",
                    },
                  ]}
                >
                  <Input
                    value={fields.machineGroup}
                    style={{ borderRadius: "5px 0px 0px 5px" }}
                    onChange={(e) =>
                      this.changeFiled("machineGroup", e.target.value)
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                {" "}
                <Form.Item
                  label="Short name*"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input short name!",
                    },
                  ]}  
                >
                  <Input
                    value={fields.name}
                    onChange={(e) => this.changeFiled("name", e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="Description">
                  <TextArea
                    value={fields.description}
                    onChange={(e) =>
                      this.changeFiled("description", e.target.value)
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="LPH">
                  <Input
                    type="number"
                    value={fields.lph}
                    onChange={(e) => this.changeFiled("lph", e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Configuration attribute"
                  style={{ borderRadius: "5px 0px 0px 5px" }}
                >
                  {/* <Input
                    value={fields.configuration}
                    onChange={(e) =>
                          this.changeFiled("configuration", e.target.value)
                    }
                  /> */}
                  <Select
                    value={fields.configuration}
                    onChange={(e) => {
                      let newField = this.state.fields;
                      newField.configuration = e;
                      this.setState({ fields: newField });
                    }}
                  >
                    <Option value="asda">ASDA</Option>
                    <Option value="awed">AWED</Option>
                    <Option value="dfes">DFES</Option>
                  </Select>
                </Form.Item>
              </Col>
              {fields.configuration && (
                <Col span={12}>
                  <Form.Item
                    label="Configuration value"
                    style={{ borderRadius: "5px 0px 0px 5px" }}
                  >
                    <div style={{ display: "flex", padding: "3px" }}>
                      <div>
                        {" "}
                        No
                        <Switch />
                        Yes
                      </div>
                      <div>
                        {this.state.tags.map((t) => (
                          <Tag closable>{t}</Tag>
                        ))}
                        {!this.state.configurationValue ? (
                          <Button
                            onClick={() => {
                              this.setState({ configurationValue: true });
                            }}
                          >
                            <PlusOutlined />
                          </Button>
                        ) : (
                          <Input
                            width="50"
                            type="number"
                            value={this.state.tagValue}
                            onChange={(e) =>
                              this.setState({ tagValue: e.target.value })
                            }
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                this.setState(
                                  {
                                    tags: [
                                      ...this.state.tags,
                                      this.state.tagValue,
                                    ],
                                  },
                                  () => {
                                    this.setState({
                                      configurationValue: false,
                                      tagValue: false,
                                    });
                                  }
                                );
                              }
                            }}
                          ></Input>
                        )}
                      </div>
                      <Button
                        style={{
                          background: "rgb(28, 63, 170)",
                          color: "white",
                          fontWeight: "600",
                          borderRadius: "7px",
                        }}
                        onClick={() => {
                          let newData = {
                            id: this.state.tableData.length,
                            configurationValue: this.state.tags,
                            configurationAttribute:
                              this.state.fields.configuration.toUpperCase(),
                          };
                          this.setState(
                            {
                              tableData: [...this.state.tableData, newData],
                            },
                            () => {
                              this.setState({ tagValue: "", tags: [] });
                            }
                          );
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </Form.Item>
                </Col>
              )}
            </Row>
          </Form>
          <Row>
            <Col span={12}>
              {this.state.tableData.length > 0 && (
                <Table
                  bordered
                  columns={[
                    {
                      title: "Configuration attribute",
                      dataIndex: "configurationAttribute",
                    },
                    {
                      title: "Configuration value",
                      dataIndex: "configurationValue",
                      render: (data) => {
                        let newString = "";
                        data.map((newData, i) => {
                          if (this.state.tags.length - 1 === i)
                            newString = newString + newData;
                          else newString += newData + ",";
                          return newData;
                        });
                        return newString;
                      },
                    },
                    {
                      dataIndex: "id",
                      render: (data) => (
                        <MinusCircleOutlined
                          onClick={() => {
                            const newData = this.state.tableData.filter(
                              (t) => t.id !== data
                            );
                            this.setState({ tableData: newData });
                          }}
                        ></MinusCircleOutlined>
                      ),
                    },
                  ]}
                  dataSource={this.state.tableData}
                ></Table>
              )}
            </Col>
          </Row>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="primary"
              className="generalButton"
              shape="round"
              style={{ marginRight: "1rem" }}
              onClick={() => {
                this.props.history.push("/css/machine-group");
              }}
            >
              Cancel
            </button>
            <button
              shape="round"
              type="primary"
              className="generalButton"
              onClick={this.submitData}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(AddMachineGroup));
