import React from 'react'
import { useCart } from '../context/CartContext'
import ProdCard from '../assets/ProdCard'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart } = useCart()

  return (
    <div className="tenochtitlan mid carters">
      <h1>💼 My Cart</h1>
      <p>{cart.length} items saved</p>

      {cart.length > 0 ? (
        <>
        <div className="prods ess">
          {cart.map(product => (
            <ProdCard key={product.key} product={product} />
          ))}
        </div>
        <div className='inyour'>
          <p>{cart.length} items in your cart</p>
          <div className="buots">
            <Link to={'/products'}><p className='aqbynow'>Continue Shopping</p></Link>
            <p className='aqred'><i class="bi bi-cart3"></i> Add all to Cart</p>
          </div>
        </div>
        </>
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