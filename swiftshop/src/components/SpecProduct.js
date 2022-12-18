import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import { Watch } from '../images'

const SpecProduct = () => {
  return (
    <div className="col-6 mb-3">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src={Watch} className='img-fluid' alt="watch" />
                </div>
                <div className='special-product-content'>
                    <h5 className="brand">Sekiro</h5>
                    <h6 className="title">Sekiro OuterSpace Watch V3.0</h6>
                    <ReactStars 
                        count={5} 
                        size={24} 
                        value={3}
                        edit={false} 
                        activeColor="#ffd700"
                    />
                    <p className="price">
                        <span className="red-p">$99.99</span> 
                        &nbsp; 
                        <strike>$249.99</strike>
                    </p>
                    <div className="discount-until d-flex align-items-center gap-10">
                        <p className='mb-0'>
                            <b>5 </b><span>days</span>
                        </p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className='badge rounded-circle p-2 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-2 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-2 bg-warning'>1</span>
                        </div>
                        
                    </div>
                    <div className="prod-count my-3">
                            <p>Products: 5</p>
                            <div className="progress">
                                <div 
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ 'width': '35%' }}
                                    aria-valuenow='35'
                                    aria-valuemin='0'
                                    aria-valuemax='100'
                                ></div>
                            </div>
                        </div>
                        <Link className='button'>Add To Cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecProduct