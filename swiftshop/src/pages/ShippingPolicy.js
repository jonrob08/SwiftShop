import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ShippingPolicy = () => {
    const title = "Shipping Policy"
  return (
    <>
        <Meta title={title} />
        <BreadCrumb title={title} /> 
    </>
  )
}

export default ShippingPolicy