import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.fondo}>
      <div>{/* <h1 className={styles.titulo}> !Bienvenido!</h1> */}</div>

      <div className={styles.bienvenida}>
        <img
          className={styles.logo}
          src="/assets/logos/logoCompleto.svg"
          width={300}
        />
        {/* <p className={styles.parrafo}>
          Proyectos de carpintería de autor diseñados y fabricados por
          arquitectos para quienes están armando su hogar y quieran hacerlo con
          estilo y modernidad
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
