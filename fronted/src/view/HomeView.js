import React from 'react';
import {Input} from 'antd'
import { BookCarousel } from '../components/BookCarousel';
import { BookList } from '../components/BookList';

const { Search } = Input;

class HomeView extends React.Component{

    render(){
        return(
                    <>
                        <div className="home-content">
                            <BookCarousel />
                            <Search placeholder="input search text" enterButton allowClear
                            style={{
                            marginTop:'10px'
                            }}/>
                            <BookList />
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </>
        );
    }
}

export default HomeView;