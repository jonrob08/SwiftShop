import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className="col-3">
        <div className="product-card position-relative">
            <div className="product-image">
                <img src="images/watch.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Sekiio</h6>
                <h5 className="product-title">
                    Info about the waaatch watch watch watch which watch
                </h5>
                <ReactStars count={5} size={24} value="3" edit={false} activeColor='#ffd700'></ReactStars>
                <p className='price'>$199.99</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link>
                        <img src="images/add-cart.svg" alt="add to cart" />
                    </Link>
                    <Link>
                        <img src="images/prodcompare.svg" alt="compare product" />
                    </Link>
                    <Link>
                        <img src="images/view.svg" alt="view item" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard