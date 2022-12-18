import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

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
              <div className=" cart-header d-flex justify-content-between align-content-center">
                <h4>Product</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Total</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart