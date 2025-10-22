import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../assets/Data'
import Star from '../assets/Star'
import ProdCard from '../assets/ProdCard'

function ProdDeet() {
  const scrollYRef = useRef(0)
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams()
  const product = products.find(p => p.key === parseInt(id))
  const [selectedImage, setSelectedImage] = useState(product.imgsrc[0])
  useEffect(() => {
    setSelectedImage(product.imgsrc[0]);
  }, [product])

  useEffect(() => {
    window.scrollTo({ top: scrollYRef.current, behavior: 'auto' });
  }, [selectedImage])

  if (!product) return <h2>Product not found</h2>
  const relatedProducts = products.filter(
    prod => prod.key !== product.key && prod.category === product.category
  )

  return (
    <section className="proddeet mid">
      <p id='path'><Link to={'/'}>Home</Link> / <Link to={'/products'}>Products</Link> / {product.title}</p>
      <div id="side">
        <div id="sdimg">
          <div id="mainimg">
            <img src={selectedImage} alt={product.alt} />
          </div>
          <div id="imgslide">
            {product.imgsrc.map((src, index) => (
              <div
                key={index}
                className={`imgslidimg${selectedImage === src ? ' selct' : ''}`}
                onClick={() => {
                  scrollYRef.current = window.scrollY
                  setSelectedImage(src)
                }}
              >
                <img
                  src={src}
                  alt={`${product.alt} ${index + 1}`}
                  draggable="false"
                />
              </div>
            ))}
          </div>

        </div>
        <div id="sidtxt">
          <div id="sidn">
            <h1>{product.title}</h1>
            <div className="stars">
              <span className='str'><Star hearts={product.hearts} /></span>
              <p className="amt">{product.hearts / 2} ({product.reviews} reviews)</p>
            </div>
          </div>
          <div className="pprice">
            <h1>Rs. {product.price}</h1>
            <del>Rs. {product.originalPrice}</del>
            <p>Save {product.pdeal}</p>
          </div>
          <div id="avail">
            <div id="avl">
              <div className="avltwo">
                <p>Stock Status</p>
                <p
                  id="val"
                  style={{ color: product.stock === 0 ? '#e72413' : '#159d47' }}
                >
                  {product.stock} {product.stock === 0 ? 'Unavailable' : `Available`}
                </p>
              </div>
              <div className="avltwo">
                <p>Seller</p>
                <p className='red'>{product.seller}</p>
              </div>
            </div>
            <p id='quntt'>Quantity</p>
            <div id="quantbut">
              <p onClick={() => setQuantity(prev => Math.max(prev - 1, 0))}>-</p>
              <span>
                <input
                  type="number"
                  name="numb"
                  id="amtslct"
                  value={quantity}
                  onChange={(e) => {
                    const val = Math.max(0, parseInt(e.target.value) || 0);
                    setQuantity(val);
                  }}
                />
              </span>
              <p onClick={() => setQuantity(prev => prev + 1)}>+</p>
            </div>
            <div id="aqgrid">
              <div id="aqred"><i className="bi bi-cart2"></i> Add to Cart</div>
              <div id="aqbynow">Buy Now</div>
              <div className="aqsmol"><i className="bi bi-suit-heart"></i> Wishlist</div>
              <div className="aqsmol"><i className="bi bi-share"></i> Share</div>
            </div>
          </div>
          <div id="prodtri">
            <div className="fgcont">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-5 h-5 text-primary flex-shrink-0 mt-0.5 red" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx={17} cy={18} r={2} /><circle cx={7} cy={18} r={2} /></svg>
              <div className="svdiv">
                <h6>Free Shipping</h6>
                <p>On orders over $50</p>
              </div>
            </div>
            <div className="fgcont">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-5 h-5 text-primary flex-shrink-0 mt-0.5 red" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
              <div className="svdiv">
                <h6>Secure</h6>
                <p>100% buyer protection</p>
              </div>
            </div>
            <div className="fgcont">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw w-5 h-5 text-primary flex-shrink-0 mt-0.5 red" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
              <div className="svdiv">
                <h6>Easy Returns</h6>
                <p>30-day returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='spdesc'>
        <section id='specs'>
          <h2>Specifications</h2>
          <div id="sgrid">
            {Object.entries(product.specs).map(([key, spec], index) => (
              <div key={index}>
                <p className="sgtit">{spec.ititle}</p>
                <p className="sgval">{spec.ival}</p>
              </div>
            ))}
          </div>
        </section>
        <section id='desc'>
          <h2>Description</h2>
          <p>{product.details}</p>
        </section>
      </div>
      <section id='rela'>
        <h2>You May Also Like</h2>
        <section>
          {relatedProducts.length === 0 ? (
            <p>No items found.</p>
          ) : (
            <div className="prods">
              {relatedProducts.map(prod => (
                <ProdCard key={prod.key} product={prod} />
              ))}
            </div>
          )}
        </section>
      </section>

    </section>
  )
}

export default ProdDeet