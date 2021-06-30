import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    // offset: 8,
    span: 16,
  },
};

const Demo = () => {};
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

class Login extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <h3 style={{ color: "blue" }}>Login</h3>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item>
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>  
      </div>
    );
  }
}



export default Login;
