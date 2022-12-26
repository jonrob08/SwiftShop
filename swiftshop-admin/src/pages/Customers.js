import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone #',
      dataIndex: 'mobile',
    },
  ];

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers())
  }, [])

  const customerState = useSelector((state) => state.customer.customers)
  // console.log(state)
  const { data } = customerState; 

  const data1 = [];
  for (let i = 0; i < customerState.length; i++) {
    if (customerState[i].role !== "admin")
    data1.push({
      key: i + 1,
      name: customerState[i].firstname + " " + customerState[i].lastname,
      email: customerState[i].email,
      mobile: customerState[i].mobile,
    });
  }

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