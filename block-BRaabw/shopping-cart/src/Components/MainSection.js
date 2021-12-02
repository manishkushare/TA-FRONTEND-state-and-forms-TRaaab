function MainSection(props) {
  // console.log(props.selectedSize.length,"inside main");
  // console.log(props, "inside main");
  function handleClickOrder(event) {
    const target = event.target;
    const value = target.value;
    return props.callback(value);
  }
  function handleCart(id) {
    let item = props.data.find(elem => elem.id === id);
    return props.cartCallback(item);
  }
  return (
    <section className="hero w-4/5 min-h-screen ">
      <article className="legend text-center py-4 ">
        Shopping Cart
      </article>
      <div className="flex justify-between py-4">
        <span>{props.data.length} Products Found</span>
        <select onChange={handleClickOrder} name="order" id="" className="border">
          <option value="all" selected >All</option>
          <option value="lowToHigh">Lowest to Highest</option>
          <option value="highToLow">Highest to Lowest</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {
          props.data.map((item) => {
            return (
              <article key={item.id}>
                <div className="image-wrapper">
                  <img src={item.image} alt={item.style} />
                </div>
                <div className="info flex flex-col items-center">
                  <h2>{item.title}</h2>
                  <hr className="_w-15 " />
                  <span>{item.currencyFormat}{item.price}</span>
                  <a href="#">
                    <button onClick={()=> handleCart(item.id)} className="border p-2 bg-black _white">Add to Cart</button>
                  </a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}
export default MainSection;