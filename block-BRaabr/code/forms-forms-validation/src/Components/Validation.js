import React from "react";

class Validation extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.username);
    alert(this.state.email);
    alert(this.state.password);
    alert(this.state.confirmPassword);
  };
  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value =
      target.type === "checkbox" || target.type === "radio" || false
        ? target.checked
        : target.value;
    // const element = this.state[name];
    const errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username =
          value.length <= 3 ? "Username should be greater than 3 letters" : "";
        break;
      case "email":
        if (value.length >= 1) {
          errors.email = this.validateEmail(value) ? "" : "Email is invalid";
        } else errors.email = "Email is required";
        break;
      case "password":
        errors.password =
          value.length > 5 ? "" : "Must be greater than 5 letters";
        break;
      case "confirmPassword":
        if (this.state.password) {
          errors.confirmPassword =
            value === this.state.password ? "" : "Password is not matching";
        } else {
          errors.password = "Please enter password first";
        }
      default:
        break;
    }

    this.setState({
      errors,
      [name]: value,
    });
  };
  render() {
    let { username, email, password, confirmPassword } = this.state.errors;
    return (
      <form
        action=""
        onSubmit={this.handleSubmit}
        className="flex flex-col w-5/12 "
      >
        <label className="flex flex-col" htmlFor="username">
          Username :
          <input
            value={this.state.username}
            className={username && "error"}
            onChange={this.handleChange}
            type="text"
            name="username"
            id="username"
          />
          <span>{username}</span>
        </label>
        <label className="flex flex-col" htmlFor="email">
          Email
          <input
            value={this.state.email}
            className={email && "error"}
            onChange={this.handleChange}
            type="email"
            name="email"
            id="email"
          />
          <span>{email}</span>
        </label>
        <label className="flex flex-col" htmlFor="password">
          Password
          <input
            value={this.state.password}
            className={password && "error"}
            onChange={this.handleChange}
            type="password"
            name="password"
            id="password"
          />
          <span>{password}</span>
        </label>
        <label className="flex flex-col" htmlFor="confirm-password">
          Confirm Password
          <input
            value={this.state.confirmPassword}
            className={confirmPassword && "error"}
            onChange={this.handleChange}
            type="password"
            name="confirmPassword"
            id="confirm-password"
          />
          <span>{confirmPassword}</span>
        </label>
        <label htmlFor="submit-input">
          <input
            className="w-full"
            type="submit"
            value="submit"
            id="submit-input"
          />
        </label>
      </form>
    );
  }
}

export default Validation;
