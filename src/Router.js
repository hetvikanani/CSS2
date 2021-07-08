import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./page/Login/index"
import Dashboard from "./page/Dashboard/index";
import Machine from "./page/Master/Machine/Machine";
import MachineGroup from "./page/Master/Machine Group/MachineGroup";
import AddMachineGroup from "./page/Master/Machine Group/AddMachineGroup";
import EditMachineGroup from "./page/Master/Machine Group/EditMachineGroup";
// import AddMachine from "./page/Master/Machine/AddMachine";

import Layout from "./Layout/Layout";
import AddMachine from "./page/Master/Machine/AddMachine";

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
        </Switch>
      </Layout>
    );
  }
}

export default Routers;
