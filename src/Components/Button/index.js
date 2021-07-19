import React, { Component } from "react";
import Btin from "./style";

class Button extends Component {
  render() {
    const { type, className, text } = this.props;
    return (
      <Btin>
        <button className={className} type={type ? type : "button"}>
          {text}
        </button>
      </Btin>
    );
  }
}

export default Button;
