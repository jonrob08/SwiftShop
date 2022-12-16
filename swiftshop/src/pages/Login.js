import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Login = () => {
    const title = "Login"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} /> 
    </>
  )
}

export default Login