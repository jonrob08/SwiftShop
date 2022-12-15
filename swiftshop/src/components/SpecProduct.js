import React from 'react'
import ReactStars from 'react-rating-stars-component'

const SpecProduct = () => {
  return (
    <div className="col-4">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                </div>
                <div className='special-product-content'>
                    <h5 className="brand">Sekiro</h5>
                    <h6 className="title">Sekiro OuterSpace Watch V3.0</h6>
                    <ReactStars 
                        count={5} 
                        size={24} 
                        value="3" 
                        edit={false} 
                        activeColor="#ffd700"
                    />
                    <p className="price">
                        <span className="red-p">$99.99</span> 
                        &nbsp; 
                        <strike>$249.99</strike>
                    </p>
                    <div className="discount-until">
                        <p>
                            <b>5 days</b>
                        </p>
                        <div className="d-flex gap-10">
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecProduct