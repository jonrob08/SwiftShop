import React from 'react'
import ReactStars from 'react-rating-stars-component'

const ProductCard = () => {
  return (
    <div className="col-3">
        <div className="product-card">
            <div className="product-image">
                <img src="images/watch.jpg" alt="" />
            </div>
            <div className="product-details">
                <h6 className="brand">Sekiio</h6>
                <h5 className="product-title">
                    Info about the waaatch watch watch watch which watch
                </h5>
                <ReactStars count={5} size={24} activeColor='#ffd700'></ReactStars>
                <p className='price'>$199.99</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard