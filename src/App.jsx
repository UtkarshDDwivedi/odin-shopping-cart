import Navbar from "./components/Navbar"
import { Outlet } from "react-router"
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  
  return (
    <>
      <Navbar />
      <Outlet context={products} />
    </>
  )
}

export default App
