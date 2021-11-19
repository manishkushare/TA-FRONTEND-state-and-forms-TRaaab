import React from "react";
import data from "../data.json";
import Hero from "./Hero";


class Header extends React.Component{
  constructor(props){
    super();
    this.state = {
      activeCategory : "All",
      activeHover : ""
    }
  }
  handleNav=(cat)=> {
    this.setState({
      activeCategory :cat
    })

  }
  handleHover=(event)=> {
    this.setState({
      activeHover : event.target.innerText
    })
  }
  handleCategories =()=> {
    const category = data.reduce((acc,cv)=> {
      if(this.state.activeCategory === "All"){
        acc.push(cv);
      }
      else if(cv.category === this.state.activeCategory){
        acc.push(cv);
      }
      return acc;
    },[]);
    return category;
  }
  render(){
    const category = data.reduce((acc,cv)=>{
      if(!acc.includes(cv.category)){
        acc.push(cv.category);
      }
      return acc;
    },["All"]);

    return (
      <>
        <header className="header py-4">
          <section className="container mx-auto text-center">
            <h1 className="inline-block  text-4xl border-b-4">
              Our Menu
              {/* <span className="bottom-border"></span> */}
            </h1>
            {/* <hr /> */}
            <nav className="nav w-6/12 margin-auto py-4">
              <ul className="nav-list flex justify-between items-baseline">
                {
                  category.map((cat,index)=>{
                    return <li 
                            onClick={()=>this.handleNav(cat)}
                            className={
                              this.state.activeCategory === cat? "text-yellow-300 border-2 border-blue-400 p-1":
                              this.state.activeHover ===cat?"text-yellow-300 border-2 border-red-400 p-1": "text-yellow-300 p-1"
                            } 
                            onMouseOver={ this.handleHover}
                            key={index}
                            >
                             {cat}
                            </li>
                  })
                }
              </ul>
            </nav>
          </section>
        </header>
        <main>
          <Hero category={this.handleCategories()} />
        </main>
    </>
    )
  }
}


export default Header;