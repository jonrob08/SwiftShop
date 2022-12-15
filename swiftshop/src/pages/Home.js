import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative p-3">
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
                <div className="small-banner p-3 position-relative p-3">
                  <img src="images/smol-banner-1.jpg" className='img-fluid rounded-3' alt="small banner 1" />
                  <div className="small-banner-content position-absolute">
                    <h4>Big Sale</h4>
                    <h4>While supplies last.</h4>
                    <h5>Brand New Laptops</h5>
                    <p>From $599.99 or $26.37/mo.</p>
                  </div>
                </div>
                <div className="small-banner p-3 position-relative p-3">
                  <img src="images/smol-banner-2.jpg" className='img-fluid rounded-3' alt="small banner 1" />
                  <div className="small-banner-content position-absolute">
                    <h4>Water Proof.</h4>
                    <h4>15% Off</h4>
                    <h5>Smart Watches</h5>
                    <p>Christmas Special $249.99 or below</p>
                  </div>
                </div>
                <div className="small-banner p-3 position-relative p-3">
                  <img src="images/smol-banner-3.jpg" className='img-fluid rounded-3' alt="small banner 1" />
                  <div className="small-banner-content position-absolute">
                    <h4>Long-Lasting Battery Life.</h4>
                    <h4>Noise Cancellation.</h4>
                    <h5>BOSE Alpha</h5>
                    <p>From $999.99 or $74.33/mo.</p>
                    <Link className='button'>BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner p-3 position-relative p-3">
                  <img src="images/smol-banner-4.jpg" className='img-fluid rounded-3' alt="small banner 1" />
                  <div className="small-banner-content position-absolute">
                    <h4>Long-Lasting Battery Life.</h4>
                    <h4>Noise Cancellation.</h4>
                    <h5>BOSE Alpha</h5>
                    <p>From $999.99 or $74.33/mo.</p>
                    <Link className='button'>BUY NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home