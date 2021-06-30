import React, { Component } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

class  RestrictedRoute extends Component {
  render() {
    console.log(this.props, "hi");
    return (
      <Route
        render={() => {
          return this.props.isLoggedIn ? (
            <this.props.Component />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  }
}

export default RestrictedRoute;
