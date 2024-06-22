import Image from "next/image"


const Cartpage = () => {
    return (
        <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
            {/* PRODUCT CONTAINER*/}
            <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:px-20 lg:w-[60%] xl:px-40 2xl:w-1/2">
                {/* SINGLE ITEM*/}
                <div className="flex items-center justify-between mb-4 ">
                    <Image src="https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639454/jwsltyvil5rlrktpmccy.png" width={60} height={60} alt="product" />
                    <h1 className="uppercase text-xl font-bold">Sicilian</h1>
                    <span className="text-center">
                        Large
                    </span>
                    <h2 className="font-bold">$ 24.90</h2>
                    <span className="cursor-pointer">x 2</span>
                </div>

                <div className="flex items-center justify-between mb-4 ">
                    <Image src="https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639455/uqgczx8psdhgza3w5pwx.png" width={60} height={60} alt="product" />
                    <h1 className="uppercase text-xl font-bold">Pesto Primavera</h1>
                    <span className="text-center">
                        Large
                    </span>
                    <h2 className="font-bold">$ 28.90</h2>
                    <span className="cursor-pointer">x 1</span>
                </div>

                <div className="flex items-center justify-between mb-4 ">
                    <Image src="https://res.cloudinary.com/dhbig9jt8/image/upload/v1704639454/h084qbhpfqdf0frvbmnv.png" width={60} height={60} alt="product" />
                    <h1 className="uppercase text-xl font-bold">Bella Napoli</h1>
                    <span className="text-center">
                        Medium
                    </span>
                    <h2 className="font-bold">$ 26.90</h2>
                    <span className="cursor-pointer">x 2</span>
                </div>
            </div>
            {/* PAYMENT CONTAINER*/}
            <div className="h-1/2 p-16 bg-fuchsia-100 flex flex-col gap-4 justify-center xl:px-10 lg:px-10 lg:h-full lg:w-[40%] 2xl:w-1/2 2xl:text-xl 2xl:gap-6">
                <div className="flex justify-between">
                    <span className="">Subtotal (3 items)</span>
                    <span className="">$ 132.50</span>
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
                    <span className="font-bold">$ 132.50</span>
                </div>
                <button className="w-1/3 md:w-1/6 lg:w-1/2 xl:w-1/3 2xl:w-max bg-red-500 text-white p-3 rounded-md self-end hover:bg-slate-800 hover:text-red-500">CHECKOUT</button>
            </div>
        </div>
    )
}

export default Cartpage