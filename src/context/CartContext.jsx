import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  useEffect(function loadCart() {
    const stored = localStorage.getItem('cart')
    if (stored) setCart(JSON.parse(stored))
  }, [])

  useEffect(function persistCart() {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(product, quantity = 1) {
    setCart(prev => {
      const existing = prev.find(item => item.key === product.key)
      if (existing) {
        return prev.map(item =>
          item.key === product.key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  function removeFromCart(key) {
    setCart(prev => prev.filter(item => item.key !== key))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}