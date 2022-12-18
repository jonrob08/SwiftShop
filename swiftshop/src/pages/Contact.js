import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { BsHouse, BsTelephone, BsMailbox, BsInfoCircle  } from 'react-icons/bs'
import { Container } from '../components'

const Contact = () => {
  const title = "Contact Us"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} />
      <Container className="contact-wrapper py-5">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8705.762377328287!2d-111.89125273070331!3d33.29380139617837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b00c644f2263f%3A0x82d41a9fdc2ab69!2s635%20S%20Ellis%20St%2C%20Chandler%2C%20AZ%2085224!5e0!3m2!1sen!2sus!4v1671228568252!5m2!1sen!2sus" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">
                    Your Contact Info
                  </h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className='form-control' placeholder='Email *' />
                    </div>
                    <div>
                      <input type="tel" className='form-control' placeholder='Phone' />
                    </div>
                    <div>
                      <textarea className="w-100 form-control" placeholder='Comments...' name="" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">
                    Get In Touch With Us
                  </h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsHouse className='fs-5'/>
                        <address className='mb-0'>635 S Ellis St., Chandler, AZ 85224</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'> 
                        <BsTelephone className='fs-5'/> 
                        <a href="tel:+1 7175929969">+1 (717) 592-9969</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'> 
                        <BsMailbox className='fs-5'/>
                        <a href="mailto:jonrob08@gmail.com">jonrob08@gmail.com</a>
                       </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'> 
                        <BsInfoCircle className='fs-5'/>
                        <p className='mb-0'>Monday - Friday 8 AM - 6 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact