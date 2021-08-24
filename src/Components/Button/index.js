// import React, { Component } from "react";
// import Btin from "./style";

// class Button extends Component {
//   render() {
//     const { type, className, text } = this.props;
//     return (
//       <Btin>
//         <button className={className} type={type ? type : "button"}>
//           {text}
//         </button>
//       </Btin>
//     );
//   }
// }

// export default Button;

import React, { Component } from "react";
import { Button } from "./style";

const ButtonConstant = {
  primary: { background: "orange", color: "#fff" },
  secondary: { background: "#e2e2e2", color: "orange" },
  answer: { background: "green", color: "#fff" },
  decline: { background: "red", color: "#fff" },
};
class FormButton extends Component {
  render() {
    const { children, htmlType, color, onClick, className, disabled, style } =
      this.props;
    return (
      <Button
        bgcolor={ButtonConstant[color]}
        type={htmlType}
        onClick={onClick}
        className={className}
        disabled={disabled ? disabled : false}
        style={style}
      >
        {children}
      </Button>
    );
  }
}
FormButton.defaultProps = {
  children: "Button",
  color: "primary",
  htmlType: "button",
  className: "",
  handleClick: () => {},
};
export default FormButton;
