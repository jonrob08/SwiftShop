import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
    const title = "Forgot Password"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} /> 
      <div className="login-wrapper py-5">
      <div className="container-xxl">
      <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className='text-center mb-3'>Reset Your Password</h3>
              <p className="text-center my-2 mb-3">No problem! We'll send you an email to reset your password.</p>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                  <input type="email" name='email' placeholder='Email' className="form-control" />
                </div> 
                <div>
                 
                  <div className='d-flex justify-content-center flex-column gap-15 align-items-center'>
                    <button className='button border-0' type='submit'>Submit</button>
                    <Link to="/login" className='text-dark'>Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ForgotPassword