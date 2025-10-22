import React from 'react'
import { Link } from 'react-router-dom'
import Star from '../assets/Star'

function ProdCard({ product }) {
    return (
        <Link to={`/products/${product.key}`} className="prod">
            <div className="pimg">
                <div className="pbio">{product.pbio}</div>
                <div className="pdeal">-{product.pdeal}</div>
                <img src={product.imgsrc} alt={product.alt} />
                <div className="wished"><i className="bi bi-suit-heart"></i></div>
            </div>
            <div className='ptext'>
                <h3>{product.title}</h3>
                <div className="pprice">
                    <h2>Rs. {product.price}</h2>
                    <del>Rs. {product.originalPrice}</del>
                </div>
                <div className="stars">
                    <span className='str'><Star hearts={product.hearts} /></span>
                    <p className="amt">({product.reviews})</p>
                </div>
                <h6>Sold by <strong>{product.seller}</strong></h6>
            </div>
        </Link>
    )
}


export default ProdCard
