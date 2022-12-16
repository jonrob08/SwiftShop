import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from '../components/Color';

const Compare = () => {
    const title = "Compare Products"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} />
      <div className="compare-product-wrapper py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                    <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">New watch Best Timekeeper 8GB</h5>
                            <h6 className="price mb-3 mt-3">$299</h6>
                        
                            <div>
                            <div className="product-detail">
                                <h5>Brand:</h5>
                                <p>Watch Brand</p>
                            </div>
                            <div className="product-detail">
                                <h5>Type</h5>
                                <p>Watch Type</p>
                            </div>
                            <div className="product-detail">
                                <h5>SKU</h5>
                                <p>13524</p>
                            </div>
                            <div className="product-detail">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-detail">
                                <h5>Color</h5>
                                <Color />
                            </div>
                            <div className="product-detail">
                                <h5>Size</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    <p>L</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                    <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">New watch Best Timekeeper 8GB</h5>
                            <h6 className="price mb-3 mt-3">$299</h6>
                        
                            <div>
                            <div className="product-detail">
                                <h5>Brand:</h5>
                                <p>Watch Brand</p>
                            </div>
                            <div className="product-detail">
                                <h5>Type</h5>
                                <p>Watch Type</p>
                            </div>
                            <div className="product-detail">
                                <h5>SKU</h5>
                                <p>13524</p>
                            </div>
                            <div className="product-detail">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-detail">
                                <h5>Color</h5>
                                <Color />
                            </div>
                            <div className="product-detail">
                                <h5>Size</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    <p>L</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Compare