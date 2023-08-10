import React from "react";
import styles from "./Plan.module.css";

const Plan = () => {
  return (
    <div className={styles.planes}>
      <h2 className={styles.titulo}>Nuestros Planes</h2>
      <div className={styles.contenedor}>
        <div className={styles.card} alt="Mountains">
          <h3 className={styles.titulo1}>Económicos</h3>
          <p className={styles.parrafo}>
            Para trabajos en roble, coigüe, raulí, lenga u otras maderas
            nativas.
          </p>
        </div>

        <div className={styles.card} alt="Mountains">
          <h3 className={styles.titulo1}>Standar</h3>
          <p className={styles.parrafo}>
            Para trabajos en tableros de pino laminados
          </p>
        </div>

        <div className={styles.card} alt="Mountains">
          <h3 className={styles.titulo1}>Premiun</h3>
          <p className={styles.parrafo}>
            Para trabajos en tableros de terciado mueblería.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
