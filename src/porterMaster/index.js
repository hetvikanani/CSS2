import React, { Component } from 'react';
import Master from './style';
import {Input,Row,Col,Table} from 'antd';
import Tables from './TableReuseable';
import Avatar from "./Group.svg"
import Upload from "./Group 14.svg"
import Download  from './Group down.svg';
import LocationModel from './LocationModel/index';

const { Search } = Input;

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Mobile No.',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: 'Email ID',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action  ',
  },
];

const data = [
  {
    id: '1234',
    name: 'lorem ipsum',
    mobile: 9876543201,
    email: 'lorem@gmail.com',
    status:'Active',
  },
  {
    id: '1234',
    name: 'lorem ipsum',
    mobile: 9876543201,
    email: 'lorem@gmail.com',
    status:'Disable',
  },  
  {
    id: '1234',
    name: 'lorem ipsum',
    mobile: 9876543201,
    email: 'lorem@gmail.com',
    status:'Active',
  },
  {
    id: '1234',
    name: 'lorem ipsum',
    mobile: 9876543201,
    email: 'lorem@gmail.com',
    status:'Active',
  },
];  

class PorterMaster extends Component{

    render() {
      return (
        <Master>
          <h4 className="heading">Porter Master</h4>
          <div className="search">
            <Row>
              <Col>
                 <Search  style={{ width: 200 }} />
              </Col>

              <Col className="col">
               <img src={Download} ></img>
               <img src={Avatar}></img>
               <img src={Upload}></img>
              </Col>
          </Row>
          </div>
          <Table
              bordered={false}
              size='small'
            pagination={true}
              columns={columns}
              dataSource={data}
            />
  
        </Master>
      )
    };
}

export default PorterMaster;

