import React from 'react'

function Filter({ sortBy, setSortBy, minPrice, setMinPrice, maxPrice, setMaxPrice, rating, setRating, resetFilters }) {
    return (
        <aside>
            <div id="sort" className='bbord'>
                <h3>Sort By</h3>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="price,l-h">Price: Low to High</option>
                    <option value="price,h-l">Price: High to Low</option>
                    <option value="discount">Highest discounts</option>
                </select>
            </div>
            <div className="bbord up">
                <h3>Price Range</h3>
                <div className="in">
                    <label>Min</label>
                    <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                </div>
                <div className="in">
                    <label>Max</label>
                    <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                </div>
            </div>
            <div className='bb2 up'>
                <h3>Rating</h3>
                {[5, 4, 3, 2, 1].map(r => (
                    <p key={r} onClick={() => setRating(r)} style={{
                        cursor: 'pointer',
                        color: rating === r ? 'white' : 'inherit',
                        backgroundColor: rating === r ? '#e72413' : 'transparent',
                    }}>
                        {'⭐'.repeat(r)} & up
                    </p>
                ))}
            </div>
            <div className="aqbynow" onClick={resetFilters} style={{ cursor: 'pointer' }}>
                Reset Filters
            </div>
        </aside>
    )
}

export default Filter