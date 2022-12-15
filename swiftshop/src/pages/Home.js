import React from 'react'
import { Link } from 'react-router-dom'
import { BsTruck, BsGift, BsHeadset, BsCurrencyDollar, BsCreditCard2Back  } from 'react-icons/bs'

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
      <section className="homewrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home