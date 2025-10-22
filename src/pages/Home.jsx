import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../assets/Data'
import Star from '../assets/Star'
import ProdCard from '../assets/ProdCard'

function Home() {
  return (
    <>
      <section id='banner' className='mid'>
        <h1>Discover Amazing Deals</h1>
        <h3>Shop millions of products at unbeatable prices</h3>
      </section>
      <section id="bycat" className='mid'>
        <div className="view">
          <h2>Shop by Category</h2>
          <p><Link to={'/categories'}>View All <i className="bi bi-chevron-right"></i></Link></p>
        </div>
        <div id="bcgrid">
          <div className="bcgcont">
            <h3>📱</h3>
            <p>Electronics</p>
          </div>
          <div className="bcgcont">
            <h3>👗</h3>
            <p>Fashion</p>
          </div>
          <div className="bcgcont">
            <h3>🏠</h3>
            <p>Home</p>
          </div>
          <div className="bcgcont">
            <h3>⚽</h3>
            <p>Sports</p>
          </div>
          <div className="bcgcont">
            <h3>💄</h3>
            <p>Beauty</p>
          </div>
          <div className="bcgcont">
            <h3>🎮</h3>
            <p>Toys</p>
          </div>
        </div>
      </section>
      <section id="feprods" className='mid'>
        <div className="view">
          <h2>Featured Products</h2>
          <p><Link to={'/products'}>View All <i className="bi bi-chevron-right"></i></Link></p>
        </div>
        <div className="prods">
          {products.slice(0, 5).map(prod => (
            <ProdCard key={prod.key} product={prod} />
          ))}
        </div>
      </section>
      <section id='flash' className='mid'>
        <div className="right">
          <h3>⚡ Flash Sale</h3>
          <p>Up to 70% off on selected items</p>
        </div>
        <div className="left">
          <h2>Ends in 2:12:12</h2>
          <p>Hours:Mins:Secs</p>
        </div>
      </section>
      <section id="saprods" className='mid'>
        <div className="view">
          <h2>Sale Products</h2>
          <p><Link to={'/categories'}>View All <i className="bi bi-chevron-right"></i></Link></p>
        </div>
        <div className="prods">
          {products
            .filter(prod => prod.pdeal && prod.pdeal.trim() !== '').slice(0, 10)
            .map(prod => (
              <ProdCard key={prod.key} product={prod} />
            ))}
        </div>
      </section>
      <section id='tres' className='mid'>
        <div className="trescont">
          <h2>🚚</h2>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="trescont">
          <h2>🔒</h2>
          <h3>Secure Payments</h3>
          <p>100% safe transactions</p>
        </div>
        <div className="trescont">
          <h2>↩️</h2>
          <h3>Easy Returns</h3>
          <p>30-day money back guarantee</p>
        </div>
      </section>
    </>
  )
}

export default Home
