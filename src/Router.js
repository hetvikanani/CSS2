import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Login from "./container/Login/index";
import Dashboard from "./Container/Dashboard/index";
import Machine from "./Container/Master/Machine/Machine";
import MachineGroup from "./Container/Master/Machine Group/MachineGroup";
import AddMachineGroup from "./Container/Master/Machine Group/AddMachineGroup";
import EditMachineGroup from "./Container/Master/Machine Group/EditMachineGroup";
import Headquater from "./Container/Master/Headquater/Headquater";
import Branch from './Container/Master/Branch/branch';
import AllotMachine from "./Container/Master/AllotMachine/Allot";

// import AddMachine from "./Container/Master/Machine/AddMachine";
// import Porter from "./Porter/index";
// import Request from "./Request/index";
// import PorterMaster from "./porterMaster/index";
// import LocationModel from "./porterMaster/LocationModel/index";
import Layout from "./Layout/Layout";
import AddMachine from "./Container/Master/Machine/AddMachine";
// import Floor from "./Floor/index";

class Routers extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/* <Route path="/css/login" exact={true}>
          <Login/>
          </Route> */}
          <Route path="/css/dashboard" exact={true}>
            <Dashboard />
          </Route>

          <Route path="/css/machine-group" exact={true}>
            <MachineGroup />
          </Route>
          <Route path="/css/machine-group/add" exact={true}>
            <AddMachineGroup />
          </Route>
          <Route path="/css/machine-group/edit/:id" exact={true}>
            <EditMachineGroup />
          </Route>
          <Route path="/css/machine" exact={true}>
            <Machine />
          </Route>
          <Route path="/css/machine/add" exact={true}>
            <Machine />
            {/* <AddMachine/> */}
          </Route>
          <Route path="/css/headquater" exact={true}>
            <Headquater />
          </Route>
          <Route path="/css/headquater/add">
            <Headquater />
          </Route>
          <Route path="/css/branch" exact={true}>
            <Branch/>
          </Route>
          <Route path="/css/branch/add" exact={true}>
            <Branch/>
          </Route>
          <Route path="/css/allotmachine" exact={true}>
            <AllotMachine/>
          </Route>
          <Route path="/css/allotmachine/add" exact={true}>
            <AllotMachine/>
          </Route>
          {/* <Route path="/css/porter">
            <Porter />
          </Route> */}
          {/* <Route path="/css/request">
            <Request />
          </Route> */}
          {/* <Route path="/css/floor">
            <Floor />
          </Route> */}
          {/* <Route path="/css/portermaster">
            <PorterMaster/>
            <LocationModel />
          </Route>
          <Route path="/kd/login">
            <Kd/>
          </Route> */}
        </Switch>
      </Layout>
    );
  }
}

export default Routers;
