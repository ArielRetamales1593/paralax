import React from "react";
import styles from "./Contenido.module.css";

function Contenido() {
  return (
    <div className={styles.contenido}>
      <h1 className={styles.titulo}> ¡Bienvenido a dmTaller!</h1>
      <h2 className={styles.titulo2}>
        Carpintería de Autor en Muebles a Medida{" "}
      </h2>
      <div className={styles.bienvenida}>
        <p className={styles.parrafo}>
          En dmTaller, creamos muebles a medida con un enfoque original, de
          diseño simple y práctico.
          <br /> <br />
          Cada proyecto es una oportunidad para crear muebles que reflejen tu
          personalidad y se integren perfectamente en tu espacio. Estamos
          emocionados por trabajar contigo y convertir tus ideas en realidad.
        </p>

        <img
          className={styles.foto}
          width={550}
          src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Sillas%20Pilar%20(115).JPG"
        ></img>
      </div>
    </div>
  );
}

export default Contenido;
