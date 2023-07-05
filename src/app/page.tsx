'use client'

import Card from "@/components/Card"
import { useEffect, useState } from "react"

const Home = () => {
  const [products, setProducts] = useState([])

  const getProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=9')
    const responseJson = await response.json()
    setProducts(responseJson)
  }

  useEffect(() => {
    getProduct()
  }, [])

  console.log(products)

  return(
    <>
      <section className="grid grid-cols-2 px-5 lg:grid-cols-3 justify-items-center gap-5 mt-5 lg:px-[200px]">
        {
          products.map(product => <Card data={product} key={product.id}/>)
        }
      </section>
    </>
  )
}

export default Home