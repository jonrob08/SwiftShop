import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import { Container } from "../components";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecProduct from "../components/SpecProduct";
import Meta from "../components/Meta";
import {
  MainBanner,
  SmallBanner1,
  SmallBanner2,
  SmallBanner3,
  SmallBanner4,
  Camera,
  Tv,
  Headphone,
  SubBanner1,
  SubBanner2,
  SubBanner3,
  SubBanner4,
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
  Brand8,
} from "../images";
import { services } from "../utils/Data";

const Home = () => {
  const title = "Home";
  return (
    <>
      <Meta title={title} />
      {/* wrapper 1 */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src={MainBanner}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Long-Lasting Battery Life.</h4>
                <h4>Noise Cancellation.</h4>
                <h5>BOSE Alpha</h5>
                <p>From $999.99 or $74.33/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img
                  src={SmallBanner1}
                  className="img-fluid rounded-3"
                  alt="small banner 1"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Big Sale</h4>
                  <h4>While supplies last.</h4>
                  <h5>Brand New Laptops</h5>
                  <p>
                    From $599.99 <br /> or $26.37/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={SmallBanner2}
                  className="img-fluid rounded-3"
                  alt="small banner 1"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Water Proof.</h4>
                  <h4>15% Off</h4>
                  <h5>Smart Watches</h5>
                  <p>
                    Christmas Special <br /> $249.99 or below
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={SmallBanner3}
                  className="img-fluid rounded-3"
                  alt="small banner 1"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Long-Lasting Battery Life.</h4>
                  <h4>Noise Cancellation.</h4>
                  <h5>BOSE Alpha</h5>
                  <p>
                    From $999.99 <br /> or $74.33/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={SmallBanner4}
                  className="img-fluid rounded-3"
                  alt="small banner 1"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Long-Lasting Battery Life.</h4>
                  <h4>Noise Cancellation.</h4>
                  <h5>BOSE Alpha</h5>
                  <p>
                    From $999.99 <br /> or $74.33/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* services */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div
                    className="icon d-flex align-items-center gap-15"
                    key={j}
                  >
                    {i.image}
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      {/* categories section */}
      <Container class1="category-section py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={Camera} alt="old style camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={Tv} alt="smart television" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={Headphone} alt="smart watch" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={Camera} alt="gaming" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={Camera} alt="old style camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={Tv} alt="smart television" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={Headphone} alt="smart watch" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={Camera} alt="gaming" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* featured products */}
      <Container class1="featured-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      {/* hot selling items */}
      <Container class1="hot-sellers">
        <div className="row">
          <div className="col-3">
            <div className="hot-seller-card position-relative">
              <img src={SubBanner1} className="img-fluid" alt="hot seller" />
              <div className="hot-seller-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="hot-seller-card position-relative">
              <img src={SubBanner2} className="img-fluid" alt="hot seller" />
              <div className="hot-seller-content position-absolute">
                <h5 className="text-dark">Retina Display</h5>
                <h6 className="text-dark">Dream Laptop</h6>
                <p className="text-dark">
                  From $2999 or $36.82/mo. for 32 mo.*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="hot-seller-card position-relative">
              <img src={SubBanner3} className="img-fluid" alt="hot seller" />
              <div className="hot-seller-content position-absolute">
                <h5 className="text-dark">Latest phone tech</h5>
                <h6 className="text-dark">iPhone 13 or 14?</h6>
                <p className="text-dark">From $999 or $14.82/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="hot-seller-card position-relative">
              <img src={SubBanner4} className="img-fluid" alt="hot seller" />
              <div className="hot-seller-content position-absolute">
                <h5 className="text-dark">Home Audio</h5>
                <h6 className="text-dark">JBL x LBJ Collab</h6>
                <p className="text-dark">
                  Lebron James will deliver this to your house.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* special products */}
      <Container class1="special-wrapper py-5">
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
      </Container>
      {/* popular products */}
      <Container class1="popular-wrapper py-5">
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
      </Container>
      {/* marquee */}
      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper bg-white p-3">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={Brand1} alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Brand2} alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Brand3} alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Brand4} alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Brand5} alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Brand6} alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Brand7} alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={Brand8} alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      {/* blog wrapper */}
      <Container class1="blog-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
