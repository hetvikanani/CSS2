import React, { Component } from 'react';
import {Col,Table, Tag, Space} from 'antd';


const {Column } = Table;

class Tables extends Component{
    columnsUI = ()=>{
        try {
            return(
                <>
                <Column
                    title ={"SR No."}
                />
                </>
            )
        } catch (error) {
            console.log(error);
        }
        
    }

    // columns = [
    //     {
    //       title: 'Id',
    //       dataIndex: 'id',
    //       key: 'id',
    //     },
    //     {
    //       title: 'Name',
    //       dataIndex: 'name',
    //       key: 'name',
    //     },
    //     {
    //       title: 'Mobile No.',
    //       dataIndex: 'mobile',
    //       key: 'mobile',
    //     },
    //   ];

    render(){
        return(
            <div>
            <Table
              bordered={true}
              pagination={false}
              
              // dataSource={this.props.headquaters}
            >
                {this.columnsUI()}

            </Table>
            </div>
        )
    }
}

export default Tables;