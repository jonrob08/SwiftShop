import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getColors } from "../features/color/colorSlice";

const columns = [
    {
      title: 'Serial#',
      dataIndex: 'key',
    },
    {
      title: 'Color',
      dataIndex: 'title',
    },
    {
      title: "Action",
      dataIndex: "action",
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

const ColorList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getColors());
  }, []);

  const colorState = useSelector((state) => state.color.colors);
  const data1 = [];

  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i + 1,
      _id: colorState[i]._id,
      title: colorState[i].title,
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
        <h3 className="mb-4">Color List</h3>
        <div>
        <Table columns={columns} dataSource={data1} />

        </div>
    </div>
  )
}

export default ColorList