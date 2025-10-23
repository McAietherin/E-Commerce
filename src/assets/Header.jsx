import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Header() {
  const [showCategories, setShowCategories] = useState(false)
  const toggleCategories = () => {
    setShowCategories(prev => !prev)
  }
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = () => {
    if (!searchText.trim()) return

    const encoded = encodeURIComponent(searchText.trim())
    const path = location.pathname
    const match = path.match(/^\/categories\/([^/]+)$/)
    if (match) {
      const categorySlug = match[1]
      navigate(`/categories/${categorySlug}?search=${encoded}`)
    } else {
      navigate(`/products?search=${encoded}`)
    }
  }

  return (
    <div id='pegged'>
      <header>
        <div className="mid">
          <ul>
            <li>Provider Center</li>
            <li>Become a Provider</li>
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
            <h3>
              <Link to={'/'}><span>Commerco</span></Link>
              <div id='as'>
                <i className="bi bi-list" id='mobile' onClick={toggleCategories}></i>
                <Link to={'/wishlist'} style={{ display: showCategories ? 'block' : 'none' }}><p>My wishlist</p></Link>
                <p className="hr" style={{ display: showCategories ? 'block' : 'none' }}></p>
                <Link to={'/mycart'} style={{ display: showCategories ? 'block' : 'none' }}><p>My Cart</p></Link>
                <p className="hr" style={{ display: showCategories ? 'block' : 'none' }}></p>
                <Link to={'/'} style={{ display: showCategories ? 'block' : 'none' }}><p>Account</p>
                </Link>
                <p className="hr" style={{ display: showCategories ? 'block' : 'none' }}></p>
              </div>
            </h3>
            <div id='navinput'>
              <input
                type="text"
                name="navsearch"
                id="navinp"
                placeholder='Search products, brands, and shops...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button title='search' id='pcbut' onClick={handleSearch}>Search</button>
              <button title='search' id='mobbut' onClick={handleSearch}>
                <i className="bi bi-search"></i>
              </button>
            </div>
            <div id="icons">
              <Link to={'/wishlist'}><button title='heart'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-5 h-5" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg></button></Link>
              <Link to={'/mycart'}><button title='heart'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-5 h-5" aria-hidden="true"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg></button></Link>
              <button title='acc'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-5 h-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></button>
            </div>
          </div>
          <div id="categs">
            <ul>
              <li><Link to={'/categories'}>All Categories</Link></li>
              <li><Link to="/categories/electronics">Electronics</Link></li>
              <li><Link to="/categories/clothing">Clothing</Link></li>
              <li><Link to="/categories/housing">Home & Garden</Link></li>
              <li><Link to="/categories/sports">Sports</Link></li>
              <li><Link to="/categories/toys">Toys & Games</Link></li>
              <li><Link to="/categories/beauty">Beauty</Link></li>
              <li><Link to="/categories/automotive">Automotive</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header