import React from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentIndex: 1,
    };
  }
  handleStep = (direction) => {
    if (direction === "next") {
      if (this.state.currentIndex <= 2) {
        this.setState({
          currentIndex: this.state.currentIndex + 1
        })
      } else {
        this.setState({
          currentIndex: 3
        })
      }
    }
    if(direction === "previous") {
      if (this.state.currentIndex >= 2) {
        this.setState({
          currentIndex : this.state.currentIndex-1
        })
      }
      else {
        this.setState({
          currentIndex : 1
        })
      }
    }
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted")
  }
  deciderFunction = () => {
    if (this.state.currentIndex === 1) {
      return (
        <button onClick={()=>this.handleStep("next")} className="p-2 border">
          Next Step
        </button>

      )
    }
    if (this.state.currentIndex === 3) {
      return (
        <div className=" flex justify-between">
        <button onClick={()=>this.handleStep("previous")} className="bg-blue-400 p-2">
          Previous Step
        </button>
        <button onClick={this.handleSubmit} className="bg-blue-400 p-2">
          Submit
        </button>
      </div>
      )
    }
    return (
      <div className=" flex justify-between">
        <button onClick={()=>this.handleStep("previous")} className="bg-blue-400 p-2">
          Previous Step
        </button>
        <button onClick={()=>this.handleStep("next")} className="bg-blue-400 p-2">
          Next Step
        </button>
      </div>
    )
  }
  render() {
    return (
      <>
        <Form1 currentIndex={this.state.currentIndex} deciderFunction={this.deciderFunction} />
        <Form2 currentIndex={this.state.currentIndex} deciderFunction={this.deciderFunction}/>
        <Form3 currentIndex={this.state.currentIndex} deciderFunction={this.deciderFunction} />
        
      </>
    );
  }
}

export default Form;
