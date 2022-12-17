import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const TermsAndConditions = () => {
    const title = "Terms & Conditions"
  return (
    <>
        <Meta title={title} />
        <BreadCrumb title={title} /> 
    </>
  )
}

export default TermsAndConditions