import React, { Component } from "react";
import { Divider, Row, Col, Switch } from "antd";
import { Link, withRouter, NavLink } from "react-router-dom";
import {
  FormInput,
  Label,
  FormSelect,
  FormButton,
} from "../../../Components/Form";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  headquarter: Yup.string().trim().required(" "),
  branch: Yup.string().trim().required(" "),
  address: Yup.string().trim().required(" "),
  country: Yup.string().trim().required(" "),
  state: Yup.string().trim().required(" "),
  city: Yup.string().trim().required(" "),
  pincode: Yup.string().required()
  .min(6,"Please enter correct pin")
  .max(6, "Minimum 3 character allowed"),
  username: Yup.string().trim().required(" "),
  password: Yup.string().trim().required(" "),
});

const country=["India","China","US","UK"];
const state=["Newyork","Kabul","Gujarat"];
const city=["Rajkot","Paris","Geenland"];


class AddBranch extends Component {
  constructor() {
    super();
    this.state = {
      initState: {
        headquarter: "",
        branch: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        username: "",
        password:"",
      },
    };
  }

  handleSubmit = (value) => {};

  render() {
    const { initState } = this.state;

    return (
      <div>
        <h1 className="header">Add Branch</h1>
        <div className="box">
          <h1 className="headerInfo">Branch Information</h1>

          <Divider />

          <Formik
            initialValues={initState}
            validationSchema={ValidationSchema}
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
              <Form onSubmit={handleSubmit}>
                <Row gutter={24}>
                  <Col span={12}>
                    <Label
                      title="Headquarter*"
                      className={
                        errors.headquarter && touched.headquarter
                          ? "empty"
                          : "label"
                      }
                    ></Label>
                    <FormSelect
                      name="headquarter"
                      selectClass={
                        errors.headquarter && touched.headquarter ? "empty" : ""
                      }
                      value={values.headquarter}
                      data={country}
                      handleChange={handleChange}
                    ></FormSelect>
                  </Col>
                  <Col span={12}>
                    <Label
                      title="Branch*"
                      className={errors.branch && touched.branch ? "empty" : ""}
                    ></Label>
                    <FormInput
                      name="branch"
                      className={errors.branch && touched.branch ? "empty" : ""}
                      value={values.branch}
                      handleChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={12}>
                    <Label
                      title="Address*"
                      className={
                        errors.address && touched.address ? "empty" : "label"
                      }
                    ></Label>
                    <FormInput
                      row={5}
                      className="textarea"
                      name="address"
                      className={
                        errors.address && touched.address ? "empty" : ""
                      }
                      value={values.address}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col span={12}>
                    <Label
                      title="Country*"
                      className={
                        errors.country && touched.country ? "empty" : "label"
                      }
                    />
                    <FormSelect
                      name="country"
                      selectClass={
                        errors.country && touched.country ? "empty" : ""
                      }
                      value={values.country}
                      data={country}
                    ></FormSelect>
                    <Label
                      title="State*"
                      className={
                        errors.state && touched.state ? "empty" : "label"
                      }
                    />
                    <FormSelect
                      name="state"
                      selectClass={errors.state && touched.state ? "empty" : ""}
                      value={values.state}
                      data={state}

                    ></FormSelect>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={12}>
                    <Label
                      title="City*"
                      className={
                        errors.city && touched.city ? "empty" : "label"
                      }
                    />
                    <FormSelect
                      name="city"
                      selectClass={errors.city && touched.city ? "empty" : ""}
                      value={values.city}
                      data={city}

                    ></FormSelect>
                  </Col>
                  <Col span={12}>
                    <Label
                      title="Pincode*"
                      className={
                        errors.pincode && touched.pincode ? "empty" : "label"
                      }
                    />
                    <FormInput
                      name="pincode"
                      type="number"
                      value={values.pincode}
                      className={
                        errors.pincode && touched.pincode ? "empty" : ""
                      }
                      handleChange={handleChange}
                      
                    ></FormInput>
                     {errors.pincode && touched.pincode && (
                        <div className="form-error">{errors.pincode}</div>
                      )}
                  </Col>
                </Row>

                <Row gutter={24}>
                  <Col span={12}>
                    <Label title="Map link" className="label" />
                    <FormInput></FormInput>
                  </Col>
                  <Col span={12}>
                    <Label title="Activate branch" className="label" />
                    <div >
                      <span style={{padding:"10px",fontWeight:"600"}}>No</span>
                      <Switch></Switch>
                     <span style={{padding:"10px",fontWeight:"600"}}> Yes</span>
                    </div>
                  </Col>
                </Row>

                <Row gutter={24}>
                  <Col span={12}>
                    <Label
                      title="Username*"
                      className={
                        errors.pincode && touched.pincode ? "empty" : "label"
                      }
                    ></Label>
                    <FormInput
                      name="username"
                      className={
                        errors.username && touched.username ? "empty" : ""
                      }
                      value={values.username}
                      handleChange={handleChange}

                    />
                  </Col>
                  <Col span={12}>
                    <Label title="Password*"  className={
                        errors.password && touched.password ? "empty" : "label"
                      } ></Label>
                    <FormInput
                     name="password"
                     className={
                       errors.password && touched.password ? "empty" : ""
                     }
                     value={values.password}
                     handleChange={handleChange} />
                      

                  </Col>
                </Row>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <NavLink to="/css/branch">
                    <FormButton>Cancle</FormButton>
                    {/* <Button className="btn" type="button" text="Cancle" /> */}
                  </NavLink>
                  <FormButton htmlType="submit">Add Contact</FormButton>
                  {/* <Button
              className="btn"
              type="submit"
              text="Submit"
              style={{ margin: "2rem" }}
            /> */}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default AddBranch;