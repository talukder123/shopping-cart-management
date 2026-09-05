import { Suspense } from 'react';
import type { ProductType } from './type'
import Products from './Components/Products/Products';
import './App.css'

const ProductPromise = async (): Promise<ProductType[]> => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data = await res.json();
  return data;
}

function App() {
  return (
    <>
      <header className="navbar">
        <h2 className="logo">Talukder-Mart</h2>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">✨ Fresh & Trending</span>

          <h1>Shop Smart, Live Better</h1>

          <p>
            Discover quality products at great prices, all in one place.
          </p>
        </div>
      </section>

      <main>
        <Suspense fallback={<div className="loading">Loading products...</div>}>
          <Products ProductPromise={ProductPromise()} />
        </Suspense>
      </main>

      <footer className="footer">
  <div className="footer-content">
    <h2>TalukderMart</h2>
    <p>Quality products. Simple shopping. Better experience.</p>

    <div className="footer-divider"></div>

    <p className="copyright">
      © 2026 TalukderMart. All rights reserved.
    </p>
  </div>
</footer>
    </>
  );
}

export default App
