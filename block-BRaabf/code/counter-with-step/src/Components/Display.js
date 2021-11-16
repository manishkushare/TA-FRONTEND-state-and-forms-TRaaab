import React from "react";

class Display extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return <h1>{this.props.count}</h1>
  }
}

export default Display;