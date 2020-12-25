import React from "react";
import { useStateDispatch } from "./AppState";
import { Pizza } from "../types";
import styles from "./special-offer.module.css";
import { WithAddToCartProps } from "./AddToCart";
interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <h2>{pizza.name}</h2>
      <h2>{pizza.description}</h2>
      <h2>{pizza.price}</h2>
      <WithAddToCartProps>
        {({ addToCart }) => {
          return (
            <button
              type="button"
              onClick={() =>
                addToCart({
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                })
              }
            >
              Add to Cart
            </button>
          );
        }}
      </WithAddToCartProps>
    </div>
  );
};

export default SpecialOffer;
