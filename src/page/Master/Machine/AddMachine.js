import React, { Component } from 'react';
import Header from "../../../Layout/Header";
import {
  Breadcrumb,
  Form,
  
  Button,
  Radio,
  Divider,
  Row,
  Col,
  Menu,
  Dropdown,

  Switch,
  Tag,
  DatePicker,
  Table,
} from "antd";
import { Link, withRouter } from "react-router-dom";
import actions from '../../../Redux/Machine/action';
import {getMachine} from '../../../Redux/Machine/action'
import { connect } from "react-redux";
// import InputCom from '../../../Components/Input';
import Select from '../../../Components/Select';
import Input from '../../../Components/Input';
import { Formik } from 'formik';
import Label from '../../../Components/Label';

class AddMachine extends Component{
    constructor(props) {
        super(props);
        this.state = {
          // fields: {},
          // configurationValue: false,
          // tags: [],
          // tagValue: "",
          // tableData: [],

          initial:{
            machineName:'',
            machineGroup:'',
            date:"",
            price:'',
          }
          
        };
      }

      changeFiled = (name, value) => {
        let newField = this.state.fields;
        newField[name] = value;
        this.setState({ fields: newField });
      };
    
      
       submitData = async (values, { setSubmitting }) => {
          try {
           
            let data = {
              // username: values.username.trim(),
              // password: window.btoa(values.password.trim()),
              // machineName:this.state.machineName;
              // machineGroup:this.state.machineGroup;
              // date:this.state.date;
              // price:this.state.price;  
            };
            await this.props.login(data);
            setSubmitting(false);
          } catch (error) { 
            console.log(error, "handle error");
          }
        };
        // console.log("add submit");
        // this.props.dispatch(
        //   actions.addData({ ...this.state.fields, id: Math.random() * 1000 })
        // );
        // this.props.history.push("/css/machine");
     
     
render(){
    // const { fields } = this.state;
    const {initial}=this.state;


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
          <Formik
                initialValues={initial}
                // validationSchema={loginValidationSchema}
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
                   {/* <div style={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                        
                            <img
                              // className="ant-image-img w-16"
                              // src={logo}
                              style={{ width: "56px", height: "56px" }}
                            ></img>
                         
                        </div> */}
            {/* <Divider />
                    <h2 className="heading">Login</h2>
                 
                  <Label Label ="Username"/> */}
                  {/* <row>
                    <col> */}
                    <Label Label="Machine group*"></Label>
                  <Input
                  onBlur={handleBlur}
                  name="username"
                  // value={values.username.trim()}
                  handleChange={handleChange}
                  // className = {
                  //   errors.username&&touched.username?"error":""
                  // }
                  />
                   <Label Label="Machine Name"></Label>
                  <Input
                  onBlur={handleBlur}
                  // name="username"
                  // value={values.username.trim()}
                  handleChange={handleChange}
                  // className = {
                  //   errors.username&&touched.username?"error":""
                  // }
                  />
                   <Label Label="Manufacturing date"></Label>
                   <DatePicker   />
                   <Label Label="Rental Price"></Label>
                   <Input
                  onBlur={handleBlur}
                  // name="username"
                  // value={values.username.trim()}
                  handleChange={handleChange}
                  // className = {
                  //   errors.username&&touched.username?"error":""
                  // }
                  />

                    {/* </col> */}
                  {/* </row> */}
                 
                
            {/* <Label Label ="Password"/>
            {/* <Input 
                    //  password={true}
                        max={25}
                        onBlur={handleBlur}
                        name="password"
                        value={values.password.trim()}
                        handleChange={handleChange}
                        className = {
                          errors.username&&touched.username?"error":""
                        }
                        type="password"
                        /> */}
                 <Button type = "submit" text="submit"/>
                  
                </Form>
                  
                )}
              

</Formik>
          
          {/* <Form layout="vertical">
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
                    value={this.state.machineGroup}
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
          </Form> */}
        </div>
        </div>
    )
  }

};


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
export default withRouter(connect( mapStateToProps, mapDispatchToProps)(AddMachine));


// export default withRouter(AddMachine);