import React from 'react'
import { Table } from 'antd';
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

const BlogCatList = () => {
  return (
    <div>
        <h3 className="mb-4">Blog Categories</h3>
        <div>
        <Table columns={columns} dataSource={data1} />

        </div>
    </div>
  )
}

export default BlogCatList