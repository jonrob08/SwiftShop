import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for our Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div class="input-group">
              <input 
                type="text" 
                className="form-control py-1" 
                placeholder="Your email address" 
                aria-describedby="basic-addon2" 
              />
              <span class="input-group-text p-2" id="basic-addon2">
               Subscribe
              </span>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='mb-4 text-white'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  635 S. Ellis St., <br />
                  Chandler, Arizona <br />
                  85224-4953
                </address>
                <a href="tel:+1 7175929969" className="mt-4 d-block mb-2 text-white">+1 (717) 592-9969</a>
                <a href="mailto:jonrob08@gmail.com" className="mt-4 d-block mb-2 text-white">jonrob08@gmail.com</a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a className='text-white' href="">
                    <BsGithub className='fs-4' />
                  </a>
                  <a className='text-white' href="">
                    <BsLinkedin className='fs-4' />
                  </a>
                  <a className='text-white' href="">
                    <BsYoutube className='fs-4' />
                  </a>
                  <a className='text-white' href="">
                    <BsInstagram className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='mb-4 text-white'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='mb-1 py-2 text-white'>Privacy Policy</Link>
                <Link className='mb-1 py-2 text-white'>Refund Policy</Link>
                <Link className='mb-1 py-2 text-white'>Shipping Policy</Link>
                <Link className='mb-1 py-2 text-white'>Terms & Conditions</Link>
                <Link className='mb-1 py-2 text-white'>Blog</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='mb-4 text-white'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='mb-1 py-2 text-white'>About Us</Link>
                <Link className='mb-1 py-2 text-white'>FAQ</Link>
                <Link className='mb-1 py-2 text-white'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='mb-4 text-white'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='mb-1 py-2 text-white'>Laptops</Link>
                <Link className='mb-1 py-2 text-white'>Headphones</Link>
                <Link className='mb-1 py-2 text-white'>Tablets</Link>
                <Link className='mb-1 py-2 text-white'>Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; { new Date().getFullYear() }, SwiftShop Powered by JonRob Technologies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer