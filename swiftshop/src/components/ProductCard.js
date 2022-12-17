import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'
import { Watch, Wish, WatchFlip, Addcart, ItemCompare, View, } from '../images'

const ProductCard = (props) => {
  const { grid } = props
  let location = useLocation()

  return (
    <>
        <div className={` ${ location.pathname === "/store" ? `gr-${ grid }` : "col-3"} `}>
        <Link to="/product/:id" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link><img src={Wish} alt="wishlist" /></Link>
            </div>
            <div className="product-image">
                <img src={Watch} className="img-fluid" alt="product image" />
                <img src={WatchFlip} className="img-fluid" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Sekiio</h6>
                <h5 className="product-title">
                    Info about the waaatch watch watch watch which watch
                </h5>
                <ReactStars count={5} size={24} value="3" edit={false} activeColor='#ffd700'></ReactStars>
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, neque sit amet lacinia suscipit, odio nisl vulputate nisi, eget eleifend libero metus ac lacus.</p>
                <p className='price'>$199.99</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link>
                        <img src={Addcart} alt="add to cart" />
                    </Link>
                    <Link>
                        <img src={ItemCompare} alt="compare product" />
                    </Link>
                    <Link>
                        <img src={View} alt="view item" />
                    </Link>
                </div>
            </div>
        </Link>
    </div>
    <div className={` ${ location.pathname === "/store" ? `gr-${ grid }` : "col-3"} `}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link><img src={Wish} alt="wishlist" /></Link>
            </div>
            <div className="product-image">
                <img src={Watch} className="img-fluid" alt="product image" />
                <img src={WatchFlip} className="img-fluid" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Sekiio</h6>
                <h5 className="product-title">
                    Info about the waaatch watch watch watch which watch
                </h5>
                <ReactStars count={5} size={24} value="3" edit={false} activeColor='#ffd700'></ReactStars>
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, neque sit amet lacinia suscipit, odio nisl vulputate nisi, eget eleifend libero metus ac lacus.</p>
                <p className='price'>$199.99</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link>
                        <img src={Addcart} alt="add to cart" />
                    </Link>
                    <Link>
                        <img src={ItemCompare} alt="compare product" />
                    </Link>
                    <Link>
                        <img src={View} alt="view item" />
                    </Link>
                </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard