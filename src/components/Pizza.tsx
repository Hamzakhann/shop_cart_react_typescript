import React from "react";
import styles from "./Pizza.module.css";
import { useStateDispatch } from "./AppState";
interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  pizza: Pizza;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const dispatch = useStateDispatch();
  const handleAddtoCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
        },
      },
    });
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

export default Pizza;
