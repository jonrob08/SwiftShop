import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <>
     <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>
                Call Us: <a className='text-white' href="tel:+1 7175929969">(717) 592 - 9969</a>
              </p>
            </div>
          </div>
        </div>
     </header>
     <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link className='text-white'>Dev Corner</Link>
            </h2>
          </div>
          <div className="col-5">
            <div class="input-group">
              <input 
                type="text" 
                className="form-control py-2" 
                placeholder="Search for your perfect product" 
                aria-describedby="basic-addon2" 
              />
              <span class="input-group-addon p-3" id="basic-addon2">
                <BsSearch className='fs-5'/>
              </span>
            </div>
          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link className='d-flex align-items-center gap-10'>
                  <img src="images/compare.svg" alt="compare" />
                  <p>
                    Compare <br /> Products
                  </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10'>
                  <img src="images/wishlist.svg" alt="wishlist" />
                  <p>
                  Favorites <br /> Wishlist
                  </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10'>
                  <img src="images/user.svg" alt="login" />
                  <p>
                  Login To <br /> My Account
                  </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10'>
                  <img src="images/cart.svg" alt="cart" />
                  <div className="d-flex flex-column">
                    <span className='badge bg-white text-dark'>0</span>
                    <p>$500</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     </header>
    </>
  )
}

export default Header