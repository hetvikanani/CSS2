import React, { Component } from "react";

class Label extends Component {
  render() {
    const { className } = this.props;
    return (
      <div>
        <label className={className}>{this.props.Label}</label>
      </div>
    );
  }
}

export default Label;
