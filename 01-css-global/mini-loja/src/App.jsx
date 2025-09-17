import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import ProductCard from "./components/ProductCard"
import { products } from "./data/products"
import SkeletonCard from "./components/SkeletonCard";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const time = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(time);
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-content">
        <section className="products-grid">
          {loading ? Array.from({length: 6}).map((_, i)=> <SkeletonCard key={i}/>) 
          : 
          products.map((product)=> (
            <ProductCard key={product.id} product={product} />
          ))
          }
        </section>
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default App
