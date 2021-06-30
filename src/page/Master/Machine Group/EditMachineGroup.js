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
} from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
const { Option } = Select;

class EditMachineGroup extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
    };
  }

  add = () => {
    return 1222;
  };

  componentDidMount = () => {
    // console.log("id", this.props.match.params.id, this.props.machineData);
    let hetvi = this.props.machineData.filter(
      (gmete) => gmete.id == this.props.match.params.id
    );
    console.log(hetvi, "hetvi");
    this.setState({ fields: hetvi[0] });
  };
  changeFiled = (name, value) => {
    let newField = this.state.fields;
    newField[name] = value;
    this.setState({ fields: newField });
  };

  editData = () => {
    console.log("edit");
    this.props.dispatch({
      type: "EDIT_MACHINE_DATA",
      payload: { ...this.state.fields, id: this.props.match.params.id },
    });
    this.props.history.push("/css/machine-group");
  };

  render() {
    console.log(this.props, "edit vadu", this.state.fields);
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
          Edit Machine Group
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
                  //   name="machineGroup"
                  //   rules={[
                  //     {
                  //       required: true,
                  //       message: "Please input machinary group!",
                  //     },
                  //   ]}
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
                  //   name="name"
                  //   rules={[
                  //     {
                  //       required: true,
                  //       message: "Please input short name!",
                  //     },
                  //   ]}
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
                  <Input
                    type="text"
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
            </Row>
          </Form>
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
              onClick={this.editData}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect((state) => ({ machineData: state.machineData }))(EditMachineGroup)
);
