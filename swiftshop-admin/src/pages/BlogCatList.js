import React, { useEffect } from "react";
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getBlogCategories } from "../features/blog/blogCategorySlice";

const columns = [
    {
      title: 'Serial#',
      dataIndex: 'key',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];

const BlogCatList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogCategories());
  }, []);

  const blogCategoryState = useSelector((state) => state.blogCategory.blogCategories);
  const data1 = [];

  for (let i = 0; i < blogCategoryState.length; i++) {
    data1.push({
      key: i + 1,
      _id: blogCategoryState[i]._id,
      title: blogCategoryState[i].title,
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
        <h3 className="mb-4">Blog Categories</h3>
        <div>
        <Table columns={columns} dataSource={data1} />

        </div>
    </div>
  )
}

export default BlogCatList