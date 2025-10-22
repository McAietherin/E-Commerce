import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../assets/Data'
import Star from '../assets/Star'

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
          {products.map(prod => (
            <Link to={`/products/${prod.key}`} key={prod.key} className="prod">
              <div className="pimg">
                <div className="pbio">{prod.pbio}</div>
                <div className="pdeal">-{prod.pdeal}</div>
                <img src={prod.imgsrc} alt={prod.alt} />
                <div className="wished"><i class="bi bi-suit-heart"></i></div>
              </div>
              <div className='ptext'>
                <h3>{prod.title}</h3>
                <div className="pprice">
                  <h2>Rs. {prod.price}</h2>
                  <del>Rs. {prod.originalPrice}</del>
                </div>
                <div className="stars">
                  <span className='str'><Star hearts={prod.hearts} /></span>
                  <p className="amt">({prod.reviews})</p>
                </div>
                <h6>Sold by <strong>{prod.seller}</strong></h6>
              </div>
            </Link>
          ))}
        </div>

      </section>
      <section id="saprods" className='mid'>
        <div className="view">
          <h2>Sale Products</h2>
          <p><Link to={'/categories'}>View All <i className="bi bi-chevron-right"></i></Link></p>
        </div>
      </section>
    </>
  )
}

export default Home
