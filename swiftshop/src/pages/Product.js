import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

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
    </>
  );
};

export default Product;