'use client'
import { useEffect, useState } from "react"
import { BsCart3, BsCartPlus, BsHeart, BsStar } from "react-icons/bs"

const DetailProduct = ({params}) => {
    const [product, setProduct] = useState([])

    const getProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const responseJson = await response.json()
            setProduct(responseJson)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    },[])

    return(
        <>
            <section className="w-[700px] grid grid-cols-2 bg-white mx-auto mt-5 rounded border border-slate-200">
                <div className="p-3 items-start justify-items-center">
                    <picture>
                        <img className="mix-blend-multiply max-h-[400px] mx-auto object-contain" src={product.image} alt={product.title} />
                    </picture>
                </div>
                <div className="p-5 flex flex-col">
                    <div className="border-b border-slate-200 pb-1">
                        <h1 className="font-bold text-xl text-justify">{product.title}</h1>
                        <span className="capitalize italic text-sm">{product.category}</span>
                    </div>
                    <div className="py-2 text-justify">
                        <p>{product.description}</p>
                    </div>
                    <div className="font-bold text-lg flex items-center justify-between mt-auto">
                        <div className="flex items-center justify-center gap-2">
                            <button className="buttonIcon"><BsHeart /></button>
                            <button className="buttonIcon"><BsCartPlus /></button>
                        </div>
                        <span>${product.price}</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailProduct