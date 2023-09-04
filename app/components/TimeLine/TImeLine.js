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
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
        <li>
          2
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
        <li>
          3
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
      </ul>

      <ul className={styles.bar}>
        <li>
          4
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
        <li>
          5
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
        <li>
          6
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
      </ul>
      <ul className={styles.bar}>
        <li>
          7
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
        <li>
          8
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
        <li>
          9
          <p className={styles.contenido}>
            {" "}
            Muebles que reflejan tu esencia, creando espacios que te
            representan.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TImeLine;
