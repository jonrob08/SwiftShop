import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Contact = () => {
  const title = "Contact Us"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} />
    </>
  )
}

export default Contact