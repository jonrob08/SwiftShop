import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard'

const Product = () => {
  const title = "Dynamic Product Name";
  const [productBought, setProductBought] = useState(true)
  const props = {width: 500, zoomWidth: 500, zoomStyle: ' opacity: 0.7', img: "https://www.movado.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwcdf1f552/images/products/3640002w_LRG_rgb_Web.png?sw=1660&sh=1660"};

  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} />
      <div className="main-product-wrapper py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                    <div className="main-product-image">
                        <div>
                        <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className="secondary-product-image d-flex flex-wrap gap-15">
                        <div>
                            <img src="https://www.movado.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwcdf1f552/images/products/3640002w_LRG_rgb_Web.png?sw=1660&sh=1660" className="img-fluid" alt="" />
                        </div>
                        <div>
                            <img src="https://www.movado.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwcdf1f552/images/products/3640002w_LRG_rgb_Web.png?sw=1660&sh=1660" className="img-fluid" alt="" />
                        </div>
                        <div>
                            <img src="https://www.movado.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwcdf1f552/images/products/3640002w_LRG_rgb_Web.png?sw=1660&sh=1660" className="img-fluid" alt="" />
                        </div>
                        <div>
                            <img src="https://www.movado.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwcdf1f552/images/products/3640002w_LRG_rgb_Web.png?sw=1660&sh=1660" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="main-product-details">
                        <div className="border-btm">
                            <h3 className="title">Mavado Watch for Men, Luxury Timepiece</h3>
                        </div>
                        <div className="border-btm py-3">
                            <p className="price">$100</p>
                            <div className="d-flex align-items-center gap-10">
                            <div>
                                    <ReactStars 
                                        count={5} 
                                        size={24} 
                                        value="3" 
                                        edit={false} 
                                        activeColor='#ffd700'
                                    />
                                </div>
                                <p className="mb-0 review-txt">(2 reviews)</p>
                            </div>
                            <a className="review-btn" href="#review">Write A Review</a>
                        </div>
                        <div className="border-btm py-3">
                            <div className="d-flex ap-10 align-items-center my-2">
                                <h3 className="product-heading">ABC :</h3>
                                <p className="product-data">dfwdf</p>
                            </div>
                            <div className="d-flex ap-10 align-items-center my-2">
                                <h3 className="product-heading">ABC :</h3>
                                <p className="product-data">dfwdf</p>
                            </div>
                            <div className="d-flex ap-10 align-items-center my-2">
                                <h3 className="product-heading">ABC :</h3>
                                <p className="product-data">dfwdf</p>
                            </div>
                            <div className="d-flex ap-10 align-items-center my-2">
                                <h3 className="product-heading">ABC :</h3>
                                <p className="product-data">dfwdf</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <section className="description-wrapper py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h4>Description</h4>
                    <div className="p-3 bg-white">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, neque sit amet lacinia suscipit, odio nisl vulputate nisi, eget eleifend libero metus ac lacus. Maecenas tempus eget lacus id porta. Proin a elit augue. Etiam ipsum est, tempus quis velit id, vehicula molestie felis. Nulla placerat arcu quis dolor rutrum ultrices. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="reviews-wrapper pt-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                <h4>Reviews</h4>
                    <div className="review-inner-wrapper">
                        <div className="review-header d-flex justify-content-between align-items-end">
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
                                    <a className="text-dark text-decoration-underline" href="">Write a Review</a>
                                </div>
                            )}
                        </div>
                        <div id="review" className="review-form py-4">
                            <h4>Write a Review</h4>
                            <form action="" className='d-flex flex-column gap-15'>
                            <div>
                            <div>
                                    <ReactStars 
                                        count={5} 
                                        size={24} 
                                        value="" 
                                        edit={true} 
                                        activeColor='#ffd700'
                                    />
                                </div>
                            </div>
                        <div>
                        <textarea className="w-100 form-control" placeholder='Comments...' name="" id="" cols="30" rows="4"></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                        <button className='button border-0'>
                            Submit Review
                        </button>
                        </div>
                    </form>   
                        </div>
                        <div className="review-list mt-3">
                            <div className="review">
                                <div className="d-flex gap-10 align-items-center">
                                                                
                                <div>
                                <h6 className="mb-0">John</h6>
                                <ReactStars 
                                    count={5} 
                                    size={24} 
                                    value="3" 
                                    edit={false} 
                                    activeColor='#ffd700'
                                />
                                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, neque sit amet lacinia suscipit,
                                </p>
                                </div>
                                
                                </div>
                            </div>
                        </div>

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