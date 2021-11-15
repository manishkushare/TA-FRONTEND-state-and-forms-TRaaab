import React from "react";
class Image extends React.Component{
  constructor(props){
    super()
  }
  render(){
    // console.log(this.state)
    const img = `/assets/${this.props.data}.jpg`
    return (
      <div className="w-full flex justify-center content-center">
        <img className="w-full" src={img} alt="" />
      </div>
    )
  }
}

export default Image;