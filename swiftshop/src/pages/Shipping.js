import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Shipping = () => {
    const title = "Shipping"
    
  return (
    <>
        <Meta title={title} />
        <BreadCrumb title={title} /> 
    </>
  )
}

export default Shipping