import React from "react";
import styles from "./Cart.module.css";
interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLButtonElement).nodeName === "SPAN"){
        (e.target as HTMLSpanElement).
    }
      this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>
          2 Pizzas
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>Nepolatin</li>
            <li>Fajita</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
