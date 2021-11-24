import React from "react";
class Form extends React.Component{
  constructor(props){
    super();
    this.state = {
      "text": "",
      "date": "",
      "textarea":"",
      "favfruit": "",
    }
    this.inputFile = React.createRef();
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    alert(
      this.state.text,
      )
      alert(this.state.date)
      alert(this.state.textarea);
      alert(this.state.favfruit);
      alert(this.inputFile.current.files[0].name);
      console.dir(this.inputFile);
    }
  handleChange=(event)=> {
    const target = event.target;
    const value = target.value;
    const name = target.name

    this.setState({
      [name]: value
    })
  }
  render(){
    return (
      <form action="" onSubmit={this.handleSubmit} className="flex flex-col w-5/12 ">
        <label className="flex flex-col" htmlFor="text" >
          Text :
          <input onChange={this.handleChange} value={this.state.text} name="text" type="text" id="text" placeholder="name" />
        </label>
        <label className="flex flex-col" htmlFor="date">
          Date
          <input onChange={this.handleChange} value={this.state.date} type="date" name="date" id="date" />
        </label>
        <label className="flex flex-col" htmlFor="file">
          File
          <input ref={this.inputFile}  type="file" name="file" id="file" />
        </label>
        <label className="flex flex-col" htmlFor="read-only">
          Read-Only Input
          <input  type="text" value="Hey, I am read only input" readOnly/>
        </label>
        <label className="flex flex-col" htmlFor="disable">
          Disabled
          <input   type="text" disabled value="disabled" />
        </label>
        <label className="flex flex-col" htmlFor="text-area">
          <textarea onChange={this.handleChange} value={this.state.textarea} name="textarea" id="text-area" cols="30" rows="10"></textarea>
        </label>
        <label className="flex flex-col">
            Pick your favorite flavor:
            <select name="favfruit" value={this.state.favfruit} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
        <label htmlFor="submit-input">
          <input className="w-full" type="submit" value="submit" id="submit-input"/>  
        </label>
      </form>
    )
  }
}


export default Form;