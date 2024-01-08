
type PriceProps = {
  price: number
  id: number
  options?: { title: string, additionalPrice: number }[]

}

const Price = ({ price, id, options }: PriceProps) => {
  return (
    <div>
      <h2>{price.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="">
        {options && options.map((it, idx) => (
          <button type="button" key={idx}>{it.title}</button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="">
        {/* QUANTITY */}
        <div className="">
          <span>Quantity</span>
          <div>
            <button>{'<'}</button>
            <span>1</span>
            <button>{'>'}</button>
          </div>
        </div>
        {/* CART BUTTON */}
      </div>
    </div>
  )
}

export default Price