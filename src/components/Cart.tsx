import React from "react";
import styles from "./Cart.module.css";
import { AppContext } from "./AppState";
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
    // if ((e.target as HTMLButtonElement).nodeName === "SPAN"){
    //     (e.target as HTMLSpanElement).
    // }
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  render() {
    return (
      <AppContext.Consumer>
        {(state) => {
          const itemsCount = state.cart.items.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0);
          return (
            <div className={styles.cartContainer}>
              <button className={styles.button} onClick={this.handleClick}>
                {itemsCount} Pizzas
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
                  {state.cart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} x {item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Cart;
