import React from "react";
import styles from "./Pizza.module.css";
import { useStateDispatch } from "./AppState";
import { Pizza } from "../types";
import { AddToCartProps, WIthAddToCart } from "./AddToCart";
interface Props extends AddToCartProps {
  pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza, addToCart }) => {
  const dispatch = useStateDispatch();
  const handleAddtoCart = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };
  return (
    <li className={styles.container}>
      <h2>{pizza.name}</h2>
      <h2>{pizza.description}</h2>
      <h2>{pizza.price}</h2>
      <button type="button" onClick={handleAddtoCart}>
        Add to Cart
      </button>
    </li>
  );
};

export default WIthAddToCart(PizzaItem);
