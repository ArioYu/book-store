import React from 'react';
import { Avatar, Dropdown, Menu} from 'antd';
import '../css/index.css'
import { UserOutlined } from '@ant-design/icons';

export class UserAvatar extends React.Component {

    render() {

        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        Show Profile
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a>
                        Log Out
                    </a>
                </Menu.Item>
            </Menu>
        );

        return(
            <div id="avatar">
                <span className="name">Hi, Tom</span>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Avatar icon={<UserOutlined />} src="https://inews.gtimg.com/newsapp_bt/0/13771038420/1000"/>
                </Dropdown>
            </div>
        );
    }
}