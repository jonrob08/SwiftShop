import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

const Checkout = () => {

  return (
    <>
        <div className="checkout-wrapper py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-info">
                            <h3 className='site-title'>SwiftShop</h3>
                            <nav
                                // style={{"--bs-breadcrumb-divider":">"}}
                                aria-label="breadcrumb"
                            >
                                <ol className='breadcrumb'>
                                    <li className='breadcrumb-item'>
                                        <Link className='text-dark' to="/cart">Cart </Link>
                                    </li>
                                    <li className='breadcrumb-item active' aria-current="page">
                                        Information 
                                    </li>
                                    <li className='breadcrumb-item' aria-current="page">
                                        Shipping 
                                    </li>
                                    <li className='breadcrumb-item' aria-current="page">
                                        Payment 
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title">
                                Contact Information
                            </h4>
                            <p className="user-details">
                                Jonathan Robson (jonrob08@gmail.com)
                            </p>
                            <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select name="" className='form-control form-select' id="">
                                        <option value="" selected disabled>Select Country</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='First Name' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Last Name' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Address' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Apt, Suite #' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                <input type="text" placeholder='City' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                <select name="" className='form-control form-select' id="">
                                    <option value="" selected disabled>Select State</option>
                                </select>
                                </div>
                                <div className='flex-grow-1'>
                                <input type="text" placeholder='Zip' className="form-control" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className='text-dark'><BiArrowBack className='me-2'/>Return to Cart</Link>
                                        <Link to="/shipping" className='button'>Continue To Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout