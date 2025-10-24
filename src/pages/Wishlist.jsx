import React from 'react'
import { useWishlist } from '../context/WishlistContext'
import ProdCard from '../assets/ProdCard'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { toast } from 'react-toastify'

function Wishlist() {
  const { wishlist } = useWishlist()
  const { addToCart } = useCart()

  return (
    <div className="tenochtitlan mid">
      <h1>❤️ My Wishlist</h1>
      <p>{wishlist.length} items saved</p>

      {wishlist.length > 0 ? (
        <>
          <div className="prods ess">
            {wishlist.map(product => (
              <ProdCard key={product.key} product={product} />
            ))}
          </div>
          <div className='inyour'>
            <p>{wishlist.length} items in your wishlist</p>
            <div className="buots">
              <Link to={'/products'}><p className='aqbynow'>Continue Shopping</p></Link>
              <p
                className='aqred'
                onClick={() => {
                  wishlist.forEach(product => {
                    addToCart(product, 1)
                  })
                  toast.success(`Added ${wishlist.length} item${wishlist.length > 1 ? 's' : ''} to the cart.`)
                }}
              >
                <i className="bi bi-cart3"></i> Add all to Cart
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="empty">
          <h1>💝</h1>
          <h2>Your wishlist is empty</h2>
          <p>Start adding your favorite products to keep track of them!</p>
          <Link to={'/products'} className='aqred'><i className="bi bi-bag-plus"></i> Continue Shopping</Link>
        </div>
      )}
    </div>
  )
}

export default Wishlist