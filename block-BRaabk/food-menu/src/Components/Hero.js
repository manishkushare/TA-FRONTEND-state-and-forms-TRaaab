function Hero(props){
  console.log(props)
  return (
    <section className="hero">
      <article className="container mx-auto">
        <ul className="menu-list grid grid-cols-2 gap-8 auto-cols-max ">
          {
            props.category.map((menu,id) => {
              return (
                <li className="flex flex-row max-w-max" 
                  key={id}>
                  <div className="image w-2/5">
                    <img className="w-full" src="https://ak.picdn.net/shutterstock/videos/12756518/thumb/9.jpg" alt="" />
                  </div>
                  <div className="description w-3/5 px-2">
                    <div className="flex justify-between border-b-2">
                      <h2>{menu.title}
                      
                      </h2>
                      <span>{menu.price}</span>
                    </div>
                    <p>{menu.desc}</p>

                  </div>
                </li>
              )
            })
          }
        </ul>
      </article>
    </section>
  )
}
export default Hero;