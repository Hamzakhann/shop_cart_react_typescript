import React from "react";
import Pizza from "./Pizza";
import Cart from "./Cart";
import pizzas from "../data/pizza.json";
import styles from "./App.module.css";
import PizaSvg from "../assets/pizza.svg";
const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PizaSvg width={120} height={120} />
        <div className={styles.siteTitle}>Del Pizza</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
};

export default App;
