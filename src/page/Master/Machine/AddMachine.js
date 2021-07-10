import React, { Component } from 'react';
import Header from "../../../Layout/Header";
import {
  Breadcrumb,
  Form,
  

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
import { Link, withRouter,NavLink } from "react-router-dom";
import actions from '../../../Redux/Machine/action';
import {getMachine} from '../../../Redux/Machine/action'
import { connect } from "react-redux";
// import InputCom from '../../../Components/Input';
import Select from '../../../Components/Select';
import Input from '../../../Components/Input';
import { Formik } from 'formik';
import Label from '../../../Components/Label';
import Button from '../../../Components/Button/index'

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
    
      
      // handleSubmit = async (values, { setSubmitting }) => {
      //   try {
          
      //       console.log("add click",this.props)
           
      //       let data = {
      //         // username: values.username.trim(),
      //         // password: window.btoa(values.password.trim()),
      //         machineName:values.machineName.trim(),
      //         // machineGroup:this.state.machineGroup;
              
      //         price:values.price.trim(),
      //       };
      //       await this.props.machine(data);
      //       setSubmitting(false);
      //     } catch (error) { 
      //       console.log(error, "handle error");
      //     }
      //   };

      handleSubmit =async (values ,{setSubmitting}) => {
        try {
          const { selected } = this.state;
          let local = localStorage.auth ? JSON.parse(localStorage.auth) : [];
          let userId= local.id;
          // this.setState({ redirect: true });
          if (selected && this.checkGST(values.gstin)) return;
          let data = {
            id: values.id,
            machineName:values.machineName.trim(),
             machineGroup:values.machineGroup.trim(),
           
            created_by: userId,
          }
          if(values.id === 0)
          await this.props.postHeadquarter(data);
          else{
            await this.props.updateHeadquarter({id:values.id,body:data});
          }
          setSubmitting(false);
          window.location.href = "/headquarter";
        } catch (error) {
          console.log(error);
        }
      };
       
     
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
                  setFieldValue,
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
             <Divider />
                    
                 
                  
                 {/* <Row gutter={24}>
                   <col span={12}> */}
                   <Label Label="Machine group*"></Label>
                   <Select
                              data={["Hetvi","sdgfjhndsb"]}
                              // className={
                              //   errors.country && touched.country
                              //     ? "txtError"
                              //     : "normal"
                              // }
                              value={values.machineGroup}
                              onChange={(data) =>
                                setFieldValue("machineGroup", data)
                              }
                            />
                    
                   {/* </col>
                   <col span={12}> */}
                   <Label Label="Machine Name"></Label>
                  <Input
                  onBlur={handleBlur}
                  name="machineName"
                  value={values.machineName.trim()}
                  handleChange={handleChange}
                  />
                   {/* </col>
                 </Row> */}
                   
                 <Label Label="Manufacturing date"></Label>
                   <DatePicker   />
                   <Label Label="Rental Price"></Label>
                   <Input
                  onBlur={handleBlur}
                  name="price"
                  value={values.price.trim()}
                  handleChange={handleChange}
                  />

                    {/* </col> */}
                  {/* </row> */}
                 
                  <NavLink to = "/css/machine">
                <Button  type="button" text="cancle" /></NavLink>
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