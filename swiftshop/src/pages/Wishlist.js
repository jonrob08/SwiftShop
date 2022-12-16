import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
    const title = "Wishlist"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} /> 
    </>
  )
}

export default Wishlist