import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';

import 'antd/dist/antd.css';
import { Form, Input, Button, Select } from 'antd';

import Navbar from '../navbar';
import map from './map.jpg';

const { Option } = Select;

const myStyle ={
    width:"30%",
    float: "left",
    margin:'150px 100px 0 0'

}

const layout = {

  labelCol: {
    span: 5,
    width:20,
  },
  wrapperCol: {
    span: 16,
  },
};

const Demo = () => {
//  const onFinish = values => {
//    console.log('Success:', values);
//  };
//
//  const onFinishFailed = errorInfo => {
//    console.log('Failed:', errorInfo);
//  };

  return (
  <div class = 'demoForm' style = {myStyle}>
  <h2 style={{margin:'0 0 20px 150px'}}>Reserve a Class Room</h2>
  <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
//      onFinish={onFinish}
//      onFinishFailed={onFinishFailed}
      >
      <Form.Item
        label="Building"
        name="Building"
      >
          <Select defaultValue="" >
              <Option value="AQ">AQ</Option>
              <Option value="ABS">ABS</Option>
              <Option value="BLU">BLU</Option>
          </Select>
      </Form.Item>

      <Form.Item
        label="Room"
        name="Room"
      >
          <Select defaultValue="" >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
          </Select>
      </Form.Item>
      <Form.Item
        label="Favourite"
        name="Favourite"
      >
          <Select defaultValue="" >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
          </Select>
      </Form.Item>

      <Form.Item
      style={{float:"right", marginRight:"12%"}}
      >
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
class Book extends Component {

    render() {
    return (
    <div>
        <Navbar/>
        <Demo/>
        <img src= {map} style={{width:"62%", height:"62%"}} />
    </div>
    );
  }
}

export default withRouter(Book);