import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Signup = () => {
    const title = "Signup"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} /> 
    </>
  )
}

export default Signup