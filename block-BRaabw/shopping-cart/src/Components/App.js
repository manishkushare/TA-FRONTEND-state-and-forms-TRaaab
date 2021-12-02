import React from "react";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import MainSection from "./MainSection";
import data from "../data.json";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedSize: [],
      cart: [],
      order: "all",
    };
  }
  handleSize = (value = []) => {
    // console.log(value);
    this.setState({
      selectedSize: [...value],
    });
  };
  handleOrder = (value) => {
    console.log(value);
    this.setState({
      order: value,
    });
  };
  handleCart = (item) => {
    let isPresent = this.state.cart.findIndex((elem) => elem.id === item.id);
    if (isPresent >= 0) {
      let clonedCart = [...this.state.cart];
      let clonedElement = { ...clonedCart[isPresent] };
      clonedElement.quantity += 1;
      clonedCart[isPresent] = { ...clonedElement };

      this.setState({
        cart: [...clonedCart],
      });
    } else {
      console.log(2);
      item.quantity = 1;
      return this.setState({
        cart: [...this.state.cart, item],
      });
    }
  };
  render() {
    let selectedSize = [...this.state.selectedSize];
    console.log(selectedSize, "inside render");
    let displayData = data.products.reduce((acc, cv) => {
      if (selectedSize.length >= 1) {
        cv.availableSizes.forEach((size) => {
          if (selectedSize.includes(size)) {
            acc.push(cv);
          }
        });
      } else {
        acc.push(cv);
      }
      return acc;
    }, []);
    console.log(displayData);
    if (this.state.order === "lowToHigh") {
      displayData = displayData.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (this.state.order === "highToLow") {
      displayData = displayData.sort((a, b) => {
        return b.price - a.price;
      });
    }
    let cart = [...this.state.cart];
    return (
      <main>
        <section className="flex">
          <SidebarLeft
            data={data}
            callback={this.handleSize}
            selectedSize={selectedSize}
          />
          <MainSection
            data={displayData}
            callback={this.handleOrder}
            cartCallback={this.handleCart}
          />
          <SidebarRight data={cart} />
        </section>
      </main>
    );
  }
}

export default App;
