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
            <p className={styles.contenido}>
              {" "}
              Piezas únicas y personalizadas para cada cliente.
            </p>
          </li>
        </ul>
        <img width={50} src="/assets/img/star.png" alt="Icono Exclusividad" />

        <p>Exclusividad</p>
      </div>
      <div className={styles.perfecto}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              {" "}
              Muebles diseñados para adaptarse perfectamente a tu espacio.
            </p>
          </li>
        </ul>
        <img
          width={60}
          src="/assets/img/ruler.png"
          alt="Icono Ajuste Perfecto"
        />
        <p>Ajuste perfecto</p>
      </div>

      <div className={styles.calidad}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              {" "}
              Meticulosamente elaborados por expertos artesanos.
            </p>
          </li>
        </ul>
        <img
          width={60}
          src="/assets/img/saw.png"
          alt="Icono Calidad Artesanal"
        />
        <p>Calidad artesanal</p>
      </div>

      <div className={styles.materiales}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              Uso de materiales de alta calidad y durabilidad.
            </p>
          </li>
        </ul>
        <img src="/assets/img/wood.png" alt="Icono Materiales de Primera" />
        <p>Materiales de primera</p>
      </div>

      <div className={styles.imagen}>
        <img src="/assets/logos/logo.svg" alt="Imagen central" />
      </div>

      <div className={styles.materiales}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              Muebles únicos, arte en cada detalle.{" "}
            </p>
          </li>
        </ul>
        <img src="/assets/img/bulb.png" alt="Icono Materiales de Primera" />
        <p>Creatividad</p>
      </div>

      <div className={styles.materiales}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              Transformamos tus sueños en realidad, ofreciendo soluciones
              completas para cada espacio de tu vida.
            </p>
          </li>
        </ul>
        <img src="/assets/img/integral.png" alt="Icono Materiales de Primera" />
        <p>Diseño Integral</p>
      </div>
      <div className={styles.materiales}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              Elegancia en la simplicidad, donde menos es más, creando armonía y
              paz en tu entorno.
            </p>
          </li>
        </ul>
        <img src="/assets/img/cuadrado.png" alt="Icono Materiales de Primera" />
        <p>Diseño Minimalista</p>
      </div>

      <div className={styles.identidad}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              {" "}
              Muebles que reflejan tu esencia, creando espacios que te
              representan.
            </p>
          </li>
        </ul>
        <img src="/assets/img/huella.png" alt="Icono Expresión de Identidad" />
        <p>Expresión de identidad</p>
      </div>
    </div>
  );
};

export default Pros;
