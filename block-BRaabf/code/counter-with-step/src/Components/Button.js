import React from "react";

class Button extends React.Component{
  constructor(props){
    super()
  }

  handleClick= (event)=> {
    event.target.innerText === "increment"? this.props.operationCallback(this.props.state.counter+this.props.state.step):
    event.target.innerText === "decrement"? this.props.operationCallback(this.props.state.counter-this.props.state.step):
    event.target.innerText === "reset"? this.props.operationCallback(this.props.state.counter= 0):
    event.target.innerText === "5"? this.props.stepCallback(this.props.state.step = 5):
    event.target.innerText === "10"? this.props.stepCallback(this.props.state.step = 10):this.props.stepCallback(this.props.state.step = 15)
    
  }
  render(){
    return <button onClick={this.handleClick} >{this.props.elem}</button>
  }
}

export default Button;