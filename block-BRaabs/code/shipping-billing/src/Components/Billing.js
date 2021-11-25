import React from "react";
class Billing extends React.Component{
  constructor(props) {
    super();
    this.state = {
      address: "",
      zip: "",
      city: "",
      country: "",
      checkbox: false,
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
    const name = target.name
    const value = (target.type === "checkbox" || target.type === "radio") ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  handleChekbox = ({ target }) => {
    this.setState({ checkbox: target.checked });
  }

  render() {
    const shippingAddres = this.props.data;
    const billingAddress = {
      address: this.state.address,
      zip: this.state.zip,
      city: this.state.city,
      country: this.state.country
    }
    const billingData = this.state.checkbox ? { ...shippingAddres } : { ...billingAddress };
    return (
      <form action="" className="flex border flex-col w-2/5 items-center p-4">
        <h2 className="text-left">Billing Address</h2>
        <label  htmlFor="checkbox">
          Same as Shipping Address
          <input  onChange={this.handleChekbox}  type="checkbox" name="checkbox" id="checkbox" />


        </label>
          <label htmlFor="address">
            Address:
            <input onChange={this.handleChange} value={billingData.address} className="flex flex-col"  type="text" name="address" id="address" />
          </label>
          <label htmlFor="zip">
            Zip:
            <input onChange={this.handleChange} value={billingData.zip} className="flex flex-col" type="text" name="zip" id="zip" />
          </label>
          <label htmlFor="city">
            City:
            <input onChange={this.handleChange} value={billingData.city} className="flex flex-col" type="text" name="city" id="city" />
          </label>
          <label htmlFor="country">
            Country:
            <input onChange={this.handleChange} value={billingData.country} className="flex flex-col" type="text" name="country" id="country" />
          </label>
        </form>
    )
  }
}
export default Billing;