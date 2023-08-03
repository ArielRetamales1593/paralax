import React from "react";
import styles from "./Plan.module.css";

const Plan = () => {
  return (
    <div className={styles.contenedor}>
      <figure>
        <h3 className={styles.num}>1</h3>
        <div className={styles.card} alt="Mountains" />

        <figcaption>The Day</figcaption>
      </figure>
      <figure>
      <h3 className={styles.num}>2</h3>
        <div className={styles.card} />
        <figcaption>The Night</figcaption>
      </figure>

      <figure>
      <h3 className={styles.num}>3</h3>
        <div className={styles.card} />
        <figcaption>The Night</figcaption>
      </figure>
    </div>
  );
};

export default Plan;
