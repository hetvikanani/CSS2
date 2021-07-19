import React, { Component } from "react";
import { Input } from "antd";

class InputCom extends Component {
  render() {
    const { type, handleChange, className, value, ...props } = this.props;
    return (
      <div>
        {type === "password" ? (
          <Input.Password
            onChange={handleChange}
            className={className}
            type={type}
            value={value}
            {...props}
          />
        ) : (
          <Input
            onChange={handleChange}
            className={className}
            type={type}
            value={value}
            {...props}
          />
        )}
      </div>
    );
  }
}

export default InputCom;
