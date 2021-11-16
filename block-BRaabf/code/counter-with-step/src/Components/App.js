import React from "react";
import Button from './Button';
import Display from "./Display";
let data = ["increment","decrement","reset",5,10,15];



class App extends React.Component{
  constructor(props){
    super()
    this.state={
      counter : 0,
      step : 1
    }
  }
  handleOperation=(operation)=> {
    this.setState({
      counter : operation
    })
  }
  handleStep= (step)=> {
    console.log(step)
    this.setState({
      step : step
    })
  }
  render(){
    return (
      <>
      <Display count={this.state.counter} />
        {
          data.map((elem,index)=> {
            return <Button stepCallback={this.handleStep} operationCallback={this.handleOperation} elem={elem} state={this.state} key={index} />
          })
        }
      </>
    )
  }
}
export default App;