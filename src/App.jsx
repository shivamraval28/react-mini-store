import { useState, useEffect } from 'react'

function App() {
  // 1. STATE: Where we store our data
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // 2. EFFECT: Fetch data when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // The API URL
      .then(res => res.json()) // Convert response to JSON
      .then(data => {
        setProducts(data) // Save data to our state
        setLoading(false) // Stop loading
      })
      .catch(err => console.error("Error fetching data:", err))
  }, [])

  // 3. RENDER: What the user sees
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>🔥 React Mini-Store</h1>
      
      {/* Show a loading message if data isn't ready yet */}
      {loading && <p style={{ textAlign: 'center' }}>Loading products...</p>}

      {/* The Grid */}
      <div style={gridStyle}>
        {products.map(product => (
          <div key={product.id} style={cardStyle}>
            <img src={product.image} alt={product.title} style={imageStyle} />
            <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{product.title}</h3>
            <p style={{ fontWeight: 'bold', color: '#007bff' }}>${product.price}</p>
            <button style={buttonStyle}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Simple internal CSS (In a real job, you'd use a separate .css file)
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Responsive Grid
  gap: '20px',
  marginTop: '20px'
}

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  textAlign: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  backgroundColor: 'white'
}

const imageStyle = {
  height: '100px',
  objectFit: 'contain',
  marginBottom: '10px'
}

const buttonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px'
}

export default App