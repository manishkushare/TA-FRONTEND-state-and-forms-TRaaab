import React from "react";
import Question  from "./Question";
import Answer from "./Answer";
import data from "../data.json";
console.log(data);
class Quizz extends React.Component{
  constructor(props){
    super();
    this.state ={
      closed : true
    }
  }
  handleClick=()=> {
    this.setState(
      {
        closed : !this.state.closed
      }
    )
  }
  render(){
    return (
      <ul>
        {
          data.map((quizz,index)=> {
            return (
              <li className="p-4">
                <ul>
                    <Question callbackFunction={this.handleClick} {...quizz} isClosed={this.state.closed} key={data.Q}/>
                    {
                      !this.state.closed? <Answer {...quizz} key={data.A}/>: null
                    }
                    
                </ul>
              </li>

            )
          })
        }
      </ul>
    )
  }
}
export default Quizz;