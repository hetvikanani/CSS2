import React, { Component } from 'react';
import RequestStyle from './style';
import { Select ,Row,Col,Input} from 'antd';
import {PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

class Request extends Component{

  constructor(){
    super()
    this.state={
      count:1,
      }
  }
  increment=()=>{
   
    this.setState({count: this.state.count+1 } );
}

onChange=(val)=>{
  const {count}=this.state
  this.setState({count:val? count+1 :count !==1?count-1:count } );
}


    render(){
      const {count} =this.state;
      console.log(this.state.count);
        return(
            <RequestStyle>
                <h6 className="heading">Add New Request</h6>
                <label className="label">Pickup</label>
                 <div>
                        <Select className='selectFloor' defaultValue="Floor">
                          <Option value="location">Location</Option>
                        </Select>
                 </div>
                 <div>
                        <Select className='selectLocation' defaultValue="Location"  >
                          <Option value="abc">abc</Option>
                        </Select>
                 </div>
                 <label className="label">Destination</label>
                
                 <div>
                        <Select className='selectLocation' defaultValue="To"  >
                          <Option value="abc">abc</Option>
                        </Select>
                 </div>
                 <div>
                        <Select className='selectFloor' defaultValue="Floor"  >
                          <Option value="location">Location</Option>
                        </Select>
                 </div>
                 <div>
                        <Select className='selectLocation' defaultValue="Location"  >
                          <Option value="abc">abc</Option>
                        </Select>
                 </div>
                 <div>
                 <label className="labelPorter">Porters</label>
                 <Row>
                   <Col className="incrementIcon"><PlusCircleOutlined onClick={()=>this.onChange(true)}/> </Col>
                   <span className="count">{count}</span>
                   <Col className="decrementIcon"> <MinusCircleOutlined onClick={()=>this.onChange(false)}/></Col>
               
                 </Row>
                 
                 </div>
                 
                 <label className="labelRemark">Remark</label>
                 <TextArea className="textArea" autoSize={{ minRows: 3, maxRows: 5 }}/>
                 <div className="btnBox">
                 <button className="btn">Start Job</button>
                 </div>
               
                
               
            </RequestStyle>
        )
    }
}

export default Request




