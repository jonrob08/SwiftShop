import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Cart = () => {
    const title = "Cart"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} /> 
    </>
  )
}

export default Cart