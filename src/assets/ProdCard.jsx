import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Star from '../assets/Star'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

function ProdCard({ product }) {
    const { removeFromCart } = useCart()
    const [quantity, setQuantity] = useState(0)
    const { wishlist, toggleWishlist } = useWishlist()
    const isWished = wishlist.some(item => item.key === product.key)

    function handleWishlistClick(e) {
        e.preventDefault()
        e.stopPropagation()
        toggleWishlist(product)
    }

    function handleIncrement(e) {
        e.preventDefault()
        e.stopPropagation()
    }
    return (
        <Link to={`/products/${product.key}`} className="prod">
            <div className='eezer'>
                <div className="pimg">
                    <div className="pbio">{product.pbio}</div>
                    <div className="pdeal">-{product.pdeal}</div>
                    <img src={product.imgsrc} alt={product.alt} />
                    <div className="wished" onClick={handleWishlistClick}>
                        <i className={`bi ${isWished ? 'bi-suit-heart-fill red' : 'bi-suit-heart'}`}></i>
                    </div>
                </div>
                <div className='ptext'>
                    <h3>{product.title}</h3>
                    <h6 className='hidden'>Sold by <strong>{product.seller}</strong></h6>
                    <div className="pprice">
                        <h2>Rs. {product.price}</h2>
                        <del>Rs. {product.originalPrice}</del>
                    </div>
                    <div className="stars">
                        <span className='str'><Star hearts={product.hearts} /></span>
                        <p className="amt">({product.reviews})</p>
                    </div>
                    <h6 className='sells'>Sold by <strong>{product.seller}</strong></h6>
                    <div className="hidden" id='incr' onClick={handleIncrement}>
                        <div>
                            <p onClick={() => setQuantity(prev => Math.max(prev - 1, 0))}>-</p>
                            <input name='ee' id='ee' value={quantity}
                                onChange={(e) => {
                                    const val = Math.max(0, parseInt(e.target.value) || 0)
                                    setQuantity(val)
                                }} disabled></input>
                            <p onClick={() => setQuantity(prev => prev + 1)}>+</p>
                        </div>
                        <span className='aqbynow' onClick={() => removeFromCart(product.key)}><i className="bi bi-trash"></i></span>
                    </div>
                </div>
            </div>
            <div className="hidden bsd">
                <p>Subtotal</p>
                <h2>Rs. </h2>
            </div>
        </Link >
    )
}

export default ProdCard