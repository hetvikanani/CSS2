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
  
  Table,
} from "antd";
import { Link, withRouter } from "react-router-dom";


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
render(){
    const { fields } = this.state;

    return(
        <div>
             <Header>
          <Breadcrumb>
           
            <Breadcrumb.Item>
              <Link to="/css/machine-group">Master</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Machine</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
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
              </Row>
          </Form>
        </div>
        </div>
    )
}
}


export default AddMachine;