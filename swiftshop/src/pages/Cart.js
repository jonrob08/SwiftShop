import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

import { Watch } from '../images';

const Cart = () => {
    const title = "Cart"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} /> 
      <section className="cart-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-content-center">
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-content-center">
                <div className='cart-col-1 d-flex align-items-center'>
                  <div className='w-25'>
                    <img src={Watch} className='img-fluid' alt="product image" />
                  </div>
                  <div className='w-75'>
                    <h5 className='title'>Title</h5>
                    <p className='color'>Blue</p>
                    <p className='size'>Large</p>
                  </div>
                </div>
                <div className='cart-col-2'></div>
                <div className='cart-col-3'></div>
                <div className='cart-col-4'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart