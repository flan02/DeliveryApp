import { featuredProducts } from "@/types/products/products.type"
import Image from "next/image"


const Featured = () => {
    return (
        <div className="w-full overflow-x-scroll text-red-500">
            {/*WRAPPER*/}
            <div className="w-max flex">
                {/*SINGLE ITEM*/}
                {
                    featuredProducts.map((item, i) => (
                        <div key={i} className=" h-[60vh] flex flex-col items-center justify-around py-8 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:-h-[90vh]">
                            {/* IMAGE CONTAINER */}
                            {
                                item.img && (
                                    <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                                        <Image src={item.img} alt="" fill className="object-contain" />
                                    </div>
                                )}
                            {/* TEXT CONTAINER */}
                            <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center">
                                <h1 className="text-xl font-bold uppercase pt-4 pb-2 xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                                <p className="p-4 2xl:p-8">{item.desc}</p>
                                <span className="text-xl font-bold">u$$ {item.price}</span>
                                <button type="button" className="bg-red-500 rounded-md text-white p-2 hover:bg-fuchsia-200 hover:text-red-500">Add to Cart</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Featured