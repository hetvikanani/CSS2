import React, { Component } from 'react';
import { Input } from 'antd';

class InputCom extends Component{
    render(){
        return(
            <div>
                {this.props.type === "password"?<Input.Password 
                onChange = {this.props.handleChange}
                className = {this.props.className}
                type={this.props.type}
                />:<Input 
                onChange = {this.props.handleChange}
                className = {this.props.className}
                type={this.props.type}
                />}
             
               
                
            </div>
        )
    }
}
console.log("hetvi")
export default InputCom 