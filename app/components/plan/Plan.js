import React from "react";
import styles from "./Plan.module.css";

const Plan = () => {
  return (
    <div className={styles.planes}>
      <h2>Nuestros Servicios</h2>
      <div className={styles.contenedor}>
        <div className={styles.card} alt="Mountains">
          <h3 className={styles.titulo}>Económicos</h3>
          <p>
            Para trabajos en roble, coigüe, raulí, lenga u otras maderas
            nativas.
          </p>
        </div>

        <div className={styles.card} alt="Mountains">
          <h3 className={styles.titulo}>Standar</h3>
          <p>Para trabajos en tableros de pino laminados</p>
        </div>

        <div className={styles.card} alt="Mountains">
          <h3 className={styles.titulo}>Premiun</h3>
          <p>Para trabajos en tableros de terciado mueblería.</p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
