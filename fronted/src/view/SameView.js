import React from 'react';
import {Layout} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import { SideBar } from '../components/SideBar';
import {useOutlet, useLocation} from "react-router-dom";
const { Header, Content} = Layout;

const SameView=()=>{

    const child = useOutlet();
    return (
        <Layout >

                <Header>
                    <HeaderInfo />
                </Header>
                <Layout >
                    <SideBar />
                    <Content className='color' style={{ padding: '0 50px' }}>
                        {child}
                    </Content>
                </Layout>
                
            </Layout>
    )
};
export default SameView