import React from "react";
import Billing from "./Billing";
class Shipping extends React.Component{
  constructor(props) {
    super();
    this.state = {
      address: "",
      zip: "",
      city: "",
      country: "",
      errors: {
        address: "",
        zip: "",
        city: "",
        country : ""
      }
    }
  }
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = (target.type === "checkbox" || target.type === "radio") ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }
  handleSubmit = () => {
    let { address, zip, city, country } = this.state;
    console.log(address,zip,city,country)
  }
  passData = () => {
    return {
      address: this.state.address,
      city: this.state.city,
      zip: this.state.zip,
      country : this.state.country
    }
  }
  
  render() {
    return (
      <section className="hero min-h-screen flex justify-around items-center w-full">
        <form onSubmit={this.handleSubmit} className="flex flex-col w-2/5 border items-center p-4">
          <h2>Shipping Address</h2>
          <label htmlFor="address">
            Address:
            <input onChange={this.handleChange} className="flex flex-col" type="text" name="address" id="address" />
            
          </label>
          <label htmlFor="zip">
            Zip:
            <input onChange={this.handleChange} className="flex flex-col" type="text" name="zip" id="zip" />
          </label>
          <label htmlFor="city">
            City:
            <input onChange={this.handleChange} className="flex flex-col" type="text" name="city" id="city" />
          </label>
          <label htmlFor="country">
            Country:
            <input onChange={this.handleChange} className="flex flex-col" type="text" name="country" id="country" />
          </label>
          <label htmlFor="submit">
            <input  type="submit" value="Submit" />
          </label>
        </form>
        <Billing data= {this.passData()} />
      </section>
      
    )
  }
}

export default Shipping;