import { pizzas } from "@/types/products/products.type"
import Image from "next/image"
import Link from "next/link"


const Categorypage = () => {
    return (
        <div className="flex flex-wrap text-red-500">
            {pizzas.map((item, index) => (
                <Link key={index} href={`/product/${item.id}`} className="w-full h-[60vh] bg-white border-r-2 border-red-500 border-b-2 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-100">
                    {/* IMAGE CONTAINER*/}
                    {item.img && (
                        <div className="relative h-[80%]">
                            <Image src={item.img} alt={item.title} fill sizes="1" className="object-contain"></Image>
                        </div>
                    )}
                    {/*TEXT CONTAINER*/}
                    <div className="flex items-center justify-between font-bold">
                        <h1 className="text-2xl uppercase p-2">{item.title}</h1>
                        <h2 className="group-hover:hidden text-xl">{item.price}</h2>
                        <button type="button" className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md hover:bg-black hover:text-red-600">Add to Cart</button>
                    </div>
                </Link>
            ))
            }
        </div>
    )
}

export default Categorypage