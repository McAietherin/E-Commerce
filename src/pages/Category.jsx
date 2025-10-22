import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { products } from '../assets/Data'
import ProdCard from '../assets/ProdCard'
import Filter from '../assets/Filter'

function Category() {
  const { category } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchQuery = queryParams.get('search')?.toLowerCase() || ''

  const normalized = category?.toLowerCase()

  const [sortBy, setSortBy] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [rating, setRating] = useState(0)

  const [categoryProducts, setCategoryProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    const base = products
      .filter(p => normalized === 'all' || p.category?.toLowerCase() === normalized)
      .filter(p =>
        p.title.toLowerCase().includes(searchQuery) ||
        p.seller.toLowerCase().includes(searchQuery)
      )
      .map(p => ({
        ...p,
        price: parseInt(p.price),
        discount: parseInt(p.pdeal.replace('%', '')),
        rating: parseInt(p.hearts) / 2
      }))
    setCategoryProducts(base)
  }, [normalized, searchQuery])

  useEffect(() => {
    let temp = [...categoryProducts]
    if (minPrice) temp = temp.filter(p => p.price >= parseInt(minPrice))
    if (maxPrice) temp = temp.filter(p => p.price <= parseInt(maxPrice))
    if (rating) temp = temp.filter(p => p.rating >= rating)
    if (sortBy === 'price,l-h') temp.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price,h-l') temp.sort((a, b) => b.price - a.price)
    else if (sortBy === 'discount') temp.sort((a, b) => b.discount - a.discount)

    setFilteredProducts(temp)
  }, [categoryProducts, sortBy, minPrice, maxPrice, rating])

  const resetFilters = () => {
    setSortBy('')
    setMinPrice('')
    setMaxPrice('')
    setRating(0)
    navigate(`/categories/${category}`)
  }

  const capitalized = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <>
      <section className='mid'>
        <div className="ctgtit">
          <h1>{capitalized}</h1>
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

          {categoryProducts.length === 0 ? (
            <div className='error b'>
              <h1>No products found in this category :(</h1>
              <p><Link to="/">Head Back Home &gt;</Link></p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className='error b'>
              <p className='nof'>No products match your filters.</p>
            </div>
          ) : (
            <div className="prods">
              {filteredProducts.map(prod => (
                <ProdCard key={prod.key} product={prod} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  )
}

export default Category