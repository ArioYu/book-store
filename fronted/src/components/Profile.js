import React from 'react';
import {Layout,Input,Image,Button} from 'antd';
import '../css/index.css'

const {Content} = Layout;
const {TextArea} =Input;

export class Profile extends React.Component {

    render(){

        return(
            <div id='profile'>
                <Layout>
                <Content style={{
                    fontFamily:"Comic Sans MS",
                    fontSize:'x-large',
                    paddingTop:'20px',
                    fontWeight:'bold'
                }}>
                    My Profile
                </Content>
                <Content style={{
                    fontFamily:"Comic Sans MS",
                    fontSize:'large',
                    paddingTop:'20px',
                    fontWeight:'bold'
                }}>
                    name
                </Content>
                <Content style={{paddingTop:'10px'}}>
                    <Input placeholder="first name" 
                    style={{
                        float:'left',
                        width:'200px'
                    }}
                    defaultValue='Tom'>
                    </Input>
                    <Input placeholder="Secord name" 
                    style={{
                        float:'left',
                        width:'200px',
                        marginLeft:'10px'
                    }}
                    defaultValue='Cat'>
                    </Input>
                </Content>
                <Content style={{
                    fontFamily:"Comic Sans MS",
                    fontWeight:'bold',
                    paddingTop:'10px',
                    fontSize:'large'
                }}>
                    QQ/WeChat
                </Content>
                <Content style={{paddingTop:'10px'}}>
                    <Input placeholder="first name" 
                    style={{
                        float:'left',
                        width:'410px'
                    }}
                    defaultValue='XXX'>
                    </Input>
                </Content>
                <Content>
                <Content style={{
                    fontFamily:"Comic Sans MS",
                    fontWeight:'bold',
                    paddingTop:'10px',
                    fontSize:'large'
                }}>
                    Avatar
                </Content>
                    <Content style={{
                        paddingTop:'10px'
                    }}>
                    <Image
                        width={200}
                        src="https://inews.gtimg.com/newsapp_bt/0/13771038420/1000"
                        />
                        <Content style={{
                        fontFamily:"Comic Sans MS",
                        fontWeight:'bold',
                        paddingLeft:'210px',
                        marginTop:'-235px',
                        fontSize:'large'
                        }}>Introduction
                        </Content>
                        <TextArea style={{
                            marginLeft:'210px',
                            marginTop:'10px',
                            width:'200px',
                            height:'200px'
                        }}
                        allowClear
                        defaultValue="I am a cat loving reading books."
                        >

                        </TextArea>
                    
                    </Content>
                </Content>
                
            </Layout>
            <Button style={{marginLeft:'23%',marginTop:'10px'}} >
                保存
            </Button>
            </div>
        );
    }
}