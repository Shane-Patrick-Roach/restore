
import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponents from "../../app/layout/LoadingComponents";
import { Product } from "../../app/models/products"
import ProductList from "./ProductList";




export default function Catalog() {

  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list()
    .then(products => setProducts(products))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [])

  if (loading) return <LoadingComponents message='Loading Products...' />

  return (
    <>
      <ProductList products={products} />

    </>
  )
}
