import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Login = () => {
    const title = "Login"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} /> 
      <div className="login-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className='text-center mb-3'>Login</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                  <input type="email" name='email' placeholder='Email' className="form-control" />
                </div> 
                <div className='mt-3'>
                  <input type="password" name='password' placeholder='Password' className="form-control" />
                </div> 
                <div>
                  <Link to="/forgot" className='text-dark'>Forgot Password?</Link>
                  <div className='d-flex justify content-center gap-15 align-items-center'>
                    <button className='button border-0' type='submit'>Login</button>
                    <Link className='button signup'>Signup</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login