import React, { Component } from 'react';
import Header from "../../../Layout/Header";
import {
  Breadcrumb,
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
import { Link, withRouter, NavLink } from "react-router-dom";
// import actions, { postMachine } from "../../../Redux/Machine/action";
import { getMachine, postMachine } from "../../../Redux/Machine/action";
import { getState } from '../../../Redux/State/Action';

import { connect } from "react-redux";
// import InputCom from '../../../Components/Input';
import Select from "../../../Components/Select";
import Input from "../../../Components/Input";
 import { Formik, Form } from "formik";
import Label from "../../../Components/Label";
import Button from "../../../Components/Button/index";
import AddHeadquarterStyle from "./style";
import * as Yup from "yup";

const machineValidationSchema = Yup.object().shape({
    machineGroup: Yup.string().trim().required(" "),
  });

  

class AddheadQuater extends Component{
    constructor(props) {

        super(props);
        this.state = {
          citysdata:[],
          citys:[],
          gst:false,
           initial: {
            headquaterName: "",
            address: "",
            date: "",
            country:"",
            state:"",
            city:"",
            pincode: "",
            gstIn:"",
            userName:"",
            password:"",
        
          },
        };
      }

      async componentDidMount(){
        try{
          // debugger;
      await  this.props.getState();
      this.setState ({citysdata:this.props.city})
}
        catch (error) {
          console.log(error);
        }
      }
      setCity=(data)=>{
        // debugger
          let array=this.state.citysdata.find((x)=>x.state===data)
          this.setState({ citys:array.city})
      }
      gstFun=()=>{
        this.setState({gst:!this.state.gst})
      }
      changeFiled = (name, value) => {
        let newField = this.state.fields;
        newField[name] = value;
        this.setState({ fields: newField });
      };
      handleSubmit = async (values, { setSubmitting }) => {
        try {
          const { selected } = this.state;
          let local = localStorage.auth ? JSON.parse(localStorage.auth) : [];
          let userId = local.id;
         
          let data = {
            id: values.id,
            headquarter: values.headquaterName.trim(),
            address: values.address.trim(),
            country:values.country,
            city:values.country,
            state:values.state,
            pincode:values.pincode.trim(),
            gstin:values.gstIn.trim(),
            username:values.userName.trim(),
            password:values.password.trim(),
            gst:values.checked,
            created_by: userId,
      };
         
        //   await this.props.postMachine(data);
          setSubmitting(false);
          window.location.href = "/css/headquater";
        } catch (error) {
          console.log(error);
        }
      };
    render(){
        const { initial,citysdata } = this.state;
        let statess=[];
        citysdata.forEach((a) => {
        statess.push(a.state)
});

        return(
            <AddHeadquarterStyle>
            <div>
          <h1 style={{ fontWeight: "bold", fontSize: "21px" }}>Add Headquater</h1>
          <div className="box">
            <h1
              style={{
                fontSize: "17.5px",
                textAlign: "center",
              }}
            >
              Headquarter Information
            </h1>
         
            <Formik
              initialValues={initial}
              validationSchema={machineValidationSchema}
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
                <Form onSubmit={handleSubmit} noValidate>
                 
                  <Divider />

                  <Row gutter={24}>
                  <Col span={12}>
                      <Label Label="Headquarter Name*" className="label" ></Label>
                      <Input
                        onBlur={handleBlur}
                        name="headquaterName"
                        value={values.headquaterName.trim()}
                        handleChange={handleChange}
                      />
                    </Col>
                    <Col span={12}>
                      <Label Label="Address*" className="label"></Label>
                      <textArea
                        onBlur={handleBlur}
                        name="address"
                        value={values.address.trim()}
                        handleChange={handleChange}
                      />
                    </Col>  
                    
                   
                  </Row>
                  <Row gutter={24}>
                  <Col span={12}>
                      <Label
                        Label="Country*"
                        className="label"
                        className={
                          errors.machineGroup && touched.machineGroup
                            ? "txt"
                            : ""
                        }
                      />
                      <Select
                        data={["India"]}
                        className={
                          errors.machineGroup && touched.machineGroup
                            ? "error"
                            : ""
                        }
                       
                        value={values.country}
                        onChange={(data) => setFieldValue("country", data)}
                      />
                    </Col>
                  </Row>

                    <Row>
                    <Col span={12}>
                    <Label
                        Label="State*" 
                        className="label" 
                        className={
                          errors.machineGroup && touched.machineGroup
                            ? "txt"
                            : ""
                        }
                      />
                      <Select
                        data={statess}
                        className={
                          errors.machineGroup && touched.machineGroup
                            ? "error"
                            : ""
                        }
                        // className="normal"
                        value={values.state}
                        onChange={(data) => {setFieldValue("state", data);
                        setFieldValue("city", "");
                        this.setCity(data)}

                      }
                    />
                    </Col>
                    <Col span={12}>
                    <Label
                        Label="City*"
                        className="label"
                        className={
                          errors.machineGroup && touched.machineGroup
                            ? "txt"
                            : ""
                        }
                      />
                      <Select
                        data={this.state.citys}
                        className={
                          errors.machineGroup && touched.machineGroup
                            ? "error"
                            : ""
                        }
                        // className="normal"
                        value={values.city}
                        onChange={(data) => setFieldValue("city", data)}
                      />
                    </Col>
                    
                    </Row>
                    <Row>
                    <Col span={12}>
                    <Label Label="Pincode*" className="label"></Label>
                      <Input
                        onBlur={handleBlur}
                        name="pincode"
                        value={values.pincode.trim()}
                        handleChange={handleChange}
                      />
                    </Col>
                   
                    </Row>
                    <Row>
                    <Col span={12}>
                      <Label Label="GST" className="label"></Label>
                      {/* <Input
                        onBlur={handleBlur}
                        name="price"
                        // value={values.price.trim()}
                        handleChange={handleChange}
                      /> */}
                      <>
                    
                        <div>
                       No
                        <Switch 
                        onChange={this.gstFun}
                        checked={this.state.gst}/>

                        Yes
                      </div>
                    </>
                    </Col>
                    <Col span={12}>
                      <Label Label="GSTIN" className="label"></Label>
                      <Input
                        onBlur={handleBlur}
                        name="gstin"
                        value={values.gstIn.trim()}
                        handleChange={handleChange}
                      />
                    </Col>
                    </Row>
                    <Row>
                    <Col span={12}>
                      <Label Label="Username*" className="label"></Label>
                      <Input
                        onBlur={handleBlur}
                        name="username"
                        value={values.userName.trim()}
                        handleChange={handleChange}
                      />
                    </Col>
                    <Col span={12}>
                      <Label Label="Password*" className="label"></Label>
                      <Input
                        onBlur={handleBlur}
                        name="password"
                        value={values.password.trim()}
                        handleChange={handleChange}
                      />
                    </Col>
                    </Row>
                  
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <NavLink to="/css/headquater">
                      <Button className="btn" type="button" text="Cancle" />
                    </NavLink>
                    <Button
                      className="btn"
                      type="submit"
                      text="Submit"
                      style={{ margin: "2rem" }}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
            </AddHeadquarterStyle>
        )
    }

} 

const mapStateToProps = (state) => ({
 
  // headquaters: state.headquater.headquaters,
  city:state.state.state,
});

const mapDispatchToProps = (dispatch) => ({
  // getHeadquater: (payload) => dispatch(getHeadquater(payload)),
  getState: (payload) => dispatch(getState(payload)),

});


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddheadQuater)
);
