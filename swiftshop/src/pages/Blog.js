import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Blog = () => {
    const title = "Blog"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} />
    </>
  )
}

export default Blog