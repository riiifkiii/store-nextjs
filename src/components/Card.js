import Link from "next/link"
import { BsCart3, BsCartPlus, BsHeart, BsStar } from "react-icons/bs"

const Card = ({data}) => {
    return(
        <>
            <div className="lg:w-[300px] w-[200px] bg-white border border-slate-20 rounded-md relative overflow-hidden hover:shadow">
                <div className="absolute top-2 -right-8 flex items-center gap-2 bg-red-500 text-slate-50 text-xs font-bold py-1 px-9 rotate-45 z-10">
                    <BsStar />
                    <span>{data.rating.rate}</span>
                </div>
                <div className="w-full h-[200px] p-2">
                    <picture>
                        <img src={data.image} alt={data.title} className="w-full h-full object-contain mix-blend-multiply"/>
                    </picture>
                </div>
                <div className="p-2">
                    <div className="border-b border-slate-200 overflow-hidden py-2">
                        <Link href={`/products/${data.id}`} className="font-bold block text-lg whitespace-nowrap" title={data.title}>{data.title}</Link>
                        <Link href={`/category/${data.category.split(' ').join('-')}`} className="font-light text-xs capitalize">{data.category}</Link>
                    </div>
                    <div className="text-justify text-sm py-2 h-[120px] lg:h-[80px]">
                        <p>{String(data.description).substring(0, 100)}...</p>
                    </div>
                    <div className="font-bold text-lg flex items-center justify-between py-2">
                        <div className="flex items-center justify-center gap-2">
                            <button className="buttonIcon"><BsHeart /></button>
                            <button className="buttonIcon"><BsCartPlus /></button>
                        </div>
                        <span>${data.price}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card