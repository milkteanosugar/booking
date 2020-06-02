import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';

class Navbar extends Component {
    render() {
    return (
    <div class = 'Nav' >
        <Menu mode="horizontal"
            style={{
                backgroundColor:'#b00c2d',
                color:"white",
            }}>
            <Menu.Item>
                  <a href="/homepage"
                    style={{
                        color:"white",
                        fontSize:"large"
                    }}>Home</a>
            </Menu.Item>
            <Menu.Item>
                  <a href="/book"
                    style={{
                        color:"white",
                        fontSize:"large"
                    }}>Book New</a>
            </Menu.Item>
        </Menu>
    </div>
    );
  }
}

export default Navbar;