

const Orderspage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40">
            <table className="w-full">
                <thead>
                    <tr className="text-left">
                        <th className="hidden md:block">Order ID</th>
                        <th >Date</th>
                        <th >Price</th>
                        <th className="hidden md:block">Products</th>
                        <th >Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-sm md:text-base odd:bg-red-50">
                        <td className="hidden md:block py-6 px-1">189384548</td>
                        <td className="py-6 px-1">19.01.2024</td>
                        <td className="py-6 px-1">89.90</td>
                        <td className="hidden md:block py-6 px-1">Big Burguer Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
                        <td className="py-6 px-1">On the way (aprox. 10min)...</td>
                    </tr>
                    <tr className="text-sm md:text-base odd:bg-red-50">
                        <td className="hidden md:block py-6 px-1">189384548</td>
                        <td className="py-6 px-1">19.01.2024</td>
                        <td className="py-6 px-1">89.90</td>
                        <td className="hidden md:block py-6 px-1">Big Burguer Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
                        <td className="py-6 px-1">On the way (aprox. 10min)...</td>
                    </tr>
                    <tr className="text-sm md:text-base odd:bg-red-50">
                        <td className="hidden md:block py-6 px-1">189384548</td>
                        <td className="py-6 px-1">19.01.2024</td>
                        <td className="py-6 px-1">89.90</td>
                        <td className="hidden md:block py-6 px-1">Big Burguer Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
                        <td className="py-6 px-1">On the way (aprox. 10min)...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Orderspage