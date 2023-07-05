"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BsArrowRightShort, BsCart3, BsPerson } from 'react-icons/bs'

const NavMenu = () => {
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/categories`)
            const responseJson = await response.json()
            setCategories(responseJson)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories()
    },[])

    return(
        <>
            <nav className="flex items-center gap-10 px-5 py-3 lg:px-[200px] border-b border-slate-200 bg-white">
                <div className="font-bold text-xl">
                    <Link href={'/'}>LOGO</Link>
                </div>
                <ul className="flex items-center gap-5">
                    <li><Link className="menuList" href={'/products'}>Product</Link></li>
                    <li className="relative group flex items-center gap-1 menuList">
                        Categories 
                        <span className="group-hover:rotate-90 transition-all duration-300"><BsArrowRightShort /></span>
                        <ul className="absolute top-10 left-0 bg-white group-hover:border group-hover:border-slate-200 rounded z-20 w-0 overflow-hidden transition-all duration-300 group-hover:w-[200px]">
                            {
                                categories.map((category, index) => <li key={index}><Link className="whitespace-nowrap w-full h-full py-3 px-2 block capitalize hover:bg-slate-100" href={`/category/${category.split(' ').join('-')}`}>{category}</Link></li>)
                            }
                        </ul>
                    </li>
                </ul>
                <div className="ml-auto flex items-center justify-center gap-2">
                    <button className="buttonIcon relative">
                        <span className="flex items-center justify-center rounded-full w-[18px] aspect-square bg-red-500 text-slate-50 text-xs absolute -top-1 -right-1">
                            5
                        </span>
                        <BsCart3 />
                    </button>
                    <button className="buttonIcon">
                        <BsPerson />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default NavMenu