import React, { Component } from 'react';
import Location from './style';
import { Select,Row ,Col,Input,Button} from 'antd';
import notification from "./clarity_notification.svg";
import user from "./carbon_user.svg";
const { Option } = Select;
const { TextArea } = Input;


class LocationModel extends Component{

  render(){
        return(
            <Location>
              {/* <div className="maindiv">
          <div className="notification size">
            <img src={notification}></img>
          </div>
          <div className="user size">
            <img src={user}></img>
          </div>
        </div> */}


                <div className="mainDiv">

                
                <table >
                    <tr>
                        <td className="floor">Floor</td>
                        <td>
                        <Select className="floorSelect" defaultValue="Floor" > 
                         <Option value="location">Location</Option>
                         </Select>
                        </td>
                    </tr>
                    <tr>
                        <td className="location">Location</td>
                        <td>
                        <Input className="input"></Input>
                        </td>
                    </tr>
                    <tr>
                        <td className="description">Description</td>
                        <td>
                        <TextArea className="textArea" autoSize={{ minRows: 2, maxRows: 3 }}/>
                      </td>
                    </tr>
                </table>
                <div className="btnDiv">
                <Button className="btn">Add</Button>

                </div>
                </div>
              
            </Location>
        )
    }
}

export default LocationModel;