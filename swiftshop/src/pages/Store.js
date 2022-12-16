import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Store = () => {
    const title = "Store"
    
    return (
        <>
            <Meta title={ title }/>
            <BreadCrumb title={ title }/>
            <div className="store-wrapper py-5">
                
            </div>
        </>
    )
}

export default Store