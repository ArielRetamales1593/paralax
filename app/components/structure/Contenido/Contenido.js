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
        <div className={styles.contMsj}>
          <img
            className="marco"
            width={420}
            height={370}
            src="/assets/img/blanco222.png"
            alt=""
          />

          <div className={styles.parrafo1}>
            <p>
              ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de
              relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
              el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta)
            </p>
          </div>
        </div>

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
