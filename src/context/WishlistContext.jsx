import React, { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])

  useEffect(function loadWishlist() {
    const stored = localStorage.getItem('wishlist')
    if (stored) setWishlist(JSON.parse(stored))
  }, [])

  useEffect(function persistWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  function toggleWishlist(product) {
    setWishlist(function (prev) {
      const exists = prev.find(item => item.key === product.key)
      return exists
        ? prev.filter(item => item.key !== product.key)
        : [...prev, product]
    })
  }

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}