import React from "react";
import FontTiles from "./FontTiles";
class Input extends React.Component{
  constructor(props){
    super();
    this.state={
      inputText :"",
      fontSize : 10
    }
  }
  handleFontSize=(event)=> {
    this.setState({fontSize: +event.target.value})
  }
  handleInputText=(event)=> {
    this.setState({inputText: event.target.value })
  }
  render(){
    return (
      <>
        <section className="input-section">
          <div className="container mx-auto grid grid-cols-2 gap-10">
            <article className="_text-input rounded-full py-3 px-6 flex">
              <span className="border-r border-black px-2">Custom</span>
              <input onChange={this.handleInputText} type="text" value={this.state.inputText} placeholder="Enter a phrase" className="w-full"/>
            </article>
            <article className="_font-size-section rounded-full py-3 px-6 border border-black ">
              <div className="slider-parent relative">
                <input onChange={this.handleFontSize} type="range" min="1" max="100" value={this.state.fontSize} className="slider w-full" id="myRange" />

                <div className="bubble absolute top-3">
                  {this.state.fontSize}
                </div>
              </div>
            </article>
          </div>
        </section>
        <FontTiles text={this.state.inputText} fontSize={this.state.fontSize} />
      
      </>
    )
  }
}
export default Input;