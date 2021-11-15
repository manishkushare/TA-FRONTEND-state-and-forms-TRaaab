import React from "react";
class Button extends React.Component{
  constructor(props){
    // console.log(props)
    super();
    console.log(props);
  }
  handleClick = (event)=> {
    
    this.props.onClickCallback(event.target.innerText);
  }

  render(){
    return(
      <div >
        <button onClick= {this.handleClick} className={this.props.active === this.props.name? "active border-2 p-2 border-black rounded-2xl " :"inactive border-2 p-2 border-black rounded-2xl"}>
          {this.props.name}
        </button>
      </div>
    )
  }
}
export default Button;