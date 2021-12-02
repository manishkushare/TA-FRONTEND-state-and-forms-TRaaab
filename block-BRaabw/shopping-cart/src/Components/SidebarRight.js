import React from "react";
class SidebarRight extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
    };
  }
  handleHamberger = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };
  render() {
    let { isOpen } = { ...this.state };
    let cart = [...this.props.data];
    console.log(cart);
    console.log(isOpen);
    return (
      <></>
    );
  }
}

export default SidebarRight;
