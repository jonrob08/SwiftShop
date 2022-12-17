import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard'

const Product = () => {
  const title = "Dynamic Product Name";
  const [productBought, setProductBought] = useState(false)

  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} />
      <div className="main-product-wrapper py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
            </div>
        </div>
      </div>
      <section className="description-wrapper py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="bg-white p-3">
                        <h4>Description</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, neque sit amet lacinia suscipit, odio nisl vulputate nisi, eget eleifend libero metus ac lacus. Maecenas tempus eget lacus id porta. Proin a elit augue. Etiam ipsum est, tempus quis velit id, vehicula molestie felis. Nulla placerat arcu quis dolor rutrum ultrices. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="reviews-wrapper py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                            <h4 className="mb-2">Customer Reviews</h4>
                            <div>
                                <ReactStars 
                                    count={5} 
                                    size={24} 
                                    value="3" 
                                    edit={false} 
                                    activeColor='#ffd700'
                                />
                            </div>
                            <p className="mb-0">Based on 2 reviews</p>
                        </div>
                        {productBought && (
                            <div>
                                <a href="">Write a Review</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="popular-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Most Popular Products</h3>
          </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;