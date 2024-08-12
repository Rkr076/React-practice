import { useState, useEffect } from "react"

const Product = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const getList = await response.json();
    setProducts(getList);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <h1>Product Dashboard</h1>
      {
        JSON.stringify(products)
      }
    </>
  )
}

export default Product