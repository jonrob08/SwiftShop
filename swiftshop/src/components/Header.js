import React from 'react'
import { NavLink, Link } from 'react-router-dom'

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
    </>
  )
}

export default Header