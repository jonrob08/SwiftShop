import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'

const Store = () => {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Store</title>
        </Helmet>
        <BreadCrumb title="Store"/>
    </>
  )
}

export default Store