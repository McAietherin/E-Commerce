import React from 'react'
import { products } from '../assets/Data'

function Star({ hearts }) {
    const rating = parseInt(hearts, 10) / 2
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 >= 0.5 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStar

    const stars = []

    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={`full-${i}`} className="bi bi-star-fill"></i>)
    }
    if (halfStar) {
        stars.push(<i key="half" className="bi bi-star-half"></i>)
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>)
    }

    return <div className="stars">{stars}</div>
}


export default Star
