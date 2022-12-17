import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ForgotPassword = () => {
    const title = "Forgot Password"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} /> 
    </>
  )
}

export default ForgotPassword