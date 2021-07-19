import React, { Component } from "react";
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

import { connect } from "react-redux";
// import InputCom from '../../../Components/Input';
import Select from "../../../Components/Select";
import Input from "../../../Components/Input";
import { Formik, Form } from "formik";
import Label from "../../../Components/Label";
import Button from "../../../Components/Button/index";
import AddMachineStyle from "./style";
import * as Yup from "yup";

const machineValidationSchema = Yup.object().shape({
  machineGroup: Yup.string().trim().required(" "),
});

class AddMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fields: {},
      // configurationValue: false,
      // tags: [],
      // tagValue: "",
      // tableData: [],

      initial: {
        machineName: "",
        machineGroup: "",
        date: "",
        price: "",
      },
    };
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
      // this.setState({ redirect: true });
      // if (selected && this.checkGST(values.gstin)) return;
      let data = {
        id: values.id,
        machine_code: values.machineName.trim(),
        machine_group: values.machineGroup.trim(),
        manufacturing_date: values.date,
        rental_price: values.price,
        created_by: userId,

        // group_id: values.gid,
        // machine_group: values.group,
        // machine_code: values.code,

        // created_by: userId,
      };
      // if (values.id === 0)
      await this.props.postMachine(data);
      // else {
      //   await this.props.updateHeadquarter({ id: values.id, body: data });
      // }
      setSubmitting(false);
      window.location.href = "/css/machine";
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // const { fields } = this.state;
    const { initial } = this.state;

    return (
      <AddMachineStyle>
        <div>
          <h1 style={{ fontWeight: "bold", fontSize: "21px" }}>Add Machine</h1>
          <div className="box">
            <h1
              style={{
                fontSize: "17.5px",
                textAlign: "center",
              }}
            >
              Basic Machine Details
            </h1>
            {/* <Divider /> */}
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
                  {/* <div style={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                        
                            <img
                              // className="ant-image-img w-16"
                              // src={logo}
                              style={{ width: "56px", height: "56px" }}
                            ></img>
                         
                        </div> */}
                  <Divider />

                  <Row gutter={24}>
                    <Col span={12}>
                      <Label
                        Label="Machine group*"
                        className={
                          errors.machineGroup && touched.machineGroup
                            ? "txt"
                            : ""
                        }
                      />
                      <Select
                        data={["Hetvi", "asd", "asdrr"]}
                        className={
                          errors.machineGroup && touched.machineGroup
                            ? "error"
                            : ""
                        }
                        // className="normal"
                        value={values.machineGroup}
                        onChange={(data) => setFieldValue("machineGroup", data)}
                      />
                    </Col>
                    <Col span={12}>
                      <Label Label="Machine Name"></Label>
                      <Input
                        onBlur={handleBlur}
                        name="machineName"
                        value={values.machineName.trim()}
                        handleChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col span={12}>
                      <Label Label="Manufacturing date"></Label>
                      <DatePicker style={{ width: "100%" }} />
                    </Col>
                    <Col span={12}>
                      <Label Label="Rental Price"></Label>
                      <Input
                        onBlur={handleBlur}
                        name="price"
                        value={values.price.trim()}
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
                    <NavLink to="/css/machine">
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
      </AddMachineStyle>
    );
  }
}

const mapStateToProps = (state) => ({
  // loading: state.login.loading,
  // error: state.login.error,
  // message: state.login.message,
  machines: state.machine.machines,
});

const mapDispatchToProps = (dispatch) => ({
  getMachine: (payload) => dispatch(getMachine(payload)),
  postMachine: (payload) => dispatch(postMachine(payload)),
});

// export default connect((state) => ({}))(Machine);
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddMachine)
);

// export default withRouter(AddMachine);
