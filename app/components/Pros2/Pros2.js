import React from "react";
import styles from "./Pros2.module.css";

const Pros2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pro}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              {" "}
              Piezas únicas y personalizadas para cada cliente.
            </p>
          </li>
        </ul>
        <img width={50} src="/assets/img/star.png" alt="Icono Exclusividad" />

        <p className={styles.proName}>Exclusividad</p>
      </div>
      <div className={styles.pro}>
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
        <p className={styles.proName}>Ajuste perfecto</p>
      </div>

      <div className={styles.pro}>
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
        <p className={styles.proName}>Calidad artesanal</p>
      </div>

      <div className={styles.pro}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              Uso de materiales de alta calidad y durabilidad.
            </p>
          </li>
        </ul>
        <img src="/assets/img/wood.png" alt="Icono Materiales de Primera" />
        <p className={styles.proName}>Materiales </p>
      </div>

      <div className={styles.imagen}>
        <img
          className={styles.imagen}
          src="/assets/logos/logo.svg"
          alt="Imagen central"
        />
      </div>

      <div className={styles.pro}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              Muebles únicos, arte en cada detalle.{" "}
            </p>
          </li>
        </ul>
        <img src="/assets/img/bulb.png" alt="Icono Materiales de Primera" />
        <p className={styles.proName}>Creatividad</p>
      </div>

      <div className={styles.pro}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              Transformamos tus sueños en realidad, ofreciendo soluciones
              completas para cada espacio de tu vida.
            </p>
          </li>
        </ul>
        <img src="/assets/img/integral.png" alt="Icono Materiales de Primera" />
        <p className={styles.proName}>Integral</p>
      </div>
      <div className={styles.pro}>
        <ul>
          <li className={styles.item}>
            <p className={styles.contenido}>
              Elegancia en la simplicidad, donde menos es más, creando armonía y
              paz en tu entorno.
            </p>
          </li>
        </ul>
        <img src="/assets/img/cuadrado.png" alt="Icono Materiales de Primera" />
        <p className={styles.proName}> Minimalista</p>
      </div>

      <div className={styles.pro}>
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
        <p className={styles.proName}>Identidad</p>
      </div>
    </div>
  );
};

export default Pros2;
