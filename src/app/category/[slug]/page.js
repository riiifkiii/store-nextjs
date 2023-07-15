'use client'
// import { Metadata, ResolvingMetadata } from "next"
import { useEffect, useState } from "react"
import Card from "@/components/Card"

// type Props = {
//     params: { slug: string }
// }

// export async function generateMetadata(
//     { params }: Props,
//     parent?: ResolvingMetadata
//   ): Promise<Metadata> {

//     const slug = params.slug

//     return {
//       title: slug.toUpperCase().split('-').join(' ')
//     }
//   }

const Category = ({params}) => {
  const [products, setProducts] = useState([])

  const getProduct = async (slug = params.slug.split('-').join(' ')) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${slug}`)
      const responseJson = await response.json()
      setProducts(responseJson)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProduct()
  },[])

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

export default Category