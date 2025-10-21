import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div id='pegged'>
      <header>
        <div className="mid">
          <ul>
            <li>Seller Center</li>
            <li>Become a Seller</li>
          </ul>
          <ul>
            <li>Help</li>
            <li>Orders</li>
            <li>Account</li>
          </ul>
        </div>
      </header>

      <nav>
        <div className='mid'>
          <div id="navsearch">
            <h3><Link to={'/'}>Commerco</Link></h3>
            <div id='navinput'>
              <input type="text" name="navsearch" id="navinp" placeholder='Search products, brands, and shops...'/>
              <button>Search</button>
            </div>
            <div id="icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-5 h-5" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart w-5 h-5" aria-hidden="true"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-5 h-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
          </div>
          <div id="categs">
            <ul>
              <li><Link to={'/categories'}>All Categories</Link></li>
              <li>Electronics</li>
              <li>Clothing</li>
              <li>Home & Garden</li>
              <li>Sports</li>
              <li>Toys & Games</li>
              <li>Beauty</li>
              <li>Automotive</li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header
