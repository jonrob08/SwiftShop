import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
    const title = "Wishlist"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} /> 
      <div className="wishlist-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card">
              <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist