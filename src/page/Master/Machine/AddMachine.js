import React, { Component } from 'react';
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
  DatePicker,
  Table,
} from "antd";
import { Link, withRouter } from "react-router-dom";
import actions from '../../../Redux/Machine/action';


class AddMachine extends Component{
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
        // console.log("add submit");
        // this.props.dispatch(
        //   actions.addData({ ...this.state.fields, id: Math.random() * 1000 })
        // );
        // this.props.history.push("/css/machine");
      };
     
render(){
    const { fields } = this.state;

    return(
        <div>
        
         <h1 style={{ fontWeight: "bold", fontSize: "21px" }}>
           Add Machine 
         </h1>
        <div className="box">
        <h1
            style={{
              fontSize: "17.5px",
              textAlign: "center",
            }}
          >
            Basic Machine  Details
          </h1>
          <Divider />   
          <Form layout="vertical">
              <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Machine group*"
                  name="machineGroup"
                  rules={[
                    {
                      required: true,
                      message: "",
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
                  label="Machine Name"
                  name="name"
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: "Please input name!",
                  //   },
                  // ]}
                >
                  <Input
                    value={fields.name}
                    onChange={(e) => this.changeFiled("name", e.target.value)}
                  />
                </Form.Item>
              </Col>
              </Row>
              <Row gutter={24}>
              <col span={24}>

              </col>
              </Row>
              <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Manufacturing date"
                  name="date"
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: "Please input machinary group!",
                  //   },
                  // ]}
                >

<DatePicker   />
                  {/* <Input
                    value={fields.machineGroup}
                    style={{ borderRadius: "5px 0px 0px 5px" }}
                    onChange={(e) =>
                      this.changeFiled("machineGroup", e.target.value)
                    }
                  /> */}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Rental price">
                  <Input
                    type="number"
                    value={fields.lph}
                    onChange={(e) => this.changeFiled("lph", e.target.value)}
                  />
                </Form.Item>
              </Col>
              </Row>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="primary"
              className="generalButton"
              shape="round"
              style={{ marginRight: "1rem" }}
              onClick={() => {
                this.props.history.push("/css/machine");
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
          </Form>
        </div>
        </div>
    )
}
}


export default withRouter(AddMachine);