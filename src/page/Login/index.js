import React, { Component } from 'react';
import InputStyle from './style';
import {Input,Divider } from 'antd';
import logo from "../../images/Logo.png";
import { withRouter } from 'react-router-dom';
import {Formik,Form} from "formik";
import Label  from '../../Components/Label/index';
import Button  from '../../Components/Button/index';
import InputCom from '../../Components/Input';
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
  handleSubmit =  (values) => {
    try {
   debugger
   console.log(values);  
      let data = {
      username: values.username.trim(),
        password: window.btoa(values.password.trim()),
      };
      // await this.props.login(data);
      // setSubmitting(false);
    } catch (error) {
      console.log(error, "handle error");
    }
  };
    render() {
       const {initial}=this.state;
        return (
          <InputStyle>

            <div className="box-login" >
              <Formik
                initialValues={{username: "", password: ""}}
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
                  <InputCom
                  onBlur={handleBlur}
                  name="username"
                  // value={values.username.trim()}
                  handleChange={handleChange}
                  className = {
                    errors.username&&touched.username?"error":""
                  }
                  />
                
            <Label Label ="Password"/>
            <InputCom
                    //  password={true}
                        max={25}
                        onBlur={handleBlur}
                        name="password"
                        handleChange={handleChange}
                        className = {
                          errors.username&&touched.username?"error":""
                        }
                        type="password"
                        />
                 <Button type ="submit" Button="submit"/>
                  
                </Form>
                  
                )}
              

</Formik>
                
            </div></InputStyle>
        );
    }
}

export default withRouter(Login);