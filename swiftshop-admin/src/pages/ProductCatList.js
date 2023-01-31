import React, { useEffect } from "react";
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getProductCategories } from '../features/product/productCategorySlice';

const columns = [
    {
      title: 'Serial#',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];


const ProductCatList = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategories());
  }, []);

  const productCategoryState = useSelector((state) => state.productCategory.productCategories);
  const data1 = [];

  for (let i = 0; i < productCategoryState.length; i++) {
    data1.push({
      key: i + 1,
      _id: productCategoryState[i]._id,
      title: productCategoryState[i].title,
      action: (
        <>
          <Link className="fs-3 text-warning" to="/">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }

  return (
    <div>
        <h3 className="mb-4">Product Category List</h3>
        <div>
        <Table columns={columns} dataSource={data1} />

        </div>
    </div>
  )
}

export default ProductCatList