import React ,{useState}from 'react';
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import '../css/login.css'

const MesgBlankError = () => {
    message.error('用户名或密码不能空白哦，请检查一下~');
};

const MesgloginSucceed = () => {
    message.success('登录成功！欢迎 ~')
}
const MesgloginFail = () => {
    message.error('用户名或者密码错误~')
}


const LoginCard =()=>{
    const [id,setid] = useState('')
    const [pwd, setpwd] = useState('')

const handleSubmit = (e) => {
        
        alert(id);
        let userID=id;
        let userpwd=pwd;
        if(userID== null || userpwd==null || userID==="" || userpwd==="")
            MesgBlankError();
        else if(userID=="host"&&userpwd=="123456"){
            MesgloginSucceed();
            window.location.href="/home";
        }
        else MesgloginFail();
    };

        return(
            <div>
                <div className="login-header" sytle={{height:'56px',width:'300px'}}>
                    <h2 style={{textAlign:'left',color:'#1c1717'}}>欢迎登录</h2>
                </div>

                <div className="form-content" style={{width:'300px'}}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <Form.Item
                            id="inputname"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined />}
                                   placeholder="Username"
                                   onChange={(e) => setid(e.target.value)}
                            />
                        </Form.Item>


                        <Form.Item
                            id="inputpassword"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setpwd(e.target.value)}
                            />
                        </Form.Item>


                        <Form.Item>

                                <Button type="primary"  htmlType="submit" Primary ghost style={{float:'right'} } onClick={()=>handleSubmit()}>
                                    <span style={{color:'white',fontSize:14}}>登录</span>
                                </Button>

                        </Form.Item>

                    </Form>
                </div>
            </div>
        );
}

export default LoginCard;