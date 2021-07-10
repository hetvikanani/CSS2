import React, { Component } from 'react'
// import {SelectStyle} from './SelectStyle';
import { Select } from 'antd';
const { Option } = Select;


class select extends Component{
    optiomUI=()=>{
        if(this.props.data) {
            debugger;
       return this.props.data.map((e,i)=>
            (<Option key={i+1} value={e}>{e} </Option>)
       );}
    }
    render(){
        const { item, id,value } = this.props;
        return(
        
        // <SelectStyle
        // //  id={id ? "form-dropdown" + id : "form-dropdown"}
        //
        //  >
        <div  id = "form-dropdown"> 
            <Select showSearch  
            value={value}
             showArrow={false}
             className={this.props.className}  
              onChange={this.props.onChange} 
              getPopupContainer={() =>
              document.getElementById(
                id ? "form-dropdown" + id : "form-dropdown"
              )
            }>
                {this.optiomUI()}
            </Select>
            </div>
        // </SelectStyle>
        )
    }
}
export default select;








// function handleChange(value) {
//   console.log(`selected ${value}`);
// }


  
  
