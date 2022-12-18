import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import { Container } from '../components';

const Signup = () => {
    const title = "Sign Up"
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} /> 
      <Container class1="login-wrapper py-5">
      <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className='text-center mb-3'>Sign Up</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                  <input type="text" name='name' placeholder='Full Name' className="form-control" />
                </div> 
                <div>
                  <input type="email" name='email' placeholder='Email' className="form-control" />
                </div> 
                <div>
                  <input type="password" name='password' placeholder='Password' className="form-control" />
                </div> 
                <div>
                <div className='d-flex justify-content-center flex-column gap-15 align-items-center'>
                    <button className='button border-0' type='submit'>Sign Up</button>
                    <Link to="/login" className='text-dark'>Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Signup