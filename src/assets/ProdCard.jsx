import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Star from '../assets/Star'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { toast } from 'react-toastify'

function ProdCard({ product }) {
    const { removeFromCart, updateQuantity, addToCart } = useCart()
    const subTotal = product.price * product.quantity
    const { wishlist, toggleWishlist } = useWishlist()
    const isWished = wishlist.some(item => item.key === product.key)

    function handleWishlistClick(e) {
        e.preventDefault()
        e.stopPropagation()
        toggleWishlist(product)
    }

    return (
        <Link to={`/products/${product.key}`} className="prod">
            <div className='eezer'>
                <div className="pimg">
                    <div className="pbio">{product.pbio}</div>
                    <div className="pdeal">-{product.pdeal}</div>
                    <img src={product.imgsrc[0]} alt={product.alt} />
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
                    <div className="hidden" id='incr'>
                        <div>
                            <p onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                if (product.quantity > 1) updateQuantity(product.key, product.quantity - 1)
                            }}>–</p>

                            <input value={product.quantity} disabled />

                            <p onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                updateQuantity(product.key, product.quantity + 1)
                            }}>+</p>
                        </div>
                        <span
                            className='aqbynow'
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                removeFromCart(product.key)
                            }}
                        >
                            <i className="bi bi-trash"></i>
                        </span>

                    </div>
                </div>
            </div>
            <div className="hidden bsd">
                <p>Subtotal</p>
                <h2>Rs. {subTotal}</h2>
            </div>
            <div
                className="addtc"
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart(product, 1)
                    toast.success(`${product.title} added to cart`)
                }}
            >
                <h3>Add to Cart</h3>
            </div>
        </Link >
    )
}

export default ProdCard