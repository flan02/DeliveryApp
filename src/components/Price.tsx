/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react"

type PriceProps = {
  price: number
  id: number
  options?: { title: string, additionalPrice: number }[]

}

const Price = ({ price, id, options }: PriceProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const priceToFixed: number = parseInt(price.toFixed(2).replace('.', ''));
  const [total, setTotal] = useState<number>(priceToFixed);
  useEffect(() => {
    setTotal(price * quantity)
  }, [quantity])
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">u$S {total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((it, idx) => (
          <button type="button" className="min-w-[6rem] p-2 ring-1 ring-red-400 focus:bg-red-300 focus:text-white rounded-md" key={idx}>{it.title}</button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => { setQuantity(prev => (prev > 1) ? prev - 1 : 1) }}>{'<'}</button>
            <span>{quantity}</span>
            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => { setQuantity(prev => (prev < 9) ? prev + 1 : 9) }}>{'>'}</button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button type="button" className="hover:bg-slate-800 hover:text-red-500 w-56 uppercase bg-red-500 text-white p-3 ring-1 ring-red-500">Add to Cart</button>
      </div>
    </div>
  )
}

export default Price