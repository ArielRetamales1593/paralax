import React from "react";
import styles from "./Pros.module.css";

const Pros = () => {
  return (
    <div className={styles.container}>
      <img className={styles.arbol1} src="/assets/img/arbol1.svg" />
      <img className={styles.arbol2} src="/assets/img/arbol2.svg" />

      <div className={styles.exclusividad}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}> soy un modal</p>
          </li>
        </ul>
        <img
          width={50}
          src="/assets/logos/exclusividad.png"
          alt="Icono Exclusividad"
        />

        <p>Exclusividad</p>
      </div>
      <div className={styles.perfecto}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}> soy un modal</p>
          </li>
        </ul>
        <img
          width={60}
          src="/assets/logos/medida.png"
          alt="Icono Ajuste Perfecto"
        />
        <p>Ajuste perfecto</p>
      </div>

      <div className={styles.calidad}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}> soy un modal</p>
          </li>
        </ul>
        <img
          width={60}
          src="/assets/logos/calidad.png"
          alt="Icono Calidad Artesanal"
        />
        <p>Calidad artesanal</p>
      </div>
      <div className={styles.materiales}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}> soy un modal</p>
          </li>
        </ul>
        <img
          src="/assets/logos/material.png"
          alt="Icono Materiales de Primera"
        />
        <p>Materiales de primera</p>
      </div>

      <div className={styles.imagen}>
        <img src="/assets/logos/logo.svg" alt="Imagen central" />
      </div>
      <div className={styles.identidad}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}> soy un modal</p>
          </li>
        </ul>
        <img
          src="/assets/logos/huella.png"
          alt="Icono Expresión de Identidad"
        />
        <p>Expresión de identidad</p>
      </div>
    </div>
  );
};

export default Pros;
