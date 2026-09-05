import { Suspense } from 'react';
import type { ProductType } from './type'
import Products from './Components/Products/Products';

const ProductPromise = async (): Promise<ProductType[]> => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data = await res.json();
  return data;
}

function App() {
  return (
    <>
      <h2>TalukderMart</h2>

      <Suspense fallback={<div>Loading data...</div>}>
        <Products ProductPromise={ProductPromise()}></Products>      
        </Suspense>
    </>
  );
}

export default App
