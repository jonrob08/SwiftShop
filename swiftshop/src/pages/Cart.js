import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {AiFillDelete} from 'react-icons/ai'

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
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
              <div className="cart-data py-3 mb-3 d-flex justify-content-between align-items-center">
                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                  <div className='w-25'>
                    <img src={Watch} className='img-fluid' alt="product image" />
                  </div>
                  <div className='w-75'>
                    <p>Dynamic Product Title</p>
                    <p>Color: Blue</p>
                    <p>Size: Large</p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h5 className='price'>$999.99</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div>
                    <input 
                      className='form-control' 
                      type="number" 
                      name="" 
                      id="" 
                      min={1}
                      max={10}
                    />
                  </div>
                  <div>
                    <AiFillDelete className='text-danger'/>
                  </div>
                </div>
                <div className='cart-col-4'>
                <h5 className='price'>$999.99</h5>

                </div>
              </div>
              <div className="cart-data py-3 mb-3 d-flex justify-content-between align-items-center">
                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                  <div className='w-25'>
                    <img src={Watch} className='img-fluid' alt="product image" />
                  </div>
                  <div className='w-75'>
                    <p>Dynamic Product Title</p>
                    <p>Color: Blue</p>
                    <p>Size: Large</p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h5 className='price'>$999.99</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div>
                    <input 
                      className='form-control' 
                      type="number" 
                      name="" 
                      id="" 
                      min={1}
                      max={10}
                    />
                  </div>
                  <div>
                    <AiFillDelete className='text-danger'/>
                  </div>
                </div>
                <div className='cart-col-4'>
                <h5 className='price'>$999.99</h5>

                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/store" className="button">Continue Shopping</Link>
              <div className='d-flex flex-column align-items-end'>
                <h4>Subtotal: $1998.99</h4>
                <p>Taxes and Shipping are calculated at checkout (eventually)</p>
                <Link to="/checkout" className='button'>Checkout</Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart