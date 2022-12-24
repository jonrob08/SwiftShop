import React, { useEffect, useDispatch } from 'react'
import { Table } from 'antd';
import { getUsers } from '../features/customers/customerSlice';
const columns = [
    {
      title: 'Serial#',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers())
  }, [])
  return (
    <div>
        <h3 className="mb-4">Customers</h3>
        <div>
        <Table columns={columns} dataSource={data1} />

        </div>
    </div>
  )
}

export default Customers