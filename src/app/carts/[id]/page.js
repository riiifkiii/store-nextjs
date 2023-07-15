'use client'

import Card from '@/components/Card'
import { useState } from 'react'

const Cart = ({params}) => {
    const [cart, setCart] = useState([])

    const getCart = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/carts/${params.id}`)
            const responseJson = await response.json()
            setCarts(responseJson)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(params)

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

export default Cart