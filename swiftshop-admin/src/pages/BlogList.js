import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getBlogs } from "../features/blog/blogSlice";

const columns = [
    {
      title: 'Serial#',
      dataIndex: 'key',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      title: `Edward King ${i}`,
      description: 32,
      category: `London, Park Lane no. ${i}`,
    });
  }

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const blogState = useSelector((state) => state.blog.blogs);
  const data1 = [];

  for (let i = 0; i < blogState.length; i++) {
    data1.push({
      key: i + 1,
      _id: blogState[i]._id,
      title: blogState[i].title,
      description: blogState[i].description,
      category: blogState[i].category,
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
  
  console.log(data1)

  return (
    <div>
        <h3 className="mb-4">Blog List</h3>
        <div>
        <Table columns={columns} dataSource={data1} />

        </div>
    </div>
  )
}

export default BlogList