import React from "react";
import PizzaItem from "./Pizza";
import Cart from "./Cart";
import SpecialOffer from "./SpecialOffer";
import pizzas from "../data/pizza.json";
import styles from "./App.module.css";
import PizaSvg from "../assets/pizza.svg";
import AppStateProvider from "./AppState";

const App = () => {
  const specialPizzaOffer = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <PizaSvg width={120} height={120} />
          <div className={styles.siteTitle}>Del Pizza</div>
          <Cart />
        </div>
        {specialPizzaOffer && <SpecialOffer pizza={specialPizzaOffer} />}
        <ul className={styles.pizzaList}>
          {pizzas.map((pizza) => {
            return <PizzaItem key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
