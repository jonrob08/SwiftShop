import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard'
import Color from "../components/Color";

const Store = () => {
  const title = "Store";
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} />
      <div className="store-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="subtitle">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="subtitle">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                        <input type="email" name="From" id="floatingInput" className="form-control" placeholder="From" />
                        <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" name="To" id="floatingInput" className="form-control" placeholder="To" />
                        <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="subtitle">Color</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="subtitle">Size</h5>
                  <div>
                  <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="size-1"
                      />
                      <label htmlFor="size-1" className="form-check-label">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="size-1"
                      />
                      <label htmlFor="size-2" className="form-check-label">
                        M (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="size-1"
                      />
                      <label htmlFor="size-3" className="form-check-label">
                        L (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphones</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Watch</span>
                    </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Recommended Products</h3>
                <div>
                    <div className="rec-products mb-4 d-flex">
                        <div className="w-50">
                            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                        </div>
                        <div className="w-50">
                            <h5>
                                Fantastic Watch you'll always know the time!
                            </h5>
                            <ReactStars count={5} size={24} value="3" edit={false} activeColor='#ffd700'></ReactStars>
                            <b>$299.99</b>
                        </div>
                    </div>
                    <div className="rec-products d-flex">
                        <div className="w-50">
                            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                        </div>
                        <div className="w-50">
                            <h5>
                                Fantastic Watch you'll always know the time!
                            </h5>
                            <ReactStars count={5} size={24} value="3" edit={false} activeColor='#ffd700'></ReactStars>
                            <b>$299.99</b>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-9">
                <div className="filter-sort-grid mb-3">
                <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                        <p className="mb-0 d-block" style={{ width: "100px" }}>
                            Sort By:
                        </p>
                        <select name="" className="form-control form-select" id="">
                            <option value="manual">Featured</option>
                            <option value="best-selling">Best Selling</option>
                            <option value="title-asc">A - Z</option>
                            <option value="title-desc">Z - A</option>
                            <option value="price-asc">High - Low</option>
                            <option value="price-desc">Low - High</option>
                            <option value="created-asc">Oldest - Newest</option>
                            <option value="created-desc">Newest - Oldest</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center gap-10">
                        <p className="totalproducts mb-0">21 products</p>
                        <div className="d-flex gap-10 align-items-center grid-icon">
                        <img onClick={() => {setGrid(3)}} src="images/gr4.svg" alt="grid" className="d-block img-fluid" />
                        <img onClick={() => {setGrid(4)}} src="images/gr3.svg" alt="grid" className="d-block img-fluid" />
                            <img onClick={() => {setGrid(6)}} src="images/gr2.svg" alt="grid" className="d-block img-fluid" />
                            <img onClick={() => {setGrid(12)}} src="images/gr.svg" alt="grid" className="d-block img-fluid" />
                        </div>
                    </div>
                </div> 
                </div>
                <div className="products-list pb-5">
                    <div className="d-flex gap-10 flex-wrap">
                        <ProductCard grid={grid} />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
