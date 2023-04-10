import React from 'react';
import {Layout,Button} from 'antd'
import '../css/bookDetail.css'
import 'react-router-dom'
import {BookDetail} from "../components/BookDetail";
import { getBook } from '../services/bookService';


const { Header, Content } = Layout;
const bookInfo=[]

class BookView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {bookInfo:[]};
        
    }

    componentDidMount(){
        const query = window.location.search;
        const Id = query[4];
                getBook(Id, (data) => {
                    
                    bookInfo[0]=(data[0][0]);
                    bookInfo[1]=(data[0][1]);
                    bookInfo[2]=(data[0][2]);
                    bookInfo[3]=(data[0][3]);
                    bookInfo[4]=(data[0][5]);
                    bookInfo[5]=(data[0][6]);
                    bookInfo[6]=(data[0][7]);
                    bookInfo[7]=(data[0][8]);
                    this.setState({bookInfo:bookInfo});
                })
    }

    render(){
        return(
            
                    <>
                        <div className="home-content">
                        <BookDetail info={this.state.bookInfo} />
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </>
              
        );
    }
}

export default BookView;