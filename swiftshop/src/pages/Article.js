import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Article = () => {
  return (
    <>
        <Meta title={title} />
        <BreadCrumb title={title} /> 
    </>
  )
}

export default Article