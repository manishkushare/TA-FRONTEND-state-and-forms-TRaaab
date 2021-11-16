import React from "react";
import Button from './Button';
import {data} from "../data";
import Image from './Image';  
// console.log(data);

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      active : "basketball"
    }
  }
  handleClick = (active)=> {
    this.setState({
      active : active
    })
  }
  render(){
    const active = this.state.active;
    // console.log(stateData,"het");
    return (
      <div className="flex  flex-col">
        <ul className="flex flex-auto justify-around">

          {

            data.map((elem,index) => {
              return <Button onClickCallback={this.handleClick} active={active} name={elem} key={index} />
            })
          }
        </ul>
        <Image data={active} />
      </div>
    )
  }
}

export default App;