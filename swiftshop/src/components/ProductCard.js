import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'

const ProductCard = (props) => {
  const { grid } = props
  let location = useLocation()

  return (
    <>
        <div className={` ${ location.pathname === "/store" ? `col-${ grid }` : "col-3"} `}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link><img src="images/wish.svg" alt="wishlist" /></Link>
            </div>
            <div className="product-image">
                <img src="images/watch.jpg" className="img-fluid" alt="product image" />
                <img src="images/watch-flip.jpeg" className="img-fluid" alt="product image" />
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
        </Link>
    </div>
    <div className={` ${ location.pathname === "/store" ? `col-${ grid }` : "col-3"} `}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link><img src="images/wish.svg" alt="wishlist" /></Link>
            </div>
            <div className="product-image">
                <img src="images/watch.jpg" className="img-fluid" alt="product image" />
                <img src="images/watch-flip.jpeg" className="img-fluid" alt="product image" />
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
        </Link>
    </div>
    </>
  )
}

export default ProductCard