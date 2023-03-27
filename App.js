import React from 'react';
import { BrowserRouter,Routes, Route} from "react-router-dom"
import HomeView from './view/HomeView';
import BookView from './view/BookView';
import ProfileView from './view/ProfileView';
import CartView from './view/CartView';
import LoginView from './view/LoginView';
import SameView from './view/SameView';

const data=[
    {
        name:'java技术核心卷Ⅱ',
        cover:'https://img2.baidu.com/it/u=1478920100,2834656055&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        price:'95.2',
        author: ' ',
        type:' ',
        amount:1,
        description:' ',
        bookId:'1'
    },
    {
        name:'深入理解计算机系统',
        cover:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2F708307132%2FTB2x6y7lsrI8KJjy0FhXXbfnpXa_%21%21708307132.jpg_2200x2200Q90s50.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682044083&t=bdcb02a1bfdfbc63fb283a45fd5727e4',
        price:'136.9',
        author: ' ',
        type:' ',
        amount:3,
        description:' ',
        bookId:'2'
    },
    {
        name:'Effective C++',
        cover:'https://www.linuxprobe.com/wp-content/uploads/2019/05/timg-2.jpg',
        price:'51.3',
        author: ' ',
        type:' ',
        amount:1,
        description:' ',
        bookId:'3'
    },
    {
        name:'小王子',
        cover:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fad8cc734-dbc4-418b-90d6-9fa5549a3277%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682044157&t=6dc9927b19f35e66ffa0aa302b6358ed',
        price:'8.89',
        author: ' ',
        type:' ',
        amount:2,
        description:' ',
        bookId:'4'
    },
]

function App() {
    return (
         <BrowserRouter>
            <Routes>
            <Route path="/" element={<LoginView/>}></Route>
            <Route path="/home" element={<SameView />} >
                <Route path="/home" element={<HomeView />} />
                <Route path="/home/bookDetail" element={<BookView />} />
                <Route path="/home/profile" element={<ProfileView />} />
                <Route path="/home/cart" element={<CartView />} />
            </Route>
            </Routes>
         </BrowserRouter>

    );
}

export default App;
