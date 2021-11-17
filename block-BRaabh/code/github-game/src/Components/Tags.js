import React from "react";
import Image from "./Image";
import data from "../data.json";
class Tags  extends React.Component{
  constructor(props){
    super();
    this.state= {
      activeHouse : ""
    }
  }
  handleClick = (houseName)=> {
    this.setState({
      activeHouse : houseName
    })
  }
  handleImage =(name)=> {
    this.state.activeHouse === name? alert("It's a match"):alert("soory, try again")
  }
  render(){
    // console.log(data);
    return (
      <>
        <ul className="tags flex justify-around">
          {
            data.map((house,index)=> {
              return <li onClick={()=> this.handleClick(house.name)} className={
              this.state.activeHouse === house.name? "border p-2 border-current bg-white-800 text-black":"border p-2 border-current bg-gray-800 text-white"
              } key={index} >{house.name}</li>
            })
          }
        </ul>
        <Image callback={this.handleImage} data={data}/>
      
      </>
    )

  }
}
export default Tags;