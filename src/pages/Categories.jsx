import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <>
      <section className='mid'>
        <div className="ctgtit">
          <h1>All Categories</h1>
          <p>Browse through 16 categories to find what you need</p>
        </div>
        <div id="catsg">
          <Link to={'/categories/electronics'}><div className="bcgcont">
            <h2>📱</h2>
            <p>Electronics</p>
            <h5>Phones, Laptops, Gadgets</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/clothing'}><div className="bcgcont">
            <h2>👗</h2>
            <p>Fashion</p>
            <h5>Clothing, shoes, accessories</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/housing'}><div className="bcgcont">
            <h2>🏠</h2>
            <p>Home & Garden</p>
            <h5>Furniture, decor, plants</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/sports'}><div className="bcgcont">
            <h2>⚽</h2>
            <p>Sports</p>
            <h5>Sports equipment, fitness</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/beauty'}><div className="bcgcont">
            <h2>💄</h2>
            <p>Beauty</p>
            <h5>Skincare, makeup, wellness</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/toys'}><div className="bcgcont">
            <h2>🎮</h2>
            <p>Toys & Games</p>
            <h5>Games, puzzles, toys</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/automotive'}><div className="bcgcont">
            <h2>🚗</h2>
            <p>Automotive</p>
            <h5>Car parts, accessories</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/books'}><div className="bcgcont">
            <h2>📚</h2>
            <p>Books</p>
            <h5>eBooks, physical books</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/edibles'}><div className="bcgcont">
            <h2>🍔</h2>
            <p>Food & Beverages</p>
            <h5>Groceries, snacks, drinks</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/pets'}><div className="bcgcont">
            <h2>🐕</h2>
            <p>Pets</p>
            <h5>Pet supplies, food</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/office'}><div className="bcgcont">
            <h2>💼</h2>
            <p>Office</p>
            <h5>Supplies, furniture, eqpuipment</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/music'}><div className="bcgcont">
            <h2>🎵</h2>
            <p>Music & Audio</p>
            <h5>Instruments, speakers, headphones</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/travel'}><div className="bcgcont">
            <h2>🛫</h2>
            <p>Travel</p>
            <h5>Luggage, travel gear</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/jewelry'}><div className="bcgcont">
            <h2>💎</h2>
            <p>Jewelry</p>
            <h5>Ring, necklaces, watches</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/tools'}><div className="bcgcont">
            <h2>🔧</h2>
            <p>Tools</p>
            <h5>Hand tools, power tools</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
          <Link to={'/categories/nature'}><div className="bcgcont">
            <h2>🌿</h2>
            <p>Gardening & Outdoors</p>
            <h5>Gardening, camping, outdoors</h5>
            <h4>Shop Now <i class="bi bi-chevron-right"></i></h4>
          </div></Link>
        </div>
      </section>
    </>
  )
}

export default Categories
