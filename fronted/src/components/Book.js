import React from 'react';
import { Card } from 'antd';
import {Link} from 'react-router-dom'

const { Meta } = Card;

export class Book extends React.Component{


    render() {

        const {info} = this.props;

        return (
            <Link to={{
                pathname: '/home/bookDetail',
                search: '?id=' + info.bookId}}
            >
            <Card
                hoverable
                style={{width: 180}}
                cover={
                    <img
                      src={info.cover}
                      height='200px'
                    />
                  }
            >
                <Meta title={info.name} description={'¥' + info.price}  />
            </Card>
            </Link>
        );
    }

}

