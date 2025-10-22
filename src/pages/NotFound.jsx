import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className='mid'>
      <div className='error'>
        <h1>404</h1>
        <h3>Page doesn't exist or was moved</h3>
        <p><Link to={'/'}>Head Back Home &gt;</Link></p>
      </div>
    </section>
  )
}

export default NotFound
