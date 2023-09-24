import React from "react";
import styles from "./TimeLine.module.css";

const TImeLine = () => {
  return (
    <div className={styles.scroll}>
      <h1 className={styles.titulo}>NUESTRO PROCESO</h1>
      <ul className={styles.bar}>
        <li>
          1
          <p className={styles.contenido}>
            <img className={styles.svg} src="/assets/svg/1.svg" />
            Identifica la necesidad y el espacio a transformar
          </p>
        </li>
        <li>
          2
          <p className={styles.contenido}>
            <img className={styles.svg} src="/assets/svg/2.svg" />
            Escribenos por instagram , whatsapp o correo
          </p>
        </li>
        <li>
          3
          <p className={styles.contenido}>
            <img className={styles.svg} src="/assets/svg/3.svg" />
            Entrevista Telefónica
          </p>
        </li>

        <li>
          4
          <p className={styles.contenido}>
            <img className={styles.svg} src="/assets/svg/4.svg" />
            Entrevista personal y medición del lugar
          </p>
        </li>
        <li>
          5
          <p className={styles.contenido}>
            <img className={styles.svg} src="/assets/svg/5.svg" />
            Entrega de presupuesto
          </p>
        </li>
        <li>
          6
          <p className={styles.contenido}>
            <img className={styles.svg} src="/assets/svg/6.svg" />
            Proceso de diseño co-creactivo
          </p>
        </li>
        <li>
          7
          <p className={styles.contenido}>
            <img className={styles.svg} src="/assets/svg/7.svg" /> Fabricación
            del proyecto
          </p>
        </li>
        <li>
          8
          <p className={styles.contenido}>
            <img className={styles.svg} src="/assets/svg/8.svg" />
            Entrega e instalación
          </p>
        </li>
        <li>
          9
          <p className={styles.contenido}>
            <img className={styles.svg} src="/assets/svg/9.svg" /> Disfruta tu
            mueble
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TImeLine;
