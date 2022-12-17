import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const RefundPolicy = () => {
    const title = "Refund Policy"
  return (
    <>
        <Meta title={title} />
        <BreadCrumb title={title} /> 
    </>
  )
}

export default RefundPolicy