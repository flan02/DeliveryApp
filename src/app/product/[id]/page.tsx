import Price from "@/components/Price"
import { singleProduct } from "@/types/products/products.type"
import Image from "next/image"


const ProductIdpage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500">
            {/* IMAGE CONTAINER */}
            {
                singleProduct?.img && (
                    <div className="relative">
                        <Image src={singleProduct?.img} alt="" fill sizes="1" className="object-contain"></Image>
                    </div>
                )}
            {/* TEXT CONTAINER */}
            <div className="">
                <h1>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
                <Price price={singleProduct.price} options={singleProduct.options} id={singleProduct.id} />
            </div>
        </div>
    )
}

export default ProductIdpage