import React from 'react';
import { Row, Col } from 'antd';
import '../css/index.css'
import {UserAvatar} from "./UserAvatar";

export class HeaderInfo extends React.Component {

    render(){

        return(
            <div id="header">
                <div id="header-content">
                    <Row>
                        <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
                            <a id="logo">
                            </a>
                        </Col>
                        <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
                            <UserAvatar  />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}