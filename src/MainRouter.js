import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./page/Login/index";

import RestrictedRoute from "./RestrictedRoute";
import Routers from "./Router";

class MainRouter extends Component {
  constructor(){
    super()
    this.state={
      isLoggedIn:false,
    }
  }
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login" exact={this.state.isLoggedIn}>
            <Login  />
          </Route>
          {/* <Route path="/registration" exact={true}>
            <Registration />
          </Route>  */}
            <RestrictedRoute
              name="/css"
              Component={Routers}
              isLoggedIn={!this.state.isLoggedIn}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default MainRouter;
