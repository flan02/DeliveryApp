import Image from "next/image"


const Cartpage = () => {
    return (
        <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
            {/* PRODUCT CONTAINER*/}
            <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:px-20 lg:w-2/3 xl:px-40 2xl:w-1/2">
                {/* SINGLE ITEM*/}
                <div className="flex items-center justify-between mb-4 ">
                    <Image src="" alt="product" />
                    <h1 className="uppercase text-xl font-bold">Sicilian</h1>
                    <span>
                        Large
                    </span>
                    <h2 className="font-bold">$79.90</h2>
                    <span className="cursor-pointer">X</span>
                </div>
            </div>
            {/* PAYMENT CONTAINER*/}
            <div className="h-1/2 p-16 bg-fuchsia-100 flex flex-col gap-4 justify-center lg:px-20 lg:h-full lg:w-1/3 xl:px-40 2xl:w-1/2 2xl:text-xl 2xl:gap-6">
                <div className="flex justify-between">
                    <span className="">Subtotal (3 items)</span>
                    <span className="">$81.70</span>
                </div>
                <div className="flex justify-between">
                    <span className="">Service Cost</span>
                    <span className="">$0.00</span>
                </div>
                <div className="flex justify-between">
                    <span className="">Delivery Cost</span>
                    <span className="text-green-500">FREE!</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between">
                    <span className="">TOTAL(INCL. VAT)</span>
                    <span className="font-bold">$81.70</span>
                </div>
                <button className="w-1/3 md:w-1/6 lg:w-1/2 xl:w-1/3 2xl:w-1/6 bg-red-500 text-white p-3 rounded-md self-end hover:bg-red-600">CHECKOUT</button>
            </div>
        </div>
    )
}

export default Cartpage