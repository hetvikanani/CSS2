import React, { Component } from 'react';
import PorterStyle from './style';
import { Input, Space, Form, Button, Row,Col } from 'antd';
import avatar from "./Group 2.png"
import pencil from "./Group 6.png"

const { Search } = Input;




class Porter extends Component {

    render(){
        return(
            <PorterStyle>
                <p className="heading">Edit Profile</p>
             <img src={avatar} className="avatar"></img>
             <img src={pencil} className="pencil"></img>

            <Form.Item>
               <label className="name">Name</label>
               <input className="inputName"></input>
               <label className="position">Position</label>
               <input className="inputPosition"></input>
               <label className="department">Department</label>
               <input className="inputDepartment"></input>
               <Row>
                   <Col> 
                   <label className="email">Email id</label>
                   <input className="inputEmail"></input>
                   </Col>
                   <Col>
                   <label className="mobile">Mobile No</label>
                   <input className="inputMobile"></input>
                   </Col>

               </Row>
               <button className="btn">Save</button>
               
            </Form.Item>
            
       
            </PorterStyle>
        )
    }
}

export default Porter;

