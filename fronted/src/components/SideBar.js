import React from 'react'
import { Menu,Layout} from 'antd'

import {
    UserOutlined,
    UnorderedListOutlined,
    ReadFilled,
    ShoppingCartOutlined,

} from '@ant-design/icons';
import "../css/index.css";
import {Link} from 'react-router-dom'
const { Sider } = Layout;

export class SideBar extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        if(collapsed){

        }
        console.log(collapsed);
        this.setState({ collapsed });
    };
    
    render() {

        return (
             <div style={{width:this.state.collapsed? "80px":"180px"}}>
             <div className="mySider">
             <Sider collapsible collapsed={this.state.collapsed} width="180px" onCollapse={this.onCollapse} className="sider">
                 <Menu defaultSelectedKeys={['1']} mode="inline">
                     <Menu.Item key="1" onClick={this.bookOnClick}>
                        <ReadFilled style={{ fontSize: '18px'}}/>
                         <span style={{ fontSize: '16px'}}><Link to={'/home'}>Books</Link></span>
                     </Menu.Item>
                     <Menu.Item key="2">
                        <ShoppingCartOutlined style={{ fontSize: '18px'}}/>
                         <span style={{ fontSize: '16px'}}><Link to={'/home/cart'}>My Cart</Link></span>
                     </Menu.Item>
                     <Menu.Item key="3">
                        <UnorderedListOutlined style={{ fontSize: '18px'}}/>
                         <span style={{ fontSize: '16px'}}>My Orders</span>
                     </Menu.Item>
                     <Menu.Item key="4">
                         <UserOutlined style={{ fontSize: '18px'}}/>
                         <span style={{ fontSize: '16px'}}><Link to={'/home/profile'}>My Profile</Link></span>
                     </Menu.Item>
                 </Menu>
             </Sider>
             </div>
             </div>

        );
    }

}