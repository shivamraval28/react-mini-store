import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => console.error("Error:", err))
  }, [])

  return (
    <div className="app-container">
      {/* 1. Navigation Bar */}
      <nav className="navbar">
        <div className="logo">MODERN STORE</div>
        <div className="nav-links">
          <span>Men</span>
          <span>Women</span>
          <span>Accessories</span>
        </div>
        <div className="cart-icon">Cart (0)</div>
      </nav>

      {/* 2. Hero Section - The big banner at the top */}
      <header className="hero">
        <div className="hero-content">
          <h1>SUMMER DROPS</h1>
          <p>New arrivals are here. Get 20% off this week.</p>
        </div>
      </header>

      {/* 3. Main Product Grid */}
      <main className="main-content">
        <h2 className="section-title">Trending Now</h2>
        
        {loading && <div className="loading">Loading collection...</div>}

        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              
              <div className="product-info">
                <div className="product-text">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-category">{product.category}</p>
                </div>
                <div className="product-price">${product.price}</div>
              </div>
              <button className="add-btn">ADD TO BAG</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App