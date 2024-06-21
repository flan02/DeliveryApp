'use client'
import Price from "@/components/Price"
import { singleProduct } from "@/types/products/products.type"
import Image from "next/image"

import { useParams } from 'next/navigation';


const ProductIdpage = () => {
    const params = useParams();
    const { id } = params;
    //console.log(Number(id) + 5);
    const product = Number(id) - 1;
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
            {/* IMAGE CONTAINER */}
            {singleProduct[product]?.img && (
                <div className="relative w-full h-1/2 md:h-[70%]">
                    <Image src={singleProduct[product]?.img} alt="" fill sizes="1" className="object-contain"></Image>
                </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
                <h1 className="text-5xl font-bold uppercase mt-8 xl:text-8xl">{singleProduct[product].title}</h1>
                <p>{singleProduct[product].desc}</p>
                <Price price={singleProduct[product].price} options={singleProduct[product].options} id={singleProduct[product].id} />
            </div>
        </div>
    )
}

export default ProductIdpage