import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;


// function handleChange(value) {
//     console.log(`selected ${value}`);
//   }


class select extends Component{
    render(){
        return(
            <div>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
    
    </Select>
            </div>
        )
    }
}


export default select;






function handleChange(value) {
  console.log(`selected ${value}`);
}


  
  
