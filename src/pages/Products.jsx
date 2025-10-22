import React, { useEffect, useState } from 'react'
import { products } from '../assets/Data'
import ProdCard from '../assets/ProdCard'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Filter from '../assets/Filter'

function Products() {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchQuery = queryParams.get('search')?.toLowerCase() || ''

  const [sortBy, setSortBy] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [rating, setRating] = useState(0)
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSortChange = (e) => setSortBy(e.target.value)
  const handleMinChange = (e) => setMinPrice(e.target.value)
  const handleMaxChange = (e) => setMaxPrice(e.target.value)
  const handleRatingChange = (val) => setRating(val)

  useEffect(() => {
    let temp = [...products]
    temp = temp.map(p => ({
      ...p,
      price: parseInt(p.price),
      discount: parseInt(p.pdeal.replace('%', '')),
      rating: parseInt(p.hearts) / 2
    }))
    if (searchQuery) {
      temp = temp.filter(p =>
        p.title.toLowerCase().includes(searchQuery) ||
        p.seller.toLowerCase().includes(searchQuery)
      )
    }
    if (minPrice) temp = temp.filter(p => p.price >= parseInt(minPrice))
    if (maxPrice) temp = temp.filter(p => p.price <= parseInt(maxPrice))
    if (rating) temp = temp.filter(p => p.rating >= rating)
    if (sortBy === 'price,l-h') temp.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price,h-l') temp.sort((a, b) => b.price - a.price)
    else if (sortBy === 'discount') temp.sort((a, b) => b.discount - a.discount)

    setFilteredProducts(temp)
  }, [sortBy, minPrice, maxPrice, rating, searchQuery])

  const resetFilters = () => {
    setSortBy('')
    setMinPrice('')
    setMaxPrice('')
    setRating(0)
    navigate('/products')
  }


  return (
    <>
      <section className='mid'>
        <div className="ctgtit">
          <h1>All Products</h1>
          <p>Showing {filteredProducts.length} products</p>
        </div>
      </section>
      <div className='prodi mid'>
        <Filter
          sortBy={sortBy}
          setSortBy={setSortBy}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          rating={rating}
          setRating={setRating}
          resetFilters={resetFilters}
        />

        <section className='mid feprods' id='ds'>
          <div className="view">
            <h2>Products ({filteredProducts.length})</h2>
          </div>
          <div className="prods">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(prod => (
                <ProdCard key={prod.key} product={prod} />
              ))
            ) : (
              <p className='nof'>No products match your filters.</p>
            )}
          </div>
        </section>
      </div>

    </>
  )
}

export default Products
