import React ,{useState}from 'react';
import {Layout,Input,Table,Avatar,Popconfirm,Form,Button} from 'antd';
import '../css/index.css';
import {Link} from 'react-router-dom';

const {Content} = Layout;
const {Search}=Input;

var arr=[];
var Id='1';

const Cart=()=> {
  fetch("http://localhost:8080/getBooks")
            .then(response => response.json())
            .then(tmp => {
                for(let i=0;i<2;++i){
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
            }).catch(function (ex) {
            console.log('parsing failed', ex)
        }) 

  const [value,setValue] = useState('');
  const [data, setData] = useState(arr);

  function handleDelete(id) {
    var newData = data.concat();
    newData.forEach(object => {
      if (object.bookId === id) {
        localStorage.setItem(object.name, String(0));
        alert(localStorage.getItem(object.name));
      }
    });
    setData(newData);
  }
  const handleChange=(id)=>{
    var newData =data.concat();
    newData.forEach(object=>{
      if(object.bookId===id){
          localStorage.setItem(object.name,String(value));
          alert(localStorage.getItem(object.name));
      }
  });
    setData(newData);
  }
  
  function getColumns() {
    return [
      {
        title: 'Cover',
        dataIndex: 'cover',
        key: 'cover',
        render: (text,record) =>parseInt(localStorage.getItem(record.name))>0?( <Avatar shape="square" size={64} src={text} />):null,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text,record) =>parseInt(localStorage.getItem(record.name))>0? (

          data.forEach(object => {
            if (object.name === text) {
              Id = object.bookId;
            }
          }),
          <Link to={{
            pathname: '/home/bookDetail',
            search: '?id=' + Id
          }}
          >
            <a>{text}</a></Link>):null
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text, record) =>parseInt(localStorage.getItem(record.name))>0? (
          <w>¥{(parseFloat(text)*parseFloat(localStorage.getItem(record.name))).toFixed(1)}</w>
        ):null,
      },
      {
        width:'150px',
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (text, record) => parseInt(localStorage.getItem(record.name))>0?(
          <Form.Item
            rules={[{ required: true, 
              message: '请输入数量'},
            {pattern:new RegExp(/^[1-9]\d*$/,"g"),
             message:'输入的数不对哦'}]}
            name={record.name}
          >
            <Input
              id='input'
              defaultValue={localStorage.getItem(record.name)}
              style={{ width: '100px',marginTop:'20%' }}
              allowClear
              onChange={(e) => setValue(e.target.value)}
              onPressEnter={() => handleChange(record.bookId)}>
            </Input>
          </Form.Item>
        ):null,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) =>parseInt(localStorage.getItem(record.name))>0 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.bookId)}>
            <a>删除</a>
          </Popconfirm>
        ) : null,
      },
    ];
  }

  

        return(

            <div id='cart'>
                <Layout>
                <Content style={{
                    fontFamily:"Comic Sans MS",
                    fontSize:'x-large',
                    paddingTop:'20px',
                    fontWeight:'bold'
                }}>
                    My Cart
                </Content>
                <Search placeholder="input search text" enterButton allowClear
                style={{
                    marginTop:'10px'
                }}/>
                <Form >
        <Form.List>
          { () => {
            // 将Table视为 Form.List 中循环的 Form.Item
            return (
              <Table
                dataSource={ data }
                columns={ getColumns() }
                rowKey='key'
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
              />
            )
          }}
        </Form.List>
        <Form.Item>
          <Button style={{marginLeft:'40%'}} >
            购买
          </Button>
        </Form.Item>
      </Form>

                </Layout>
            </div>
        );
};
export default Cart;