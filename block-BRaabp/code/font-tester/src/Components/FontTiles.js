import React from "react";
import data from "../data.json"
// function FontTiles(props){

//   return (
//     <section className="font-tiles">
//       <ul className="container mx-auto grid grid-cols-2 gap-10 justify-items-center">
//           {
//             data.map((font,index)=> {
//               return (
//                 <li className="border w-80 h-80" key={index}>
//                   <h2>{font}</h2>
//                   <p style={{fontSize:props.fontSize, fontFamily:props.font}}>{props.text}</p>
//                 </li>
//               )
//             })
//           }
//       </ul>
//     </section>
//   )
// }
class FontTiles extends React.Component{
  constructor(props){
    super();

  }
  render(){
    return (
      <section className="font-tiles">
        <ul className="container mx-auto grid grid-cols-2 gap-10 justify-items-center">
            {
              data.map((font,index)=> {
                return (
                  <li className="border w-80 h-80" key={index}>
                    <h2>{font.font}</h2>
                    <p style={{fontSize:this.props.fontSize, fontFamily:font['font-family']}}>{this.props.text}</p>
                  </li>
                )
              })
            }
        </ul>
      </section>
    )
  }
}

export  default FontTiles ;