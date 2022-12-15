import React from 'react'
import { Link } from 'react-router-dom'
import { BsTruck, BsGift, BsHeadset, BsCurrencyDollar, BsCreditCard2Back  } from 'react-icons/bs'
import Marquee from 'react-fast-marquee'

import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecProduct from '../components/SpecProduct'

const Home = () => {
  return (
    <>
      {/* wrapper 1 */}
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>Long-Lasting Battery Life.</h4>
                  <h4>Noise Cancellation.</h4>
                  <h5>BOSE Alpha</h5>
                  <p>From $999.99 or $74.33/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="small-banner position-relative">
                  <img src="images/smol-banner-1.jpg" className='img-fluid rounded-3' alt="small banner 1" />
                  <div className="small-banner-content position-absolute">
                    <h4>Big Sale</h4>
                    <h4>While supplies last.</h4>
                    <h5>Brand New Laptops</h5>
                    <p>From $599.99 <br /> or $26.37/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/smol-banner-2.jpg" className='img-fluid rounded-3' alt="small banner 1" />
                  <div className="small-banner-content position-absolute">
                    <h4>Water Proof.</h4>
                    <h4>15% Off</h4>
                    <h5>Smart Watches</h5>
                    <p>Christmas Special <br /> $249.99 or below</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/smol-banner-3.jpg" className='img-fluid rounded-3' alt="small banner 1" />
                  <div className="small-banner-content position-absolute">
                    <h4>Long-Lasting Battery Life.</h4>
                    <h4>Noise Cancellation.</h4>
                    <h5>BOSE Alpha</h5>
                    <p>From $999.99 <br /> or $74.33/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/smol-banner-4.jpg" className='img-fluid rounded-3' alt="small banner 1" />
                  <div className="small-banner-content position-absolute">
                    <h4>Long-Lasting Battery Life.</h4>
                    <h4>Noise Cancellation.</h4>
                    <h5>BOSE Alpha</h5>
                    <p>From $999.99 <br /> or $74.33/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* wrapper 2 */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="icon d-flex align-items-center gap-15">
                  <BsTruck size='50'></BsTruck>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">On all orders over $100</p>
                  </div>
                </div>
                <div className="icon d-flex align-items-center gap-15">
                  <BsGift size='50'></BsGift>
                  <div>
                    <h6>Daily Login Gifts</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="icon d-flex align-items-center gap-15">
                  <BsHeadset size='50'></BsHeadset>
                    <div>
                      <h6>24/7 Live Support</h6>
                      <p className="mb-0">Shopping experts await your call</p>
                    </div>
                </div>
                <div className="icon d-flex align-items-center gap-15">
                  <BsCurrencyDollar size='50'></BsCurrencyDollar>
                  <div>
                      <h6>Always Affordable</h6>
                      <p className="mb-0">Price Match Guarantee</p>
                    </div>
                  </div>
                <div className="icon d-flex align-items-center gap-15">
                  <BsCreditCard2Back size='50'></BsCreditCard2Back>
                  <div>
                      <h6>Secure Payments</h6>
                      <p className="mb-0">Wide variety of secure payment options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* categories section */}
      <section className="category-section py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="old style camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="smart television" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="smart watch" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="gaming" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="old style camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="smart television" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="smart watch" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="gaming" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* featured products */}
      <section className="featured-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Products</h3>
          </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      {/* hot selling items */}
      <section className="hot-sellers">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="hot-seller-card position-relative">
              <img src="images/subbanner-01.webp" className='img-fluid' alt="hot seller" />
                <div className="hot-seller-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="hot-seller-card position-relative">
              <img src="images/subbanner-02.webp" className='img-fluid' alt="hot seller" />
                <div className="hot-seller-content position-absolute">
                <h5 className='text-dark'>Retina Display</h5>
                <h6 className='text-dark'>Dream Laptop</h6>
                <p className='text-dark'>From $2999 or $36.82/mo. for 32 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="hot-seller-card position-relative">
              <img src="images/subbanner-03.webp" className='img-fluid' alt="hot seller" />
                <div className="hot-seller-content position-absolute">
                <h5 className='text-dark'>Latest phone tech</h5>
                <h6 className='text-dark'>iPhone 13 or 14?</h6>
                <p className='text-dark'>From $999 or $14.82/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="hot-seller-card position-relative">
              <img src="images/subbanner-04.webp" className='img-fluid' alt="hot seller" />
                <div className="hot-seller-content position-absolute">
                <h5 className='text-dark'>Home Audio</h5>
                <h6 className='text-dark'>JBL x LBJ Collab</h6>
                <p className='text-dark'>Lebron James will deliver this to your house.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* special products */}
      <section className="special-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Specialty Items</h3>
            </div>

          </div>
          <div className="row">
            <SpecProduct />
            <SpecProduct />
            <SpecProduct />
            <SpecProduct />
          </div>
        </div>
      </section>
      {/* popular products */}
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
      {/* marquee */}
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper bg-white p-3">
                <Marquee className='d-flex'>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog wrapper */}
      <section className="blog-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home