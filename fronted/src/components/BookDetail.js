import React from 'react';
import { Descriptions, Button } from 'antd';
import {
    PayCircleOutlined,
    ShoppingCartOutlined,

} from '@ant-design/icons';

export class BookDetail extends React.Component{

    render() {
        const {info} = this.props;
        if(info == null){
            alert(1);
            return null;

        }
        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                <div style={{
                    fontFamily:"Comic Sans MS",
                    fontSize:'x-large',
                    paddingTop:'20px',
                    fontWeight:'bold'
                }}>
                    {info.name}
                </div>
                <div className={"book-image"}><img alt="image" src={info[1]} style={{width:"280px", height:"280px"}}/></div>
                    <div className={"descriptions"}>
                        <Descriptions bordered size='default'>
                            <Descriptions.Item label={"书名"} span={3}>{info[2]}</Descriptions.Item>
                            <Descriptions.Item label={"作者"} span={3}>{info[3]}</Descriptions.Item>
                            <Descriptions.Item label={"分类"} span={3}>{info[7]}</Descriptions.Item>
                            <Descriptions.Item label={"定价"} span={3}>{<span className={"price"}>{'¥' + info[4]}</span>}</Descriptions.Item>
                            <Descriptions.Item label={"状态 "} span={3}>{info[5] !== 0? <span>有货 <span className={"inventory"}>库存{info.amount}件</span></span> : <span className={"status"}>无货</span>}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
                <div>
                    <Descriptions bordered style={{marginTop:'-5%',width:'680px'}}>
                    <Descriptions.Item label={"作品简介"} span={3}>{info[6]}</Descriptions.Item>
                    </Descriptions>
                </div>
                <div className={"button-groups"}>
                    <Button size={"large"} onClick={()=>localStorage.setItem(info[2],"1")}>
                        <ShoppingCartOutlined/>
                        加入购物车
                    </Button>
                    <Button size={"large"} style={{marginLeft:"15%"}}>
                    <PayCircleOutlined />
                        立即购买
                    </Button>
                </div>
            </div>


        )

    }

}
