'use client'

import Card from "@/components/Card"
import { useEffect, useState } from "react"

const AllProducts = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const responseJson = await response.json()
            setProducts(responseJson)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    },[])

    console.log(products)

    return(
        <>
            <section id="allProduct" className="grid grid-cols-2 px-5 lg:grid-cols-3 justify-items-center gap-5 mt-5 lg:px-[200px]">
            {
                products.map(product => <Card data={product} key={product.id}/>)
            }
            </section>
        </>
    )
}

export default AllProducts