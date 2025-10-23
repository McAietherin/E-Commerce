import React from 'react'
import { useCart } from '../context/CartContext'
import ProdCard from '../assets/ProdCard'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart } = useCart()

  return (
    <div className="tenochtitlan mid carters">
      <h1>💼 My Cart</h1>
      <p>{cart.length} items in your cart</p>
      {cart.length > 0 ? (
        <div className='eees'>
          <div className="prods ess">
            {cart.map(product => (
              <ProdCard key={product.key} product={product} />
            ))}
          </div>
          <div className='ins2'>
            <div className="ins1">
              <h3>Order Summary</h3>
              <div>
                <span>
                  <p className="right">Total</p>
                  <p className="left">Rs. </p>
                </span>
                <span>
                  <p className="right">Shipping</p>
                  <p className="left free">FREE</p>
                </span>
                <div className="free">✓ Free shipping (orders over Rs.50)</div>
              </div>
            </div>
            <div className='ins'>
              <div className="total">
                <h3>Total</h3>
                <h2>Rs. </h2>
              </div>
              <div className="buots dssad">
                <Link to={'/products'}><p className='aqbynow'>Continue Shopping</p></Link>
                <p className='aqred'><i class="bi bi-cart3"></i> Buy All</p>
              </div>
              <ul>
                <li>✓ Secure checkout</li>
                <li>✓ 30-day returns</li>
                <li>✓ 100% buyer protection</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h1>🛒</h1>
          <h2>Your cart is empty</h2>
          <p>Add items to your cart to get started!</p>
          <Link to={'/products'} className='aqred'><i className="bi bi-bag-plus"></i> Continue Shopping</Link>
        </div>
      )}
    </div>
  )
}

export default Cart