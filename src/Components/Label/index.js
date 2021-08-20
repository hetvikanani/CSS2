import React, { Component } from "react";
import { LabelStyle } from "./style";

class Label extends Component {
  render() {
    const { title, className } = this.props;
    return (
      <LabelStyle>
        <label className={className}>{title}</label>
      </LabelStyle>
    );
  }
}

Label.defaultProps = {
  title: "Label",
  className: "",
};
export default Label;
