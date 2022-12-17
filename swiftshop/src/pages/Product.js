import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard'

const Product = () => {
  const title = "Dynamic Product Name";
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
                <div className="col-12"></div>
            </div>
        </div>
      </section>
      <section className="reviews-wrapper py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12"></div>
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