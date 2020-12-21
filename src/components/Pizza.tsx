import React from "react";
import styles from "./Pizza.module.css";
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
  return (
    <li className={styles.container}>
      <h2>{pizza.name}</h2>
      <h2>{pizza.description}</h2>
      <h2>{pizza.price}</h2>
    </li>
  );
};

export default Pizza;
