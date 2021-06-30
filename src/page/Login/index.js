import React, { Component } from 'react';
import {Input, Button, Checkbox,Divider, Form} from 'antd';
import logo from "../../images/Logo.png";
import { withRouter } from 'react-router-dom';
import {Formik} from "formik";
import Label  from '../../Components/Label/index';
import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  username: Yup.string().trim().required(" "),
  password: Yup.string()
    .trim()
    .min(6, "password atleast 6 character")
    .max(25, "maximum 25 character")
    .required(" "),
});

class Login extends Component {
   constructor(props) {
    super(props);
    this.state = { 

      initial:{
        username: "", 
        password: ""

      }

    };
  }
  handleSubmit = async (values, { setSubmitting }) => {
    try {
   
     
      let data = {
      username: values.username.trim(),
        password: window.btoa(values.password.trim()),
      };
      await this.props.login(data);
      setSubmitting(false);
    } catch (error) {
      console.log(error, "handle error");
    }
  };
    render() {
       const {initial}=this.state;
        return (


            <div className="box-login" >
              <Formik
                initialValues={initial}
                validationSchema={loginValidationSchema}
                onSubmit={this.handleSubmit}
              >
                
                {({
                  values,
                  errors,
                  touched,
                  onBlur,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <Form onSubmit={handleSubmit}
                  noValidate
              
                >
                   <div style={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                        
                            <img
                              // className="ant-image-img w-16"
                              src={logo}
                              style={{ width: "56px", height: "56px" }}
                            ></img>
                         
                        </div>
            <Divider />
                    <h2>Login</h2>
                 
                  <Label Label ="Username"/>
                 <Input onBlur={handleBlur}
                        name="username"
                        value={values.username.trim()}
                        handleChange={handleChange}
                 
                 />
            <Label Label ="Password"/>
                    <Input.Password 
                    //  password={true}
                    //     max={25}
                        onBlur={handleBlur}
                        name="password"
                        value={values.password.trim()}
                        handleChange={handleChange}
                        />
                  <label wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={this.submit}>
                      Submit
                    </Button>
                  </label>
                </Form>
                  
                )}
              

</Formik>
                
            </div>
        );
    }
}

export default withRouter(Login);