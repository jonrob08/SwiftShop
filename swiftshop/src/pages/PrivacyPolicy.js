import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const PrivacyPolicy = () => {
    const title = "Privacy Policy"
  return (
    <>
            <Meta title={title} />
            <BreadCrumb title={title} /> 
    </>
  )
}

export default PrivacyPolicy