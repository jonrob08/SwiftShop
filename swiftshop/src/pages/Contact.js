import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Contact = () => {
  const title = "Contact Us"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} />
      <div className="contact-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8705.762377328287!2d-111.89125273070331!3d33.29380139617837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b00c644f2263f%3A0x82d41a9fdc2ab69!2s635%20S%20Ellis%20St%2C%20Chandler%2C%20AZ%2085224!5e0!3m2!1sen!2sus!4v1671228568252!5m2!1sen!2sus" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">
                    Your Contact Info
                  </h3>
                </div>
                <div>
                  <h3 className="contact-title">
                    Get In Touch With Us
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact