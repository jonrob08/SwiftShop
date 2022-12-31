import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { getProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Serial#",
    dataIndex: "key",
  },
  {
    title: "Product ID",
    dataIndex: "_id",
  },
  {
    title: "Total Rating",
    dataIndex: "totalrating",
  },
  {
    title: "Title",
    dataIndex: "title",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "URL",
    dataIndex: "slug",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Sold",
    dataIndex: "sold",
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productState = useSelector((state) => state.product.products);
  const data1 = [];

  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      totalrating: productState[i].totalrating,
      _id: productState[i]._id,
      title: productState[i].title,
      slug: productState[i].slug,
      description: productState[i].description,
      price: `$ ${productState[i].price}`,
      category: productState[i].category,
      brand: productState[i].brand,
      quantity: productState[i].quantity,
      sold: productState[i].sold,
      color: productState[i].color,
      ratings: productState[i].ratings,
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
      <h3 className="mb-4">Product List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ProductList;
