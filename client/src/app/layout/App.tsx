import { useEffect, useState } from "react";
import { Product } from "../models/products";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState,
    {
      id: 0,
      name: "Flower",
      description: "This is a big red flower",
      price: 1000
    }])
  }

  return (
    <>
      <Typography variant='h1'>Re-Store</Typography>
      
      <Catalog products={products} addProduct= {addProduct}/>
    </>
  )
}

export default App;
