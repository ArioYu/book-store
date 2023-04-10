import React from 'react';
import {List,Button} from 'antd'
import {Book} from './Book'
import { getBooks } from '../services/bookService';

var arr=[]

export class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data:[]};
        
    }
    componentDidMount(){
        getBooks((tmp)=>{
            for(let i=0;i<tmp.length;++i){
                if(arr.length<2){
                arr.push({
                    bookId:tmp[i][0],
                    cover:tmp[i][1],
                    name:tmp[i][2],
                    author:tmp[i][3],
                    price:tmp[i][5],
                    amount:0,
                })
                }
            }
            this.setState({
                data: arr,
            });
        })
        
    }

    render() {
        
        return (
            <List
                grid={{gutter: 10, column: 4}}
                dataSource={this.state.data}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}

                renderItem={item => (
                    <List.Item>
                        <Book info={item} />
                    </List.Item>
                )}
            />
        );
    }

}